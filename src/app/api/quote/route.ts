import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_LEAD_SCRIPT_URL || process.env.GOOGLE_CATALOG_SCRIPT_URL;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : '';
    const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : '';
    const companyName = typeof body.companyName === 'string' ? body.companyName.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const product = typeof body.product === 'string' ? body.product.trim() : '';
    const quantity = typeof body.quantity === 'string' ? body.quantity.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!firstName || !lastName || !companyName || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please complete all required fields.' },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }

    if (!GOOGLE_SCRIPT_URL) {
      console.error('Google lead script URL is not configured.');
      return NextResponse.json(
        { success: false, error: 'Quote service is not configured.' },
        { status: 500 },
      );
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'quote_request',
        firstName,
        lastName,
        companyName,
        email,
        phone,
        product,
        quantity,
        message,
        source: 'farteks.com/contact',
        submittedAt: new Date().toISOString(),
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(12000),
    });

    const responseText = await response.text();
    let result: { success?: boolean; error?: string } = {};

    try {
      result = JSON.parse(responseText);
    } catch {
      // Some Google Apps Script deployments return a non-JSON success response.
    }

    if (!response.ok || result.success === false) {
      console.error('Quote Google Script response:', response.status, responseText);
      return NextResponse.json(
        { success: false, error: 'Unable to send your quote request. Please try again.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json(
      { success: false, error: 'Unable to process your quote request. Please try again.' },
      { status: 500 },
    );
  }
}
