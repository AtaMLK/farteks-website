import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, companyName, email } = body;

    if (!firstName || !lastName || !companyName || !email) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 },
      );
    }

    const webhookUrl =
      process.env.GOOGLE_CATALOG_WEBHOOK_URL ||
      process.env.GOOGLE_CATALOG_SCRIPT_URL ||
      process.env.GOOGLE_LEAD_SCRIPT_URL;

    // Lead capture is best-effort. A missing/broken webhook must never
    // prevent a visitor from receiving the public catalog PDF.
    if (webhookUrl) {
      try {
        const googleResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: process.env.GOOGLE_CATALOG_WEBHOOK_SECRET || "FARTEKS_CATALOG_2026",
            firstName: String(firstName).trim(),
            lastName: String(lastName).trim(),
            companyName: String(companyName).trim(),
            email: String(email).trim().toLowerCase(),
          }),
          cache: "no-store",
        });

        const contentType = googleResponse.headers.get("content-type") || "";
        const googleData = contentType.includes("application/json")
          ? await googleResponse.json()
          : null;

        if (!googleResponse.ok || (googleData && googleData.success === false)) {
          console.error("Catalog lead webhook failed:", {
            status: googleResponse.status,
            response: googleData,
          });
        }
      } catch (webhookError) {
        console.error("Catalog lead webhook request failed:", webhookError);
      }
    } else {
      console.warn(
        "GOOGLE_CATALOG_WEBHOOK_URL is not configured. Catalog download will continue without lead capture.",
      );
    }

    return NextResponse.json({
      success: true,
      message: "Catalog download approved.",
    });
  } catch (error) {
    console.error("Catalog download error:", error);

    return NextResponse.json(
      { success: false, error: "Unable to process catalog request." },
      { status: 500 },
    );
  }
}
