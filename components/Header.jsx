import Link from "next/link";
import Logo from "./Logo";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#platforms", label: "Platforms" },
  { href: "#process", label: "Process" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ink-950/70 border-b border-white/5">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary !py-2 !px-4 text-xs">
          Get in touch →
        </a>
      </div>
    </header>
  );
}
