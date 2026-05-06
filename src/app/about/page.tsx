import Image from "next/image";
import Link from "next/link";
import { AboutAccordionClient } from "@/app/about/AboutAccordionClient";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <div className="relative overflow-hidden border-b border-black/5 bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_20%,rgba(31,106,58,0.10),transparent_55%),radial-gradient(900px_circle_at_78%_30%,rgba(37,58,135,0.08),transparent_55%),radial-gradient(900px_circle_at_55%_90%,rgba(240,116,43,0.06),transparent_55%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/rma-mark.png"
              alt=""
              aria-hidden="true"
              width={520}
              height={520}
              sizes="520px"
              className="h-[360px] w-[360px] object-contain opacity-[0.06] sm:h-[460px] sm:w-[460px] sm:opacity-[0.05]"
              priority
            />
          </div>
        </div>

        <div className="rma-container-wide relative py-12 sm:py-14">
          <div className="max-w-5xl">
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-5xl">
              Bridging opportunity and enterprise readiness across Africa.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
              RMA helps SMEs become compliant, finance‑ready, and buyer‑ready—so they can participate
              competitively in major supply chains.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { t: "Compliance & readiness", b: "Practical support aligned to buyer standards." },
                { t: "Finance readiness", b: "Better documentation and funding preparation." },
                { t: "Market linkages", b: "Closer connection to procurement opportunities." },
              ].map((x) => (
                <div
                  key={x.t}
                  className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/80 p-4 backdrop-blur"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(37,58,135,0.10),transparent_45%),radial-gradient(800px_circle_at_90%_20%,rgba(31,106,58,0.10),transparent_45%)]" />
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[linear-gradient(180deg,var(--rma-green),var(--rma-blue),var(--rma-orange))] opacity-70" />
                  <div className="relative">
                  <p className="text-sm font-semibold text-[var(--rma-ink)]">{x.t}</p>
                  <p className="mt-1 text-sm leading-6 rma-muted">{x.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rma-container-wide pb-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
            Explore
          </p>
          <p className="mt-2 text-sm leading-6 rma-muted">
            Click to expand. We keep this page short by default.
          </p>
          <div className="mt-4">
            <AboutAccordionClient />
          </div>
        </div>
      </div>
    </main>
  );
}

