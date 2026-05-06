import { KycFormClient } from "@/app/dashboard/kyc/KycFormClient";

export default function RegisterPage() {
  return (
    <main>
      <div className="border-b border-black/5 bg-white">
        <div className="rma-container py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-2 w-10 rounded-full zambia-stripe" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                SME registration
              </p>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-5xl">
              Mining SME Registration
            </h1>
            <p className="mt-4 text-base leading-7 rma-muted">
              We invite small businesses in Zambia to register if they are interested in doing
              business with the mines in Zambia or partnering with multinational companies outside
              Zambia.
            </p>
          </div>
        </div>
      </div>

      <div className="rma-container py-10 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_20%,rgba(31,106,58,0.08),transparent_55%),radial-gradient(900px_circle_at_78%_30%,rgba(37,58,135,0.08),transparent_55%),radial-gradient(900px_circle_at_55%_90%,rgba(240,116,43,0.06),transparent_55%)]" />
              <div className="absolute top-0 h-1 w-full zambia-stripe" />
            </div>
            <div className="relative p-6 sm:p-8">
              <KycFormClient initial={{}} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

