import { requireUser } from "@/lib/authServer";
import { getAdminDb } from "@/lib/firebaseAdmin";
import type { KycInput } from "@/lib/kyc";
import { KycFormClient } from "@/app/dashboard/kyc/KycFormClient";

export const metadata = {
  title: "KYC",
};

export default async function KycPage() {
  const user = await requireUser();
  const db = getAdminDb();
  const snap = await db.collection("smes").doc(user.uid).get();
  const initial = (snap.exists ? (snap.data() as Partial<KycInput>) : {}) as Partial<KycInput>;

  return (
    <main className="rma-container py-14 sm:py-18">
      <div className="mx-auto max-w-3xl">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/70">
            Zambia SME KYC
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-5xl">
            Mining SME KYC Registration
          </h1>
          <p className="mt-4 text-base leading-7 rma-muted">
            Register your business to be considered for RMA’s mining supplier development pipeline.
            Required fields are validated, and consent is mandatory.
          </p>
        </div>

        <div className="mt-10 rma-card p-6 sm:p-8">
          <KycFormClient initial={initial} />
        </div>
      </div>
    </main>
  );
}

