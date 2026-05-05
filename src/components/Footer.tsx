import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white">
      <div className="rma-container py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-sm font-semibold text-[var(--rma-ink)]">
              Resilient Markets Africa (RMA)
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 rma-muted">
              A Zambia-focused mining local-content and supplier-development platform supporting verified,
              contract-ready, finance-ready SME supplier pipelines for mining procurement and reporting outcomes.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:col-span-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-black/50">
                Explore
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-black/70 hover:text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-black/70 hover:text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-black/70 hover:text-black"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-black/70 hover:text-black"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-black/70 hover:text-black"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="text-black/70 hover:text-black"
                  >
                    Register SME
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-black/50">
                Contact
              </p>
              <div className="mt-3 space-y-2 text-sm text-black/70">
                <p>
                  Email:{" "}
                  <a
                    className="font-medium text-black hover:underline"
                    href="mailto:info@rma.africa"
                  >
                    info@rma.africa
                  </a>
                </p>
                <p className="leading-6">
                  Unit 3 Katete Flats Off Roan Road, Kabulonga, Lusaka, Zambia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 text-xs text-black/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Resilient Markets Africa.</p>
          <div className="flex items-center gap-3">
            <span className="h-2 w-10 rounded-full zambia-stripe" aria-hidden="true" />
            <p className="max-w-xl">
              Designed to support local-content implementation and supplier development outcomes in Zambia’s mining value chain.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

