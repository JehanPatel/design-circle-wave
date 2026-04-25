import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

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

const MEMBER_CHIPS = [
  { name: "Aanya Kapoor", city: "Mumbai", t: "8%", l: "6%", r: "-8deg" },
  { name: "Rohan Iyer", city: "Bangalore", t: "14%", l: "78%", r: "6deg" },
  { name: "Meher Sethi", city: "Delhi", t: "30%", l: "2%", r: "4deg" },
  { name: "Kabir Banerjee", city: "Kolkata", t: "42%", l: "85%", r: "-5deg" },
  { name: "Tara Pillai", city: "Chennai", t: "62%", l: "8%", r: "7deg" },
  { name: "Veer Joshi", city: "Pune", t: "70%", l: "72%", r: "-6deg" },
  { name: "Nia D'Souza", city: "Goa", t: "85%", l: "12%", r: "5deg" },
  { name: "Ishaan Reddy", city: "Hyderabad", t: "88%", l: "70%", r: "-7deg" },
  { name: "Saanvi Nair", city: "Kochi", t: "22%", l: "45%", r: "3deg" },
  { name: "Dev Malhotra", city: "Jaipur", t: "78%", l: "48%", r: "-4deg" },
];

const PERKS = [
  { n: "01", title: "WhatsApp Chapters", body: "Active groups in 14 cities. Real conversations, not Slack ghost towns." },
  { n: "02", title: "IRL Meetups", body: "Studio crawls, sketch nights, portfolio teardowns, gallery hops — every month, somewhere." },
  { n: "03", title: "City Leads", body: "Local humans organising the local chaos. Climb the 5-tier ladder if you dare." },
  { n: "04", title: "Critique Circles", body: "Bring work-in-progress. Get feedback that's brutal but caring. Leave with a plan." },
  { n: "05", title: "Job Board", body: "Studios, founders, agencies post here first. No recruiter spam." },
  { n: "06", title: "Merch & Zines", body: "Risograph zines, screen-printed tees, weird stickers. Made by us, for us." },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="relative mx-auto min-h-[90vh] max-w-[1400px] px-4 pt-20 pb-32 sm:px-8">
          {/* floating member chips */}
          {MEMBER_CHIPS.map((c, i) => (
            <div
              key={c.name}
              className="float-chip absolute hidden md:block"
              style={{
                top: c.t,
                left: c.l,
                ["--r" as string]: c.r,
                ["--dx" as string]: `${(i % 2 ? 1 : -1) * 8}px`,
                ["--dy" as string]: `${(i % 3) * -4 - 4}px`,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              <div className="brut-border brut-shadow-sm bg-paper px-3 py-1.5">
                <div className="font-display text-xs uppercase">{c.name}</div>
                <div className="font-mono text-[10px] text-hot">↳ {c.city}</div>
              </div>
            </div>
          ))}

          <div className="relative z-10 text-center">
            <div className="mb-6 inline-block brut-border bg-acid px-3 py-1 font-mono text-xs uppercase tracking-widest">
              ✺ India · Est. 2021 · 4,200+ members
            </div>
            <h1 className="font-display text-[18vw] leading-[0.85] md:text-[14vw] lg:text-[12rem]">
              <span className="block">The Design</span>
              <span className="block text-hot italic font-serif normal-case">space</span>
              <span className="block">is loud.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl font-serif text-xl italic md:text-2xl">
              We're a real-world art & design community for Indian creatives who refuse to be quiet, polite, or generic.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="https://chat.whatsapp.com/" target="_blank" rel="noreferrer"
                className="brut-border brut-shadow bg-hot px-8 py-4 font-display text-lg uppercase text-paper hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                Join the Community →
              </a>
              <Link to="/events"
                className="brut-border brut-shadow bg-paper px-8 py-4 font-display text-lg uppercase hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                See What's On
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE ARE */}
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div className="font-mono text-xs uppercase tracking-widest text-hot">
              §01 / What this is
            </div>
            <div>
              <h2 className="font-display text-5xl uppercase md:text-7xl">
                Not a network.<br />
                Not a course.<br />
                <span className="text-acid italic font-serif normal-case">A room.</span>
              </h2>
              <p className="mt-8 max-w-3xl font-serif text-2xl leading-snug text-paper/90">
                The Design Space is where Indian designers, illustrators, type nerds, animators, ceramicists, and the chronically curious gather — online on WhatsApp, offline in cities — to make work, share work, and stop feeling like the only weirdo in the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
          <div className="mb-12 flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-5xl uppercase md:text-7xl">
              Six things <span className="text-hot">/</span><br />you'll get hooked on
            </h2>
            <div className="font-mono text-xs uppercase tracking-widest">§02 / Perks</div>
          </div>
          <div className="grid gap-0 border-l-2 border-t-2 border-ink md:grid-cols-3">
            {PERKS.map((p) => (
              <div key={p.n} className="group relative border-b-2 border-r-2 border-ink p-8 transition-colors hover:bg-hot hover:text-paper">
                <div className="font-mono text-xs uppercase tracking-widest opacity-60">{p.n}</div>
                <h3 className="mt-3 font-display text-3xl uppercase">{p.title}</h3>
                <p className="mt-3 font-serif text-lg">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="border-b-2 border-ink bg-acid">
        <div className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
          <div className="mb-8 flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-5xl uppercase md:text-7xl">Watch us be loud.</h2>
            <div className="font-mono text-xs uppercase tracking-widest">§03 / The film</div>
          </div>
          <div className="brut-border brut-shadow relative aspect-video w-full overflow-hidden bg-ink">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/YnOiYWfk5DQ"
              title="The Design Space"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* MERCH + NEWSLETTER STRIP */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">
          <div className="border-b-2 border-ink p-12 md:border-b-0 md:border-r-2">
            <div className="font-mono text-xs uppercase tracking-widest text-hot">§04a / Merch drop</div>
            <h3 className="mt-3 font-display text-5xl uppercase">Wear the noise.</h3>
            <p className="mt-4 font-serif text-lg">
              Riso zines, screen-printed tees, weird enamel pins. Drops every quarter. Last one sold out in 11 hours.
            </p>
            <button className="mt-6 brut-border brut-shadow-sm bg-ink px-6 py-3 font-display uppercase text-paper hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              Shop the Drop →
            </button>
          </div>
          <div className="bg-hot p-12 text-paper">
            <div className="font-mono text-xs uppercase tracking-widest text-acid">§04b / Newsletter</div>
            <h3 className="mt-3 font-display text-5xl uppercase">The Bulletin.</h3>
            <p className="mt-4 font-serif text-lg">
              Bi-weekly. Studio visits, member spotlights, jobs, the weird stuff we've found on the internet.
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
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-4 py-32 text-center sm:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-hot">§05 / Final word</div>
          <h2 className="mt-6 font-display text-[15vw] leading-[0.85] md:text-[10vw]">
            Stop lurking.<br />
            <span className="text-hot italic font-serif normal-case">Start showing up.</span>
          </h2>
          <a href="https://chat.whatsapp.com/" target="_blank" rel="noreferrer"
            className="mt-12 inline-block brut-border brut-shadow bg-acid px-12 py-6 font-display text-2xl uppercase text-ink hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all">
            Join the Community →
          </a>
          <div className="mt-8 font-mono text-xs uppercase tracking-widest text-paper/60">
            free · always · no algorithms
          </div>
        </div>
      </section>
    </Layout>
  );
}
