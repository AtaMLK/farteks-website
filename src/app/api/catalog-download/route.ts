import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_CATALOG_SCRIPT_URL;

console.log("GOOGLE_CATALOG_SCRIPT_URL exists:", Boolean(GOOGLE_SCRIPT_URL));

const ALLOWED_CATALOG_URL = "/catalogs/catalog.pdf";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const firstName =
      typeof body.firstName === "string" ? body.firstName.trim() : "";

    const lastName =
      typeof body.lastName === "string" ? body.lastName.trim() : "";

    const companyName =
      typeof body.companyName === "string" ? body.companyName.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    const catalogUrl =
      typeof body.catalogUrl === "string" ? body.catalogUrl.trim() : "";

    /* ---------------------------------------------------------------------- */
    /* Validate                                                               */
    /* ---------------------------------------------------------------------- */

    if (!firstName) {
      return NextResponse.json(
        {
          success: false,
          error: "First name is required.",
        },
        { status: 400 },
      );
    }

    if (!lastName) {
      return NextResponse.json(
        {
          success: false,
          error: "Last name is required.",
        },
        { status: 400 },
      );
    }

    if (!companyName) {
      return NextResponse.json(
        {
          success: false,
          error: "Company name is required.",
        },
        { status: 400 },
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    if (catalogUrl !== ALLOWED_CATALOG_URL) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid catalog requested.",
        },
        { status: 400 },
      );
    }

    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_CATALOG_SCRIPT_URL is not configured.");

      return NextResponse.json(
        {
          success: false,
          error: "Catalog service is not configured.",
        },
        { status: 500 },
      );
    }

    /* ---------------------------------------------------------------------- */
    /* Client information                                                     */
    /* ---------------------------------------------------------------------- */

    const forwardedFor = request.headers.get("x-forwarded-for");

    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const userAgent = request.headers.get("user-agent") || "unknown";

    /* ---------------------------------------------------------------------- */
    /* Send to Google Apps Script                                             */
    /* ---------------------------------------------------------------------- */

    const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        firstName,
        lastName,
        companyName,
        email,
        catalogUrl,
        downloadedAt: new Date().toISOString(),
        ip,
        userAgent,
      }),

      cache: "no-store",
    });

    if (!googleResponse.ok) {
      console.error("Google Apps Script returned:", googleResponse.status);

      return NextResponse.json(
        {
          success: false,
          error: "Unable to register your download. Please try again.",
        },
        { status: 502 },
      );
    }

    /* ---------------------------------------------------------------------- */
    /* Parse Google response                                                  */
    /* ---------------------------------------------------------------------- */

    let googleData: {
      success?: boolean;
      error?: string;
      message?: string;
    } = {};

    try {
      googleData = await googleResponse.json();
    } catch {
      // Google returned a non-JSON response.
    }

    if (googleData.success === false) {
      console.error("Google Apps Script error:", googleData.error);

      return NextResponse.json(
        {
          success: false,
          error: "Unable to register your download. Please try again.",
        },
        { status: 502 },
      );
    }

    /* ---------------------------------------------------------------------- */
    /* Success                                                                */
    /* ---------------------------------------------------------------------- */

    return NextResponse.json({
      success: true,
      message: "Catalog download registered successfully.",
    });
  } catch (error) {
    console.error("Catalog download API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to process the catalog request. Please try again.",
      },
      { status: 500 },
    );
  }
}
