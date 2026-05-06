"use client";

import { useId, useMemo, useState } from "react";

type SectionKey =
  | "enterprise"
  | "supplier"
  | "finance"
  | "market"
  | "local-content"
  | "digital"
  | "flagships"
  | "who";

type Item = {
  key: SectionKey;
  title: string;
  summary: string;
  body: React.ReactNode;
};

export function ServicesAccordionClient() {
  const [openKey, setOpenKey] = useState<SectionKey | null>("enterprise");
  const baseId = useId();

  const items: Item[] = useMemo(
    () => [
      {
        key: "enterprise",
        title: "Enterprise Development",
        summary:
          "Structured programmes that strengthen SME capability beyond training.",
        body: (
          <div className="space-y-3">
            <p className="text-sm leading-6 rma-muted">
              We design and implement structured enterprise development
              programmes that strengthen SME capability, improve business
              discipline, and support sustainable growth.
            </p>
            <p className="text-sm leading-6 rma-muted">
              Our approach goes beyond training. We work with SMEs to improve
              governance, compliance, financial management, operations,
              strategy, and market readiness. Through practical diagnostics,
              mentorship, coaching, and implementation support, we help
              businesses become more formal, resilient, and commercially
              competitive.
            </p>
            <div className="rounded-2xl border border-black/10 bg-black/[.02] px-4 py-3 text-sm rma-muted">
              Ideal for corporates, banks, DFIs, government agencies, mining
              companies, and development partners seeking a stronger pipeline
              of capable SMEs.
            </div>
          </div>
        ),
      },
      {
        key: "supplier",
        title: "Supplier Development",
        summary:
          "Build reliable local supplier pipelines aligned to real buyer needs.",
        body: (
          <div className="space-y-3">
            <p className="text-sm leading-6 rma-muted">
              RMA helps mining houses, corporates, and public-sector buyers build
              reliable local supplier pipelines.
            </p>
            <p className="text-sm leading-6 rma-muted">
              We identify, assess, train, and prepare SMEs to meet procurement,
              compliance, quality, safety, and operational standards required by
              major buyers. Our supplier development programmes are designed
              around real value-chain needs, ensuring that SMEs are not only
              trained, but positioned to participate in actual procurement
              opportunities.
            </p>
            <ul className="mt-2 space-y-2 text-sm text-black/70">
              {[
                "Supplier readiness assessments",
                "Procurement compliance support",
                "Local supplier mapping",
                "Buyer-supplier matchmaking",
                "Supplier performance tracking",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full bg-[color:var(--rma-orange)]"
                    aria-hidden="true"
                  />
                  <span className="leading-6">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        ),
      },
      {
        key: "finance",
        title: "Access to Finance",
        summary:
          "Finance-readiness support to help SMEs become better organised and fundable.",
        body: (
          <div className="space-y-3">
            <p className="text-sm leading-6 rma-muted">
              Many SMEs have market potential but are not yet finance-ready. RMA
              helps businesses close this gap.
            </p>
            <p className="text-sm leading-6 rma-muted">
              We support SMEs with finance readiness assessments, financial
              records improvement, cash-flow preparation, compliance
              documentation, business planning, and funding application support.
            </p>
            <p className="text-sm leading-6 rma-muted">
              Our work prepares SMEs for bank funding, supplier finance,
              purchase order finance, invoice finance, working capital, and
              growth capital—subject to finance partner assessment (no
              guaranteed outcomes).
            </p>
          </div>
        ),
      },
      {
        key: "market",
        title: "Market Access",
        summary:
          "Connect SMEs to buyers, procurement pipelines, sector opportunities, and markets.",
        body: (
          <div className="space-y-3">
            <p className="text-sm leading-6 rma-muted">
              Enterprise development must lead to real opportunities. RMA helps
              SMEs connect to buyers, procurement pipelines, sector
              opportunities, and cross-border markets.
            </p>
            <p className="text-sm leading-6 rma-muted">
              Through buyer-supplier matchmaking, tender and RFQ opportunity
              matching, corporate procurement linkages, mining supply chain
              access, B2B networking, and regional trade support, we help
              capable SMEs move closer to revenue-generating opportunities.
            </p>
          </div>
        ),
      },
      {
        key: "local-content",
        title: "Local Content Advisory",
        summary:
          "Translate local content commitments into measurable implementation outcomes.",
        body: (
          <div className="space-y-3">
            <p className="text-sm leading-6 rma-muted">
              RMA supports mining houses, corporates, infrastructure projects,
              energy projects, and public-sector institutions with practical
              local content and inclusive procurement strategies.
            </p>
            <p className="text-sm leading-6 rma-muted">
              We help organisations translate local content commitments into
              clear implementation plans, supplier development programmes,
              procurement participation frameworks, and measurable impact
              outcomes.
            </p>
            <p className="text-sm leading-6 rma-muted">
              This includes local supplier mapping, community enterprise
              participation, supplier pipeline development, inclusive
              procurement design, local economic development planning, and
              impact reporting.
            </p>
          </div>
        ),
      },
      {
        key: "digital",
        title: "Digital SME Ecosystem",
        summary:
          "Technology-enabled onboarding, diagnostics, scoring, monitoring, and dashboards.",
        body: (
          <div className="space-y-3">
            <p className="text-sm leading-6 rma-muted">
              RMA uses digital tools to make enterprise development more
              scalable, measurable, and data-driven.
            </p>
            <p className="text-sm leading-6 rma-muted">
              Our digital SME ecosystem supports SME registration, onboarding,
              diagnostics, compliance tracking, finance-readiness scoring,
              supplier-readiness scoring, training progress monitoring, and
              partner reporting dashboards.
            </p>
            <p className="text-sm leading-6 rma-muted">
              Technology allows us to move beyond once-off support and build a
              continuous enterprise development ecosystem.
            </p>
          </div>
        ),
      },
      {
        key: "flagships",
        title: "Flagship Programmes",
        summary:
          "Structured programmes tailored to SMEs, partners, and sector value chains.",
        body: (
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "Mining Supplier Readiness Programme",
                b: "Prepares SMEs to supply mines and contractors—supplier readiness, compliance documentation, procurement training, quality & safety readiness, access-to-finance preparation, and matchmaking.",
              },
              {
                t: "SME Finance Readiness Programme",
                b: "Prepares businesses for bank/DFI and supplier finance—records review, cash-flow preparation, business plans, proposals, compliance checklists, and lender-readiness support.",
              },
              {
                t: "Local Content Supplier Development Programme",
                b: "For institutions increasing local supplier participation—supplier mapping, cohort recruitment, training, mentorship, procurement alignment, and impact reporting.",
              },
              {
                t: "Market Access Accelerator",
                b: "Helps SMEs pursue real opportunities—buyer identification, tender/RFQ matching, pitch preparation, B2B matchmaking, cross-border readiness, and tracking.",
              },
              {
                t: "Digital SME Diagnostics Programme",
                b: "Scalable SME onboarding and readiness scoring—compliance tracking, progress monitoring, dashboards, and partner reporting for large cohorts.",
              },
            ].map((x) => (
              <div key={x.t} className="rma-card p-6">
                <p className="text-base font-semibold text-[var(--rma-ink)]">
                  {x.t}
                </p>
                <p className="mt-2 text-sm leading-6 rma-muted">{x.b}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        key: "who",
        title: "Who We Serve",
        summary: "A broad ecosystem of partners committed to stronger enterprises.",
        body: (
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "SMEs",
                b: "Seeking growth, compliance, finance readiness, and market access.",
              },
              {
                t: "Mining houses & corporates",
                b: "Requiring stronger local supplier pipelines and measurable outcomes.",
              },
              {
                t: "Banks & DFIs",
                b: "Needing more fundable, better-documented SME pipelines.",
              },
              {
                t: "Government & development partners",
                b: "Seeking measurable enterprise development impact and inclusive growth outcomes.",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-black/10 bg-white p-5">
                <p className="text-sm font-semibold text-[var(--rma-ink)]">
                  {x.t}
                </p>
                <p className="mt-2 text-sm leading-6 rma-muted">{x.b}</p>
              </div>
            ))}
          </div>
        ),
      },
    ],
    [],
  );

  function toggle(key: SectionKey) {
    setOpenKey((k) => (k === key ? null : key));
  }

  return (
    <div className="grid gap-4">
      {items.map((it) => {
        const isOpen = it.key === openKey;
        const btnId = `${baseId}-${it.key}-btn`;
        const panelId = `${baseId}-${it.key}-panel`;
        return (
          <div
            key={it.key}
            className={[
              "group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition",
              "hover:shadow-md hover:border-black/15",
              isOpen ? "ring-1 ring-[color:var(--rma-green)]/15" : "",
            ].join(" ")}
          >
            <div className="pointer-events-none h-1 w-full zambia-stripe" />

            <div
              className={[
                "px-5 py-5 sm:px-6",
                isOpen ? "bg-[color:var(--rma-green)]/6" : "bg-white",
              ].join(" ")}
            >
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(it.key)}
                className="flex w-full items-start justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--rma-blue)]/25"
              >
                <span className="min-w-0">
                  <span className="flex items-center gap-3">
                    <span
                      className={[
                        "mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl border",
                        "border-black/10 bg-white shadow-sm",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--rma-orange)]" />
                    </span>
                    <span className="block text-base font-semibold tracking-tight text-[var(--rma-ink)]">
                      {it.title}
                    </span>
                  </span>
                  <span className="mt-2 block text-sm leading-6 rma-muted">
                    {it.summary}
                  </span>
                </span>

                <span
                  className={[
                    "mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl border",
                    "border-black/10 bg-white text-black/60 shadow-sm transition",
                    "group-hover:text-black/75",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <span className="text-lg leading-none">{isOpen ? "−" : "+"}</span>
                </span>
              </button>

              {isOpen ? (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className="mt-5 rounded-2xl border border-black/10 bg-white p-5 sm:p-6"
                >
                  {it.body}
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

