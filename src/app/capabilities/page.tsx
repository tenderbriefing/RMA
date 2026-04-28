import { Section } from "@/components/Section";

export const metadata = {
  title: "Capabilities",
};

const capabilities = [
  {
    n: "01",
    title: "SME KYC and verification",
    body: "KYC, profiling, and verification workflows designed to support a trusted supplier pipeline for mining procurement and supplier development programmes.",
  },
  {
    n: "02",
    title: "Supplier readiness assessment",
    body: "Structured diagnostics for governance, compliance readiness, operational capacity, and contract execution—aligned with mining buyer expectations.",
  },
  {
    n: "03",
    title: "Local-content supplier database",
    body: "A searchable supplier database built from verified SME records, designed to support local procurement and supplier development outcomes.",
  },
  {
    n: "04",
    title: "Mining procurement training",
    body: "Training for SMEs on procurement basics, RFQs, tender response quality, documentation, and delivery expectations in mining supply chains.",
  },
  {
    n: "05",
    title: "HSE and site-readiness training",
    body: "Practical readiness support to help SMEs meet site requirements, safety expectations, and operational discipline required for mining environments.",
  },
  {
    n: "06",
    title: "Access-to-finance preparation",
    body: "Preparing SMEs for banking and DFI processes by improving governance, documentation, performance signals, and contract readiness.",
  },
  {
    n: "06a",
    title: "Mining SME Contract Finance & Execution Support",
    body: "Funding readiness and contract execution support designed for confirmed opportunities—subject to eligibility, documentation, commercial viability, and finance partner assessment (no guaranteed funding).",
  },
  {
    n: "07",
    title: "Tender/RFQ response support",
    body: "Coaching on bid readiness, documentation completeness, pricing discipline, and execution planning to improve SME competitiveness.",
  },
  {
    n: "08",
    title: "Contract delivery mentorship",
    body: "Post-award support focused on delivery quality, reporting, and continuous improvement—designed for mining buyer expectations.",
  },
  {
    n: "09",
    title: "Compliance and impact reporting",
    body: "Dashboards and exports designed to support supplier development monitoring and local-content reporting outcomes (implementation support).",
  },
  {
    n: "10",
    title: "Mining house programme management",
    body: "End-to-end supplier development programme management: needs assessment → curriculum → delivery → monitoring → continuous improvement.",
  },
];

export default function CapabilitiesPage() {
  return (
    <main>
      <Section
        eyebrow="Implementation model"
        title="Mining local-content + supplier development delivery, end-to-end."
        description="RMA supports mining companies, EPCs, and contractors with implementation support that strengthens local procurement outcomes, builds verified supplier pipelines, and improves SME contract and finance readiness."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((c) => (
            <div key={c.n} className="rma-card p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black/[.04] text-sm font-semibold text-black/70">
                  {c.n}
                </span>
                <p className="text-base font-semibold text-[var(--rma-ink)]">
                  {c.title}
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 rma-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Funding readiness & contract execution"
        title="Funding Readiness & Contract Execution Support"
        description="RMA helps reduce supplier failure risk by ensuring SMEs are not only visible and trained, but also better prepared to access the working capital required to execute awarded work. Funding remains subject to eligibility, documentation, commercial viability, and finance partner assessment."
      >
        <div className="rma-card p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Funding readiness assessment",
              "Purchase order and contract validation",
              "Supplier quotation review",
              "Cash-flow requirement mapping",
              "Funding request packaging",
              "Bank and DFI referral preparation",
              "Finance partner matching support",
              "Contract delivery monitoring",
              "Invoice and payment tracking",
              "Post-contract performance reporting",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--rma-orange)]" />
                <p className="text-sm leading-6 rma-muted">{t}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 rma-muted">
            Funding readiness support does not guarantee funding approval and is provided as implementation support,
            subject to finance partner policies and assessment.
          </p>
        </div>
      </Section>
    </main>
  );
}

