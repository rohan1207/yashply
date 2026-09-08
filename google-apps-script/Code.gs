/**
 * Primo Clothing, form intake
 *
 * 1. Extensions, Apps Script, paste this file.
 * 2. Project Settings, Script properties:
 *      RESEND_API_KEY = your Resend key (never put this in the website)
 * 3. Deploy, New deployment, Web app
 *      Execute as: Me
 *      Who has access: Anyone
 * 4. Copy the web app URL into VITE_APPS_SCRIPT_URL on Render / .env
 *
 * Spreadsheet:
 * https://docs.google.com/spreadsheets/d/1fcYiLFtg_rimPgxwFRgCIjVICMbappI_VwzxAyUJhjY
 */

var SPREADSHEET_ID = "1fcYiLFtg_rimPgxwFRgCIjVICMbappI_VwzxAyUJhjY";
var FROM_EMAIL = "Primo Clothing <contact@primoglobal.in>";
var TEAM_EMAIL = "contact@primoglobal.in";

var SHEETS = {
  quote: "Get a Quote",
  contact: "Contact Page",
  home: "Home Enquiry",
  about: "About Page",
};

var HEADERS = [
  "Timestamp",
  "Name",
  "Phone",
  "Email",
  "Subject",
  "Message",
  "Page URL",
];

function doGet() {
  return json_({ ok: true, service: "primo-forms" });
}

function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    var source = String(data.source || "contact").toLowerCase();
    var sheetName = SHEETS[source] || SHEETS.contact;
    var row = [
      new Date(),
      String(data.name || ""),
      String(data.phone || ""),
      String(data.email || ""),
      String(data.subject || ""),
      String(data.message || ""),
      String(data.pageUrl || ""),
    ];

    appendRow_(sheetName, row);
    sendTeamEmail_(source, sheetName, data);

    if (data.email) {
      sendCustomerEmail_(data);
    }

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function appendRow_(sheetName, row) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  sheet.appendRow(row);
}

function sendTeamEmail_(source, sheetName, data) {
  var key = getResendKey_();
  if (!key) return;

  var label = sheetName;
  var subjectLine = data.subject
    ? label + ", " + data.subject + " from " + (data.name || "website")
    : "New " + label + " from " + (data.name || "website");

  UrlFetchApp.fetch("https://api.resend.com/emails", {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + key },
    muteHttpExceptions: true,
    payload: JSON.stringify({
      from: FROM_EMAIL,
      to: [TEAM_EMAIL],
      reply_to: data.email || undefined,
      subject: subjectLine,
      html: teamTemplate_(label, data),
    }),
  });
}

function sendCustomerEmail_(data) {
  var key = getResendKey_();
  if (!key) return;

  UrlFetchApp.fetch("https://api.resend.com/emails", {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + key },
    muteHttpExceptions: true,
    payload: JSON.stringify({
      from: FROM_EMAIL,
      to: [data.email],
      subject: "We received your enquiry, Primo Clothing",
      html: customerTemplate_(data),
    }),
  });
}

function getResendKey_() {
  return PropertiesService.getScriptProperties().getProperty("RESEND_API_KEY");
}

function esc_(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rowHtml_(label, value) {
  if (!value) return "";
  return (
    '<tr>' +
    '<td style="padding:10px 0;width:34%;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;vertical-align:top;">' +
    esc_(label) +
    "</td>" +
    '<td style="padding:10px 0;font-size:15px;color:#111827;vertical-align:top;">' +
    esc_(value) +
    "</td>" +
    "</tr>"
  );
}

function shell_(inner) {
  return (
    '<!DOCTYPE html><html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    "</head><body style=\"margin:0;padding:0;background:#f4f1ea;font-family:Arial,Helvetica,sans-serif;\">" +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ea;padding:24px 12px;">' +
    "<tr><td align=\"center\">" +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;">' +
    '<tr><td style="background:#1e3a5f;padding:22px 24px;">' +
    '<p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#93c5fd;">Primo Clothing Company</p>' +
    '<p style="margin:8px 0 0;font-size:20px;font-weight:bold;color:#ffffff;">From the house of Mota Garments</p>' +
    "</td></tr>" +
    '<tr><td style="padding:24px;">' +
    inner +
    "</td></tr>" +
    '<tr><td style="padding:16px 24px 24px;border-top:1px solid #eee8dc;font-size:12px;color:#6b7280;line-height:1.6;">' +
    "23 &amp; 24 Anusaya Enclave, Jagtap Chowk, Wanowrie, Pune 411040<br>" +
    '<a href="mailto:contact@primoglobal.in" style="color:#086dbe;text-decoration:none;">contact@primoglobal.in</a>' +
    " &nbsp;|&nbsp; " +
    '<a href="tel:+919028552855" style="color:#086dbe;text-decoration:none;">+91 90285 52855</a>' +
    "</td></tr></table></td></tr></table></body></html>"
  );
}

function teamTemplate_(label, data) {
  var inner =
    '<p style="margin:0 0 8px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#086dbe;">' +
    esc_(label) +
    "</p>" +
    '<h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:#111827;">New website enquiry</h1>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">' +
    rowHtml_("Name", data.name) +
    rowHtml_("Phone", data.phone) +
    rowHtml_("Email", data.email) +
    rowHtml_("Subject", data.subject) +
    rowHtml_("Message", data.message) +
    rowHtml_("Page", data.pageUrl) +
    "</table>" +
    '<p style="margin:20px 0 0;font-size:13px;color:#6b7280;">Reply to this email to reach the customer directly.</p>';
  return shell_(inner);
}

function customerTemplate_(data) {
  var first = String(data.name || "there").split(" ")[0];
  var inner =
    '<p style="margin:0 0 12px;font-size:15px;color:#111827;">Hello ' +
    esc_(first) +
    ",</p>" +
    '<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#374151;">Thank you for writing to Primo Clothing. We have received your enquiry and our team will get back to you shortly.</p>' +
    (data.subject
      ? '<p style="margin:0 0 16px;font-size:14px;color:#6b7280;">Regarding: <strong style="color:#111827;">' +
        esc_(data.subject) +
        "</strong></p>"
      : "") +
    '<p style="margin:0;font-size:15px;line-height:1.6;color:#374151;">If this is urgent, call us on +91 90285 52855.</p>';
  return shell_(inner);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
