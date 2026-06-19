import { Link } from "@tanstack/react-router";
import { Phone, Globe, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl tracking-wider">EDUARDO</span>
            <span className="font-display text-sm tracking-[0.3em] text-primary">PRODUCTS</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Horeca vleesleverancier met dagelijks vers vlees. Beste kwaliteit, snelle levering en eerlijke prijzen — voor restaurants en horeca.
          </p>
          <div className="mt-6 flex items-center gap-1">
            {[1,2,3,4,5].map((i) => (
              <span key={i} className="text-accent">★</span>
            ))}
            <span className="ml-2 text-xs uppercase tracking-widest text-muted-foreground">5,0 · 4 reviews op Google</span>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-primary">Navigatie</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
            <li><Link to="/producten" className="text-muted-foreground hover:text-foreground">Producten</Link></li>
            <li><Link to="/over-ons" className="text-muted-foreground hover:text-foreground">Over Ons</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-primary">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href="https://api.whatsapp.com/send?phone=31625234530" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">06 25234530</a></li>
            <li className="flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> <a href="https://eduardoproducts.nl" className="hover:text-foreground">eduardoproducts.nl</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" /> <span>Levering in Amsterdam, Hilversum, Utrecht, Arnhem & Zwolle</span></li>
            <li className="pl-6 text-xs uppercase tracking-[0.2em] text-primary">Min. bestelling: 20 kg</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
        © {new Date().getFullYear()} Eduardo Products — Horeca Vleesleverancier
      </div>
    </footer>
  );
}
