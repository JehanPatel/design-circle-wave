import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useMemo, useState } from "react";
import { DraggablePill } from "@/components/DraggablePill";

export const Route = createFileRoute("/city-leads")({
  head: () => ({
    meta: [
      { title: "City Leads — The Design Space" },
      { name: "description", content: "Meet the city leads running The Design Space chapters across India. From Spark to Founding Fellow — a 5-tier progression." },
      { property: "og:title", content: "City Leads — The Design Space" },
      { property: "og:description", content: "The humans running our city chapters across India." },
    ],
  }),
  component: CityLeadsPage,
});

const TIERS = [
  { id: "spark", name: "Spark", n: "01", body: "First flame. One meetup hosted. The chat talks back.", color: "bg-acid", x: 40, y: 40, r: -4 },
  { id: "studio", name: "Studio", n: "02", body: "Three events deep. There's a regular bar. People know your name.", color: "bg-paper", x: 320, y: 100, r: 3 },
  { id: "chapter", name: "Chapter", n: "03", body: "You ARE the city. Monthly cadence, dedicated WhatsApp, real venues.", color: "bg-hot text-paper", x: 600, y: 60, r: -2 },
  { id: "collective", name: "Collective", n: "04", body: "Multi-organiser team. Workshops, exhibitions, cross-city collabs.", color: "bg-cobalt text-paper", x: 200, y: 320, r: 4 },
  { id: "founding", name: "Founding Fellow", n: "05", body: "Built it from zero. Mentors new leads. Steers the ship. Legend.", color: "bg-ink text-paper", x: 520, y: 360, r: -3 },
] as const;

type Tier = typeof TIERS[number]["id"];

type Lead = {
  name: string;
  city: string;
  tier: Tier;
  bio: string;
  events: number;
  recruited: number;
  instagram?: string;
  twitter?: string;
};

const LEADS: Lead[] = [
  { name: "Aanya Kapoor", city: "Mumbai", tier: "founding", bio: "Type designer & riso obsessive. Started Bandra sketch nights with 4 people in a coffee shop.", events: 38, recruited: 412, instagram: "aanya.draws", twitter: "aanyakap" },
  { name: "Rohan Iyer", city: "Bangalore", tier: "collective", bio: "Product designer at a small studio. Runs Indiranagar portfolio teardowns.", events: 22, recruited: 280, instagram: "rohanio" },
  { name: "Meher Sethi", city: "Delhi", tier: "chapter", bio: "Illustrator working on a graphic novel. Hosts Hauz Khas critique circles.", events: 14, recruited: 196, instagram: "mehersethi" },
  { name: "Kabir Banerjee", city: "Kolkata", tier: "chapter", bio: "Animator & filmmaker. Brings everyone together at the Park Street studio.", events: 11, recruited: 142, twitter: "kabirbnrj" },
  { name: "Tara Pillai", city: "Chennai", tier: "studio", bio: "Brand designer turned ceramicist. Pottery + chai every other Sunday.", events: 6, recruited: 84, instagram: "tara.makes" },
  { name: "Veer Joshi", city: "Pune", tier: "studio", bio: "Motion designer. After Effects deep-dives at FC road.", events: 5, recruited: 72 },
  { name: "Nia D'Souza", city: "Goa", tier: "spark", bio: "Surface pattern designer. Just hosted the first Panjim beach sketch.", events: 1, recruited: 24, instagram: "nia.patterns" },
  { name: "Ishaan Reddy", city: "Hyderabad", tier: "chapter", bio: "UX writer & zine maker. Hosts at Lamakaan every month.", events: 13, recruited: 167, twitter: "ishaanr" },
  { name: "Saanvi Nair", city: "Kochi", tier: "studio", bio: "Editorial designer for an indie magazine. Fort Kochi gallery walks.", events: 7, recruited: 91, instagram: "saanvi.edits" },
  { name: "Dev Malhotra", city: "Jaipur", tier: "spark", bio: "Architect & sketch artist. Just kicked off the pink city chapter.", events: 2, recruited: 38 },
  { name: "Anika Bose", city: "Ahmedabad", tier: "studio", bio: "Service designer & NID grad. Runs the CEPT meetups.", events: 8, recruited: 110, instagram: "anikabose" },
  { name: "Yuvraj Singh", city: "Chandigarh", tier: "spark", bio: "Identity designer. Started the Sector 17 sketch crawl last month.", events: 1, recruited: 19 },
  { name: "Pooja Krishnan", city: "Bangalore", tier: "chapter", bio: "Co-leads Bangalore. Specialty: lettering & sign painting walks.", events: 12, recruited: 158, instagram: "pooja.letters" },
  { name: "Arjun Mehta", city: "Mumbai", tier: "collective", bio: "Co-leads Mumbai. Runs the South Bombay studio tour series.", events: 18, recruited: 224, twitter: "arjunmht" },
];

