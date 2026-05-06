import Link from "next/link";
import { EcosystemCircle } from "@/components/EcosystemCircle";
import { ServicesAccordionClient } from "@/app/services/ServicesAccordionClient";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main>
      <div className="rma-container-wide py-12 sm:py-14">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
            Services
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-5xl">
            Enterprise development and supplier ecosystem services
          </h1>
          <p className="mt-4 text-base leading-7 rma-muted">
            Resilient Markets Africa provides practical enterprise development, supplier development,
            access-to-finance, and market linkage services designed to help African SMEs become
            compliant, bankable, competitive, and connected to real commercial opportunities.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          <div className="rma-card p-6 sm:p-8">
            <p className="text-sm leading-6 rma-muted">
              We work with SMEs, mining houses, corporates, banks, development finance institutions,
              government agencies, and development partners to build stronger local supplier ecosystems
              and unlock inclusive economic growth across Africa.
            </p>
            <p className="mt-3 text-sm leading-6 rma-muted">
              Our services are structured around <span className="font-semibold text-[var(--rma-ink)]">six core pillars</span>.
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                The ESD ecosystem
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-[var(--rma-ink)]">
                Six pillars that move SMEs from readiness to real opportunity.
              </p>
              <p className="mt-4 text-sm leading-6 rma-muted">
                RMA’s model is designed to create value for the whole ecosystem: stronger SMEs, more reliable suppliers,
                better funding pipelines, inclusive procurement, and resilient local economies.
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Link href="/register" className="rma-btn rma-btn-primary">
                  Register SME
                </Link>
                <Link href="/contact" className="rma-btn rma-btn-secondary">
                  Contact RMA
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <EcosystemCircle />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
              Explore the pillars
            </p>
            <p className="mt-2 text-sm leading-6 rma-muted">
              Click to expand each pillar. Nothing is shown unless opened.
            </p>
            <div className="mt-4">
              <ServicesAccordionClient />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

