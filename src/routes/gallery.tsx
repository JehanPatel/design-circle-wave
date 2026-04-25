import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useMemo, useState } from "react";
import { DraggablePill } from "@/components/DraggablePill";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Design Space" },
      { name: "description", content: "A living wall of work, photos and weirdness from the Design Space community across India." },
      { property: "og:title", content: "Gallery — The Design Space" },
      { property: "og:description", content: "Community work, event photography, riso prints, sketchbook scraps." },
    ],
  }),
  component: GalleryPage,
});

type Cat = "illustration" | "type" | "photo" | "product" | "event" | "riso";
type Item = { id: number; creator: string; category: Cat; src: string; alt: string };

const CATS: { id: "all" | Cat; label: string; color: string; x: number; y: number; r: number }[] = [
  { id: "all", label: "All", color: "bg-ink text-paper", x: 20, y: 10, r: -4 },
  { id: "illustration", label: "Illustration", color: "bg-hot text-paper", x: 180, y: 30, r: 3 },
  { id: "type", label: "Type", color: "bg-acid", x: 380, y: 0, r: -2 },
  { id: "photo", label: "Photography", color: "bg-cobalt text-paper", x: 470, y: 50, r: 4 },
  { id: "product", label: "Product", color: "bg-paper", x: 650, y: 10, r: -3 },
  { id: "event", label: "Event Pics", color: "bg-acid", x: 780, y: 50, r: 2 },
  { id: "riso", label: "Riso", color: "bg-hot text-paper", x: 940, y: 5, r: -5 },
];

const GALLERY_ITEMS: Item[] = [
  { id: 1, creator: "Aanya Kapoor", category: "type", src: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=900", alt: "Type specimen" },
  { id: 2, creator: "Rohan Iyer", category: "illustration", src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900", alt: "Illustration" },
  { id: 3, creator: "Meher Sethi", category: "riso", src: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=900", alt: "Riso print" },
  { id: 4, creator: "Kabir Banerjee", category: "photo", src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900", alt: "Street photo" },
  { id: 5, creator: "Tara Pillai", category: "product", src: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=900", alt: "Ceramic" },
  { id: 6, creator: "Veer Joshi", category: "event", src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900", alt: "Meetup" },
  { id: 7, creator: "Nia D'Souza", category: "illustration", src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=900", alt: "Pattern" },
  { id: 8, creator: "Ishaan Reddy", category: "type", src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=900", alt: "Lettering" },
  { id: 9, creator: "Saanvi Nair", category: "event", src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900", alt: "Studio crawl" },
  { id: 10, creator: "Dev Malhotra", category: "photo", src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900", alt: "Architecture" },
  { id: 11, creator: "Anika Bose", category: "riso", src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900", alt: "Riso poster" },
  { id: 12, creator: "Pooja Krishnan", category: "type", src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=900", alt: "Sign painting" },
  { id: 13, creator: "Arjun Mehta", category: "event", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900", alt: "Talk night" },
  { id: 14, creator: "Yuvraj Singh", category: "illustration", src: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=900", alt: "Sketch" },
  { id: 15, creator: "Aanya Kapoor", category: "product", src: "https://images.unsplash.com/photo-1606293459209-a83bbacb33df?w=900", alt: "Zine" },
  { id: 16, creator: "Rohan Iyer", category: "photo", src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?w=900", alt: "Studio" },
  { id: 17, creator: "Meher Sethi", category: "illustration", src: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=900", alt: "Painting" },
  { id: 18, creator: "Tara Pillai", category: "riso", src: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=900", alt: "Risograph" },
];

function GalleryPage() {
  const [cat, setCat] = useState<"all" | Cat>("all");
  const items = useMemo(() => (cat === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === cat)), [cat]);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden py-16">
        <div className="halftone absolute -left-20 top-10 h-[300px] w-[300px] rounded-full opacity-20" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-hot">// the wall</div>
          <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[10rem]">
            Look <span className="font-serif italic normal-case text-hot">at all</span> this.
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl">
            A messy, ever-growing wall of work made by Design Space members & snapshots from rooms we've filled across India.
          </p>
        </div>
      </section>

      {/* DRAGGABLE FILTER PILLS — replace the strip */}
      <section className="relative py-8">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="mb-3 font-mono text-xs uppercase tracking-widest">grab a category · drop it where you want</div>
          {/* desktop: draggable */}
          <div className="relative hidden h-[140px] w-full md:block">
            {CATS.map((c, i) => (
              <DraggablePill
                key={c.id}
                initialX={c.x}
                initialY={c.y}
                rotate={c.r}
                zHint={10 + i}
                className={`brut-border brut-shadow-sm ${cat === c.id ? "ring-4 ring-hot" : ""} ${c.color} px-4 py-2`}
              >
                <button
                  onClick={() => setCat(c.id)}
                  className="font-display text-base uppercase"
                  // prevent click from being treated as drag-end if moved
                >
                  {c.label}
                </button>
              </DraggablePill>
            ))}
          </div>
          {/* mobile: regular row */}
          <div className="flex flex-wrap gap-2 md:hidden">
            {CATS.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`brut-border px-3 py-1.5 font-display text-sm uppercase ${cat === c.id ? "bg-hot text-paper" : "bg-paper"}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MASONRY — tilted, no strip lines */}
      <section className="relative py-8">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {items.map((i, idx) => {
              const tilt = ((idx % 5) - 2) * 0.8;
              return (
                <figure
                  key={i.id}
                  className="group brut-border brut-shadow-sm relative break-inside-avoid overflow-hidden bg-ink"
                  style={{ transform: `rotate(${tilt}deg)` }}
                >
                  <img
                    src={i.src}
                    alt={i.alt}
                    loading="lazy"
                    className="block w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 p-4 text-paper transition-transform duration-300 group-hover:translate-y-0">
                    <div className="font-display text-lg uppercase">{i.creator}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-hot">↳ {i.category}</div>
                  </figcaption>
                  {idx === 0 && (
                    <div className="absolute -left-2 -top-2 z-10 brut-border bg-acid px-2 py-1 font-mono text-[10px] uppercase" style={{ transform: "rotate(-12deg)" }}>
                      ★ pick of the week
                    </div>
                  )}
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-hot py-24 text-paper">
        <div className="halftone absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1400px] px-4 text-center sm:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-acid">// submit</div>
          <h2 className="mt-4 font-display text-[12vw] leading-[0.9] md:text-[7rem]">
            Got something <span className="font-serif italic normal-case">weird?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl">
            We curate fortnightly. Drop work you're proud of, work-in-progress, or that thing your mum doesn't get.
          </p>
          <a href="mailto:wall@thedesignspace.in" className="mt-10 inline-block brut-border brut-shadow bg-paper px-10 py-5 font-display text-xl uppercase text-ink hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all">
            Submit your work →
          </a>
        </div>
      </section>
    </Layout>
  );
}
