import Link from "next/link";
import { Logo } from "@/components/Logo";

const navItems: Array<{ href: string; label: string }> = [
  { href: "/about", label: "About" },
  { href: "/sectors", label: "Mining Categories" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="zambia-stripe h-1 w-full" />
      <div className="rma-container">
        <div className="flex h-18 items-center justify-between gap-3 py-3">
          <Logo />

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-black/70 transition hover:text-black"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/register"
              className="text-sm font-semibold text-black/70 transition hover:text-black"
            >
              SME Registration
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/login" className="rma-btn rma-btn-secondary">
              Login
            </Link>
            <Link href="/register" className="rma-btn rma-btn-primary">
              Register Your SME
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
