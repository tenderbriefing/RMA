import { getAdminAuth } from "@/lib/firebaseAdmin";
import { SESSION_COOKIE_NAME } from "@/lib/session";

export async function POST(request: Request) {
  try {
    const { idToken } = (await request.json()) as { idToken?: string };
    if (!idToken) {
      return Response.json({ ok: false, error: "Missing idToken" }, { status: 400 });
    }

    // 14 days
    const expiresIn = 14 * 24 * 60 * 60 * 1000;
    const sessionCookie = await getAdminAuth().createSessionCookie(idToken, {
      expiresIn,
    });

    const headers = new Headers();
    const isProd = process.env.NODE_ENV === "production";
    headers.append(
      "Set-Cookie",
      `${SESSION_COOKIE_NAME}=${sessionCookie}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${Math.floor(
        expiresIn / 1000,
      )}; ${isProd ? "Secure; " : ""}`,
    );

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json(
      { ok: false, error: "Failed to create session.", detail: message },
      { status: 500 },
    );
  }
}

