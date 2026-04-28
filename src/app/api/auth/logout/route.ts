import { SESSION_COOKIE_NAME } from "@/lib/session";

export async function POST() {
  const headers = new Headers();
  const isProd = process.env.NODE_ENV === "production";
  headers.append(
    "Set-Cookie",
    `${SESSION_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0; ${isProd ? "Secure; " : ""}`,
  );
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
}

