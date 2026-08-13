/**
 * Farteks lead collector for Catalog Downloads + Quote Requests.
 *
 * Configure these Script Properties before deployment:
 *   SPREADSHEET_ID = your Google Sheet ID
 *   NOTIFY_EMAIL   = email address that should receive lead notifications
 *   SHEET_NAME     = optional, defaults to Leads
 *
 * Deploy as: Web app
 * Execute as: Me
 * Who has access: Anyone
 */

function doPost(e) {
  try {
    var payload = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    var type = String(payload.type || 'catalog_download');

    if (type !== 'catalog_download' && type !== 'quote_request') {
      return jsonResponse({ success: false, error: 'Unsupported lead type.' });
    }

    var props = PropertiesService.getScriptProperties();
    var spreadsheetId = props.getProperty('SPREADSHEET_ID');
    var notifyEmail = props.getProperty('NOTIFY_EMAIL');
    var sheetName = props.getProperty('SHEET_NAME') || 'Leads';

    if (!spreadsheetId || !notifyEmail) {
      throw new Error('SPREADSHEET_ID and NOTIFY_EMAIL must be configured.');
    }

    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    var sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);

    ensureHeader(sheet);

    var timestamp = payload.submittedAt || new Date().toISOString();
    var row = [
      timestamp,
      type,
      safe(payload.firstName),
      safe(payload.lastName),
      safe(payload.companyName),
      safe(payload.email),
      safe(payload.phone),
      safe(payload.product),
      safe(payload.quantity),
      safe(payload.message),
      safe(payload.catalogUrl),
      safe(payload.source),
    ];

    sheet.appendRow(row);

    var subject = type === 'quote_request'
      ? 'Farteks - New Quote Request'
      : 'Farteks - New Catalog Download';

    var htmlBody = buildEmailBody(type, payload, timestamp);

    MailApp.sendEmail({
      to: notifyEmail,
      subject: subject,
      htmlBody: htmlBody,
    });

    return jsonResponse({ success: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ success: false, error: String(error.message || error) });
  }
}

function ensureHeader(sheet) {
  if (sheet.getLastRow() > 0) return;

  sheet.appendRow([
    'Timestamp',
    'Type',
    'First Name',
    'Last Name',
    'Company',
    'Email',
    'Phone',
    'Product',
    'Quantity',
    'Message',
    'Catalog URL',
    'Source',
  ]);
}

function safe(value) {
  return value == null ? '' : String(value).trim();
}

function htmlEscape(value) {
  return safe(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildEmailBody(type, payload, timestamp) {
  var title = type === 'quote_request'
    ? 'New Quote Request'
    : 'New Catalog Download';

  return [
    '<div style="font-family:Arial,sans-serif;line-height:1.6;color:#222">',
    '<h2>' + title + '</h2>',
    '<p><strong>Submitted:</strong> ' + htmlEscape(timestamp) + '</p>',
    '<hr>',
    '<p><strong>Name:</strong> ' + htmlEscape(payload.firstName) + ' ' + htmlEscape(payload.lastName) + '</p>',
    '<p><strong>Company:</strong> ' + htmlEscape(payload.companyName) + '</p>',
    '<p><strong>Email:</strong> ' + htmlEscape(payload.email) + '</p>',
    '<p><strong>Phone:</strong> ' + htmlEscape(payload.phone) + '</p>',
    '<p><strong>Product:</strong> ' + htmlEscape(payload.product) + '</p>',
    '<p><strong>Quantity:</strong> ' + htmlEscape(payload.quantity) + '</p>',
    '<p><strong>Message:</strong><br>' + htmlEscape(payload.message).replace(/\n/g, '<br>') + '</p>',
    '<p><strong>Catalog:</strong> ' + htmlEscape(payload.catalogUrl) + '</p>',
    '</div>',
  ].join('');
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
