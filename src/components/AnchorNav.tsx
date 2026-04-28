import Link from "next/link";

export function AnchorNav({
  items,
}: {
  items: Array<{ href: string; label: string }>;
}) {
  return (
    <div className="sticky top-[104px] hidden lg:block">
      <div className="rounded-3xl border border-black/10 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-wider rma-muted">
          On this page
        </p>
        <ul className="mt-3 space-y-2 text-sm">
          {items.map((i) => (
            <li key={i.href}>
              <Link
                href={i.href}
                className="text-black/70 hover:text-black"
              >
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

