import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/city-leads", label: "City Leads" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [clicks, setClicks] = useState(0);
  const [boom, setBoom] = useState(false);

  const onLogoClick = () => {
    const next = clicks + 1;
    setClicks(next);
    if (next >= 5) {
      setBoom(true);
      setClicks(0);
      setTimeout(() => setBoom(false), 1800);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <Link to="/" className="group flex items-center gap-2" onClick={onLogoClick}>
          <span className={`grid h-10 w-10 place-items-center bg-ink text-paper font-display text-xl wobble ${boom ? "spin-once" : ""}`}>
            ✺
          </span>
          <span className="font-display text-lg uppercase tracking-tight leading-none">
            The Design<br />Space<span className="text-hot">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 font-mono text-xs uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors"
              activeProps={{ className: "px-3 py-2 font-mono text-xs uppercase tracking-widest bg-hot text-paper" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://chat.whatsapp.com/"
          target="_blank"
          rel="noreferrer"
          className="brut-border brut-shadow-sm bg-acid px-4 py-2 font-display text-sm uppercase text-ink hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          Join Community →
        </a>
      </div>
      {boom && (
        <div className="pointer-events-none fixed left-1/2 top-24 z-[400] -translate-x-1/2">
          <div className="stamp brut-border bg-acid px-6 py-3" style={{ boxShadow: "6px 6px 0 var(--ink)" }}>
            <div className="font-display text-2xl uppercase">★ secret tap ★</div>
            <div className="font-mono text-[10px] uppercase">try the konami code next</div>
          </div>
        </div>
      )}
    </header>
  );
}
