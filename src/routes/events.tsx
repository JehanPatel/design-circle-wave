import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

// One-line config: change this to swap the embedded events board.
const EVENTS_EMBED_URL = "https://lu.ma/embed/calendar/cal-design-space/events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — The Design Space" },
      { name: "description", content: "Studio crawls, sketch nights, portfolio teardowns, gallery hops. All upcoming Design Space events across India." },
      { property: "og:title", content: "Events — The Design Space" },
      { property: "og:description", content: "All upcoming Design Space events across India." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden py-16">
        <div className="halftone absolute -right-20 top-10 h-[400px] w-[400px] rounded-full opacity-20" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-hot">// live calendar</div>
          <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[9rem]">
            Show up.<br />
            <span className="font-serif italic normal-case text-hot">Eat snacks.</span><br />
            Make friends.
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl">
            Sketch nights, studio crawls, portfolio teardowns, riso workshops, gallery hops, kebab dinners. Filter, RSVP, show your face.
          </p>
        </div>
      </section>

      <section className="relative py-8">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-8">
          {/* taped polaroid frame */}
          <div className="relative">
            <div className="absolute -top-3 left-1/3 z-10 h-7 w-24 bg-acid/70 brut-border" style={{ transform: "rotate(-5deg)" }} />
            <div className="absolute -top-3 right-1/3 z-10 h-7 w-24 bg-hot/60 brut-border" style={{ transform: "rotate(6deg)" }} />
            <div className="brut-border brut-shadow bg-paper p-3 md:p-4" style={{ transform: "rotate(-0.4deg)" }}>
              <iframe
                src={EVENTS_EMBED_URL}
                title="Events calendar"
                className="block h-[80vh] w-full border-2 border-ink"
                loading="lazy"
              />
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                <span>// powered by your willingness to show up</span>
                <span className="text-hot">★ rsvp early · we feed everyone</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
