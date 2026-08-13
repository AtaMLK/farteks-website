# Farteks Website – Completed Changes

## Product data

- Added `steel-single-acting-cylinder-piston` to Standard 1.
- Added `steel-with-nutring-cylinder-piston` to Standard 1.
- Added Custom Hydraulic Components group with custom piston, gland and rod end entries.
- Added Hydraulic Power Unit Components group with pump drums, elastic gear couplings, adapters, maintenance covers and hydraulic oil tanks.
- Added catalog-derived specification rows and prices from the supplied REMAININ ITEMS PDF.
- Added `detailImage` to the Product model for a separate detail image.
- Added `src/data/products-export.json` containing all 45 current product records.

## Product UI

- Entire normal product cards are clickable.
- Image-only cards remain fully clickable.
- Product images use `object-contain` so horizontal product photos remain centered without being cropped.
- Product detail pages now support Product Image, optional Detail Image and Technical Drawing tabs.
- Navbar Products text now links directly to `/products`; the chevron controls the dropdown separately.
- Product group pages support SEO metadata and server-rendered structured data.

## Contact / leads

- Restored a complete Request a Quote form.
- Product pages can prefill the quote form using `/contact?product=...`.
- Added `/api/quote`.
- Reworked catalog download handling and added timeout/error handling.
- Added a combined Google Apps Script that stores leads in Google Sheets and emails every catalog/quote submission.

## Gallery / motion

- Added a new modern gallery with masonry-style layout, hover motion and fullscreen lightbox.
- Added `/gallery`.
- Updated general section reveal animation with blur/scale transitions and reduced-motion support.

## SEO / GEO / technical cleanup

- Root now redirects to `/home`; the splash page is preserved at `/entrance` and marked noindex.
- Added homepage, product, group and gallery metadata.
- Added Organization, WebSite, Product, Breadcrumb and ItemList/CollectionPage structured data.
- Added `llms.txt` as an optional machine-readable site summary.
- Fixed missing image references and case-sensitive paths.
- Fixed invalid footer product links.
- Fixed the incorrect default company email (`info..farteks.com`).
- Added missing favicon, Apple icon, PWA icons and social preview images.
- Removed unused legacy product databases, unused layout/provider files and unused product components.
- Added local dev origin `192.168.1.108` alongside `192.168.1.103`.
