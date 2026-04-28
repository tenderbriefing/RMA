import { requireAdmin } from "@/lib/authServer";
import { listSmes } from "@/lib/adminSmes";
import { toCsvRow } from "@/lib/csv";

const columns = [
  "userId",
  "companyName",
  "pacraRegistrationNumber",
  "tpin",
  "businessType",
  "dateOfRegistration",
  "contactPersonName",
  "contactPersonPosition",
  "email",
  "phone",
  "province",
  "district",
  "town",
  "physicalAddress",
  "sector",
  "productsOrServices",
  "ownerFullName",
  "ownerNationality",
  "ownerIdOrPassportNumber",
  "ownershipPercentage",
  "numberOfEmployees",
  "bankName",
  "consentToStoreData",
  "status",
  "createdAt",
  "updatedAt",
  "fundingNeeded",
  "fundingType",
  "estimatedFundingAmount",
  "hasPurchaseOrderOrContract",
  "fundingPurpose",
] as const;

export async function GET(request: Request) {
  try {
    await requireAdmin();
    const url = new URL(request.url);
    const filters = {
      q: url.searchParams.get("q") || undefined,
      province: url.searchParams.get("province") || undefined,
      district: url.searchParams.get("district") || undefined,
      sector: url.searchParams.get("sector") || undefined,
      status: url.searchParams.get("status") || undefined,
      fundingNeeded: (url.searchParams.get("fundingNeeded") as "yes" | "no" | null) || undefined,
    };

    const smes = await listSmes(filters);
    let csv = "";
    csv += toCsvRow(columns as unknown as string[]);
    for (const r of smes) {
      csv += toCsvRow(columns.map((c) => (r as Record<string, unknown>)[c]));
    }

    return new Response(csv, {
      status: 200,
      headers: {
        "content-type": "text/csv; charset=utf-8",
        "content-disposition": 'attachment; filename="rma-smes.csv"',
        "cache-control": "no-store",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ ok: false, error: message }, { status: 401 });
  }
}

