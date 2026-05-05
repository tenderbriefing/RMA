import Link from "next/link";
import { Section } from "@/components/Section";
import { ContactFormClient } from "@/app/contact/ContactFormClient";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <Section
        eyebrow="Contact"
        title="Contact RMA"
        description="Partner with RMA to build a verified, finance-ready mining supplier pipeline for Zambia."
      >
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rma-card p-6">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Contact details
              </p>
              <p className="mt-2 text-sm leading-6 rma-muted">
                For mining companies, SMEs, finance partners, and local-content stakeholders.
              </p>

              <div className="mt-5 space-y-3 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                    Email
                  </p>
                  <a
                    className="mt-1 inline-block font-medium text-black hover:underline"
                    href="mailto:info@rma.africa"
                  >
                    info@rma.africa
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                    Address
                  </p>
                  <p className="mt-1 leading-6 text-black/70">
                    Unit 3 Katete Flats Off Roan Road, Kabulonga, Lusaka, Zambia
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Link href="/register" className="rma-btn rma-btn-primary">
                  Register SME
                </Link>
                <Link href="/services" className="rma-btn rma-btn-secondary">
                  View Services
                </Link>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="aspect-[16/10] w-full">
                <iframe
                  title="RMA office location map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                  src="https://www.google.com/maps?q=Unit%203%20Katete%20Flats%20Off%20Roan%20Road%2C%20Kabulonga%2C%20Lusaka%2C%20Zambia&output=embed"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="mb-4 rounded-3xl border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Send an enquiry
              </p>
              <p className="mt-2 text-sm leading-6 rma-muted">
                Tell us what you need and we’ll respond via info@rma.africa.
              </p>
            </div>
            <ContactFormClient />
          </div>
        </div>
      </Section>
    </main>
  );
}

