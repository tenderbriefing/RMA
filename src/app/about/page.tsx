import { Section } from "@/components/Section";
import { AnchorNav } from "@/components/AnchorNav";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <Section
        eyebrow="About Resilient Markets Africa"
        title="An implementation partner for mining local content and supplier development."
        description="RMA is a Zambia-focused mining-sector local-content and supplier-development platform helping Zambian SMEs become finance-ready and contract-ready suppliers to the mining value chain—while supporting mining companies with practical implementation tools, verification workflows, and measurable reporting outcomes."
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <AnchorNav
              items={[
                { href: "#overview", label: "Overview" },
                { href: "#what-we-do", label: "What we do" },
                { href: "#why-rma", label: "Why RMA" },
                { href: "#finance-execution", label: "Finance & execution support" },
              ]}
            />
          </div>

          <div className="space-y-8 lg:col-span-8">
            <section id="overview" className="rma-card p-6">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Overview
              </p>
              <p className="mt-2 text-sm leading-6 rma-muted">
                We support mining houses, EPCs, and contractors to operationalise local procurement and supplier development through verified SME pipelines, readiness programmes, and monitoring designed to support local-content reporting outcomes.
              </p>
              <p className="mt-3 text-xs leading-5 rma-muted">
                Note: RMA provides implementation support and programme delivery services and does not provide legal advice.
              </p>
            </section>

            <section id="what-we-do" className="rma-card p-6">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                What we do
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Mining SME registration & KYC",
                    body: "A structured registration and KYC workflow designed to build a trusted supplier pipeline for mining goods and services categories.",
                  },
                  {
                    title: "Supplier verification & readiness screening",
                    body: "Diagnostics aligned with mining buyer expectations—governance, compliance, operational capacity, HSE/site readiness, and execution planning.",
                  },
                  {
                    title: "Supplier development & training",
                    body: "Readiness programmes that strengthen delivery capability, documentation discipline, and performance signals required for procurement.",
                  },
                  {
                    title: "Monitoring, reporting & transparency",
                    body: "Dashboards and exports designed to support supplier development tracking and local-content reporting outcomes.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-black/10 bg-white p-5">
                    <p className="text-sm font-semibold text-[var(--rma-ink)]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 rma-muted">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="why-rma" className="rma-card p-6">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Why RMA
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Mining supplier development delivery",
                    body: "Readiness assessment, training, and mentorship designed for procurement and contract execution needs.",
                  },
                  {
                    title: "Regulatory alignment",
                    body: "Aligned to Zambia’s mining local-content direction, including SI 68 of 2025 and related reforms impacting procurement and supplier development.",
                  },
                  {
                    title: "Verification + pipeline building",
                    body: "KYC and profiling to build a verified supplier pipeline by category, capability, and readiness signals.",
                  },
                  {
                    title: "Reporting outcomes",
                    body: "Practical monitoring and reporting outputs designed to support implementation accountability and transparency.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-black/10 bg-white p-5">
                    <p className="text-sm font-semibold text-[var(--rma-ink)]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 rma-muted">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="finance-execution" className="rma-card p-6">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Mining SME Contract Finance & Execution Support
              </p>
              <p className="mt-2 text-sm leading-6 rma-muted">
                RMA does not only help SMEs become visible to mining companies; it helps them become capable of delivering. Through finance-readiness support and contract execution monitoring, RMA strengthens the bridge between mining procurement, SME suppliers, and finance partners.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <p className="text-sm font-semibold text-[var(--rma-ink)]">
                    For mining companies
                  </p>
                  <p className="mt-2 text-sm leading-6 rma-muted">
                    Reduced supplier failure risk and more credible local procurement outcomes.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <p className="text-sm font-semibold text-[var(--rma-ink)]">
                    For banks & DFIs
                  </p>
                  <p className="mt-2 text-sm leading-6 rma-muted">
                    A screened pipeline with verified demand, structured funding needs, and monitored execution support.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <p className="text-sm font-semibold text-[var(--rma-ink)]">
                    For SMEs
                  </p>
                  <p className="mt-2 text-sm leading-6 rma-muted">
                    Funding readiness and referral preparation are subject to eligibility and do not guarantee approval.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}

