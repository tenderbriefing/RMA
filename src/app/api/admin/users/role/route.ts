import { z } from "zod";
import { requireAdmin } from "@/lib/authServer";
import { getAdminDb } from "@/lib/firebaseAdmin";

const BodySchema = z.object({
  userId: z.string().min(1),
  role: z.enum(["admin", "user"]),
});

export async function POST(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    const parsed = BodySchema.safeParse(body);
    if (!parsed.success) {
      return Response.json({ ok: false, error: "Invalid body." }, { status: 400 });
    }

    const db = getAdminDb();
    await db.collection("users").doc(parsed.data.userId).set(
      {
        role: parsed.data.role,
        updatedAt: new Date().toISOString(),
      },
      { merge: true },
    );

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ ok: false, error: message }, { status: 401 });
  }
}

