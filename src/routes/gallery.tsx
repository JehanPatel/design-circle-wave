import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useMemo, useState } from "react";

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

const CATS: { id: "all" | Cat; label: string }[] = [
  { id: "all", label: "All" },
  { id: "illustration", label: "Illustration" },
  { id: "type", label: "Type" },
  { id: "photo", label: "Photography" },
  { id: "product", label: "Product" },
  { id: "event", label: "Event Pics" },
  { id: "riso", label: "Riso" },
];

// Curated unsplash imagery as placeholder community work
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
      <section className="border-b-2 border-ink bg-acid">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
          <div className="font-mono text-xs uppercase tracking-widest">§ Gallery · Community wall</div>
          <h1 className="mt-4 font-display text-[14vw] leading-[0.85] md:text-[10rem]">
            Look at <span className="font-serif italic normal-case text-hot">all this.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl">
            A messy, ever-growing wall of work made by Design Space members — and snapshots from rooms we've filled across India.
          </p>
        </div>
      </section>

      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-8">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest">Filter →</span>
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

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {items.map((i) => (
              <figure key={i.id} className="group brut-border relative break-inside-avoid overflow-hidden bg-ink">
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
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-hot text-paper">
        <div className="mx-auto max-w-[1400px] px-4 py-24 text-center sm:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-acid">§ Submit</div>
          <h2 className="mt-4 font-display text-[12vw] leading-[0.9] md:text-[7rem]">
            Got something <span className="font-serif italic normal-case">weird?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl">
            We curate the wall fortnightly. Drop work you're proud of, work-in-progress, or that thing your mum doesn't get.
          </p>
          <a href="mailto:wall@thedesignspace.in" className="mt-10 inline-block brut-border brut-shadow bg-paper px-10 py-5 font-display text-xl uppercase text-ink hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all">
            Submit your work →
          </a>
        </div>
      </section>
    </Layout>
  );
}
