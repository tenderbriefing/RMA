import { ContactFormClient } from "@/app/contact/ContactFormClient";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <div className="rma-container-wide py-10 sm:py-14">
        <div className="max-w-3xl">
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-6xl">
            Contact RMA
          </h1>
          <p className="mt-4 text-base leading-7 text-black/70 sm:text-lg">
            Speak to RMA about mining supplier development, SME registration, finance-readiness, and local-content partnerships.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactFormClient />
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">Contact details</p>

              <div className="mt-5 space-y-5 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider rma-muted">Email</p>
                  <a
                    href="mailto:info@rma.africa"
                    className="mt-2 inline-flex items-center gap-2 font-semibold text-[color:var(--rma-blue)] hover:underline"
                  >
                    info@rma.africa <span aria-hidden="true">→</span>
                  </a>
                  <p className="mt-2 leading-6 rma-muted">
                    For partnerships, SME support, and general enquiries.
                  </p>
                </div>

                <div className="h-px w-full bg-black/10" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider rma-muted">Office</p>
                  <p className="mt-2 font-semibold text-[var(--rma-ink)]">Kabulonga, Lusaka</p>
                  <p className="mt-1 leading-6 rma-muted">
                    Unit 3 Katete Flats, Off Roan Road, Kabulonga, Lusaka, Zambia
                  </p>
                </div>

                <div className="h-px w-full bg-black/10" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider rma-muted">Focus</p>
                  <p className="mt-2 font-semibold text-[var(--rma-ink)]">Mining supplier development</p>
                  <p className="mt-1 leading-6 rma-muted">
                    Supporting Zambia’s local-content and SME pipeline priorities.
                  </p>
                </div>
              </div>

              <div className="mt-8 h-1 w-full rounded-full zambia-stripe" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div id="office-location" className="mt-10 rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-base font-semibold text-[var(--rma-ink)]">Our office location</p>
          <p className="mt-2 text-sm leading-6 rma-muted">
            RMA is based in Kabulonga, Lusaka, supporting mining-sector partnerships and SME supplier development across Zambia.
          </p>

          <div className="relative mt-4 overflow-hidden rounded-3xl border border-black/10 bg-white">
            <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-2xl border border-black/10 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-black/50">
                RMA office
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--rma-ink)]">
                Unit 3 Katete Flats, Off Roan Road
              </p>
              <p className="mt-0.5 text-xs text-black/60">
                Kabulonga, Lusaka, Zambia
              </p>
            </div>

            <div className="h-[320px] w-full sm:h-[420px]">
              <iframe
                title="RMA office location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                src="https://www.google.com/maps?q=RMA%20Office%2C%20Unit%203%20Katete%20Flats%20Off%20Roan%20Road%2C%20Kabulonga%2C%20Lusaka%2C%20Zambia&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

