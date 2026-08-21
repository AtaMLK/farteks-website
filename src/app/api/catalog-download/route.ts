import { NextResponse } from "next/server";
import { Resend } from "resend";

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

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured for catalog leads.");
      return NextResponse.json(
        { success: false, error: "Catalog service is temporarily unavailable." },
        { status: 503 },
      );
    }

    const normalizedFirstName = String(firstName).trim();
    const normalizedLastName = String(lastName).trim();
    const normalizedCompanyName = String(companyName).trim();
    const normalizedEmail = String(email).trim().toLowerCase();

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "FARTEKS Website <website@farteks.com>",
      to: ["info@farteks.com", "support@farteks.com"],
      replyTo: normalizedEmail,
      subject: `New Catalog Download — ${normalizedCompanyName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
            <div style="max-width:680px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
              <div style="background:#392B87;padding:28px 32px;color:white;">
                <div style="font-size:12px;letter-spacing:3px;font-weight:bold;color:#E5322D;">FARTEKS</div>
                <h1 style="margin:10px 0 0;font-size:28px;">New Catalog Download</h1>
              </div>

              <div style="padding:32px;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;font-weight:bold;width:150px;">First Name</td>
                    <td style="padding:10px 0;">${escapeHtml(normalizedFirstName)}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">Last Name</td>
                    <td style="padding:10px 0;">${escapeHtml(normalizedLastName)}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">Company</td>
                    <td style="padding:10px 0;">${escapeHtml(normalizedCompanyName)}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">Email</td>
                    <td style="padding:10px 0;">${escapeHtml(normalizedEmail)}</td>
                  </tr>
                </table>

                <div style="margin-top:30px;padding-top:25px;border-top:1px solid #e5e7eb;color:#64748b;font-size:13px;line-height:1.6;">
                  This lead was submitted through the Farteks website catalog download form.
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend catalog lead error:", error);
      return NextResponse.json(
        { success: false, error: "Unable to process the catalog download." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Catalog download approved.",
      emailSent: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Catalog download error:", error);

    return NextResponse.json(
      { success: false, error: "Unable to process catalog request." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
