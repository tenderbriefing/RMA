import { TrainerMentorFormClient } from "@/app/apply/trainer-mentor/TrainerMentorFormClient";

export const metadata = {
  title: "Trainer/Mentor application",
};

export default function TrainerMentorApplyPage() {
  return (
    <main>
      <div className="relative overflow-hidden border-b border-black/5 bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_20%,rgba(31,106,58,0.10),transparent_55%),radial-gradient(900px_circle_at_78%_30%,rgba(37,58,135,0.08),transparent_55%),radial-gradient(900px_circle_at_55%_90%,rgba(240,116,43,0.06),transparent_55%)]" />
        </div>
        <div className="rma-container relative py-12 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-2 w-10 rounded-full zambia-stripe" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                Trainers & mentors
              </p>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-5xl">
              Apply to join as a trainer/mentor
            </h1>
            <p className="mt-4 text-base leading-7 rma-muted sm:text-lg">
              RMA works with a network of trainers and mentors supporting SMEs across supplier readiness, compliance,
              procurement, finance-readiness, HSE, and contract execution.
            </p>
          </div>
        </div>
      </div>

      <div className="rma-container py-10 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <TrainerMentorFormClient />
            </div>
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-4">
                <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                  <div className="pointer-events-none h-1 w-full zambia-stripe" />
                  <div className="p-6 sm:p-8">
                    <p className="text-sm font-semibold text-[var(--rma-ink)]">
                      What we look for
                    </p>
                    <p className="mt-2 text-sm leading-6 rma-muted">
                      We work with practitioners who can deliver practical, outcomes-based SME support.
                    </p>
                    <div className="mt-5 space-y-3 text-sm text-black/70">
                      {[
                        "Experience delivering training or mentoring to SMEs",
                        "Strength in compliance, procurement, finance-readiness, HSE, or delivery discipline",
                        "Ability to work with cohorts and report outcomes clearly",
                        "Professional, ethical, and partner-ready engagement",
                      ].map((t) => (
                        <div key={t} className="flex items-start gap-3">
                          <span
                            className="mt-2 h-2 w-2 rounded-full bg-[color:var(--rma-orange)]"
                            aria-hidden="true"
                          />
                          <p className="leading-6">{t}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
                  <p className="text-sm font-semibold text-[var(--rma-ink)]">What happens next</p>
                  <div className="mt-4 grid gap-3">
                    {[
                      { t: "Review", b: "We review your application and experience." },
                      { t: "Follow-up", b: "We contact you via email if we need more detail." },
                      { t: "Onboarding", b: "Where suitable, we onboard you into the trainer/mentor network." },
                    ].map((x) => (
                      <div key={x.t} className="rounded-2xl border border-black/10 bg-black/[.02] px-4 py-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-black/50">{x.t}</p>
                        <p className="mt-1 text-sm text-black/70">{x.b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