const TIER_COLOR: Record<Tier, string> = {
  spark: "bg-acid",
  studio: "bg-paper",
  chapter: "bg-hot text-paper",
  collective: "bg-cobalt text-paper",
  founding: "bg-ink text-paper",
};

function CityLeadsPage() {
  const [filter, setFilter] = useState<"all" | Tier>("all");
  const [city, setCity] = useState<string>("all");

  const cities = useMemo(() => ["all", ...Array.from(new Set(LEADS.map((l) => l.city))).sort()], []);
  const filtered = LEADS.filter((l) => (filter === "all" || l.tier === filter) && (city === "all" || l.city === city));

  return (
    <Layout>
      {/* HERO collage */}
      <section className="relative overflow-hidden">
        <div className="halftone absolute -right-32 top-20 h-[400px] w-[400px] rounded-full opacity-20" />
        <div className="relative mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-hot">// the people</div>
          <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[9rem]">
            Local humans.<br />
            <span className="font-serif italic normal-case text-hot">Local chaos.</span>
          </h1>
          <div className="relative mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <p className="font-serif text-2xl">
              City Leads turn a WhatsApp group into a real room. They host, wrangle venues, buy snacks. We built a 5-tier ladder so you know where everyone stands — and how to climb.
            </p>
            <div className="relative">
              <div className="brut-border brut-shadow bg-cobalt p-5 text-paper" style={{ transform: "rotate(-3deg)" }}>
                <div className="font-mono text-[10px] uppercase tracking-widest text-acid">// fact</div>
                <div className="font-display text-3xl uppercase">14 cities · 14 leads · 1 group chat per chaos</div>
              </div>
              <div className="absolute -bottom-4 -right-2 brut-border bg-hot px-3 py-1 font-mono text-[10px] uppercase text-paper" style={{ transform: "rotate(8deg)" }}>
                ★ all volunteers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS — scattered draggable */}
      <section className="relative overflow-hidden py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <h2 className="font-display text-5xl uppercase md:text-7xl">The <span className="zigzag">Ladder</span></h2>
            <div className="font-mono text-xs uppercase tracking-widest">grab a tier · throw it · climb it</div>
          </div>
          {/* desktop: draggable scatter */}
          <div className="relative mx-auto hidden h-[560px] w-full max-w-[1100px] md:block">
            {TIERS.map((t, i) => (
              <DraggablePill
                key={t.id}
                initialX={t.x}
                initialY={t.y}
                rotate={t.r}
                zHint={5 + i}
                className={`brut-border brut-shadow w-[260px] ${t.color} p-5`}
              >
                <div className="font-mono text-xs uppercase tracking-widest opacity-70">Tier {t.n}</div>
                <h3 className="mt-2 font-display text-2xl uppercase">{t.name}</h3>
                <p className="mt-2 font-serif text-sm">{t.body}</p>
              </DraggablePill>
            ))}
            <div className="pointer-events-none absolute right-4 bottom-0 font-display text-[7rem] leading-none text-hot opacity-10" style={{ transform: "rotate(-12deg)" }}>↑↑</div>
          </div>
          {/* mobile stacked */}
          <div className="space-y-3 md:hidden">
            {TIERS.map((t) => (
              <div key={t.id} className={`brut-border brut-shadow-sm ${t.color} p-5`}>
                <div className="font-mono text-xs uppercase">Tier {t.n}</div>
                <h3 className="font-display text-2xl uppercase">{t.name}</h3>
                <p className="mt-2 font-serif text-base">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="relative overflow-hidden py-12">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest">Filter →</span>
            <button
              onClick={() => setFilter("all")}
              className={`brut-border px-3 py-1.5 font-display text-sm uppercase ${filter === "all" ? "bg-ink text-paper" : "bg-paper"}`}
            >
              All tiers
            </button>
            {TIERS.map((t) => (
              <button
                key={t.id}
                onClick={() => setFilter(t.id)}
                className={`brut-border px-3 py-1.5 font-display text-sm uppercase ${filter === t.id ? "bg-hot text-paper" : "bg-paper"}`}
              >
                {t.name}
              </button>
            ))}
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="brut-border ml-auto bg-paper px-3 py-1.5 font-mono text-sm uppercase"
            >
              {cities.map((c) => (
                <option key={c} value={c}>{c === "all" ? "All cities" : c}</option>
              ))}
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((l, i) => {
              const tier = TIERS.find((t) => t.id === l.tier)!;
              const tilt = (i % 3 - 1) * 1.2;
              return (
                <article
                  key={l.name + l.city}
                  className="brut-border brut-shadow-sm relative bg-paper p-6 transition-transform hover:-translate-y-1 hover:rotate-0"
                  style={{ transform: `rotate(${tilt}deg)` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-14 w-14 place-items-center bg-ink text-paper font-display text-xl uppercase">
                        {l.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <h3 className="font-display text-xl uppercase leading-tight">{l.name}</h3>
                        <div className="font-mono text-xs uppercase tracking-widest text-hot">↳ {l.city}</div>
                      </div>
                    </div>
                    <span className={`${TIER_COLOR[l.tier]} brut-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest`}>
                      T{tier.n} · {tier.name}
                    </span>
                  </div>
                  <p className="mt-4 font-serif text-base leading-snug">{l.bio}</p>
                  <div className="mt-4 flex gap-4 border-t-2 border-ink pt-3 font-mono text-xs uppercase">
                    <div><span className="text-hot">{l.events}</span> events</div>
                    <div><span className="text-hot">{l.recruited}</span> recruited</div>
                  </div>
                  {(l.instagram || l.twitter) && (
                    <div className="mt-3 flex gap-3 font-mono text-xs">
                      {l.instagram && <a href={`https://instagram.com/${l.instagram}`} target="_blank" rel="noreferrer" className="underline hover:text-hot">IG/{l.instagram}</a>}
                      {l.twitter && <a href={`https://twitter.com/${l.twitter}`} target="_blank" rel="noreferrer" className="underline hover:text-hot">X/{l.twitter}</a>}
                    </div>
                  )}
                  {l.tier === "founding" && (
                    <div className="absolute -right-3 -top-3 brut-border bg-acid px-2 py-1 font-mono text-[10px] uppercase" style={{ transform: "rotate(12deg)" }}>★ legend</div>
                  )}
                </article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="brut-border bg-acid p-10 text-center font-display text-2xl uppercase">
              No leads here yet. Want to be the first? ↓
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="halftone absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1400px] px-4 py-24 text-center sm:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-hot">// apply</div>
          <h2 className="mt-4 font-display text-[12vw] leading-[0.9] md:text-[7rem]">
            Become a <span className="text-acid italic font-serif normal-case">City Lead.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-xl text-paper/80">
            All it takes is hosting one meetup. We'll send you the playbook, the budget, the stickers.
          </p>
          <a href="mailto:leads@thedesignspace.in" className="mt-10 inline-block brut-border brut-shadow bg-hot px-10 py-5 font-display text-xl uppercase text-paper hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all">
            Apply to lead your city →
          </a>
        </div>
      </section>
    </Layout>
  );
}
