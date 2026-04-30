import Link from "next/link";
import { HeroESDVisual } from "@/components/HeroESDVisual";

export default function Home() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[color:var(--rma-green)]/12 blur-3xl" />
          <div className="absolute -bottom-44 right-[-160px] h-[560px] w-[560px] rounded-full bg-[color:var(--rma-blue)]/10 blur-3xl" />
          <div className="absolute top-24 left-[-160px] h-[520px] w-[520px] rounded-full bg-[color:var(--rma-orange)]/8 blur-3xl" />
        </div>

        <div className="rma-container-wide relative py-14 sm:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold text-black/70 backdrop-blur">
                Zambia mining local content • supplier development • finance readiness
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-6xl">
                Verified mining supplier pipeline for Zambia.
              </h1>

              <p className="mt-6 text-base leading-7 text-[color:var(--rma-muted)] sm:text-lg">
                Resilient Markets Africa helps small businesses become visible, verified, and better prepared
                to supply the mines in Zambia—supporting local-content implementation and supplier development outcomes.
              </p>
              <p className="mt-3 text-sm leading-6 rma-muted">
                We invite small businesses in Zambia to register if they are interested in doing
                business with the mines in Zambia or partnering with multinational companies
                outside Zambia.
              </p>

              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
                <Link href="/register" className="rma-btn rma-btn-primary">
                  Register Your Business
                </Link>
                <Link href="/contact" className="rma-btn rma-btn-secondary">
                  Partner With RMA
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Register & complete KYC",
                    body: "Create your profile and submit business details for verification and pipeline screening.",
                  },
                  {
                    title: "Readiness & compliance support",
                    body: "Support aligned to mining procurement expectations (implementation support).",
                  },
                  {
                    title: "Finance-readiness (optional)",
                    body: "Where eligible, preparation for finance partner assessment to execute confirmed work (not guaranteed).",
                  },
                ].map((x) => (
                  <div key={x.title} className="rma-card p-5">
                    <p className="text-sm font-semibold text-[var(--rma-ink)]">
                      {x.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 rma-muted">{x.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <HeroESDVisual />
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-black/10 bg-white p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 rma-muted">
                Funding readiness support does not guarantee funding approval and remains subject to eligibility,
                documentation, commercial viability, and finance partner assessment.
              </p>
              <Link href="/capabilities" className="text-sm font-semibold text-[color:var(--rma-blue)] hover:underline">
                Explore capabilities →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
