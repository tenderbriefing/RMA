import { z } from "zod";
import { getAdminDb } from "@/lib/firebaseAdmin";

function requireAdminToken(request: Request) {
  const expected = process.env.ADMIN_EXPORT_TOKEN;
  if (!expected) {
    throw new Error("Missing environment variable: ADMIN_EXPORT_TOKEN");
  }

  const url = new URL(request.url);
  const tokenFromQuery = url.searchParams.get("token") || "";

  const auth = request.headers.get("authorization") || "";
  const tokenFromHeader = auth.toLowerCase().startsWith("bearer ")
    ? auth.slice(7).trim()
    : "";

  const provided = tokenFromHeader || tokenFromQuery;
  if (!provided || provided !== expected) {
    return false;
  }
  return true;
}

function toCsvRow(values: string[]) {
  const escaped = values.map((v) => `"${v.replaceAll('"', '""')}"`);
  return `${escaped.join(",")}\n`;
}

const QuerySchema = z.object({
  format: z.enum(["csv", "json"]).optional(),
});

export async function GET(request: Request) {
  try {
    if (!requireAdminToken(request)) {
      return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(request.url);
    const parsedQuery = QuerySchema.safeParse({
      format: url.searchParams.get("format") || undefined,
    });
    if (!parsedQuery.success) {
      return Response.json({ ok: false, error: "Invalid query" }, { status: 400 });
    }

    const format = parsedQuery.data.format ?? "csv";

    const db = getAdminDb();
    const snap = await db.collection("smes").get();
    const docs: Array<Record<string, unknown> & { id: string }> = snap.docs.map(
      (d) => ({ id: d.id, ...(d.data() as Record<string, unknown>) }),
    );

    // Sort newest first if createdAt exists.
    docs.sort((a, b) => {
      const aa =
        typeof a["createdAt"] === "string" ? (a["createdAt"] as string) : "";
      const bb =
        typeof b["createdAt"] === "string" ? (b["createdAt"] as string) : "";
      return bb.localeCompare(aa);
    });

    if (format === "json") {
      return Response.json(
        { ok: true, count: docs.length, smes: docs },
        { status: 200 },
      );
    }

    const headers = [
      "smeId",
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
      "createdAt",
      "updatedAt",
      "status",
    ];

    let csv = "";
    csv += toCsvRow(headers);

    for (const r of docs) {
      csv += toCsvRow([
        String(r.smeId ?? r.id ?? ""),
        String(r.companyName ?? ""),
        String(r.pacraRegistrationNumber ?? ""),
        String(r.tpin ?? ""),
        String(r.businessType ?? ""),
        String(r.dateOfRegistration ?? ""),
        String(r.contactPersonName ?? ""),
        String(r.contactPersonPosition ?? ""),
        String(r.email ?? ""),
        String(r.phone ?? ""),
        String(r.province ?? ""),
        String(r.district ?? ""),
        String(r.town ?? ""),
        String(r.physicalAddress ?? ""),
        String(r.sector ?? ""),
        String(r.productsOrServices ?? ""),
        String(r.ownerFullName ?? ""),
        String(r.ownerNationality ?? ""),
        String(r.ownerIdOrPassportNumber ?? ""),
        String(r.ownershipPercentage ?? ""),
        String(r.numberOfEmployees ?? ""),
        String(r.bankName ?? ""),
        String(r.consentToStoreData ?? ""),
        String(r.createdAt ?? ""),
        String(r.updatedAt ?? ""),
        String(r.status ?? ""),
      ]);
    }

    return new Response(csv, {
      status: 200,
      headers: {
        "content-type": "text/csv; charset=utf-8",
        "content-disposition": 'attachment; filename="rma-sme-registrations.csv"',
        "cache-control": "no-store",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json(
      { ok: false, error: "Export failed.", detail: message },
      { status: 500 },
    );
  }
}

