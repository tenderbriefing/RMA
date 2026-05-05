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
        title="Contact RMA"
        description="Speak to us about mining supplier development, SME registration, finance-readiness, or local-content partnerships in Zambia."
      >
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-4 rounded-3xl border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Send us a message
              </p>
              <p className="mt-2 text-sm leading-6 rma-muted">
                Complete the form below and our team will respond via info@rma.africa.
              </p>
            </div>
            <ContactFormClient />
          </div>

          <div className="lg:col-span-5">
            <div className="rma-card p-6">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Contact details
              </p>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                    Email
                  </p>
                  <p className="mt-1">
                    <a
                      className="font-medium text-black hover:underline"
                      href="mailto:info@rma.africa"
                    >
                      info@rma.africa
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                    Office
                  </p>
                  <p className="mt-1 leading-6 text-black/70">
                    Unit 3 Katete Flats
                    <br />
                    Off Roan Road
                    <br />
                    Kabulonga, Lusaka, Zambia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-4">
            <p className="text-sm font-semibold text-[var(--rma-ink)]">
              Our office location
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <div className="aspect-[16/9] w-full">
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
      </Section>
    </main>
  );
}

