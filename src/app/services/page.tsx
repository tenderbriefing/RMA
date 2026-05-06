import Link from "next/link";
import { EcosystemCircle } from "@/components/EcosystemCircle";
import { ServicesAccordionClient } from "@/app/services/ServicesAccordionClient";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main>
      <div className="relative overflow-hidden border-b border-black/5 bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_15%_15%,rgba(31,106,58,0.11),transparent_55%),radial-gradient(900px_circle_at_78%_25%,rgba(37,58,135,0.11),transparent_55%),radial-gradient(900px_circle_at_55%_90%,rgba(240,116,43,0.09),transparent_55%)]" />
        </div>
        <div className="rma-container-wide relative py-12 sm:py-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-2 w-10 rounded-full zambia-stripe" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                Services
              </p>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-5xl">
              Enterprise development and supplier ecosystem services
            </h1>
            <p className="mt-4 text-base leading-7 rma-muted sm:text-lg">
              Resilient Markets Africa provides practical enterprise development, supplier development,
              access-to-finance, and market linkage services designed to help African SMEs become
              compliant, bankable, competitive, and connected to real commercial opportunities.
            </p>

            <div className="mt-7 flex flex-col gap-2 sm:flex-row">
              <Link href="/register" className="rma-btn rma-btn-primary">
                Submit SME profile
              </Link>
              <Link href="/contact" className="rma-btn rma-btn-secondary">
                Contact RMA
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "Pillars",
                v: "Six core areas",
                b: "A complete readiness-to-opportunity ecosystem.",
              },
              {
                t: "Partners",
                v: "Private & public",
                b: "Mining houses, banks/DFIs, corporates, and development partners.",
              },
              {
                t: "Outcomes",
                v: "Practical + measurable",
                b: "Supplier capability, finance readiness, and market linkages.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
              >
                <div className="pointer-events-none h-1 w-full bg-[linear-gradient(90deg,var(--rma-green),var(--rma-blue),var(--rma-orange))] opacity-70" />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                    {x.t}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--rma-ink)]">
                    {x.v}
                  </p>
                  <p className="mt-1 text-sm leading-6 rma-muted">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="zambia-stripe h-1 w-full" />
      </div>

      <div className="rma-container-wide py-12 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="pointer-events-none h-1 w-full bg-[linear-gradient(90deg,var(--rma-green),var(--rma-blue),var(--rma-orange))] opacity-70" />
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                  The ESD ecosystem
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-[var(--rma-ink)]">
                  Six pillars that move SMEs from readiness to real opportunity.
                </p>
                <p className="mt-4 text-sm leading-6 rma-muted">
                  RMA’s model is designed to create value for the whole ecosystem: stronger SMEs,
                  more reliable suppliers, better funding pipelines, inclusive procurement, and
                  resilient local economies.
                </p>
                <div className="mt-6">
                  <EcosystemCircle />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                Explore the pillars
              </p>
              <p className="mt-2 text-sm leading-6 rma-muted">
                Click a pillar to view details. Each block opens only when selected.
              </p>
            </div>
            <ServicesAccordionClient />
          </div>
        </div>
      </div>
    </main>
  );
}

