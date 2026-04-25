import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="font-display text-4xl uppercase leading-none">
            The Design<br />Space<span className="text-hot">.</span>
          </div>
          <p className="mt-4 max-w-xs font-serif text-lg italic text-paper/80">
            India's loudest room for designers, artists & weird makers. We meet on WhatsApp, in basements, on rooftops.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-hot">Wander</h4>
          <ul className="space-y-2 font-display uppercase">
            <li><Link to="/" className="hover:text-acid">Home</Link></li>
            <li><Link to="/events" className="hover:text-acid">Events</Link></li>
            <li><Link to="/city-leads" className="hover:text-acid">City Leads</Link></li>
            <li><Link to="/gallery" className="hover:text-acid">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-acid">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-hot">Stalk Us</h4>
          <ul className="space-y-2 font-display uppercase">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-acid">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-acid">Twitter / X</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-acid">YouTube</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-acid">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-hot">Whisper</h4>
          <p className="font-mono text-sm text-paper/80">hello@<br />thedesignspace.in</p>
          <p className="mt-3 font-mono text-sm text-paper/80">Mumbai HQ<br />everywhere else</p>
        </div>
      </div>

      <div className="border-t border-paper/20 py-4 text-center font-mono text-xs uppercase tracking-widest text-paper/50">
        © {new Date().getFullYear()} The Design Space — handcoded with love & noise
      </div>
    </footer>
  );
}
