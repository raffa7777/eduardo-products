import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const nav = [
    { to: "/", label: "Home" },
    { to: "/producten", label: "Producten" },
    { to: "/over-ons", label: "Over Ons" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-wider text-foreground">EDUARDO</span>
          <span className="font-display text-sm tracking-[0.3em] text-primary">PRODUCTS</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {n.label}
            </Link>
          ))}
          <a href="https://api.whatsapp.com/send?phone=31625234530" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90">
            <Phone className="h-3.5 w-3.5" /> 06 25234530
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{n.label}</Link>
            ))}
            <a href="https://api.whatsapp.com/send?phone=31625234530" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary px-4 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground">
              <Phone className="h-3.5 w-3.5" /> 06 25234530
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
