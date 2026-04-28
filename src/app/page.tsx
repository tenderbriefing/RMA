import Link from "next/link";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="rma-container relative py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold text-black/70 backdrop-blur">
              Inclusive, high-performing, investment-ready supply chains
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-6xl">
              Build local supplier competitiveness. Unlock corporate and
              investor-ready value chains.
            </h1>

            <p className="mt-6 text-base leading-7 text-black/60 sm:text-lg">
              Resilient Markets Africa (RMA) is a specialist market development
              and market preparation organisation registered in Zambia. We help
              SMEs meet regulatory, technical, and reporting standards required
              by national and multinational buyers.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/sme-register" className="rma-btn rma-btn-primary">
                Register your SME
              </Link>
              <Link href="/about" className="rma-btn rma-btn-secondary">
                Learn about RMA
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                k: "Systemic impact",
                v: "We reshape enabling environments, not just individual enterprises.",
              },
              {
                k: "Regulatory depth",
                v: "Local content compliance support, including SI 26 of 2025.",
              },
              {
                k: "End-to-end delivery",
                v: "Programme design → implementation → mentorship → monitoring.",
              },
              {
                k: "Data-driven",
                v: "Real-time monitoring and benchmarking for transparency.",
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
        eyebrow="What we do"
        title="Market development + market preparation, at scale."
        description="RMA operates at the intersection of enterprise development, regulatory compliance, and sustainable finance—building the conditions for SMEs to participate in large-scale value chains."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            {
              title: "SME ecosystem building & transformation",
              body: "Assessing and redesigning market and regulatory ecosystems to remove structural barriers and unlock competitiveness.",
            },
            {
              title: "Compliance shared services",
              body: "Help Desk + facilitated peer learning to navigate regulatory requirements efficiently and cost-effectively.",
            },
            {
              title: "Policy reform advocacy",
              body: "Engagement with ministries, regulators, and industry bodies to strengthen enabling environments for SME growth.",
            },
            {
              title: "Finance & market linkages",
              body: "Connecting investment-ready SMEs to finance, off-take agreements, and buyer opportunities.",
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

      <div className="rma-container">
        <div className="rounded-3xl border border-black/10 bg-[linear-gradient(135deg,var(--rma-green),var(--rma-green-2))] px-6 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold tracking-tight">
                Get your business seen by opportunities.
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Register to join the database of Zambian SMEs being prepared for
                supplier opportunities with national and multinational
                companies.
              </p>
            </div>
            <Link
              href="/sme-register"
              className="rma-btn bg-white text-[var(--rma-ink)] hover:bg-white/95"
            >
              Start SME registration
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
