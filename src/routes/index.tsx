import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { DraggablePill } from "@/components/DraggablePill";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Design Space — India's loudest community for designers & artists" },
      { name: "description", content: "A real-world art & design community connecting Indian creatives across cities through WhatsApp, meetups, and city chapters." },
      { property: "og:title", content: "The Design Space — India's loudest design community" },
      { property: "og:description", content: "Designers, artists & makers across India. WhatsApp chapters, IRL events, zero corporate energy." },
    ],
  }),
  component: HomePage,
});

const PILLS = [
  { name: "Aanya Kapoor", city: "Mumbai", x: 60, y: 80, r: -8, color: "bg-acid" },
  { name: "Rohan Iyer", city: "Bangalore", x: 920, y: 140, r: 6, color: "bg-paper" },
  { name: "Meher Sethi", city: "Delhi", x: 30, y: 320, r: 4, color: "bg-hot text-paper" },
  { name: "Kabir Banerjee", city: "Kolkata", x: 1080, y: 360, r: -5, color: "bg-cobalt text-paper" },
  { name: "Tara Pillai", city: "Chennai", x: 100, y: 560, r: 7, color: "bg-paper" },
  { name: "Veer Joshi", city: "Pune", x: 980, y: 600, r: -6, color: "bg-acid" },
  { name: "Nia D'Souza", city: "Goa", x: 180, y: 740, r: 5, color: "bg-hot text-paper" },
  { name: "Ishaan Reddy", city: "Hyderabad", x: 1020, y: 780, r: -7, color: "bg-paper" },
  { name: "Saanvi Nair", city: "Kochi", x: 540, y: 60, r: 3, color: "bg-cobalt text-paper" },
  { name: "Dev Malhotra", city: "Jaipur", x: 700, y: 820, r: -4, color: "bg-acid" },
];

