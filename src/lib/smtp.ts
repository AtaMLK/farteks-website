import net from "node:net";
import tls from "node:tls";
import type { Socket } from "node:net";

export type SmtpMessage = {
  subject: string;
  html: string;
  replyTo?: string;
};

type MailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  fromEmail: string;
  fromName: string;
  to: string[];
};

type PendingResponse = {
  resolve: (value: string) => void;
  reject: (reason?: unknown) => void;
};

class SmtpClient {
  private socket: Socket | tls.TLSSocket;
  private buffer = "";
  private pending: PendingResponse[] = [];

  constructor(socket: Socket | tls.TLSSocket) {
    this.socket = socket;
    this.attach(socket);
  }

  private attach(socket: Socket | tls.TLSSocket) {
    socket.setEncoding("utf8");
    socket.on("data", (chunk) => {
      this.buffer += String(chunk);
      this.flushResponses();
    });
    socket.on("error", (error) => {
      while (this.pending.length) this.pending.shift()?.reject(error);
    });
  }

  private flushResponses() {
    while (this.pending.length) {
      const lines = this.buffer.split("\r\n");
      if (lines.length < 2) return;

      let endIndex = -1;
      for (let index = 0; index < lines.length - 1; index += 1) {
        if (/^\d{3} /.test(lines[index])) {
          endIndex = index;
          break;
        }
      }

      if (endIndex === -1) return;

      const responseLines = lines.slice(0, endIndex + 1);
      this.buffer = lines.slice(endIndex + 1).join("\r\n");
      this.pending.shift()?.resolve(responseLines.join("\r\n"));
    }
  }

  waitResponse() {
    return new Promise<string>((resolve, reject) => {
      this.pending.push({ resolve, reject });
      this.flushResponses();
    });
  }

  async command(command: string, expected: number | number[]) {
    this.socket.write(`${command}\r\n`);
    const response = await this.waitResponse();
    const actualCode = Number(
      response.match(/(\d{3}) [^\r\n]*$/)?.[1] ?? response.slice(0, 3),
    );
    const allowed = Array.isArray(expected) ? expected : [expected];

    if (!allowed.includes(actualCode)) {
      throw new Error(`SMTP command failed (${actualCode}): ${response}`);
    }

    return response;
  }

  async upgradeToTls(host: string) {
    const previous = this.socket;
    previous.removeAllListeners("data");
    previous.removeAllListeners("error");

    const secureSocket = tls.connect({
      socket: previous,
      servername: host,
      rejectUnauthorized: true,
    });

    await new Promise<void>((resolve, reject) => {
      secureSocket.once("secureConnect", resolve);
      secureSocket.once("error", reject);
    });

    this.socket = secureSocket;
    this.attach(secureSocket);
  }

  writeData(data: string) {
    this.socket.write(data);
  }

  end() {
    this.socket.end();
  }
}

function getConfig(): MailConfig {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP_HOST, SMTP_USER and SMTP_PASS must be configured.");
  }

  const port = Number(process.env.SMTP_PORT || "465");
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE.toLowerCase() === "true"
    : port === 465;

  const recipients = (process.env.SMTP_TO || "info@farteks.com,support@farteks.com")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  if (!recipients.length) {
    throw new Error("SMTP_TO must contain at least one recipient.");
  }

  return {
    host,
    port,
    secure,
    user,
    pass,
    fromEmail: process.env.SMTP_FROM_EMAIL?.trim() || user,
    fromName: process.env.SMTP_FROM_NAME?.trim() || "FARTEKS Website",
    to: recipients,
  };
}

function connect(config: MailConfig) {
  return new Promise<Socket | tls.TLSSocket>((resolve, reject) => {
    if (config.secure) {
      const socket = tls.connect(
        {
          host: config.host,
          port: config.port,
          servername: config.host,
          rejectUnauthorized: true,
        },
        () => resolve(socket),
      );
      socket.once("error", reject);
      return;
    }

    const socket = net.createConnection(
      { host: config.host, port: config.port },
      () => resolve(socket),
    );
    socket.once("error", reject);
  });
}

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function encodeHeader(value: string) {
  if (/^[\x20-\x7E]*$/.test(value)) return sanitizeHeader(value);
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function formatMailbox(name: string, email: string) {
  return `${encodeHeader(name)} <${sanitizeHeader(email)}>`;
}

export async function sendSmtpEmail(message: SmtpMessage) {
  const config = getConfig();
  const socket = await connect(config);
  const client = new SmtpClient(socket);
  let connectionIsEncrypted = config.secure;

  try {
    const greeting = await client.waitResponse();
    if (!greeting.startsWith("220")) {
      throw new Error(`SMTP server rejected connection: ${greeting}`);
    }

    let capabilities = await client.command("EHLO farteks.com", 250);

    if (!connectionIsEncrypted) {
      if (!capabilities.toUpperCase().includes("STARTTLS")) {
        throw new Error("SMTP server does not offer STARTTLS on this connection.");
      }

      await client.command("STARTTLS", 220);
      await client.upgradeToTls(config.host);
      connectionIsEncrypted = true;
      capabilities = await client.command("EHLO farteks.com", 250);
    }

    if (!connectionIsEncrypted) {
      throw new Error("SMTP authentication requires an encrypted connection.");
    }

    await client.command("AUTH LOGIN", 334);
    await client.command(Buffer.from(config.user).toString("base64"), 334);
    await client.command(Buffer.from(config.pass).toString("base64"), 235);

    await client.command(`MAIL FROM:<${sanitizeHeader(config.fromEmail)}>`, 250);
    for (const recipient of config.to) {
      await client.command(`RCPT TO:<${sanitizeHeader(recipient)}>`, [250, 251]);
    }

    await client.command("DATA", 354);

    const headers = [
      `From: ${formatMailbox(config.fromName, config.fromEmail)}`,
      `To: ${config.to.map((email) => `<${sanitizeHeader(email)}>`).join(", ")}`,
      `Subject: ${encodeHeader(message.subject)}`,
      `Date: ${new Date().toUTCString()}`,
      `Message-ID: <${Date.now()}.${Math.random().toString(36).slice(2)}@farteks.com>`,
      "MIME-Version: 1.0",
      "Content-Type: text/html; charset=UTF-8",
      "Content-Transfer-Encoding: 8bit",
    ];

    if (message.replyTo) {
      headers.push(`Reply-To: <${sanitizeHeader(message.replyTo)}>`);
    }

    const body = message.html
      .replace(/\r?\n/g, "\r\n")
      .replace(/^\./gm, "..");

    client.writeData(`${headers.join("\r\n")}\r\n\r\n${body}\r\n.\r\n`);
    const dataResponse = await client.waitResponse();

    if (!dataResponse.startsWith("250")) {
      throw new Error(`SMTP message rejected: ${dataResponse}`);
    }

    await client.command("QUIT", 221);
    return { success: true };
  } finally {
    client.end();
  }
}
