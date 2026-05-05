import Link from "next/link";
import { Section } from "@/components/Section";
import { ContactFormClient } from "@/app/contact/ContactFormClient";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--rma-green-2),var(--rma-ink))]" />
          <div className="absolute inset-0 opacity-80 bg-[radial-gradient(900px_circle_at_20%_15%,rgba(240,116,43,0.18),transparent_45%),radial-gradient(900px_circle_at_75%_35%,rgba(37,58,135,0.18),transparent_45%)]" />
        </div>

        <div className="rma-container-wide relative py-14 sm:py-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
                <span className="inline-flex h-2 w-10 rounded-full zambia-stripe" aria-hidden="true" />
                Zambia-based mining supplier development platform
              </span>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
                Lusaka, Zambia
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Let’s build Zambia’s mining supplier pipeline.
            </h1>
            <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg">
              Speak to RMA about mining supplier development, SME registration, finance-readiness, and local-content partnerships.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold text-white/85">
              {[
                "Mining partnerships",
                "SME support",
                "Finance readiness",
                "Local-content reporting",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="zambia-stripe h-1 w-full" />
      </div>

      <div className="rma-container-wide mt-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              t: "Email",
              v: "info@rma.africa",
              b: "For partnerships, SME support, and general enquiries.",
              icon: "E",
            },
            {
              t: "Office",
              v: "Kabulonga, Lusaka",
              b: "Unit 3 Katete Flats, Off Roan Road.",
              icon: "O",
            },
            {
              t: "Focus",
              v: "Mining supplier development",
              b: "Supporting Zambia’s local-content and SME pipeline priorities.",
              icon: "F",
            },
          ].map((c) => (
            <div key={c.t} className="rma-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                    {c.t}
                  </p>
                  <p className="mt-2 text-base font-semibold text-[var(--rma-ink)]">
                    {c.v}
                  </p>
                  <p className="mt-2 text-sm leading-6 rma-muted">{c.b}</p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[.04] text-sm font-semibold text-black/70">
                  {c.icon}
                </span>
              </div>
              {c.t === "Email" ? (
                <div className="mt-4">
                  <a
                    href="mailto:info@rma.africa"
                    className="text-sm font-semibold text-[color:var(--rma-blue)] hover:underline"
                  >
                    info@rma.africa →
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <Section
        title="Get in touch"
        description="Send an enquiry and we’ll respond via info@rma.africa."
      >
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-4 rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
              <p className="text-base font-semibold text-[var(--rma-ink)]">
                Send us a message
              </p>
              <p className="mt-2 text-sm leading-6 rma-muted">
                Complete the form and our team will respond via info@rma.africa.
              </p>
            </div>
            <ContactFormClient />
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-[linear-gradient(135deg,var(--rma-green-2),var(--rma-ink))] p-6 text-white shadow-sm sm:p-8">
              <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(240,116,43,0.18),transparent_45%),radial-gradient(900px_circle_at_80%_35%,rgba(37,58,135,0.18),transparent_45%)]" />
              <div className="relative">
                <p className="text-base font-semibold">What can we help with?</p>
                <div className="mt-5 space-y-3 text-sm text-white/90">
                  {[
                    "Mining supplier development programmes",
                    "SME registration and KYC support",
                    "Finance-readiness and contract execution support",
                    "Local-content implementation support",
                    "Reporting and impact dashboards",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 rounded-full bg-[color:var(--rma-orange)]"
                        aria-hidden="true"
                      />
                      <p className="leading-6">{t}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-6 text-white/80">
                  Based in Lusaka. Supporting mining-sector partnerships across Zambia.
                </p>

                <div className="mt-6 h-1 w-full rounded-full zambia-stripe" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="mt-4 bg-black/[.02] py-12">
        <div className="rma-container-wide">
          <p className="text-2xl font-semibold tracking-tight text-[var(--rma-ink)]">
            Who should contact RMA?
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Mining Companies",
                b: "For supplier development, local-content implementation support, SME pipeline visibility, and reporting outcomes.",
              },
              {
                t: "SMEs",
                b: "For KYC completion, supplier readiness, finance-readiness guidance, and mining-sector opportunities.",
              },
              {
                t: "Finance Partners",
                b: "For screened SME pipelines, contract finance support, and referral partnerships.",
              },
              {
                t: "Institutions & Stakeholders",
                b: "For enterprise development partnerships, local-content collaboration, and measurable supplier-development programmes.",
              },
            ].map((c) => (
              <div key={c.t} className="rma-card p-6">
                <p className="text-base font-semibold text-[var(--rma-ink)]">
                  {c.t}
                </p>
                <p className="mt-2 text-sm leading-6 rma-muted">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rma-container-wide py-12">
        <p className="text-2xl font-semibold tracking-tight text-[var(--rma-ink)]">
          What happens after you submit?
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { n: "1", t: "We review your enquiry" },
            { n: "2", t: "We respond via email" },
            { n: "3", t: "We guide the next action" },
          ].map((s) => (
            <div key={s.n} className="rma-card p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black/[.04] text-sm font-semibold text-black/70">
                  {s.n}
                </span>
                <p className="text-base font-semibold text-[var(--rma-ink)]">
                  {s.t}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rma-container-wide pb-14">
        <div className="rma-card overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="text-2xl font-semibold tracking-tight text-[var(--rma-ink)]">
              Our office location
            </p>
            <p className="mt-2 text-sm leading-6 rma-muted">
              RMA is based in Kabulonga, Lusaka, supporting mining-sector partnerships and SME supplier development across Zambia.
            </p>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black/70">
              Unit 3 Katete Flats, Off Roan Road, Kabulonga, Lusaka, Zambia
            </div>
          </div>

          <div className="px-6 pb-6 sm:px-8 sm:pb-8">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="h-[320px] w-full sm:h-[420px]">
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
        </div>
      </div>
    </main>
  );
}

