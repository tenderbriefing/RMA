import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white">
      <div className="rma-container py-12">
        <div className="flex flex-col gap-3 text-xs text-black/50 sm:flex-row sm:items-center sm:justify-between">
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

