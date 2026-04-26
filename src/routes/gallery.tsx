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
type Item = { id: number; creator: string; category: Cat; src: string; srcSet?: string; width: number; height: number; alt: string };

const CATS: { id: "all" | Cat; label: string; color: string; x: number; y: number; r: number }[] = [
  { id: "all", label: "All", color: "bg-ink text-paper", x: 20, y: 10, r: -4 },
  { id: "illustration", label: "Illustration", color: "bg-hot text-paper", x: 180, y: 30, r: 3 },
  { id: "type", label: "Type", color: "bg-acid", x: 380, y: 0, r: -2 },
  { id: "photo", label: "Photography", color: "bg-cobalt text-paper", x: 470, y: 50, r: 4 },
  { id: "product", label: "Product", color: "bg-paper", x: 650, y: 10, r: -3 },
  { id: "event", label: "Event Pics", color: "bg-acid", x: 780, y: 50, r: 2 },
  { id: "riso", label: "Riso", color: "bg-hot text-paper", x: 940, y: 5, r: -5 },
];

const OPTIMIZED_GALLERY_ASSETS = [
  { src: "/gallery/lg-01.jpg", srcSet: "/gallery/sm-01.jpg 640w, /gallery/lg-01.jpg 1400w", width: 1400, height: 1050, alt: "Design Space gallery photo 1" },
  { src: "/gallery/lg-02.jpg", srcSet: "/gallery/sm-02.jpg 640w, /gallery/lg-02.jpg 1400w", width: 1400, height: 1050, alt: "Design Space gallery photo 2" },
  { src: "/gallery/lg-03.jpg", srcSet: "/gallery/sm-03.jpg 640w, /gallery/lg-03.jpg 1400w", width: 1400, height: 1050, alt: "Design Space gallery photo 3" },
  { src: "/gallery/lg-04.jpg", srcSet: "/gallery/sm-04.jpg 640w, /gallery/lg-04.jpg 1400w", width: 1400, height: 787, alt: "Design Space gallery photo 4" },
  { src: "/gallery/lg-05.jpg", srcSet: "/gallery/sm-05.jpg 640w, /gallery/lg-05.jpg 1400w", width: 1400, height: 1866, alt: "Design Space gallery photo 5" },
  { src: "/gallery/lg-06.jpg", srcSet: "/gallery/sm-06.jpg 640w, /gallery/lg-06.jpg 1400w", width: 1400, height: 1050, alt: "Design Space gallery photo 6" },
  { src: "/gallery/lg-07.jpg", srcSet: "/gallery/sm-07.jpg 640w, /gallery/lg-07.jpg 1400w", width: 1400, height: 1050, alt: "Design Space gallery photo 7" },
  { src: "/gallery/lg-08.jpg", srcSet: "/gallery/sm-08.jpg 640w, /gallery/lg-08.jpg 1400w", width: 1400, height: 687, alt: "Design Space gallery photo 8" },
  { src: "/gallery/lg-09.jpg", srcSet: "/gallery/sm-09.jpg 640w, /gallery/lg-09.jpg 1400w", width: 1400, height: 1050, alt: "Design Space gallery photo 9" },
  { src: "/gallery/lg-10.jpg", srcSet: "/gallery/sm-10.jpg 640w, /gallery/lg-10.jpg 1400w", width: 1400, height: 1868, alt: "Design Space gallery photo 10" },
  { src: "/gallery/lg-11.jpg", srcSet: "/gallery/sm-11.jpg 640w, /gallery/lg-11.jpg 1400w", width: 1400, height: 1050, alt: "Design Space gallery photo 11" },
  { src: "/gallery/lg-12.jpg", srcSet: "/gallery/sm-12.jpg 640w, /gallery/lg-12.jpg 1400w", width: 1400, height: 1866, alt: "Design Space gallery photo 12" },
] as const;

const ROTATING_CATS: Cat[] = ["event", "photo", "illustration", "type", "product", "riso"];

const GALLERY_ITEMS: Item[] = OPTIMIZED_GALLERY_ASSETS.map((asset, idx) => ({
  id: idx + 1,
  creator: "Design Space Community",
  category: ROTATING_CATS[idx % ROTATING_CATS.length],
  src: asset.src,
  srcSet: asset.srcSet,
  width: asset.width,
  height: asset.height,
  alt: asset.alt,
}));

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
                    srcSet={i.srcSet}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt={i.alt}
                    width={i.width}
                    height={i.height}
                    loading="lazy"
                    decoding="async"
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
          <a href="https://chat.whatsapp.com/HGeyxHBttEK9sKHmHeb8ta" target="_blank" rel="noreferrer" className="mt-10 inline-block brut-border brut-shadow bg-paper px-10 py-5 font-display text-xl uppercase text-ink hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all">
            Submit your work →
          </a>
        </div>
      </section>
    </Layout>
  );
}
