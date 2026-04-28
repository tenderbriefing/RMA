import { Section } from "@/components/Section";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <Section
        eyebrow="About Resilient Markets Africa"
        title="A specialist market development & market preparation organisation."
        description="Registered in Zambia as a non-profit company limited by guarantee and regulated by PACRA, RMA builds inclusive, high-performing, investment-ready supply chains across Africa’s most strategic economic sectors."
      >
        <div className="space-y-4">
          <div className="rma-card p-6">
            <p className="text-sm font-semibold text-[var(--rma-ink)]">
              What makes RMA different
            </p>
            <p className="mt-2 text-sm leading-6 text-black/60">
              RMA addresses structural constraints that prevent SMEs from fully
              participating in large-scale industry value chains. We take a
              systemic approach: transforming the ecosystems in which SMEs
              operate while equipping enterprises to meet the standards,
              reporting requirements, and expectations of corporates, financial
              institutions, and investors.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Systemic impact",
                body: "We reshape policy frameworks, market structures, and enabling environments so SMEs can thrive long-term.",
              },
              {
                title: "Regulatory depth",
                body: "Deep expertise in local content regulations, including Zambia’s Statutory Instrument 26 of 2025.",
              },
              {
                title: "End-to-end programme management",
                body: "From needs assessment and curriculum design to mentorship and impact monitoring.",
              },
              {
                title: "Data-driven & digital",
                body: "Real-time monitoring platforms and benchmarking tools for transparency and risk management.",
              },
            ].map((item) => (
              <div key={item.title} className="rma-card p-6">
                <p className="text-base font-semibold text-[var(--rma-ink)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}

