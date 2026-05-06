import Link from "next/link";
import { HeroMediaSlider } from "@/components/HeroMediaSlider";

export default function Home() {
  return (
    <main>
      <HeroMediaSlider />

      <div className="rma-container-wide mt-10">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="p-6 lg:col-span-8 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
                SME invitation
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-[var(--rma-ink)]">
                Zambian small businesses: register to be considered.
              </p>
              <p className="mt-3 text-sm leading-6 rma-muted">
                Register your business if you are interested in:
              </p>

              <ul className="mt-4 space-y-2 text-sm text-black/70">
                {[
                  "Supplying the mines in Zambia",
                  "Partnering with multinational companies outside Zambia",
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

            <div className="border-t border-black/10 bg-black/[.02] p-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:p-8">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Ready to register?
              </p>
              <p className="mt-2 text-sm leading-6 rma-muted">
                Complete KYC so RMA can build a verified supplier pipeline for mining procurement and supplier development programmes.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <a href="/register" className="rma-btn rma-btn-primary w-full">
                  Register SME
                </a>
                <a href="/contact" className="rma-btn rma-btn-secondary w-full">
                  Contact RMA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
