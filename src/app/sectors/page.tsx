import { Section } from "@/components/Section";

export const metadata = {
  title: "Sectors",
};

export default function SectorsPage() {
  return (
    <main>
      <Section
        eyebrow="Sectoral focus"
        title="Programmes built for Zambia’s most strategic value chains."
        description="We prepare SMEs to participate competitively as suppliers, contractors, and service providers in large-scale industry programmes—while integrating compliance, ESG, and investment readiness."
      >
        <div className="space-y-4">
          {[
            {
              title: "Sustainable & Inclusive Mining",
              body: "Supporting SMEs supplying mining companies and enterprises engaged in primary production and value addition—especially women, youth, and community-led enterprises—aligned to local content regulations including SI 26 of 2025.",
            },
            {
              title: "Sustainable & Inclusive Energy and Infrastructure",
              body: "Building capacity for SMEs across energy and infrastructure value chains, enabling participation in large-scale projects, climate-resilient infrastructure programmes, and public-private partnerships.",
            },
            {
              title: "Sustainable & Inclusive Forestry and Agriculture",
              body: "Driving SME growth across agriculture and forestry value chains, integrating ESG standards and sustainable land-use practices to unlock responsible investment and green finance.",
            },
          ].map((s) => (
            <div key={s.title} className="rma-card p-6">
              <p className="text-base font-semibold text-[var(--rma-ink)]">
                {s.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-black/60">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