const PERKS = [
  { n: "01", title: "WhatsApp Chapters", body: "Active groups in 14 cities. Real conversations, not Slack ghost towns.", color: "bg-hot text-paper", x: 40, y: 60, r: -3 },
  { n: "02", title: "IRL Meetups", body: "Studio crawls, sketch nights, portfolio teardowns. Every month, somewhere.", color: "bg-acid", x: 380, y: 30, r: 2 },
  { n: "03", title: "City Leads", body: "Local humans organising local chaos. Climb the 5-tier ladder if you dare.", color: "bg-cobalt text-paper", x: 720, y: 110, r: -2 },
  { n: "04", title: "Critique Circles", body: "Bring work-in-progress. Get brutal-but-caring feedback. Leave with a plan.", color: "bg-paper", x: 80, y: 360, r: 3 },
  { n: "05", title: "Job Board", body: "Studios & founders post here first. Zero recruiter spam.", color: "bg-acid", x: 460, y: 410, r: -4 },
  { n: "06", title: "Merch & Zines", body: "Riso zines, screen-printed tees, weird stickers. Made by us, for us.", color: "bg-hot text-paper", x: 800, y: 380, r: 4 },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO — collage canvas, no strips */}
      <section className="relative overflow-hidden">
        {/* halftone backdrop blob */}
        <div className="halftone absolute -left-40 top-40 h-[500px] w-[500px] rounded-full opacity-20" />
        <div className="halftone absolute right-[-200px] top-[600px] h-[400px] w-[400px] rounded-full opacity-15" />

        {/* big diagonal stamp */}
        <div className="absolute right-6 top-6 z-20 hidden sm:block">
          <div className="brut-border bg-hot px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-paper" style={{ transform: "rotate(8deg)" }}>
            EST. 2021 · 4,200+ humans
          </div>
        </div>

        {/* draggable canvas (desktop) */}
        <div className="relative mx-auto h-[1000px] max-w-[1400px] px-4 sm:px-8 hidden md:block">
          {PILLS.map((p, i) => (
            <DraggablePill
              key={p.name}
              initialX={p.x}
              initialY={p.y}
              rotate={p.r}
              zHint={5 + i}
              className={`brut-border brut-shadow-sm ${p.color} px-3 py-1.5`}
            >
              <div className="font-display text-xs uppercase">{p.name}</div>
              <div className="font-mono text-[10px]">↳ {p.city}</div>
            </DraggablePill>
          ))}

          {/* the headline — sits in the middle of the canvas */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-full max-w-[1100px] -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="font-display text-[12rem] leading-[0.82]">
              <span className="block">The Design</span>
              <span className="block text-hot italic font-serif normal-case" style={{ transform: "rotate(-2deg)", display: "inline-block" }}>space</span>
              <span className="block">is loud.</span>
            </h1>
            <p className="pointer-events-auto mx-auto mt-6 max-w-2xl font-serif text-2xl italic">
              Real-world art & design community for Indian creatives who refuse to be quiet, polite, or generic.
            </p>
            <div className="pointer-events-auto mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://chat.whatsapp.com/" target="_blank" rel="noreferrer"
                className="brut-border brut-shadow bg-hot px-8 py-4 font-display text-lg uppercase text-paper hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                Join the Community →
              </a>
              <Link to="/events"
                className="brut-border brut-shadow bg-paper px-8 py-4 font-display text-lg uppercase hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                See What's On
              </Link>
            </div>
            <div className="pointer-events-auto mt-8 inline-block font-mono text-[11px] uppercase tracking-widest opacity-60">
              ↑ grab the pills · throw them around · double-click to spin
            </div>
          </div>
        </div>

        {/* mobile fallback */}
        <div className="relative mx-auto max-w-[1400px] px-4 py-20 text-center md:hidden">
          <h1 className="font-display text-[18vw] leading-[0.85]">
            <span className="block">The Design</span>
            <span className="block text-hot italic font-serif normal-case">space</span>
            <span className="block">is loud.</span>
          </h1>
          <p className="mx-auto mt-6 font-serif text-xl italic">
            Real-world art & design community for Indian creatives who refuse to be quiet.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="https://chat.whatsapp.com/" className="brut-border brut-shadow-sm bg-hot px-6 py-3 font-display text-sm uppercase text-paper">Join →</a>
            <Link to="/events" className="brut-border brut-shadow-sm bg-paper px-6 py-3 font-display text-sm uppercase">Events</Link>
          </div>
        </div>
      </section>

      {/* MANIFESTO — overlapping skewed cards, no strip */}
      <section className="relative overflow-hidden py-32">
        <div className="halftone absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="relative">
            <div className="brut-border brut-shadow bg-ink p-10 text-paper md:p-14" style={{ transform: "rotate(-1.2deg)" }}>
              <div className="font-mono text-xs uppercase tracking-widest text-hot">// manifesto</div>
              <h2 className="mt-3 font-display text-5xl uppercase leading-[0.9] md:text-7xl">
                Not a network. Not a course.<br />
                <span className="text-acid italic font-serif normal-case">A room.</span>
              </h2>
              <p className="mt-6 max-w-3xl font-serif text-2xl text-paper/90">
                Indian designers, illustrators, type nerds, animators, ceramicists & the chronically curious — gathering online on WhatsApp and offline in cities — to make work, share work, and stop feeling like the only weirdo in the room.
              </p>
            </div>

            {/* sticker on top */}
            <div className="absolute -right-4 -top-6 hidden md:block" style={{ transform: "rotate(12deg)" }}>
              <div className="brut-border bg-acid px-4 py-2 font-display uppercase">100% real humans</div>
            </div>
            <div className="absolute -left-6 bottom-6 hidden md:block" style={{ transform: "rotate(-8deg)" }}>
              <div className="brut-border bg-hot px-3 py-1 font-mono text-xs uppercase text-paper">est. mumbai</div>
            </div>
          </div>
        </div>
      </section>

      {/* PERKS COLLAGE — scattered cards, no grid lines */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-hot">// the perks</div>
            <h2 className="mt-3 font-display text-6xl uppercase md:text-8xl">
              <span className="zigzag">Six</span> things you'll get hooked on.
            </h2>
          </div>

          {/* desktop scattered collage */}
          <div className="relative mx-auto hidden h-[720px] w-full max-w-[1200px] md:block">
            {PERKS.map((p, i) => (
              <div
                key={p.n}
                className={`brut-border brut-shadow absolute w-[300px] ${p.color} p-6 transition-transform hover:-translate-y-1`}
                style={{ left: p.x, top: p.y, transform: `rotate(${p.r}deg)`, zIndex: 5 + i }}
              >
                <div className="font-mono text-xs uppercase tracking-widest opacity-70">{p.n}</div>
                <h3 className="mt-2 font-display text-2xl uppercase">{p.title}</h3>
                <p className="mt-3 font-serif text-base">{p.body}</p>
              </div>
            ))}
            <div className="absolute right-6 top-32 font-display text-[10rem] leading-none text-hot opacity-10" style={{ transform: "rotate(-8deg)" }}>★</div>
            <div className="absolute left-10 bottom-4 font-display text-[8rem] leading-none text-cobalt opacity-15" style={{ transform: "rotate(14deg)" }}>✺</div>
          </div>

          {/* mobile stacked */}
          <div className="space-y-4 md:hidden">
            {PERKS.map((p) => (
              <div key={p.n} className={`brut-border brut-shadow-sm ${p.color} p-5`}>
                <div className="font-mono text-xs uppercase tracking-widest opacity-70">{p.n}</div>
                <h3 className="mt-1 font-display text-xl uppercase">{p.title}</h3>
                <p className="mt-2 font-serif text-base">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO — taped onto page like a polaroid */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-8">
          <div className="relative">
            {/* tape strips */}
            <div className="absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 bg-acid/70 brut-border" style={{ transform: "translateX(-50%) rotate(-4deg)" }} />
            <div className="absolute -bottom-3 right-10 z-10 h-7 w-20 bg-hot/60 brut-border" style={{ transform: "rotate(8deg)" }} />

            <div className="brut-border brut-shadow bg-paper p-4 md:p-6" style={{ transform: "rotate(-0.6deg)" }}>
              <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                <span>// the film</span>
                <span className="text-hot">▶ press play</span>
              </div>
              <div className="brut-border relative aspect-video w-full overflow-hidden bg-ink">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/YnOiYWfk5DQ"
                  title="The Design Space"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-3 font-display text-2xl uppercase">Watch us be loud.</div>
            </div>
          </div>
        </div>
      </section>

      {/* MERCH + NEWSLETTER — two skewed sticky notes, not a strip */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-6">
            <div className="brut-border brut-shadow bg-acid p-10" style={{ transform: "rotate(-1.5deg)" }}>
              <div className="font-mono text-xs uppercase tracking-widest text-hot">// merch drop</div>
              <h3 className="mt-2 font-display text-5xl uppercase">Wear the noise.</h3>
              <p className="mt-4 font-serif text-lg">
                Riso zines, screen-printed tees, weird enamel pins. Drops every quarter. Last one sold out in 11 hours.
              </p>
              <button className="mt-6 brut-border brut-shadow-sm bg-ink px-6 py-3 font-display uppercase text-paper hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                Shop the Drop →
              </button>
            </div>
            <div className="brut-border brut-shadow bg-hot p-10 text-paper" style={{ transform: "rotate(1.5deg)" }}>
              <div className="font-mono text-xs uppercase tracking-widest text-acid">// the bulletin</div>
              <h3 className="mt-2 font-display text-5xl uppercase">Bi-weekly noise.</h3>
              <p className="mt-4 font-serif text-lg">
                Studio visits, member spotlights, jobs, weird stuff we found on the internet.
              </p>
              <form className="mt-6 flex gap-0">
                <input
                  type="email"
                  required
                  placeholder="your@email.in"
                  className="flex-1 border-2 border-paper bg-transparent px-4 py-3 font-mono text-paper placeholder:text-paper/60 focus:bg-paper focus:text-ink focus:outline-none"
                />
                <button className="border-2 border-l-0 border-paper bg-acid px-6 py-3 font-display uppercase text-ink hover:bg-paper transition-colors">
                  Sign me up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA — single huge slab */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="halftone absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1400px] px-4 py-32 text-center sm:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-hot">// final word</div>
          <h2 className="mt-6 font-display text-[15vw] leading-[0.85] md:text-[10vw]">
            Stop lurking.<br />
            <span className="text-hot italic font-serif normal-case">Start showing up.</span>
          </h2>
          <a href="https://chat.whatsapp.com/" target="_blank" rel="noreferrer"
            className="mt-12 inline-block brut-border brut-shadow bg-acid px-12 py-6 font-display text-2xl uppercase text-ink hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all">
            Join the Community →
          </a>
          <div className="mt-8 font-mono text-xs uppercase tracking-widest text-paper/60">
            free · always · no algorithms · psst — try typing "loud"
          </div>
        </div>
      </section>
    </Layout>
  );
}
