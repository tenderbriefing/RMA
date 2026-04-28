import { requireAdmin } from "@/lib/authServer";
import { AdminClient } from "@/app/admin/AdminClient";

export const metadata = {
  title: "Admin",
};

export default async function AdminPage() {
  await requireAdmin();

  return (
    <main className="rma-container py-14 sm:py-18">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/70">
              Admin
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-5xl">
              Mining SME Supplier Database
            </h1>
            <p className="mt-3 text-base leading-7 rma-muted">
              Review mining supplier SMEs, update verification status, and export CSV.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <AdminClient />
        </div>
      </div>
    </main>
  );
}

