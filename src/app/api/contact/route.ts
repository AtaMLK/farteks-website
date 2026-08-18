import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      subject,
      message,
      type,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const emailSubject =
      type === "quote"
        ? `Quote Request — ${subject || "Farteks Website"}`
        : `Contact Message — ${subject || "Farteks Website"}`;

    // Resend is optional for now. The site and contact form can run
    // without RESEND_API_KEY. When the key is added, messages are sent normally.
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured. Contact message was received but not emailed.");

      return NextResponse.json({
        success: true,
        emailSent: false,
        message: "Your message was received. Email notifications are temporarily unavailable.",
      });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "FARTEKS Website <website@farteks.com>",
      to: ["info@farteks.com", "support@farteks.com"],
      replyTo: email,
      subject: emailSubject,

      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
            <div style="max-width:680px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">

              <div style="background:#392B87;padding:28px 32px;color:white;">
                <div style="font-size:12px;letter-spacing:3px;font-weight:bold;color:#E5322D;">
                  FARTEKS
                </div>

                <h1 style="margin:10px 0 0;font-size:28px;">
                  ${escapeHtml(
                    type === "quote"
                      ? "New Quote Request"
                      : "New Contact Message"
                  )}
                </h1>
              </div>

              <div style="padding:32px;">

                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;font-weight:bold;width:140px;">
                      Name
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(name)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Email
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(email)}
                    </td>
                  </tr>

                  ${
                    phone
                      ? `
                    <tr>
                      <td style="padding:10px 0;font-weight:bold;">
                        Phone
                      </td>
                      <td style="padding:10px 0;">
                        ${escapeHtml(phone)}
                      </td>
                    </tr>
                  `
                      : ""
                  }

                  ${
                    subject
                      ? `
                    <tr>
                      <td style="padding:10px 0;font-weight:bold;">
                        Subject
                      </td>
                      <td style="padding:10px 0;">
                        ${escapeHtml(subject)}
                      </td>
                    </tr>
                  `
                      : ""
                  }

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Request Type
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(type === "quote" ? "Request Quote" : "Message")}
                    </td>
                  </tr>
                </table>

                <div style="margin-top:30px;padding-top:25px;border-top:1px solid #e5e7eb;">
                  <div style="font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#392B87;font-weight:bold;">
                    Message
                  </div>

                  <div style="margin-top:12px;line-height:1.7;color:#374151;white-space:pre-wrap;">
                    ${escapeHtml(message)}
                  </div>
                </div>

              </div>

              <div style="padding:20px 32px;background:#f8fafc;color:#64748b;font-size:12px;">
                Sent from farteks.com contact form.
              </div>

            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      emailSent: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
