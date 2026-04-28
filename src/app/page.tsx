import Link from "next/link";
import { Section } from "@/components/Section";
import { HeroESDVisual } from "@/components/HeroESDVisual";

export default function Home() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[color:var(--rma-green)]/12 blur-3xl" />
          <div className="absolute -bottom-44 right-[-160px] h-[560px] w-[560px] rounded-full bg-[color:var(--rma-blue)]/10 blur-3xl" />
          <div className="absolute top-24 left-[-160px] h-[520px] w-[520px] rounded-full bg-[color:var(--rma-orange)]/8 blur-3xl" />
        </div>

        <div className="rma-container relative py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold text-black/70 backdrop-blur">
                Zambia mining local content • supplier development • finance readiness
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-6xl">
                Mining Local Content. Supplier Development. Finance-Ready SMEs.
              </h1>

              <p className="mt-6 text-base leading-7 text-[color:var(--rma-muted)] sm:text-lg">
                RMA helps Zambia’s mining sector build verified, contract-ready SME supplier pipelines
                aligned with the country’s mining local-content direction—supporting procurement
                transformation, supplier development outcomes, and inclusive growth.
              </p>

              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
                <Link href="/register" className="rma-btn rma-btn-primary">
                  Register Your SME
                </Link>
                <Link href="/contact" className="rma-btn rma-btn-secondary">
                  Partner With RMA
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
                {[
                  "Aligned with Statutory Instrument No. 68 of 2025",
                  "Local-content supplier development",
                  "KYC + verification workflow",
                  "Finance-readiness with partners",
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

            <div className="lg:col-span-5">
              <HeroESDVisual />
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                k: "Local-content implementation support",
                v: "Designed to help mining companies operationalise local-content procurement and supplier development outcomes.",
              },
              {
                k: "Mining local-content direction",
                v: "Aligned with SI 68 of 2025, the Geological and Minerals Development Act (2025), and related reforms.",
              },
              {
                k: "Verified SME supplier pipeline",
                v: "KYC, profiling, and readiness support to build contract-ready suppliers for mining procurement.",
              },
              {
                k: "Reporting & transparency",
                v: "Dashboards and exports designed to support supplier development tracking and local-content reporting.",
              },
            ].map((item) => (
              <div key={item.k} className="rma-card p-5">
                <p className="text-sm font-semibold text-[var(--rma-ink)]">
                  {item.k}
                </p>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section
        eyebrow="Why Zambia’s mining sector needs RMA now"
        title="Operationalise local content with a verified supplier pipeline."
        description="Zambia’s mining local-content direction is increasing focus on local procurement, citizen participation, supplier development, skills transfer, access to finance, and technology transfer in the mining value chain. RMA supports implementation through practical tools, verification workflows, and measurable supplier development delivery."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            {
              title: "Local-content compliance support",
              body: "Implementation support designed to help mining companies operationalise local-content procurement requirements and supplier development outcomes (not legal advice).",
            },
            {
              title: "Verified SME supplier pipeline",
              body: "KYC and profiling to build a pipeline of Zambian SMEs for mining goods and services categories.",
            },
            {
              title: "Supplier development & training",
              body: "Readiness assessment, coaching, and training to strengthen governance, HSE/site readiness, and contract execution capability.",
            },
            {
              title: "Finance-readiness with partners",
              body: "Preparing SMEs for bank and DFI processes by improving documentation, governance, and performance signals—aligned with access-to-finance readiness.",
            },
          ].map((card) => (
            <div key={card.title} className="rma-card p-6">
              <p className="text-base font-semibold text-[var(--rma-ink)]">
                {card.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-black/60">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="New service offering"
        title="Contract Finance & Execution Support"
        description="Many Zambian SMEs are capable of supplying the mining sector but lack the working capital required to execute confirmed opportunities. RMA helps SMEs prepare for purchase order finance, invoice finance, working capital, asset finance, trade finance, and contract execution funding by packaging credible funding requests, linking SMEs to finance partners, and supporting delivery monitoring."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Purchase Order Finance",
              body: "Support for SMEs that have a valid purchase order but need capital to procure goods, mobilise resources, or deliver against the order.",
            },
            {
              title: "Invoice Finance",
              body: "Support for SMEs that have delivered goods or services and are waiting for payment from mining clients.",
            },
            {
              title: "Working Capital",
              body: "Support for operating cash requirements linked to confirmed mining-sector supply opportunities.",
            },
            {
              title: "Asset Finance",
              body: "Support for SMEs that require equipment, tools, vehicles, or machinery to execute mining-sector contracts.",
            },
            {
              title: "Contract Finance",
              body: "Support for SMEs that need structured finance preparation linked to confirmed supply contracts or service agreements.",
            },
            {
              title: "Trade Finance",
              body: "Support for SMEs that need to source, import, or procure goods required for mining-sector delivery.",
            },
          ].map((c) => (
            <div key={c.title} className="rma-card rma-card-interactive p-6">
              <p className="text-base font-semibold text-[var(--rma-ink)]">
                {c.title}
              </p>
              <p className="mt-2 text-sm leading-6 rma-muted">{c.body}</p>
            </div>
          ))}
          <div className="sm:col-span-2">
            <div className="mt-2 rounded-3xl border border-black/10 bg-white p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 rma-muted">
                  Funding readiness support does not guarantee funding approval and remains subject to eligibility,
                  documentation, commercial viability, and finance partner assessment.
                </p>
                <Link href="/register" className="rma-btn rma-btn-primary">
                  Register Your SME for Funding Readiness
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="rma-container">
        <div className="rounded-3xl border border-black/10 bg-[linear-gradient(135deg,var(--rma-green),var(--rma-green-2))] px-6 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold tracking-tight">
                Build your mining supplier pipeline.
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Mining houses, EPCs, and contractors: partner with RMA to develop a verified, contract-ready
                pipeline of Zambian SMEs—designed to support local-content implementation and reporting outcomes.
              </p>
            </div>
            <Link
              href="/contact"
              className="rma-btn bg-white text-[var(--rma-ink)] hover:bg-white/95"
            >
              Partner With RMA
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
