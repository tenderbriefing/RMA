import Link from "next/link";
import { Section } from "@/components/Section";
import { HeroMediaSlider } from "@/components/HeroMediaSlider";

export default function Home() {
  return (
    <main>
      <HeroMediaSlider />

      <div className="rma-container-wide mt-10">
        <div className="rma-card p-6">
          <p className="text-sm leading-6 rma-muted">
            We invite small businesses in Zambia to register if they are interested in doing business with the
            mines in Zambia or partnering with multinational companies outside Zambia.
          </p>
        </div>
      </div>

      <Section
        eyebrow="For mining companies, SMEs, and finance partners"
        title="A verified supplier pipeline—built for mining procurement outcomes."
        description="RMA supports implementation through KYC and verification workflows, supplier development and training, finance-readiness preparation, contract execution support, and reporting outputs."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "For Mining Companies",
              body: "Operationalise local-content direction with a verified supplier pipeline, training delivery, and reporting outputs.",
              href: "/contact",
              cta: "Partner with RMA",
              icon: "MC",
            },
            {
              title: "For SMEs",
              body: "Register, complete KYC, and access supplier development and funding readiness support (where eligible).",
              href: "/register",
              cta: "Register your SME",
              icon: "SME",
            },
            {
              title: "For Finance Partners",
              body: "Access a screened pipeline with structured funding needs and contract execution monitoring support.",
              href: "/contact",
              cta: "Finance partnerships",
              icon: "FP",
            },
          ].map((x) => (
            <div
              key={x.title}
              className="rma-card rma-card-interactive flex flex-col p-6"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-black/[.04] text-xs font-semibold text-black/70">
                  {x.icon}
                </span>
                <div>
                  <p className="text-base font-semibold text-[var(--rma-ink)]">
                    {x.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 rma-muted">{x.body}</p>
                </div>
              </div>

              <div className="mt-5">
                <Link
                  href={x.href}
                  className="text-sm font-semibold text-[color:var(--rma-blue)] hover:underline"
                >
                  {x.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-white">
          <div className="grid gap-0 lg:grid-cols-4">
            {[
              {
                k: "Local-content implementation support",
                v: "Designed to help mining companies operationalise local-content procurement and supplier development outcomes.",
              },
              {
                k: "Verified SME supplier pipeline",
                v: "KYC, profiling, and readiness support to build contract-ready suppliers for mining procurement.",
              },
              {
                k: "Finance-readiness with partners",
                v: "Preparing SMEs for finance partner assessment through better documentation, governance, and performance signals.",
              },
              {
                k: "Reporting & transparency",
                v: "Dashboards and exports designed to support supplier development tracking and local-content reporting outcomes.",
              },
            ].map((item, idx, arr) => (
              <div
                key={item.k}
                className={[
                  "p-6",
                  idx < arr.length - 1 ? "border-b border-black/10 lg:border-b-0 lg:border-r" : "",
                ].join(" ")}
              >
                <p className="text-sm font-semibold text-[var(--rma-ink)]">
                  {item.k}
                </p>
                <p className="mt-2 text-sm leading-6 rma-muted">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Contract finance & execution support"
        title="Funding readiness, referral preparation, and delivery monitoring."
        description="Many Zambian SMEs can supply the mining sector but lack working capital to execute confirmed opportunities. RMA supports funding readiness and contract execution support—subject to eligibility, documentation, commercial viability, and finance partner assessment (no guaranteed funding)."
      >
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
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
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rma-card p-6">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Funding readiness note
              </p>
              <p className="mt-2 text-sm leading-6 rma-muted">
                Funding readiness support does not guarantee funding approval and remains subject to eligibility,
                documentation, commercial viability, and finance partner assessment.
              </p>
              <div className="mt-5">
                <Link href="/register" className="rma-btn rma-btn-primary w-full">
                  Register Your SME for Funding Readiness
                </Link>
              </div>
              <div className="mt-4 rounded-2xl border border-black/10 bg-black/[.02] px-4 py-3 text-xs rma-muted">
                If you already have a confirmed opportunity, include it in your KYC submission (optional finance-readiness section).
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
