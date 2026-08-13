# Farteks Website – Deployment Guide

## 1. Install dependencies

From the project root:

```bash
npm ci
```

If your lockfile was changed by another Node/npm version, use `npm install` once and commit the resulting lockfile.

## 2. Configure environment variables

Create `.env.local` for local development and configure the same variables in your production host.

Required for production:

```env
NEXT_PUBLIC_SITE_URL=https://farteks.com
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
GOOGLE_SITE_VERIFICATION=your-search-console-token
GOOGLE_LEAD_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
NEXT_PUBLIC_COMPANY_EMAIL=info@farteks.com
NEXT_PUBLIC_PHONE=+90 212 660 58 57
```

`GOOGLE_CATALOG_SCRIPT_URL` is retained as a backward-compatible fallback. Prefer `GOOGLE_LEAD_SCRIPT_URL` for the new combined catalog + quote workflow.

## 3. Configure Google Sheets + email

Use `google-apps-script/Code.gs`.

1. Create a Google Sheet for website leads.
2. Open **Extensions → Apps Script**.
3. Replace the script with `google-apps-script/Code.gs`.
4. In Apps Script open **Project Settings → Script Properties** and add:
   - `SPREADSHEET_ID`: the ID from the Google Sheet URL.
   - `NOTIFY_EMAIL`: the Farteks email address that should receive new lead notifications.
   - `SHEET_NAME`: optional; use `Leads` if omitted.
5. Deploy **Deploy → New deployment → Web app**.
6. Execute as **Me**.
7. Allow access to **Anyone** so the Farteks server can POST to the web app.
8. Copy the `/exec` URL into `GOOGLE_LEAD_SCRIPT_URL`.

The script records catalog downloads and quote requests in the same sheet and sends an email for each submission.

## 4. Catalog download

The catalog must exist at:

```text
public/catalogs/catalog.pdf
```

The API intentionally accepts only `/catalogs/catalog.pdf` to prevent arbitrary file requests.

The catalog is downloaded only after the lead is successfully registered.

## 5. Local verification

Run:

```bash
npm run type-check
npm run build
```

Then:

```bash
npm run dev
```

Test these flows manually:

- `/products`
- every `/products/group/...` page
- every `/products/[id]` page
- product image card click
- Navbar Products link + dropdown
- Contact → Request a Quote
- Catalog download form
- Google Sheet row creation
- notification email
- `/gallery`
- `/sitemap.xml`
- `/robots.txt`
- `/site.webmanifest`

## 6. SEO / Search Console

After production deployment:

1. Verify the domain in Google Search Console.
2. Submit `https://farteks.com/sitemap.xml`.
3. Inspect `/home`, `/products`, several group pages and several product pages.
4. Test Product/Breadcrumb structured data with Google's Rich Results Test.
5. Confirm that `/` redirects to `/home` and `/entrance` is not indexed.

## 7. Important routing change

The old splash/entrance screen is now available at:

```text
/entrance
```

The root `/` redirects to `/home` so search engines land on the actual content-rich homepage instead of a splash screen.

## 8. Images

The new product detail images are extracted from the supplied GDC catalog and stored under:

```text
public/images/products/*-detail.png
public/images/drawings/*-drawing.png
```

For future products, use `detailImage` in `src/data/products-data.ts` when a second product image should appear only on the detail page. `image` remains the normal card image.

## 9. Google Analytics

Set `NEXT_PUBLIC_GA4_ID`. The site tracks:

- page views
- product views
- product group views
- product searches
- catalog downloads
- quote form views/submissions
- technical drawing views
- phone/email/WhatsApp clicks

Do not send names, email addresses, phone numbers or other personally identifiable information to GA4.

## 10. Current source-of-truth for product data

The live product data is:

```text
src/data/products-data.ts
```

A JSON export is also included at:

```text
src/data/products-export.json
```

The export currently contains 46 product records.
