import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState } from "react";

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
  { q: "Is it free to join?", a: "Always. The WhatsApp groups, events, gallery — all free. We sometimes charge for workshops and merch to keep the lights on." },
  { q: "I'm not a 'designer designer'. Can I still join?", a: "Yes. Illustrators, animators, ceramicists, type nerds, photographers, students, hobbyists, the chronically curious — all welcome." },
  { q: "My city isn't listed. What now?", a: "Email leads@thedesignspace.in. If you're up for hosting one meetup, you're already a Spark. We'll send you the playbook." },
  { q: "Do you do brand partnerships?", a: "Selectively. We don't run banner ads. We do collaborate on workshops, zines, and events with brands we genuinely like." },
  { q: "Can I sponsor an event?", a: "Yes — drop us a line at hello@thedesignspace.in with what you have in mind." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-acid">§ Contact · Talk to us</div>
          <h1 className="mt-4 font-display text-[14vw] leading-[0.85] md:text-[10rem]">
            Say <span className="font-serif italic normal-case text-hot">something.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl">
            Press? Partnerships? Want to host? Just want to argue about kerning? We read everything.
          </p>
        </div>
      </section>

      <section className="border-b-2 border-ink">
        <div className="mx-auto grid max-w-[1400px] gap-0 md:grid-cols-[1fr_1.4fr]">
          {/* Details */}
          <div className="border-b-2 border-ink p-10 md:border-b-0 md:border-r-2 sm:p-14">
            <div className="font-mono text-xs uppercase tracking-widest text-hot">§ Reach</div>
            <h2 className="mt-3 font-display text-4xl uppercase">The Details</h2>

            <div className="mt-8 space-y-6 font-serif text-lg">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">General</div>
                <a href="mailto:hello@thedesignspace.in" className="block underline decoration-hot decoration-4 underline-offset-4">hello@thedesignspace.in</a>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">City Leads</div>
                <a href="mailto:leads@thedesignspace.in" className="block underline decoration-hot decoration-4 underline-offset-4">leads@thedesignspace.in</a>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Press / Partnerships</div>
                <a href="mailto:press@thedesignspace.in" className="block underline decoration-hot decoration-4 underline-offset-4">press@thedesignspace.in</a>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">HQ</div>
                <p>Bandra West, Mumbai 400050<br />India</p>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Socials</div>
                <div className="flex gap-3">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="brut-border brut-shadow-sm bg-acid px-3 py-1 font-display text-sm uppercase">IG</a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="brut-border brut-shadow-sm bg-paper px-3 py-1 font-display text-sm uppercase">X</a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="brut-border brut-shadow-sm bg-hot px-3 py-1 font-display text-sm uppercase text-paper">YT</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-acid p-10 sm:p-14">
            <div className="font-mono text-xs uppercase tracking-widest">§ Or write to us</div>
            <h2 className="mt-3 font-display text-4xl uppercase">Drop a Note</h2>

            {sent ? (
              <div className="mt-10 brut-border bg-paper p-8 text-center">
                <div className="font-display text-3xl uppercase">Got it ✺</div>
                <p className="mt-3 font-serif text-lg">We'll write back within 48 hours. Usually sooner. Sometimes loudly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-8 space-y-5"
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
                  <textarea required rows={5} className="mt-1 block w-full border-2 border-ink bg-paper px-4 py-3 font-mono focus:bg-ink focus:text-paper focus:outline-none" />
                </div>
                <button className="brut-border brut-shadow bg-hot px-8 py-4 font-display text-lg uppercase text-paper hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                  Send it →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
          <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-5xl uppercase md:text-7xl">
              Asked <span className="text-hot">/</span> Answered
            </h2>
            <div className="font-mono text-xs uppercase tracking-widest">§ FAQ</div>
          </div>
          <div className="brut-border divide-y-2 divide-ink bg-paper">
            {FAQS.map((f) => (
              <details key={f.q} className="group p-6 open:bg-acid">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl uppercase">
                  {f.q}
                  <span className="grid h-8 w-8 place-items-center border-2 border-ink bg-paper font-mono text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 max-w-3xl font-serif text-lg">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
