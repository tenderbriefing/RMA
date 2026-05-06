"use client";

import { useId, useMemo, useState } from "react";

type Key = "purpose" | "mission-vision" | "different" | "focus";

type Item = {
  key: Key;
  title: string;
  summary: string;
  body: React.ReactNode;
};

export function AboutAccordionClient() {
  const [openKey, setOpenKey] = useState<Key | null>("purpose");
  const baseId = useId();

  const items: Item[] = useMemo(
    () => [
      {
        key: "purpose",
        title: "Our Purpose",
        summary: "Build resilient African enterprises that can compete and create jobs.",
        body: (
          <div className="space-y-3">
            <p className="text-sm leading-6 rma-muted">
              Our purpose is to build resilient African enterprises that can compete, access finance,
              create jobs, and supply the industries driving Africa’s economic future.
            </p>
            <p className="text-sm leading-6 rma-muted">
              Enterprise development must move beyond training alone. SMEs need practical support,
              structured diagnostics, finance readiness, procurement alignment, mentorship, and
              direct connection to real commercial opportunities.
            </p>
          </div>
        ),
      },
      {
        key: "mission-vision",
        title: "Mission & Vision",
        summary: "Strengthen SMEs through readiness, finance preparation, and market linkages.",
        body: (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider rma-muted">Mission</p>
              <p className="mt-2 text-sm leading-6 text-black/70">
                To strengthen African SMEs through enterprise development, supplier readiness,
                access-to-finance preparation, and market linkages that enable inclusive economic
                growth and resilient local supply chains.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider rma-muted">Vision</p>
              <p className="mt-2 text-sm leading-6 text-black/70">
                To become a leading Pan-African enterprise development and supplier ecosystem
                partner, enabling SMEs across the continent to participate competitively in
                high-value markets and strategic industry supply chains.
              </p>
            </div>
          </div>
        ),
      },
      {
        key: "different",
        title: "What makes RMA different",
        summary: "Practical delivery, value-chain alignment, and technology-enabled measurement.",
        body: (
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                t: "Practical, not theoretical",
                b: "Implementable solutions that improve compliance, operations, and procurement readiness.",
              },
              {
                t: "Value-chain driven",
                b: "Designed around real buyer needs, anchor industries, and procurement opportunities.",
              },
              {
                t: "Finance-readiness focused",
                b: "Preparation for bank funding, supplier finance, working capital, and growth capital.",
              },
              {
                t: "Technology-enabled",
                b: "Digital onboarding, diagnostics, monitoring, impact tracking, and reporting.",
              },
              {
                t: "Partnership-led",
                b: "Collaboration with mining houses, banks, DFIs, corporates, and institutions.",
              },
              {
                t: "Pan-African perspective",
                b: "Built for African markets and the realities of doing business across the continent.",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-black/10 bg-white p-5">
                <p className="text-sm font-semibold text-[var(--rma-ink)]">{x.t}</p>
                <p className="mt-1 text-sm leading-6 rma-muted">{x.b}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        key: "focus",
        title: "Strategic focus areas",
        summary: "Enterprise development, supplier development, finance readiness, and market access.",
        body: (
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                t: "Enterprise Development",
                b: "Mentorship, training, governance improvement, and operational strengthening.",
              },
              {
                t: "Supplier Development",
                b: "Preparing SMEs to meet procurement, quality, safety, and delivery expectations.",
              },
              {
                t: "Access to Finance",
                b: "Funding readiness through records, compliance, cash-flow discipline, and lender preparation.",
              },
              {
                t: "Market Linkages",
                b: "Connecting SMEs to procurement opportunities, anchor buyers, and supply chains.",
              },
              {
                t: "Local Content Development",
                b: "Inclusive procurement strategies and measurable implementation outcomes.",
              },
              {
                t: "Digital SME Ecosystems",
                b: "Onboarding, diagnostics, scoring, monitoring, and partner reporting dashboards.",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-black/10 bg-white p-5">
                <p className="text-sm font-semibold text-[var(--rma-ink)]">{x.t}</p>
                <p className="mt-1 text-sm leading-6 rma-muted">{x.b}</p>
              </div>
            ))}
          </div>
        ),
      },
    ],
    [],
  );

  function toggle(key: Key) {
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
              isOpen ? "ring-1 ring-[color:var(--rma-green)]/10" : "hover:shadow-md",
            ].join(" ")}
          >
            <div className="pointer-events-none h-1 w-full bg-[linear-gradient(90deg,var(--rma-green),var(--rma-blue),var(--rma-orange))] opacity-70" />
            <button
              id={btnId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(it.key)}
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--rma-blue)]/25 sm:px-6"
            >
              <span className="min-w-0">
                <span className="block text-base font-semibold tracking-tight text-[var(--rma-ink)]">
                  {it.title}
                </span>
                <span className="mt-1 block text-sm leading-6 rma-muted">{it.summary}</span>
              </span>
              <span
                className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-white text-black/60"
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
                className="border-t border-black/10 bg-[linear-gradient(180deg,rgba(37,58,135,0.03),rgba(31,106,58,0.02),rgba(255,255,255,0))] px-5 py-5 sm:px-6"
              >
                {it.body}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

