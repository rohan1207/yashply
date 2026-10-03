import { useEffect, useState } from "react";
import { products, site } from "../data/content";
import { isFormEndpointReady, submitEnquiry } from "../lib/submitEnquiry";

const defaultForm = {
  name: "",
  phone: "",
  email: "",
  product: "",
  message: "",
  website: "",
};

export default function QuoteForm({
  compact = false,
  contact = false,
  onSent,
  defaultProduct = "",
}) {
  const [form, setForm] = useState({ ...defaultForm, product: defaultProduct });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const short = compact || contact;
  const ready = isFormEndpointReady();

  useEffect(() => {
    setForm((f) => ({ ...f, product: defaultProduct }));
  }, [defaultProduct]);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || sending) return;
    setError("");
    setSending(true);
    try {
      await submitEnquiry({
        source: contact ? "contact" : "enquiry",
        name: form.name,
        phone: form.phone,
        email: form.email,
        product: contact ? "" : form.product,
        message: form.message,
        website: form.website,
      });
      setSent(true);
      setForm({ ...defaultForm, product: defaultProduct });
      onSent?.();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-yp-timber/20 bg-yp-sand/50 p-8 text-center">
        <p className="font-display text-2xl">Thank you. We got your message.</p>
        <p className="mt-2 text-sm text-yp-mist">
          Our team will reply within one business day. Prefer a call? {site.phone}
          {site.email ? ` or write to ${site.email}` : ""}.
        </p>
        <button type="button" className="btn-ghost mt-6" onClick={() => setSent(false)}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={update}
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />
      <div className={short ? "space-y-3" : "grid gap-3 sm:grid-cols-2"}>
        <input
          className="field"
          name="name"
          placeholder="Your name *"
          value={form.name}
          onChange={update}
          required
          autoComplete="name"
        />
        <input
          className="field"
          name="phone"
          placeholder="Phone *"
          value={form.phone}
          onChange={update}
          required
          autoComplete="tel"
        />
        {(contact || !short) && (
          <input
            className="field sm:col-span-2"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={update}
            autoComplete="email"
          />
        )}
        {!contact && (
          <select
            className="field sm:col-span-2"
            name="product"
            value={form.product}
            onChange={update}
          >
            <option value="">Product of interest</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Project mix">Project mix / not sure</option>
          </select>
        )}
        <textarea
          className={`field sm:col-span-2 ${contact ? "min-h-[96px]" : "min-h-[110px]"}`}
          name="message"
          placeholder={contact ? "How can we help?" : "Room, quantity, timeline…"}
          value={form.message}
          onChange={update}
        />
      </div>
      {error ? <p className="text-sm text-yp-red">{error}</p> : null}
      {!ready ? (
        <p className="text-xs text-yp-mist">
          Form endpoint not set yet. Add VITE_APPS_SCRIPT_URL after you deploy Apps Script.
        </p>
      ) : null}
      <button type="submit" className="btn-copper w-full sm:w-auto" disabled={sending || !ready}>
        {sending ? "Sending…" : contact ? "Send message" : "Send enquiry"}
      </button>
      <p className="text-xs text-yp-mist/90">
        We reply within one business day. Prefer a call? {site.phone}
      </p>
    </form>
  );
}
