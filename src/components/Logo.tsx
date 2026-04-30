import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/rma-logo-transparent.png"
        alt="Resilient Markets Africa (RMA)"
        width={128}
        height={128}
        priority
        className="h-24 w-24 sm:h-28 sm:w-28"
      />
    </Link>
  );
}

