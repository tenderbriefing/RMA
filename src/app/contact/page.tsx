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
        title="Let’s build investment-ready supply chains."
        description="We welcome enquiries from industry partners, investors, government agencies, and development organisations."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rma-card p-6">
            <p className="text-sm font-semibold text-[var(--rma-ink)]">Email</p>
            <p className="mt-2 text-sm text-black/60">
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
            <p className="mt-2 text-sm leading-6 text-black/60">
              Unit 3 Katete Flats Off Roan Road, Kabulonga, Lusaka, Zambia
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-black/10 bg-[linear-gradient(135deg,var(--rma-green),var(--rma-green-2))] p-6 text-white">
          <p className="text-sm font-semibold">SMEs</p>
          <p className="mt-2 text-sm text-white/85">
            If you’re a Zambian SME looking for supplier opportunities, register
            for the RMA database.
          </p>
          <div className="mt-5">
            <Link
              href="/sme-register"
              className="rma-btn bg-white text-[var(--rma-ink)] hover:bg-white/95"
            >
              Register your SME
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}

