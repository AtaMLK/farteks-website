import nodemailer from "nodemailer";

export type SmtpMessage = {
  subject: string;
  html: string;
  replyTo?: string;
};

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not configured.`);
  return value.trim();
}

export async function sendSmtpEmail(message: SmtpMessage) {
  const host = requiredEnv("SMTP_HOST");
  const user = requiredEnv("SMTP_USER");
  const pass = process.env.SMTP_PASS;
  if (!pass) throw new Error("SMTP_PASS is not configured.");

  const port = Number(process.env.SMTP_PORT || "465");
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE.toLowerCase() === "true"
    : port === 465;

  const fromEmail = process.env.SMTP_FROM_EMAIL?.trim() || user;
  const fromName = process.env.SMTP_FROM_NAME?.trim() || "FARTEKS Website";
  const recipients = (process.env.SMTP_TO || "info@farteks.com")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  if (!recipients.length) throw new Error("SMTP_TO must contain at least one recipient.");

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 30000,
  });

  await transporter.sendMail({
    from: `${fromName} <${fromEmail}>`,
    to: recipients,
    replyTo: message.replyTo || undefined,
    subject: message.subject,
    html: message.html,
  });

  return { success: true };
}
