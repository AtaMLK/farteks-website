import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_LEAD_SCRIPT_URL || process.env.GOOGLE_CATALOG_SCRIPT_URL;
const ALLOWED_CATALOG_URL = '/catalogs/catalog.pdf';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : '';
    const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : '';
    const companyName = typeof body.companyName === 'string' ? body.companyName.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const catalogUrl = typeof body.catalogUrl === 'string' ? body.catalogUrl.trim() : '';

    if (!firstName || !lastName || !companyName) {
      return NextResponse.json(
        { success: false, error: 'First name, last name and company name are required.' },
        { status: 400 },
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid business email address.' },
        { status: 400 },
      );
    }

    if (catalogUrl !== ALLOWED_CATALOG_URL) {
      return NextResponse.json(
        { success: false, error: 'Invalid catalog requested.' },
        { status: 400 },
      );
    }

    if (!GOOGLE_SCRIPT_URL) {
      console.error('Google lead script URL is not configured.');
      return NextResponse.json(
        { success: false, error: 'Catalog service is not configured.' },
        { status: 500 },
      );
    }

    const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'catalog_download',
        firstName,
        lastName,
        companyName,
        email,
        catalogUrl,
        source: 'farteks.com',
        submittedAt: new Date().toISOString(),
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(12000),
    });

    const responseText = await googleResponse.text();
    let googleData: { success?: boolean; error?: string } = {};

    try {
      googleData = JSON.parse(responseText);
    } catch {
      // Some Google Apps Script deployments return a plain-text success response.
    }

    if (!googleResponse.ok || googleData.success === false) {
      console.error('Google Apps Script catalog response:', googleResponse.status, responseText);
      return NextResponse.json(
        { success: false, error: 'Unable to register your download. Please try again.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Catalog download API error:', error);
    return NextResponse.json(
      { success: false, error: 'Unable to process the catalog request. Please try again.' },
      { status: 500 },
    );
  }
}
