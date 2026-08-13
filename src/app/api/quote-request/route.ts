import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      company,
      industry,
      productInterest,
      budget,
      timeline,
      message,
    } = body;

    // Validation
    if (!fullName || !email || !phone || !company) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Quote Request Received - Farteks",
      html: `
        <h2>Hello ${fullName},</h2>
        <p>Thank you for your quote request. Our sales team will review your requirements and contact you within 24 hours with a customized quote.</p>
        <p><strong>Request Details:</strong></p>
        <ul>
          <li><strong>Company:</strong> ${company}</li>
          <li><strong>Industry:</strong> ${industry}</li>
          <li><strong>Product Interest:</strong> ${productInterest}</li>
          <li><strong>Budget Range:</strong> ${budget}</li>
          <li><strong>Timeline:</strong> ${timeline}</li>
        </ul>
        <p>Best regards,<br/>Farteks Sales Team</p>
      `,
    });

    // Send to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "sales@farteks.com",
      subject: `New Quote Request - ${company}`,
      html: `
        <h2>New Quote Request Received</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Product Interest:</strong> ${productInterest}</p>
        <p><strong>Budget Range:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Additional Details:</strong></p>
        <p>${message || "No additional details provided"}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully",
    });
  } catch (error) {
    console.error("Quote request error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit quote request" },
      { status: 500 }
    );
  }
}