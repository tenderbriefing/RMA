import { AnchorNav } from "@/components/AnchorNav";
import Image from "next/image";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <div className="relative overflow-hidden border-b border-black/5 bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_20%,rgba(31,106,58,0.10),transparent_55%),radial-gradient(900px_circle_at_78%_30%,rgba(37,58,135,0.08),transparent_55%),radial-gradient(900px_circle_at_55%_90%,rgba(240,116,43,0.06),transparent_55%)]" />
          <div className="absolute right-[-120px] top-[-120px] h-[520px] w-[520px] opacity-[0.06] sm:h-[640px] sm:w-[640px] sm:opacity-[0.055]">
            <Image
              src="/rma-logo-transparent.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 640px) 640px, 520px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="rma-container-wide relative py-14 sm:py-18">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold text-black/70 backdrop-blur">
              Who We Are
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-6xl">
              Resilient Markets Africa exists to bridge the gap between opportunity and enterprise readiness.
            </h1>
            <p className="mt-6 text-base leading-7 rma-muted sm:text-lg">
              Across Africa, many SMEs have the ambition, local knowledge, and commercial potential to supply major industries, but they often lack access to structured support, finance readiness, compliance systems, market information, and buyer linkages.
            </p>
            <p className="mt-4 text-base leading-7 rma-muted sm:text-lg">
              RMA addresses this gap by designing and implementing practical enterprise development, supplier development, and market access programmes that prepare SMEs to compete, grow, and integrate into high-value supply chains.
            </p>
            <p className="mt-4 text-sm leading-6 rma-muted">
              Our work is especially focused on sectors where local enterprise participation can unlock meaningful economic transformation, including mining, manufacturing, logistics, construction, energy, agro-processing, and digital services.
            </p>

            <div className="mt-10 flex flex-wrap gap-2 text-xs font-semibold">
              {[
                "Enterprise development",
                "Supplier readiness",
                "Finance-readiness",
                "Market linkages",
                "Digital SME ecosystems",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 bg-white/80 px-3 py-1 rma-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rma-container-wide py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <AnchorNav
              items={[
                { href: "#purpose", label: "Our Purpose" },
                { href: "#mission-vision", label: "Mission & Vision" },
                { href: "#different", label: "What makes RMA different" },
                { href: "#focus-areas", label: "Strategic focus areas" },
              ]}
            />
          </div>

          <div className="space-y-10 lg:col-span-8">
            <section id="purpose" className="border-b border-black/10 pb-10">
              <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                Our Purpose
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-[var(--rma-ink)]">
                Build resilient African enterprises.
              </p>
              <p className="mt-4 text-sm leading-6 rma-muted">
                Our purpose is to build resilient African enterprises that can compete, access finance, create jobs, and supply the industries driving Africa’s economic future.
              </p>
              <p className="mt-3 text-sm leading-6 rma-muted">
                We believe enterprise development must move beyond training alone. SMEs need practical support, structured diagnostics, finance readiness, procurement alignment, mentorship, and direct connection to real commercial opportunities.
              </p>
            </section>

            <section id="mission-vision" className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                  Our Mission
                </p>
                <p className="mt-3 text-base font-semibold text-[var(--rma-ink)]">
                  To strengthen African SMEs through enterprise development, supplier readiness, access-to-finance preparation, and market linkages that enable inclusive economic growth and resilient local supply chains.
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                  Our Vision
                </p>
                <p className="mt-3 text-base font-semibold text-[var(--rma-ink)]">
                  To become a leading Pan-African enterprise development and supplier ecosystem partner, enabling SMEs across the continent to participate competitively in high-value markets and strategic industry supply chains.
                </p>
              </div>
            </section>

            <section id="different" className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                What makes RMA different
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  {
                    t: "Practical, not theoretical",
                    b: "Implementable solutions that improve compliance, operations, financial discipline, and procurement readiness.",
                  },
                  {
                    t: "Value-chain driven",
                    b: "Designed around real buyer needs, anchor industries, and procurement opportunities.",
                  },
                  {
                    t: "Finance-readiness focused",
                    b: "Preparation for bank funding, supplier finance, purchase order finance, working capital, and growth capital.",
                  },
                  {
                    t: "Technology-enabled",
                    b: "Digital tools for onboarding, diagnostics, monitoring, impact tracking, and programme reporting.",
                  },
                  {
                    t: "Partnership-led",
                    b: "Collaboration with mining houses, banks, DFIs, corporates, government, and development institutions.",
                  },
                  {
                    t: "Pan-African perspective",
                    b: "Built for African markets and the realities of doing business across the continent.",
                  },
                ].map((x) => (
                  <div key={x.t} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                    <span
                      className="mt-2 h-2 w-2 flex-none rounded-full bg-[color:var(--rma-orange)]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[var(--rma-ink)]">
                        {x.t}
                      </p>
                      <p className="mt-1 text-sm leading-6 rma-muted">{x.b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="focus-areas">
              <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                Our Strategic Focus Areas
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-[var(--rma-ink)]">
                Designed for outcomes across the SME journey.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    t: "Enterprise Development",
                    b: "Building SME capability through business support, mentorship, training, governance improvement, and operational strengthening.",
                  },
                  {
                    t: "Supplier Development",
                    b: "Preparing SMEs to supply mining houses, corporates, public-sector buyers, and large contractors.",
                  },
                  {
                    t: "Access to Finance",
                    b: "Helping SMEs improve funding readiness through financial records, compliance documents, business plans, cash-flow discipline, and lender preparation.",
                  },
                  {
                    t: "Market Linkages",
                    b: "Connecting SMEs to procurement opportunities, anchor buyers, supply chains, and cross-border markets.",
                  },
                  {
                    t: "Local Content Development",
                    b: "Supporting inclusive procurement strategies that increase local supplier participation in strategic sectors.",
                  },
                  {
                    t: "Digital SME Ecosystems",
                    b: "Using technology to improve onboarding, diagnostics, programme management, impact tracking, and reporting.",
                  },
                ].map((x) => (
                  <div key={x.t} className="rma-card rma-card-interactive p-6">
                    <p className="text-base font-semibold text-[var(--rma-ink)]">
                      {x.t}
                    </p>
                    <p className="mt-2 text-sm leading-6 rma-muted">{x.b}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

