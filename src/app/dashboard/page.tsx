import Link from "next/link";
import { requireUser } from "@/lib/authServer";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { LogoutButton } from "@/components/LogoutButton";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const user = await requireUser();
  const db = getAdminDb();
  const snap = await db.collection("smes").doc(user.uid).get();
  const data = snap.exists ? (snap.data() as Record<string, unknown>) : null;

  const companyName = (data?.companyName as string | undefined) || null;
  const status = (data?.status as string | undefined) || null;

  return (
    <main className="rma-container py-14 sm:py-18">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-5xl">
              SME Dashboard
            </h1>
            <p className="mt-2 text-sm text-black/60">
              Signed in as <span className="font-medium">{user.email ?? user.uid}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/dashboard/kyc" className="rma-btn rma-btn-primary">
              Complete / update KYC
            </Link>
            <LogoutButton />
          </div>
        </div>

        <div className="mt-10 grid gap-4">
          <div className="rma-card p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--rma-ink)]">
                  {companyName ? companyName : "KYC not submitted"}
                </p>
                <p className="mt-1 text-sm text-black/60">
                  Status:{" "}
                  <span className="font-semibold text-black">
                    {status ? status : "not_submitted"}
                  </span>
                </p>
              </div>
              <Link href="/dashboard/kyc" className="rma-btn rma-btn-secondary">
                {companyName ? "Update details" : "Submit KYC"}
              </Link>
            </div>

            <p className="mt-4 text-sm leading-6 text-black/60">
              RMA will review your profile for completeness and verification. You’ll be contacted if
              additional information is required or when opportunities match your sector and capacity.
            </p>
          </div>

          <div className="rma-card p-6">
            <p className="text-sm font-semibold text-[var(--rma-ink)]">Admin</p>
            <p className="mt-2 text-sm leading-6 text-black/60">
              If you are an RMA admin, you can access the admin dashboard.
            </p>
            <div className="mt-4">
              <Link href="/admin" className="rma-btn rma-btn-secondary">
                Go to Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

