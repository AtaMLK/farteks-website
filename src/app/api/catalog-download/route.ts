import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("CATALOG WEBHOOK:", process.env.GOOGLE_CATALOG_WEBHOOK_URL);
  try {
    const body = await request.json();

    const { firstName, lastName, companyName, email } = body;

    if (!firstName || !lastName || !companyName || !email) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required.",
        },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.GOOGLE_CATALOG_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("GOOGLE_CATALOG_WEBHOOK_URL is not configured.");

      return NextResponse.json(
        {
          success: false,
          error: "Catalog service is not configured.",
        },
        { status: 500 },
      );
    }

    const googleResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: "FARTEKS_CATALOG_2026",
        firstName,
        lastName,
        companyName,
        email,
      }),
    });

    const googleData = await googleResponse.json();

    if (!googleData.success) {
      console.error("Google Sheets error:", googleData);

      return NextResponse.json(
        {
          success: false,
          error: googleData.error || "Could not save catalog request.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Catalog request saved.",
    });
  } catch (error) {
    console.error("Catalog download error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to process catalog request.",
      },
      { status: 500 },
    );
  }
}
