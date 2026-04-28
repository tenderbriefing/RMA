import { requireAdmin } from "@/lib/authServer";
import { listSmes } from "@/lib/adminSmes";

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
    };

    const smes = await listSmes(filters);
    return Response.json({ ok: true, smes }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ ok: false, error: message }, { status: 401 });
  }
}

