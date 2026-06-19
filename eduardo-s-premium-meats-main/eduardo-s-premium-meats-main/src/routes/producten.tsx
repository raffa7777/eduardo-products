import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Check, Truck, Scale } from "lucide-react";
import beefImg from "@/assets/beef.jpg";
import chickenImg from "@/assets/chicken.jpg";
import burgersImg from "@/assets/burgers.jpg";

export const Route = createFileRoute("/producten")({
  head: () => ({
    meta: [
      { title: "Vlees & Kip Assortiment — Horecaleverancier Eduardo Products" },
      { name: "description", content: "Compleet assortiment van onze vlees horecaleverancier: rundvlees, kip, hamburgers, lam, gehakt en specialiteiten. Dagelijks vers in Amsterdam, Hilversum, Utrecht, Arnhem en Zwolle." },
      { name: "keywords", content: "kip leverancier, vlees horecaleverancier, rundvlees groothandel, kipfilet horeca, hamburgers groothandel, lamsvlees leverancier" },
      { property: "og:title", content: "Vlees & Kip Assortiment — Eduardo Products" },
      { property: "og:description", content: "Vers vlees & kip voor horeca: rundvlees, kip, hamburgers en meer. Levering in regio Amsterdam, Hilversum, Utrecht, Arnhem, Zwolle." },
      { property: "og:url", content: "/producten" },
      { property: "og:image", content: beefImg },
    ],
    links: [{ rel: "canonical", href: "/producten" }],
  }),
  component: Producten,
});

const products = [
  {
    img: chickenImg,
    name: "Kip",
    items: [
      "Kipfilet (kwaliteit A, verse NL)",
      "Kipfilet met vel",
      "Kipfilet blokjes (klein, groot)",
      "Dijenvlees (vers)",
      "Dijenvlees blokjes (klein, groot)",
      "Kipbout vlees met vel, zonder bot",
      "Hele kip (1100–1400 gr)",
      "Halve kip (gegrild met kruiden)",
      "Kipbouten",
      "Kipsaté filet stokje (60/100/200 gr, gekruid)",
      "Kipsaté dijen stokje (60/100/200 gr, gekruid)",
      "Soepkip",
      "Kipvleugels",
      "Vleugels platte stukjes",
      "Vleugels dikke stukjes (tv sticks)",
      "Drumsticks",
      "Kippenhart",
      "Kiplever",
    ],
  },
  {
    img: beefImg,
    name: "Rundvlees & Varken",
    items: [
      "Rundvlees (stuk voor nek)",
      "Jodenhaas (Nederland)",
      "Jodenhaas (Europees)",
      "Kophaas",
      "Spareribs (kant-en-klaar)",
      "Spareribs (diepvries)",
      "Varkensnek (zonder bot, vers)",
      "Buikspek (zonder bot, vers)",
      "Lamsracks (diepvries, New Zealand)",
    ],
  },
  {
    img: burgersImg,
    name: "Burgers & Halal specials",
    items: [
      "Sparks burger 170 gr (Halal, 5,1 kg doos)",
      "Sparks burger 113 gr (Halal, 5,5 kg doos)",
      "Kipnuggets (Halal, 5 kg doos)",
      "Hotwings kant-en-klaar (Halal, 5 kg doos)",
      "Chicken strips pikant (Halal, 5 kg doos)",
      "Doos eieren (L, 360 stuks)",
    ],
  },
];

const extra = [
  "Dagelijks vers geleverd aan horeca",
  "Halal opties beschikbaar",
  "Maatwerk snijden voor restaurants",
  "Verpakkingen op aanvraag",
  "Bestellen per stuk, kilo of doos",
  "Bel of mail voor actuele prijzen",
];

function Producten() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Assortiment</p>
          <h1 className="mt-4 font-display text-6xl md:text-8xl">PRODUCTEN</h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Een compleet vleesassortiment, dagelijks vers, professioneel uitgesneden. Bel of mail voor actuele prijzen en beschikbaarheid.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-px bg-border md:grid-cols-2">
          <div className="flex items-start gap-5 bg-background p-8">
            <Scale className="h-8 w-8 flex-shrink-0 text-primary" />
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary">Minimale bestelling</div>
              <div className="mt-2 font-display text-3xl md:text-4xl">VANAF 20 KILO</div>
              <p className="mt-2 text-sm text-muted-foreground">Bestellingen vanaf 20 kg — ideaal voor restaurants en horeca.</p>
            </div>
          </div>
          <div className="flex items-start gap-5 bg-background p-8">
            <Truck className="h-8 w-8 flex-shrink-0 text-primary" />
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary">Leveringsgebied</div>
              <div className="mt-2 font-display text-3xl md:text-4xl">AMSTERDAM · HILVERSUM · UTRECHT · ARNHEM · ZWOLLE</div>
              <p className="mt-2 text-sm text-muted-foreground">Wij bezorgen in deze regio's — dagelijks vers op locatie.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="group">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" width={900} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h2 className="mt-6 font-display text-4xl">{p.name}</h2>
              <ul className="mt-4 space-y-2">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-4xl md:text-5xl">EN VEEL MEER</h2>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {extra.map((e) => (
              <div key={e} className="bg-card p-6 text-sm">
                <span className="mr-3 font-display text-primary">/</span>{e}
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="https://api.whatsapp.com/send?phone=31625234530" target="_blank" rel="noopener noreferrer" className="inline-flex bg-primary px-7 py-4 text-sm uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90">Bel voor bestelling</a>
            <Link to="/contact" className="inline-flex border border-border px-7 py-4 text-sm uppercase tracking-[0.25em] hover:border-primary hover:text-primary">Stuur een bericht</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
