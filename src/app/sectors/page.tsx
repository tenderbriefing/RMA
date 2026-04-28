import { Section } from "@/components/Section";

export const metadata = {
  title: "Mining Categories",
};

export default function SectorsPage() {
  return (
    <main>
      <Section
        eyebrow="Mining Supplier Categories"
        title="Where Zambian SMEs can participate in the mining value chain."
        description="RMA builds a verified, finance-ready, contract-ready supplier pipeline for mining procurement. These categories illustrate typical goods and services areas where SMEs can participate—subject to mining site requirements and buyer standards."
      >
        <div className="space-y-4">
          {[
            {
              title: "PPE and safety equipment",
              body: "Workwear, PPE, signage, and safety consumables aligned to site standards and supply reliability expectations.",
            },
            {
              title: "Industrial consumables",
              body: "General consumables and operational supplies supporting maintenance and production continuity.",
            },
            {
              title: "Electrical supplies and components",
              body: "Electrical materials, components, and related services, subject to quality and certification expectations.",
            },
            {
              title: "Mechanical maintenance",
              body: "Maintenance services, spares, and support for equipment uptime and operational continuity.",
            },
            {
              title: "Fabrication and engineering",
              body: "Fabrication, machining, and engineering services aligned to technical specs and QA requirements.",
            },
            {
              title: "Transport and haulage",
              body: "Logistics, transport, and haulage services meeting safety, scheduling, and performance requirements.",
            },
            {
              title: "Catering and camp services",
              body: "Catering, hospitality, and camp services with hygiene, compliance, and performance standards.",
            },
            {
              title: "Security services",
              body: "Security operations aligned to site protocols, vetting, and compliance requirements.",
            },
            {
              title: "Cleaning and facilities management",
              body: "Facilities services supporting camp and site operations with clear service-level expectations.",
            },
            {
              title: "Civil works and site maintenance",
              body: "Civil works, minor construction, and site maintenance aligned to HSE and contractor requirements.",
            },
            {
              title: "Uniforms and workwear",
              body: "Uniforms, branding, and workwear supply aligned to procurement standards and scale requirements.",
            },
            {
              title: "Office supplies and administrative services",
              body: "Back-office supplies and services supporting procurement and operational teams.",
            },
            {
              title: "Packaging and logistics",
              body: "Packaging, warehousing, and logistics support for mining supply chains.",
            },
            {
              title: "Environmental and waste management services",
              body: "Waste management and environmental services aligned to ESG and site compliance expectations.",
            },
            {
              title: "Technology, data, and digital services",
              body: "Digital services supporting mining operations—data capture, reporting, and workflow tools.",
            },
          ].map((s) => (
            <div key={s.title} className="rma-card p-6">
              <p className="text-base font-semibold text-[var(--rma-ink)]">
                {s.title}
              </p>
              <p className="mt-2 text-sm leading-6 rma-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

