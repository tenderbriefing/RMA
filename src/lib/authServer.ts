import { redirect } from "next/navigation";
import { getAdminAuth, getAdminDb } from "@/lib/firebaseAdmin";
import { getSessionCookie } from "@/lib/session";

export type AuthedUser = {
  uid: string;
  email: string | null;
};

export async function getCurrentUser(): Promise<AuthedUser | null> {
  const sessionCookie = await getSessionCookie();
  if (!sessionCookie) return null;

  try {
    const decoded = await getAdminAuth().verifySessionCookie(sessionCookie, true);
    return { uid: decoded.uid, email: decoded.email ?? null };
  } catch {
    return null;
  }
}

export async function requireUser(): Promise<AuthedUser> {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

export async function requireAdmin(): Promise<AuthedUser> {
  const user = await requireUser();
  const db = getAdminDb();
  const snap = await db.collection("users").doc(user.uid).get();
  const role = (snap.data()?.role as string | undefined) || "";
  if (role !== "admin") redirect("/dashboard");
  return user;
}

