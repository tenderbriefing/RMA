import Link from "next/link";

export function AnchorNav({
  items,
}: {
  items: Array<{ href: string; label: string }>;
}) {
  return (
    <div className="sticky top-[96px] hidden lg:block">
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <div className="pointer-events-none h-1 w-full zambia-stripe" />
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
            On this page
          </p>
          <ul className="mt-3 space-y-2 text-sm">
          {items.map((i) => (
            <li key={i.href}>
              <Link
                href={i.href}
                className="inline-flex rounded-xl px-2 py-1 text-black/70 hover:bg-black/[.03] hover:text-black"
              >
                {i.label}
              </Link>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

