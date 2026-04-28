import { Section } from "@/components/Section";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <Section
        eyebrow="About Resilient Markets Africa"
        title="Mining local-content and supplier development implementation partner."
        description="RMA is a Zambia-focused mining-sector local-content and supplier-development platform helping Zambian SMEs become finance-ready and contract-ready suppliers to the mining value chain—while supporting mining companies with practical implementation tools, verification workflows, and reporting outcomes."
      >
        <div className="space-y-4">
          <div className="rma-card p-6">
            <p className="text-sm font-semibold text-[var(--rma-ink)]">
              What makes RMA different
            </p>
            <p className="mt-2 text-sm leading-6 rma-muted">
              We focus on mining-sector transformation: helping mining houses, EPCs, and contractors
              operationalise local procurement and supplier development through verified SME pipelines,
              readiness programmes, and monitoring that supports local-content reporting and supplier
              development outcomes. We do not provide legal advice; our work is designed to support
              implementation and programme delivery.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Mining supplier development delivery",
                body: "Readiness assessment, training, and mentorship designed for mining procurement and contract execution needs.",
              },
              {
                title: "Regulatory depth",
                body: "Aligned to Zambia’s mining local-content direction, including SI 68 of 2025 and related reforms affecting procurement and supplier development.",
              },
              {
                title: "Verification + pipeline building",
                body: "KYC and profiling to build verified supplier pipelines for mining categories and supplier development programmes.",
              },
              {
                title: "Reporting & transparency",
                body: "Dashboards, exports, and KPI tracking designed to support programme monitoring and local-content reporting outcomes.",
              },
            ].map((item) => (
              <div key={item.title} className="rma-card rma-card-interactive p-6">
                <p className="text-base font-semibold text-[var(--rma-ink)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 rma-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="rma-card p-6">
            <p className="text-sm font-semibold text-[var(--rma-ink)]">
              Mining SME Contract Finance & Execution Support
            </p>
            <p className="mt-2 text-sm leading-6 rma-muted">
              RMA does not only help SMEs become visible to mining companies; it helps them become capable of delivering.
              Through finance-readiness support and contract execution monitoring, RMA strengthens the bridge between mining
              procurement, SME suppliers, and finance partners.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-sm font-semibold text-[var(--rma-ink)]">For mining houses</p>
                <p className="mt-2 text-sm leading-6 rma-muted">
                  This reduces supplier failure risk and supports more credible local procurement outcomes.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-sm font-semibold text-[var(--rma-ink)]">For funders</p>
                <p className="mt-2 text-sm leading-6 rma-muted">
                  RMA creates a screened pipeline of mining-sector SMEs with verified demand, structured funding needs, and
                  monitored execution support.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-sm font-semibold text-[var(--rma-ink)]">For SMEs</p>
                <p className="mt-2 text-sm leading-6 rma-muted">
                  Funding readiness and referral preparation are provided as implementation support and do not guarantee approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

