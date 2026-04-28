export const metadata = {
  title: "Team",
};

import { TeamGridClient } from "@/app/team/TeamGridClient";

const team = [
  {
    name: "Nachilala Nkombo",
    role: "Team Leader",
    photoSrc: "/team/nachilala-nkombo.jpg",
    bio: "Founder and team lead at Resilient Markets Africa. Leads enterprise and supplier development (ESD) programme design, partnerships, and implementation across strategic sectors in Zambia.",
  },
  {
    name: "Fungai Musana",
    role: "SME Development Lead",
    photoSrc: "/team/fungai-musana.jpg",
    bio: "Leads SME development delivery—diagnostics, coaching, and readiness support to help suppliers meet buyer requirements and compliance standards.",
  },
  {
    name: "Tonny Simbaya",
    role: "Procurement Lead",
    photoSrc: "/team/tonny-simbaya.jpg",
    bio: "Supports procurement and supplier readiness for corporate engagement—aligning SME capability with tender requirements, execution, and audit-ready documentation.",
  },
  {
    name: "Mafipe Chunga",
    role: "Finance Lead",
    photoSrc: "/team/mafipe-chunga.jpg",
    bio: "Leads finance and reporting—strengthening governance, financial management, and investment readiness to support scalable ESD programmes.",
  },
  {
    name: "Ruth Chanda",
    role: "HR Lead",
    photoSrc: "/team/ruth-chanda.jpg",
    bio: "Leads people, operations, and programme support—helping ensure high-quality delivery and a strong service culture for SMEs and partners.",
  },
];

export default function TeamPage() {
  return (
    <main className="rma-container py-14 sm:py-18">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/70">
            RMA Zambia
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-5xl">
            The RMA Team
          </h1>
          <p className="mt-4 text-base leading-7 text-[color:var(--rma-muted)]">
            We design and deliver Enterprise & Supplier Development (ESD) programmes that prepare SMEs
            for national and multinational supply chains.
          </p>
        </div>

        <TeamGridClient team={team} />

        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 text-sm text-black/60">
          To add photos, place image files in{" "}
          <code className="rounded bg-black/[.04] px-2 py-1 text-xs">public/team/</code>{" "}
          using these filenames:
          <ul className="mt-3 list-disc pl-5">
            <li>
              <code className="rounded bg-black/[.04] px-2 py-1 text-xs">
                nachilala-nkombo.jpg
              </code>
            </li>
            <li>
              <code className="rounded bg-black/[.04] px-2 py-1 text-xs">
                fungai-musana.jpg
              </code>
            </li>
            <li>
              <code className="rounded bg-black/[.04] px-2 py-1 text-xs">
                tonny-simbaya.jpg
              </code>
            </li>
            <li>
              <code className="rounded bg-black/[.04] px-2 py-1 text-xs">
                mafipe-chunga.jpg
              </code>
            </li>
            <li>
              <code className="rounded bg-black/[.04] px-2 py-1 text-xs">
                ruth-chanda.jpg
              </code>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

