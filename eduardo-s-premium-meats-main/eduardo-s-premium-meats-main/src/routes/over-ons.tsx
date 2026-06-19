import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-meat.jpg";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over Ons — Vlees Horecaleverancier Eduardo Products" },
      { name: "description", content: "Eduardo Products is dé vlees horecaleverancier en kip leverancier voor restaurants in Amsterdam, Hilversum, Utrecht, Arnhem en Zwolle. Vakmanschap, service en topkwaliteit." },
      { property: "og:title", content: "Over Eduardo Products — Horecaleverancier" },
      { property: "og:description", content: "Vleesgroothandel met vakmanschap en service voor restaurants in regio Amsterdam, Hilversum, Utrecht, Arnhem, Zwolle." },
      { property: "og:url", content: "/over-ons" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/over-ons" }],
  }),
  component: Over,
});

function Over() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Vleesgroothandel" width={1600} height={1200} className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Over Ons</p>
          <h1 className="mt-4 font-display text-6xl md:text-8xl">VAKMANSCHAP IN VLEES</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            <span className="font-display text-2xl text-foreground">Eduardo Products</span> is een vleesgroothandel die elke dag opnieuw bewijst dat kwaliteit, service en eerlijkheid de standaard zijn — niet de uitzondering.
          </p>
          <p>
            We leveren restaurants, slagerijen en horeca-uitbaters dagelijks vers vlees: rundvlees, kip, hamburgers, lam, kalf, gehakt en specialiteiten. Onze klanten kiezen voor ons om wat ze terugkrijgen: <span className="text-foreground">topkwaliteit, snelle levering en concurrerende prijzen</span>.
          </p>
          <p>
            We werken met passie en korte lijnen. Bel ons, en je spreekt iemand die het vlees kent. Bestel vandaag, ontvang vandaag of morgen — vers, professioneel gesneden, klaar voor je keuken.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {[
            { k: "5,0", v: "Op Google" },
            { k: "100%", v: "Dagelijks vers" },
            { k: "1 op 1", v: "Persoonlijk contact" },
          ].map((s) => (
            <div key={s.k} className="bg-background p-8 text-center">
              <div className="font-display text-6xl text-primary">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
