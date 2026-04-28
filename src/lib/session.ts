import { cookies } from "next/headers";

export const SESSION_COOKIE_NAME = "__session";

export async function getSessionCookie() {
  const store = await cookies();
  return store.get(SESSION_COOKIE_NAME)?.value || null;
}

