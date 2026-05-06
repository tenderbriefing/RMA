import { KycSchemaWithFinanceRules } from "@/lib/kyc";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { getCurrentUser } from "@/lib/authServer";

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    const body = await request.json();
    const parsed = KycSchemaWithFinanceRules.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { ok: false, error: "Invalid form data.", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    const db = getAdminDb();
    const ref = user ? db.collection("smes").doc(user.uid) : db.collection("smes").doc();
    const snap = user ? await ref.get() : null;

    const now = new Date().toISOString();
    const existing =
      snap && snap.exists ? (snap.data() as Record<string, unknown>) : null;

    await ref.set(
      {
        ...parsed.data,
        userId: user?.uid || "public",
        status: (existing?.status as string | undefined) || "pending",
        createdAt: (existing?.createdAt as string | undefined) || now,
        updatedAt: now,
      },
      user ? { merge: true } : { merge: false },
    );

    return Response.json({ ok: true, id: ref.id }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json(
      { ok: false, error: "Failed to save KYC.", detail: message },
      { status: 500 },
    );
  }
}

