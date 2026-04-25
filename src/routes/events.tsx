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
      <section className="border-b-2 border-ink bg-hot text-paper">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
          <div className="font-mono text-xs uppercase tracking-widest text-acid">§ Events · Live calendar</div>
          <h1 className="mt-4 font-display text-[15vw] leading-[0.85] md:text-[10vw]">
            Show up.<br />
            <span className="font-serif italic normal-case">Eat snacks.</span><br />
            Make friends.
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl">
            Sketch nights, studio crawls, portfolio teardowns, riso workshops, gallery hops, kebab dinners. Filter, RSVP, show your face.
          </p>
        </div>
      </section>

      <section className="border-b-2 border-ink">
        <div className="brut-border-0 relative w-full">
          <iframe
            src={EVENTS_EMBED_URL}
            title="Events calendar"
            className="block h-[80vh] w-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}
