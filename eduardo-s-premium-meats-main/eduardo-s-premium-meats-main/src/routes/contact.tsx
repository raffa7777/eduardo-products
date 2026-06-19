import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vlees & Kip Leverancier Eduardo Products" },
      { name: "description", content: "Bestel bij je vlees horecaleverancier in Amsterdam, Hilversum, Utrecht, Arnhem en Zwolle. WhatsApp 06 25234530 of mail info@eduardoproducts.nl." },
      { property: "og:title", content: "Contact — Eduardo Products" },
      { property: "og:description", content: "Bel, WhatsApp of mail voor je bestelling bij vleesgroothandel Eduardo Products." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const naam = String(data.get("naam") || "");
    const bedrijf = String(data.get("bedrijf") || "");
    const contact = String(data.get("contact") || "");
    const bericht = String(data.get("bericht") || "");
    const subject = `Bestelling / aanvraag van ${naam}${bedrijf ? ` (${bedrijf})` : ""}`;
    const body = `Naam: ${naam}\nRestaurant / Bedrijf: ${bedrijf}\nTelefoon of e-mail: ${contact}\n\nBericht:\n${bericht}`;
    window.location.href = `mailto:info@eduardoproducts.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
          <h1 className="mt-4 font-display text-6xl md:text-8xl">LATEN WE PRATEN</h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Bestellingen, vragen, prijslijst? Bel direct of stuur een bericht — we reageren snel.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <div className="space-y-8">
          <a href="https://api.whatsapp.com/send?phone=31625234530" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-5 border-l-2 border-primary bg-card p-6 transition-colors hover:bg-card/70">
            <Phone className="h-6 w-6 text-primary" />
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Telefoon</div>
              <div className="mt-1 font-display text-3xl">06 25234530</div>
            </div>
          </a>
          <a href="mailto:info@eduardoproducts.nl" className="group flex items-start gap-5 border-l-2 border-primary bg-card p-6 transition-colors hover:bg-card/70">
            <Mail className="h-6 w-6 text-primary" />
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">E-mail</div>
              <div className="mt-1 font-display text-3xl break-all">info@eduardoproducts.nl</div>
            </div>
          </a>
          <div className="flex items-start gap-5 border-l-2 border-border bg-card p-6">
            <MapPin className="h-6 w-6 text-primary" />
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Vleesgroothandel</div>
              <div className="mt-1 text-foreground">Levering aan restaurants & horeca in de regio</div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 border border-border bg-card p-8"
        >
          <div className="flex items-center gap-2 text-primary">
            <Mail className="h-5 w-5" />
            <h2 className="font-display text-2xl tracking-wider">STUUR EEN BERICHT</h2>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Naam</label>
            <input name="naam" required className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Restaurant / Bedrijf</label>
            <input name="bedrijf" className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Telefoon of e-mail</label>
            <input name="contact" required className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Bericht / bestelling</label>
            <textarea name="bericht" required rows={5} className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          </div>
          <button type="submit" className="w-full bg-primary px-6 py-4 text-sm uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90">
            {sent ? "Bedankt — we nemen contact op" : "Verstuur bericht"}
          </button>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
