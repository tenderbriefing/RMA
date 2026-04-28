import { AdminExportClient } from "@/app/admin/registrations/AdminExportClient";

export const metadata = {
  title: "Admin · Registrations",
};

export default function AdminRegistrationsPage() {
  return (
    <main className="rma-container py-14 sm:py-18">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/70">
            Admin
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-5xl">
            Admin Dashboard
          </h1>
          <p className="mt-4 text-base leading-7 text-black/60">
            Internal tools for RMA operations.
          </p>
        </div>

        <div className="mt-10">
          <AdminExportClient />
        </div>

        <div className="mt-6 rounded-2xl border border-amber-600/20 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          Keep the export token private. Anyone with the token can download the
          database.
        </div>
      </div>
    </main>
  );
}

