import Link from "next/link";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 lg:hidden">
      <div className="rma-container">
        <div className="flex items-center justify-between gap-3 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[var(--rma-ink)]">
              Build a finance-ready mining supplier pipeline
            </p>
            <p className="truncate text-xs rma-muted">
              Register your SME or partner with RMA.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/register" className="rma-btn rma-btn-primary">
              Register
            </Link>
            <Link href="/contact" className="rma-btn rma-btn-secondary">
              Partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

