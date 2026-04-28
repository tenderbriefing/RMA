import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <Section
        eyebrow="Contact"
        title="Let’s build Zambia’s mining supplier pipeline."
        description="We welcome enquiries from mining companies, EPCs and contractors, banks and finance partners, government and local-content stakeholders, and Zambian SMEs supplying the mining value chain."
      >
        <div className="rma-card rma-card-interactive mb-6 p-6">
          <p className="text-sm font-semibold text-[var(--rma-ink)]">
            Partnership enquiries
          </p>
          <p className="mt-2 text-sm leading-6 rma-muted">
            RMA supports mining companies to operationalise local-content direction through verified supplier pipelines,
            supplier development delivery, finance-readiness preparation, and reporting outputs aligned to procurement transformation.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rma-card p-6">
            <p className="text-sm font-semibold text-[var(--rma-ink)]">Email</p>
            <p className="mt-2 text-sm rma-muted">
              <a
                className="font-medium text-black hover:underline"
                href="mailto:nachilala@rma.africa"
              >
                nachilala@rma.africa
              </a>
            </p>
          </div>
          <div className="rma-card p-6">
            <p className="text-sm font-semibold text-[var(--rma-ink)]">
              Address
            </p>
            <p className="mt-2 text-sm leading-6 rma-muted">
              Unit 3 Katete Flats Off Roan Road, Kabulonga, Lusaka, Zambia
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-black/10 bg-[linear-gradient(135deg,var(--rma-green),var(--rma-green-2))] p-6 text-white">
          <p className="text-sm font-semibold">Mining companies & SMEs</p>
          <p className="mt-2 text-sm text-white/85">
            Mining houses, EPCs, and contractors: partner with RMA to operationalise local procurement and supplier
            development outcomes. Zambian SMEs: register to be considered for RMA’s mining supplier development pipeline.
          </p>
          <div className="mt-5">
            <Link
              href="/register"
              className="rma-btn bg-white text-[var(--rma-ink)] hover:bg-white/95"
            >
              Register Your SME
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}

