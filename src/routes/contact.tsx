import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { DraggablePill } from "@/components/DraggablePill";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Design Space" },
      { name: "description", content: "Get in touch with The Design Space team. Partnerships, press, city leads, or just say hi." },
      { property: "og:title", content: "Contact — The Design Space" },
      { property: "og:description", content: "Reach out for partnerships, press, city leads, or to say hi." },
    ],
  }),
  component: ContactPage,
});

const FAQS = [
  { q: "Is it free to join?", a: "Always. WhatsApp groups, events, gallery — all free. We sometimes charge for workshops and merch to keep the lights on." },
  { q: "I'm not a 'designer designer'. Can I still join?", a: "Yes. Illustrators, animators, ceramicists, type nerds, photographers, students, hobbyists — all welcome." },
  { q: "My city isn't listed. What now?", a: "Email leads@thedesignspace.in. If you're up for hosting one meetup, you're already a Spark." },
  { q: "Do you do brand partnerships?", a: "Selectively. No banner ads. We collab on workshops, zines, and events with brands we genuinely like." },
  { q: "Can I sponsor an event?", a: "Yes — drop us a line at hello@thedesignspace.in with what you have in mind." },
];

const STICKIES = [
  { label: "hello@thedesignspace.in", sub: "general", color: "bg-acid", x: 20, y: 30, r: -5 },
  { label: "leads@thedesignspace.in", sub: "city leads", color: "bg-hot text-paper", x: 260, y: 80, r: 4 },
  { label: "press@thedesignspace.in", sub: "press / partners", color: "bg-cobalt text-paper", x: 60, y: 220, r: 3 },
  { label: "Bandra West, Mumbai", sub: "HQ", color: "bg-paper", x: 280, y: 240, r: -3 },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="halftone absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-acid">// talk to us</div>
          <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[10rem]">
            Say <span className="font-serif italic normal-case text-hot">something.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl">
            Press? Partnerships? Want to host? Just want to argue about kerning? We read everything.
          </p>
        </div>
      </section>

      {/* DETAILS + FORM as collage, not strip */}
      <section className="relative overflow-hidden py-20">
        <div className="halftone absolute -right-32 top-20 h-[400px] w-[400px] rounded-full opacity-15" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid gap-16 md:grid-cols-2">
            {/* left: scattered draggable contact stickies */}
            <div>
              <div className="mb-3 font-mono text-xs uppercase tracking-widest text-hot">// the details · grab them</div>
              <div className="relative h-[420px]">
                {STICKIES.map((s, i) => (
                  <DraggablePill
                    key={s.label}
                    initialX={s.x}
                    initialY={s.y}
                    rotate={s.r}
                    zHint={5 + i}
                    className={`brut-border brut-shadow w-[260px] ${s.color} p-4`}
                  >
                    <div className="font-mono text-[10px] uppercase tracking-widest opacity-70">{s.sub}</div>
                    <div className="mt-1 font-display text-lg uppercase break-words">{s.label}</div>
                  </DraggablePill>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="brut-border brut-shadow-sm bg-acid px-3 py-1 font-display text-sm uppercase">IG</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="brut-border brut-shadow-sm bg-paper px-3 py-1 font-display text-sm uppercase">X</a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="brut-border brut-shadow-sm bg-hot px-3 py-1 font-display text-sm uppercase text-paper">YT</a>
              </div>
            </div>

            {/* right: form as a tilted card */}
            <div className="relative">
              <div className="absolute -top-3 left-10 z-10 h-7 w-24 bg-hot/60 brut-border" style={{ transform: "rotate(-6deg)" }} />
              <div className="brut-border brut-shadow bg-acid p-8 sm:p-10" style={{ transform: "rotate(0.6deg)" }}>
                <div className="font-mono text-xs uppercase tracking-widest">// drop a note</div>
                <h2 className="mt-2 font-display text-4xl uppercase">Write to us.</h2>

                {sent ? (
                  <div className="mt-8 brut-border bg-paper p-8 text-center stamp">
                    <div className="font-display text-3xl uppercase">Got it ✺</div>
                    <p className="mt-3 font-serif text-lg">We'll write back within 48 hours. Usually sooner.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                    className="mt-6 space-y-4"
                  >
                    <div>
                      <label className="font-mono text-xs uppercase tracking-widest">Name</label>
                      <input required type="text" className="mt-1 block w-full border-2 border-ink bg-paper px-4 py-3 font-mono focus:bg-ink focus:text-paper focus:outline-none" />
                    </div>
                    <div>
                      <label className="font-mono text-xs uppercase tracking-widest">Email</label>
                      <input required type="email" className="mt-1 block w-full border-2 border-ink bg-paper px-4 py-3 font-mono focus:bg-ink focus:text-paper focus:outline-none" />
                    </div>
                    <div>
                      <label className="font-mono text-xs uppercase tracking-widest">Subject</label>
                      <select className="mt-1 block w-full border-2 border-ink bg-paper px-4 py-3 font-mono">
                        <option>General hello</option>
                        <option>I want to host in my city</option>
                        <option>Press / Media</option>
                        <option>Partnership / Sponsorship</option>
                        <option>Submit work to the gallery</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-mono text-xs uppercase tracking-widest">Message</label>
                      <textarea required rows={4} className="mt-1 block w-full border-2 border-ink bg-paper px-4 py-3 font-mono focus:bg-ink focus:text-paper focus:outline-none" />
                    </div>
                    <button className="brut-border brut-shadow bg-hot px-8 py-4 font-display text-lg uppercase text-paper hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                      Send it →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — taped notes, not a strip */}
      <section className="relative overflow-hidden py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-8">
          <div className="mb-8 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-hot">// faq</div>
            <h2 className="mt-2 font-display text-5xl uppercase md:text-7xl">
              Asked <span className="text-hot">/</span> Answered
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                className="group brut-border brut-shadow-sm bg-paper p-5 open:bg-acid"
                style={{ transform: `rotate(${(i % 2 === 0 ? -0.6 : 0.6)}deg)` }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl uppercase">
                  {f.q}
                  <span className="grid h-8 w-8 place-items-center border-2 border-ink bg-paper font-mono text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 max-w-3xl font-serif text-lg">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center font-mono text-xs uppercase tracking-widest opacity-60">
            psst — try the konami code · ↑↑↓↓←→←→ b a
          </div>
        </div>
      </section>
    </Layout>
  );
}
