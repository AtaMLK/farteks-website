const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstileToken(token: string, remoteIp?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    throw new Error("TURNSTILE_SECRET_KEY is not configured.");
  }

  if (!token) {
    return false;
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Turnstile verification failed with HTTP ${response.status}.`);
  }

  const result = (await response.json()) as {
    success?: boolean;
    hostname?: string;
    "error-codes"?: string[];
  };

  if (!result.success) {
    console.warn("Turnstile verification rejected", {
      hostname: result.hostname,
      errorCodes: result["error-codes"] ?? [],
    });
  }

  return result.success === true;
}
