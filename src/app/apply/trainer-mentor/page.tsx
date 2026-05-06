import { TrainerMentorFormClient } from "@/app/apply/trainer-mentor/TrainerMentorFormClient";

export const metadata = {
  title: "Trainer/Mentor application",
};

export default function TrainerMentorApplyPage() {
  return (
    <main>
      <div className="border-b border-black/5 bg-white">
        <div className="rma-container py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
              Trainers & mentors
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-5xl">
              Apply to join as a trainer/mentor
            </h1>
            <p className="mt-4 text-base leading-7 rma-muted">
              RMA works with a network of trainers and mentors supporting SMEs across supplier readiness,
              compliance, procurement, finance-readiness, HSE, and contract execution.
            </p>
          </div>
        </div>
      </div>

      <div className="rma-container py-10 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <TrainerMentorFormClient />
        </div>
      </div>
    </main>
  );
}

