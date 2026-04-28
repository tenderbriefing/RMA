import Link from "next/link";

export function UtilityBar() {
  return (
    <div className="border-b border-black/5 bg-white">
      <div className="rma-container">
        <div className="flex h-10 items-center justify-between text-xs">
          <div className="hidden items-center gap-3 sm:flex">
            <span className="rma-muted">
              Zambia mining local content implementation support
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="rma-muted hover:text-black">
              Mining Companies
            </Link>
            <Link href="/register" className="rma-muted hover:text-black">
              SMEs
            </Link>
            <Link href="/contact" className="rma-muted hover:text-black">
              Finance Partners
            </Link>
            <span className="hidden sm:inline rma-muted">|</span>
            <Link href="/login" className="font-semibold text-black hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

