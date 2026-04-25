import { useEffect, useState } from "react";

/**
 * Global easter eggs:
 *  - Konami code → confetti rain + "you found us" stamp
 *  - Type "loud" anywhere → page shakes
 *  - Console love note on mount
 */
export function EasterEggs() {
  const [confetti, setConfetti] = useState(false);
  const [stamp, setStamp] = useState(false);

  useEffect(() => {
    // console love note
     
    console.log(
      "%c✺ THE DESIGN SPACE %c\nyou opened devtools. nice. \ntry the konami code. or type 'loud'. or click the ✺ logo.",
      "background:#e8385a;color:#f7f3e3;font:700 14px monospace;padding:4px 8px",
      "color:#1a1a1a;font:italic 12px serif"
    );

    const konami = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
    let k = 0;
    let typed = "";
    let typedT: ReturnType<typeof setTimeout> | null = null;

    const onKey = (e: KeyboardEvent) => {
      // konami
      if (e.key === konami[k]) {
        k++;
        if (k === konami.length) {
          k = 0;
          setConfetti(true);
          setStamp(true);
          setTimeout(() => setConfetti(false), 2200);
          setTimeout(() => setStamp(false), 3500);
        }
      } else {
        k = e.key === konami[0] ? 1 : 0;
      }
      // typed-word "loud"
      if (e.key.length === 1) {
        typed = (typed + e.key.toLowerCase()).slice(-4);
        if (typed === "loud") {
          document.body.classList.add("shake-it");
          if (typedT) clearTimeout(typedT);
          typedT = setTimeout(() => document.body.classList.remove("shake-it"), 420);
          typed = "";
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {confetti && (
        <div className="pointer-events-none fixed inset-0 z-[300] overflow-hidden">
          {Array.from({ length: 80 }).map((_, i) => {
            const colors = ["bg-hot", "bg-acid", "bg-cobalt", "bg-ink"];
            const c = colors[i % colors.length];
            const left = Math.random() * 100;
            const cx = (Math.random() - 0.5) * 200;
            const delay = Math.random() * 0.4;
            const size = 8 + Math.random() * 14;
            return (
              <span
                key={i}
                className={`confetti absolute top-[-20px] ${c} brut-border`}
                style={{
                  left: `${left}%`,
                  width: size,
                  height: size,
                  ["--cx" as string]: `${cx}px`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}
        </div>
      )}
      {stamp && (
        <div className="pointer-events-none fixed left-1/2 top-1/2 z-[310] -translate-x-1/2 -translate-y-1/2">
          <div className="stamp brut-border bg-hot px-8 py-4 text-paper" style={{ boxShadow: "8px 8px 0 var(--ink)" }}>
            <div className="font-display text-4xl uppercase">You found us ✺</div>
            <div className="font-mono text-xs uppercase tracking-widest">+1 secret unlocked</div>
          </div>
        </div>
      )}
    </>
  );
}
