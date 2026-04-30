import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Services",
};

const services = [
  {
    title: "Mining SME Registration & KYC",
    body: "Structured registration and KYC profiling designed to build a trusted pipeline of Zambian suppliers for mining-sector opportunities.",
  },
  {
    title: "Supplier Verification & Readiness Screening",
    body: "Readiness screening aligned to mining procurement expectations—governance, compliance, operational capacity, and delivery planning.",
  },
  {
    title: "Mining Supplier Database for Mining Houses",
    body: "A verified supplier database designed to support local procurement workflows, supplier discovery, and supplier-development programme delivery.",
  },
  {
    title: "Local-Content Implementation Support",
    body: "Practical implementation support to help mining companies operationalise local-content procurement and supplier-development outcomes (not legal advice).",
  },
  {
    title: "Supplier Development & Training",
    body: "Workshops and mentorship covering procurement readiness, compliance, finance-readiness, performance discipline, and contract execution capability.",
  },
  {
    title: "HSE & Site-Readiness Preparation",
    body: "Preparation support aligned to site access expectations and safety discipline required for mining environments.",
  },
  {
    title: "Mining Procurement Training",
    body: "RFQs, tender response quality, documentation discipline, pricing fundamentals, and delivery expectations for mining supply chains.",
  },
  {
    title: "Mining SME Contract Finance & Execution Support",
    body: "Funding readiness and referral preparation for purchase order finance, invoice finance, working capital, asset finance, trade finance, and contract execution support—subject to finance partner assessment (no guaranteed funding).",
  },
  {
    title: "Contract Delivery Mentorship",
    body: "Post-award delivery mentorship focused on planning, delivery monitoring, invoice discipline, and performance reporting.",
  },
  {
    title: "Compliance & Impact Reporting Dashboard",
    body: "Dashboards and exports designed to support programme monitoring and local-content reporting outcomes with transparency and measurable KPIs.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Section
        eyebrow="Services"
        title="Implementation support for mining local content and supplier development."
        description="RMA supports mining companies, SMEs, and finance partners with practical tools, verified supplier pipeline building, training delivery, finance-readiness preparation, and reporting outputs."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rma-card p-6">
              <p className="text-base font-semibold text-[var(--rma-ink)]">
                {s.title}
              </p>
              <p className="mt-2 text-sm leading-6 rma-muted">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 rma-muted">
              Want to register your SME or discuss a mining supplier pipeline partnership?
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="/register" className="rma-btn rma-btn-primary">
                Register SME
              </Link>
              <Link href="/contact" className="rma-btn rma-btn-secondary">
                Partner With RMA
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

