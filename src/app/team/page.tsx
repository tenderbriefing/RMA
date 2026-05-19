export const metadata = {
  title: "Team",
};

import { TeamGridClient } from "@/app/team/TeamGridClient";

const team = [
  {
    name: "Nachilala Nkombo",
    role: "Team Leader",
    photoSrc: "/team/nachilala-nkombo.png",
    linkedinUrl: "https://linkedin.com/in/nachilala-nkombo-0abb45157",
    credentials: ["MSc Public Policy", "BA Economics", "Cert. Sustainable Management"],
    bio: "Founder and Head of Resilient Markets Africa. An experienced business leader with a track record of developing partnerships between corporates and SMEs in Zambia.",
    profile: [
      "Nachilala is the founder and Head of Resilient Markets Africa. She is an experienced business leader with a track record of developing partnerships between corporates and SMEs in Zambia.",
      "Her experience includes leading enterprise partnerships with MTN, ZANACO and WWF Zambia where she was Country Director for 5 years.",
    ],
  },
  {
    name: "Fungai Musana",
    role: "SME Development Lead",
    photoSrc: "/team/fungai-musana.png",
    linkedinUrl: "",
    credentials: ["MSc Economics", "ACCA", "BSc Quantity Surveying"],
    bio: "An Accountant and a Quantity Surveyor with 20 years of experience building SME-to-corporate relations.",
    profile: [
      "Fungai Musana is an Accountant and a Quantity Surveyor with 20 years of experience building SME to Corporate Relations.",
      "He is the Zambia lead for the Dutch Fund for Climate and Development and heads SME development cooperation between WWF, ZANACO and FMO.",
    ],
  },
  {
    name: "Tonny Simbaya",
    role: "Procurement Lead",
    photoSrc: "/team/tonny-simbaya-headshot.png",
    linkedinUrl: "https://linkedin.com/in/tonny-j-simbaya-9594729",
    credentials: [
      "MSc, Supply Chain",
      "BA (Hons), Purchasing & Supply",
      "PG Diploma in Mgt Studies",
    ],
    bio: "A senior procurement professional and former Head of Procurement at Industrial Development Corporation (IDC).",
    profile: [
      "Tonny Simbaya is a Senior Procurement Professional and former Head of Procurement at the Industrial Development Corporation (IDC).",
      "His experience also includes roles at KCM, Electoral Commission of Zambia (ECZ), ZESCO and Bank of Zambia.",
    ],
  },
  {
    name: "Mafipe Chunga",
    role: "Finance Lead",
    photoSrc: "/team/mafipe-chunga.png",
    linkedinUrl: "https://linkedin.com/in/mafipechunga",
    credentials: ["Fellow ACCA / ZICA", "BA Accounting", "LLB Degree"],
    bio: "17 years of experience in finance, SME development and supply chain management.",
    profile: [
      "Mafipe has 17 years of experience in finance, SME development and supply chain management.",
      "His experience includes roles as Liquidation Manager at KCM, supply chain consultant at Barrick Gold, Internal Auditor at Lubambe Copper Mines, Auditor at Kagem Mining and Kariba Minerals.",
    ],
  },
  {
    name: "Ruth Chanda",
    role: "HR Lead",
    photoSrc: "/team/ruth-chanda.png",
    linkedinUrl: "",
    credentials: ["MBA", "BA Economics", "Dip. Risk & Governance"],
    bio: "An organisational development specialist with 25 years of experience in consulting and financial services.",
    profile: [
      "Ruth Chanda is an organisational development specialist with 25 years of experience gained with PwC, UNDP, Standard Chartered Bank Zambia and the Bahrain.",
      "Her role is to support SMEs to evolve from a people to process focus for sustainability.",
    ],
  },
];

export default function TeamPage() {
  return (
    <main>
      <div className="relative overflow-hidden border-b border-black/5 bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_15%_15%,rgba(31,106,58,0.11),transparent_55%),radial-gradient(900px_circle_at_78%_25%,rgba(37,58,135,0.11),transparent_55%),radial-gradient(900px_circle_at_55%_90%,rgba(240,116,43,0.09),transparent_55%)]" />
        </div>
        <div className="rma-container-wide relative py-12 sm:py-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-2 w-10 rounded-full zambia-stripe" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                Team
              </p>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-5xl">
              The RMA Team
            </h1>
            <p className="mt-4 text-base leading-7 rma-muted sm:text-lg">
              Leadership and technical expertise across enterprise development, procurement, finance,
              and organisational effectiveness.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "Experience",
                v: "Deep sector exposure",
                b: "Mining supply chains, finance readiness, and SME development.",
              },
              {
                t: "Approach",
                v: "Practical + implementable",
                b: "Programmes designed for measurable outcomes, not theory.",
              },
              {
                t: "Network",
                v: "Partners + practitioners",
                b: "We work with mining houses, banks/DFIs, corporates, and SMEs.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
              >
                <div className="pointer-events-none h-1 w-full bg-[linear-gradient(90deg,var(--rma-green),var(--rma-blue),var(--rma-orange))] opacity-70" />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                    {x.t}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--rma-ink)]">
                    {x.v}
                  </p>
                  <p className="mt-1 text-sm leading-6 rma-muted">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="zambia-stripe h-1 w-full" />
      </div>

      <div className="rma-container-wide py-12 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <TeamGridClient team={team} />

          <div className="mt-12 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <div className="pointer-events-none h-1 w-full zambia-stripe" />
            <div className="relative p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(37,58,135,0.07),transparent_45%),radial-gradient(800px_circle_at_90%_20%,rgba(31,106,58,0.07),transparent_45%)]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                  Trainers & mentors
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-[var(--rma-ink)]">
                  Join our network of trainers and mentors.
                </p>
                <p className="mt-3 text-sm leading-6 rma-muted">
                  If you have experience supporting SMEs with supplier readiness, compliance,
                  procurement, finance-readiness, HSE, or contract execution, we’d like to hear from
                  you.
                </p>
                <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                  <a
                    href="/apply/trainer-mentor"
                    className="rma-btn rma-btn-primary"
                  >
                    Apply to join as a trainer/mentor
                  </a>
                  <a href="/contact" className="rma-btn rma-btn-secondary">
                    Contact RMA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

