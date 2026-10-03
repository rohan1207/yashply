/**
 * Posts enquiry data to Google Apps Script (Sheets + Resend).
 * Uses text/plain so the browser skips a CORS preflight.
 *
 * Set VITE_APPS_SCRIPT_URL in .env (local) and in your host's build env.
 */

const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || "";

/**
 * @param {object} data
 * @param {string} data.source - "contact" | "enquiry" | "quote"
 * @param {string} data.name
 * @param {string} data.phone
 * @param {string} [data.email]
 * @param {string} [data.product]
 * @param {string} [data.looking]
 * @param {string} [data.project]
 * @param {string} [data.quantity]
 * @param {string} [data.message]
 * @param {string} [data.details]
 * @param {string} [data.website] - honeypot; leave empty
 */
export async function submitEnquiry(data) {
  if (!SCRIPT_URL) {
    throw new Error("Form endpoint is not configured yet.");
  }

  // Honeypot: bots fill this; humans never see it
  if (data.website) {
    return { ok: true, skipped: true };
  }

  const payload = {
    source: data.source || "enquiry",
    name: (data.name || "").trim(),
    phone: (data.phone || "").trim(),
    email: (data.email || "").trim(),
    product: (data.product || "").trim(),
    looking: (data.looking || "").trim(),
    project: (data.project || "").trim(),
    quantity: (data.quantity || "").trim(),
    message: (data.message || data.details || "").trim(),
    page: typeof window !== "undefined" ? window.location.href : "",
    submittedAt: new Date().toISOString(),
  };

  if (!payload.name || !payload.phone) {
    throw new Error("Name and phone are required.");
  }

  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    redirect: "follow",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  // Apps Script often returns 200 with a JSON body after redirect
  let body = null;
  try {
    body = await res.json();
  } catch {
    body = null;
  }

  if (!res.ok || (body && body.ok === false)) {
    throw new Error(body?.error || "Could not send your enquiry. Please try again.");
  }

  return body || { ok: true };
}

export function isFormEndpointReady() {
  return Boolean(SCRIPT_URL);
}
