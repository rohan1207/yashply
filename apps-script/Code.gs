/**
 * Yashply — Google Apps Script
 * Receives form POSTs from yashply.in, appends a Sheet row, emails via Resend.
 *
 * SETUP (see chat steps):
 * 1. Create a Google Sheet, rename first tab to "Enquiries"
 * 2. Extensions → Apps Script → paste this file
 * 3. Project Settings → Script properties:
 *      RESEND_API_KEY   = re_xxxxxxxx
 *      FROM_EMAIL      = Yashply <enquiries@yashply.in>
 *      NOTIFY_TO       = yashpancholi1995@gmail.com
 * 4. Deploy → New deployment → Web app
 *      Execute as: Me
 *      Who has access: Anyone
 * 5. Copy the Web App URL into VITE_APPS_SCRIPT_URL
 */

var SHEET_NAME = "Enquiries";
var HEADERS = [
  "Timestamp",
  "Source",
  "Name",
  "Phone",
  "Email",
  "Product",
  "Looking For",
  "Project",
  "Quantity",
  "Message",
  "Page URL",
];

function doPost(e) {
  try {
    var data = parseBody_(e);
    if (!data.name || !data.phone) {
      return json_({ ok: false, error: "Name and phone are required." });
    }

    appendRow_(data);
    sendNotifyEmail_(data);
    if (data.email) {
      sendCustomerAck_(data);
    }

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err.message || err) });
  }
}

function doGet() {
  return json_({
    ok: true,
    service: "Yashply enquiries",
    hint: "POST JSON form payloads to this URL.",
  });
}

function parseBody_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("Empty request body.");
  }
  return JSON.parse(e.postData.contents);
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function appendRow_(data) {
  getSheet_().appendRow([
    data.submittedAt || new Date().toISOString(),
    data.source || "",
    data.name || "",
    data.phone || "",
    data.email || "",
    data.product || "",
    data.looking || "",
    data.project || "",
    data.quantity || "",
    data.message || "",
    data.page || "",
  ]);
}

function prop_(key) {
  return PropertiesService.getScriptProperties().getProperty(key) || "";
}

function sendNotifyEmail_(data) {
  var apiKey = prop_("RESEND_API_KEY");
  var from = prop_("FROM_EMAIL") || "Yashply <enquiries@yashply.in>";
  var to = prop_("NOTIFY_TO") || "yashpancholi1995@gmail.com";
  if (!apiKey) {
    // Sheet still saved; skip email until Resend is configured
    return;
  }

  var subject =
    "[" +
    String(data.source || "enquiry").toUpperCase() +
    "] " +
    data.name +
    " — " +
    data.phone;

  var html =
    "<h2>New enquiry from yashply.in</h2>" +
    "<table style='border-collapse:collapse;font-family:sans-serif;font-size:14px'>" +
    row_("Source", data.source) +
    row_("Name", data.name) +
    row_("Phone", data.phone) +
    row_("Email", data.email) +
    row_("Product", data.product) +
    row_("Looking for", data.looking) +
    row_("Project", data.project) +
    row_("Quantity", data.quantity) +
    row_("Message", data.message) +
    row_("Page", data.page) +
    row_("Time", data.submittedAt) +
    "</table>";

  resend_({
    from: from,
    to: [to],
    subject: subject,
    html: html,
    reply_to: data.email || undefined,
  });
}

function sendCustomerAck_(data) {
  var apiKey = prop_("RESEND_API_KEY");
  var from = prop_("FROM_EMAIL") || "Yashply <enquiries@yashply.in>";
  if (!apiKey || !data.email) return;

  var html =
    "<p>Hi " +
    escape_(data.name) +
    ",</p>" +
    "<p>Thank you for contacting <strong>Yash Ply &amp; Hardware</strong>. " +
    "We received your enquiry and will reply within one business day.</p>" +
    "<p>Call us anytime: <a href='tel:+918698496699'>8698496699</a></p>" +
    "<p>— Team Yashply<br/>Kothrud, Pune</p>";

  resend_({
    from: from,
    to: [data.email],
    subject: "We received your enquiry — Yashply",
    html: html,
  });
}

function resend_(payload) {
  var apiKey = prop_("RESEND_API_KEY");
  if (!apiKey) return;

  var clean = {};
  Object.keys(payload).forEach(function (k) {
    if (payload[k] !== undefined && payload[k] !== null && payload[k] !== "") {
      clean[k] = payload[k];
    }
  });

  var res = UrlFetchApp.fetch("https://api.resend.com/emails", {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + apiKey },
    payload: JSON.stringify(clean),
    muteHttpExceptions: true,
  });

  var code = res.getResponseCode();
  if (code < 200 || code >= 300) {
    throw new Error("Resend error (" + code + "): " + res.getContentText());
  }
}

function row_(label, value) {
  if (!value) return "";
  return (
    "<tr><td style='padding:6px 12px 6px 0;color:#666;vertical-align:top'>" +
    escape_(label) +
    "</td><td style='padding:6px 0'>" +
    escape_(value) +
    "</td></tr>"
  );
}

function escape_(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
