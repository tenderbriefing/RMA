import { Section } from "@/components/Section";

export const metadata = {
  title: "Capabilities",
};

const capabilities = [
  {
    n: "01",
    title: "Programme Design & Implementation",
    body: "End-to-end management of supplier development and enterprise transformation—from needs assessment and stakeholder mapping through to delivery, mentorship, and evaluation.",
  },
  {
    n: "02",
    title: "Regulatory Compliance Expertise",
    body: "Institutional knowledge of local content regulations and ESG compliance frameworks, including Zambia’s Statutory Instrument 26 of 2025—streamlining compliance and improving audit readiness.",
  },
  {
    n: "03",
    title: "Technical Capacity Building",
    body: "Tailored curricula covering governance, statutory compliance, financial management, contract execution, digital adoption, and 4IR integration—aligned to large industry requirements.",
  },
  {
    n: "04",
    title: "Data-Driven Digital Solutions",
    body: "Real-time monitoring and performance benchmarking platforms that track outcomes, mitigate programme risks, and provide transparency to partners, investors, and donors.",
  },
  {
    n: "05",
    title: "Partnership Governance & KPI Alignment",
    body: "Alignment of multi-stakeholder performance frameworks, accountability structures, and shared-value partnerships between SMEs, industry, finance, and government.",
  },
  {
    n: "06",
    title: "SME Finance & Market Linkages",
    body: "Access-to-finance readiness and linkages to development finance institutions, impact investors, green finance mechanisms, and off-take agreements.",
  },
];

export default function CapabilitiesPage() {
  return (
    <main>
      <Section
        eyebrow="Core capabilities"
        title="From ecosystem reform to enterprise readiness."
        description="We design programmes that deliver measurable supplier readiness outcomes, reduce compliance friction, and build credibility with corporate buyers and investors."
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
              <p className="mt-3 text-sm leading-6 text-black/60">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

