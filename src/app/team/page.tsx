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
    photoSrc: "/team/tonny-simbaya.svg",
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

        <div className="mt-12 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
          <div className="pointer-events-none h-1 w-full zambia-stripe" />
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
              Trainers & mentors
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-[var(--rma-ink)]">
              Join our network of trainers and mentors.
            </p>
            <p className="mt-3 text-sm leading-6 rma-muted">
              If you have experience supporting SMEs with supplier readiness, compliance, procurement,
              finance-readiness, HSE, or contract execution, we’d like to hear from you.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <a href="/apply/trainer-mentor" className="rma-btn rma-btn-primary">
                Apply to join as a trainer/mentor
              </a>
              <a href="/services" className="rma-btn rma-btn-secondary">
                View services
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

