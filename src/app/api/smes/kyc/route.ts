import { KycSchema } from "@/lib/kyc";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { requireUser } from "@/lib/authServer";

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const parsed = KycSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { ok: false, error: "Invalid form data.", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    const db = getAdminDb();
    const ref = db.collection("smes").doc(user.uid);
    const snap = await ref.get();

    const now = new Date().toISOString();
    const existing = snap.exists ? (snap.data() as Record<string, unknown>) : null;

    await ref.set(
      {
        ...parsed.data,
        userId: user.uid,
        status: (existing?.status as string | undefined) || "pending",
        createdAt: (existing?.createdAt as string | undefined) || now,
        updatedAt: now,
      },
      { merge: true },
    );

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json(
      { ok: false, error: "Failed to save KYC.", detail: message },
      { status: 500 },
    );
  }
}

