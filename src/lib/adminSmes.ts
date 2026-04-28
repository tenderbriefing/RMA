import { getAdminDb } from "@/lib/firebaseAdmin";
import { KycStatusSchema } from "@/lib/kyc";

export type SmeFilters = {
  q?: string;
  province?: string;
  district?: string;
  sector?: string;
  status?: string;
};

export async function listSmes(filters: SmeFilters) {
  const db = getAdminDb();

  // Firestore has limited multi-field querying; we keep it simple:
  // - exact-match filters on status/province/district/sector (when provided)
  // - search `q` is applied in-memory (companyName contains)
  let query: FirebaseFirestore.Query = db.collection("smes");

  if (filters.status) {
    const parsed = KycStatusSchema.safeParse(filters.status);
    if (parsed.success) query = query.where("status", "==", parsed.data);
  }
  if (filters.province) query = query.where("province", "==", filters.province);
  if (filters.district) query = query.where("district", "==", filters.district);
  if (filters.sector) query = query.where("sector", "==", filters.sector);

  const snap = await query.get();
  let rows: Array<Record<string, unknown> & { id: string }> = snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Record<string, unknown>),
  }));

  if (filters.q) {
    const q = filters.q.toLowerCase();
    rows = rows.filter((r) =>
      String(r["companyName"] ?? "").toLowerCase().includes(q),
    );
  }

  rows.sort((a, b) =>
    String(b["updatedAt"] ?? "").localeCompare(String(a["updatedAt"] ?? "")),
  );
  return rows;
}

