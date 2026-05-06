"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };

export function NavTabsClient({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="hidden items-center md:flex"
    >
      <div className="rounded-full border border-black/10 bg-white/70 p-1 shadow-sm">
        <ul className="flex items-center gap-1">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--rma-blue)]/25",
                    isActive
                      ? "bg-[color:var(--rma-green)]/10 text-[var(--rma-ink)]"
                      : "text-black/70 hover:bg-black/[.03] hover:text-black",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

