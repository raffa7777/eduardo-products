import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, Truck, Snowflake, Award, Clock } from "lucide-react";
import heroImg from "@/assets/hero-meat.jpg";
import chickenImg from "@/assets/chicken.jpg";
import burgersImg from "@/assets/burgers.jpg";
import beefImg from "@/assets/beef.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vlees Horecaleverancier & Kip Leverancier | Eduardo Products" },
      { name: "description", content: "Vlees horecaleverancier & kip leverancier voor restaurants in Amsterdam, Hilversum, Utrecht, Arnhem en Zwolle. Dagelijks vers vlees, snelle levering, eerlijke prijzen. 5,0 op Google." },
      { name: "keywords", content: "vlees horecaleverancier, kip leverancier, vleesgroothandel, horeca vlees Amsterdam, vleesleverancier Utrecht, kipleverancier Hilversum, vlees Arnhem, vleesgroothandel Zwolle" },
      { property: "og:title", content: "Vlees Horecaleverancier & Kip Leverancier — Eduardo Products" },
      { property: "og:description", content: "Dagelijks vers vlees & kip voor horeca in Amsterdam, Hilversum, Utrecht, Arnhem en Zwolle." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Eduardo Products",
          description: "Vleesgroothandel en horecaleverancier voor vers vlees en kip.",
          image: "https://eduardoproducts.nl/og-image.jpg",
          url: "https://eduardoproducts.nl",
          telephone: "+31625234530",
          email: "info@eduardoproducts.nl",
          priceRange: "€€",
          address: { "@type": "PostalAddress", addressCountry: "NL" },
          areaServed: [
            { "@type": "City", name: "Amsterdam" },
            { "@type": "City", name: "Hilversum" },
            { "@type": "City", name: "Utrecht" },
            { "@type": "City", name: "Arnhem" },
            { "@type": "City", name: "Zwolle" },
          ],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "4" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Marquee />
      <Values />
      <Categories />
      <Reviews />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Premium vleeswaren" width={1600} height={1200} className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>
      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Vleesgroothandel sinds dag één
          </div>
          <h1 className="mt-6 font-display text-6xl leading-[0.9] sm:text-7xl md:text-8xl lg:text-9xl">
            DAGELIJKS<br />
            <span className="text-primary">VERS VLEES.</span><br />
            ZONDER COMPROMIS.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Eduardo Products levert restaurants en horeca het beste vlees — rundvlees, kip, hamburgers en alle soorten daartussen. Snelle levering, eerlijke prijzen, vakmanschap in elke bestelling.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/producten" className="group inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-primary/90">
              Bekijk producten <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="https://api.whatsapp.com/send?phone=31625234530" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-border bg-card/40 px-7 py-4 text-sm uppercase tracking-[0.25em] text-foreground transition-all hover:border-primary hover:text-primary">
              Bel 06 25234530
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-accent text-base">★★★★★</span>
              <span>5,0 op Google</span>
            </div>
            <div>4 reviews · Aanrader voor horeca</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["RUNDVLEES", "KIP", "HAMBURGERS", "LAM", "KALFSVLEES", "GEHAKT", "WORST", "SPECIAALSNIJDEN"];
  return (
    <div className="overflow-hidden border-y border-border bg-card py-6">
      <div className="flex animate-[scroll_30s_linear_infinite] gap-12 whitespace-nowrap font-display text-3xl tracking-wider md:text-4xl">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="text-muted-foreground">
            {t} <span className="ml-12 text-primary">/</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

function Values() {
  const values = [
    { icon: Snowflake, title: "Dagelijks vers", text: "Vlees komt vers binnen en gaat dezelfde dag de deur uit. Geen voorraden van gisteren." },
    { icon: Award, title: "Topkwaliteit", text: "Geselecteerde stukken, professioneel uitgesneden en gecontroleerd voor levering." },
    { icon: Truck, title: "Snelle levering", text: "Betrouwbare bezorging in de regio voor restaurants, slagerijen en horeca." },
    { icon: Clock, title: "Eerlijke prijzen", text: "Concurrerende groothandelsprijzen zonder verborgen kosten of compromissen." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Waarom Eduardo</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">VAKMANSCHAP, ELKE DAG OPNIEUW</h2>
        </div>
        <p className="text-muted-foreground md:text-lg">
          Vier waarden die elke bestelling sturen. Wat we beloven, leveren we — vandaag nog op je werkbank.
        </p>
      </div>
      <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <div key={v.title} className="group bg-background p-8 transition-colors hover:bg-card">
            <v.icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  const cats = [
    { img: beefImg, label: "Rundvlees", desc: "Premium stukken, perfect gemarmerd" },
    { img: chickenImg, label: "Kip", desc: "Vers, mals en veelzijdig" },
    { img: burgersImg, label: "Hamburgers", desc: "Vers gemalen, eigen mix" },
  ];
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Assortiment</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">WAT WE LEVEREN</h2>
          </div>
          <Link to="/producten" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground hover:text-primary">
            Volledig assortiment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cats.map((c) => (
            <div key={c.label} className="group relative overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.label} loading="lazy" width={900} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-3xl">{c.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "Nicolas Mousa", role: "Local Guide · 15 reviews", text: "Hele goede leverancier. Beste kwaliteit vlees, goeie service, snelle levering en goeie prijzen. Zeker een aanrader!" },
    { name: "Lattifsafwat Mouriz", role: "Local Guide · 13 reviews", text: "Uitstekend, dagelijks vers vlees. Ik heb een restaurant en ik neem rundvlees, hamburgers, kip en allerlei soorten vlees af." },
    { name: "Sameh Kamel", role: "3 reviews", text: "Lekker kip." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Klanten over ons</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">5,0 OP GOOGLE</h2>
          <div className="mt-6 flex items-center gap-2 text-accent text-2xl">★★★★★</div>
          <p className="mt-4 text-sm text-muted-foreground">Wat restaurants en horeca-uitbaters zeggen over samenwerken met Eduardo Products.</p>
        </div>
        <div className="space-y-4">
          {reviews.map((r) => (
            <figure key={r.name} className="border-l-2 border-primary bg-card p-8">
              <div className="text-accent">★★★★★</div>
              <blockquote className="mt-4 text-lg leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-foreground">{r.name}</span> · {r.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-y border-border bg-gradient-to-br from-primary/20 via-background to-background py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-display text-5xl md:text-7xl">KLAAR OM TE BESTELLEN?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          Bel direct of stuur een bericht — we beantwoorden bestellingen en vragen meestal binnen het uur.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="https://api.whatsapp.com/send?phone=31625234530" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90">
            Bel 06 25234530
          </a>
          <Link to="/contact" className="inline-flex items-center gap-3 border border-border bg-card px-8 py-4 text-sm uppercase tracking-[0.25em] hover:border-primary hover:text-primary">
            Stuur een bericht
          </Link>
        </div>
      </div>
    </section>
  );
}
