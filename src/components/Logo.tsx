import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <Image
        src="/rma-logo.png"
        alt="Resilient Markets Africa (RMA)"
        width={44}
        height={44}
        priority
        className="h-11 w-11 rounded-xl bg-white"
      />
      <span className="leading-tight">
        <span className="block text-sm font-semibold tracking-tight text-[var(--rma-ink)]">
          Resilient Markets Africa
        </span>
        <span className="block text-xs text-black/50">RMA</span>
      </span>
    </Link>
  );
}

