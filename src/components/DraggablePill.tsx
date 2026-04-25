import { useRef, useState, useEffect, type ReactNode, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  initialX: number; // px or vw — we use px after mount
  initialY: number;
  rotate?: number;
  className?: string;
  style?: CSSProperties;
  zHint?: number;
};

/**
 * Throwable pill: pointer drag with momentum (inertia) and bounds collision.
 * Double-click spins it. It remembers being grabbed.
 */
export function DraggablePill({
  children,
  initialX,
  initialY,
  rotate = 0,
  className = "",
  style,
  zHint = 1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [rot, setRot] = useState(rotate);
  const [dragging, setDragging] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const drag = useRef({
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
    lastX: 0,
    lastY: 0,
    lastT: 0,
    vx: 0,
    vy: 0,
    moved: false,
  });
  const raf = useRef<number | null>(null);

  // physics step for inertia after release
  useEffect(() => {
    if (dragging) return;
    let vx = drag.current.vx;
    let vy = drag.current.vy;
    if (Math.abs(vx) < 0.2 && Math.abs(vy) < 0.2) return;

    const tick = () => {
      vx *= 0.94;
      vy *= 0.94;
      setPos((p) => {
        const parent = ref.current?.parentElement;
        const w = parent?.clientWidth ?? window.innerWidth;
        const h = parent?.clientHeight ?? window.innerHeight;
        const el = ref.current;
        const ew = el?.offsetWidth ?? 100;
        const eh = el?.offsetHeight ?? 40;
        let nx = p.x + vx;
        let ny = p.y + vy;
        if (nx < 0) { nx = 0; vx = -vx * 0.5; }
        if (ny < 0) { ny = 0; vy = -vy * 0.5; }
        if (nx + ew > w) { nx = w - ew; vx = -vx * 0.5; }
        if (ny + eh > h) { ny = h - eh; vy = -vy * 0.5; }
        return { x: nx, y: ny };
      });
      setRot((r) => r + vx * 0.3);
      if (Math.abs(vx) > 0.2 || Math.abs(vy) > 0.2) {
        raf.current = requestAnimationFrame(tick);
      }
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [dragging]);

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as Element).setPointerCapture(e.pointerId);
    drag.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: pos.x,
      origY: pos.y,
      lastX: e.clientX,
      lastY: e.clientY,
      lastT: performance.now(),
      vx: 0,
      vy: 0,
      moved: false,
    };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - drag.current.startX;
    const dy = e.clientY - drag.current.startY;
    if (Math.abs(dx) + Math.abs(dy) > 3) drag.current.moved = true;
    const now = performance.now();
    const dt = Math.max(1, now - drag.current.lastT);
    drag.current.vx = ((e.clientX - drag.current.lastX) / dt) * 16;
    drag.current.vy = ((e.clientY - drag.current.lastY) / dt) * 16;
    drag.current.lastX = e.clientX;
    drag.current.lastY = e.clientY;
    drag.current.lastT = now;
    setPos({ x: drag.current.origX + dx, y: drag.current.origY + dy });
  };

  const onPointerUp = () => setDragging(false);

  const onDoubleClick = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 700);
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onDoubleClick={onDoubleClick}
      className={`pill-drag absolute ${dragging ? "is-dragging" : ""} ${spinning ? "spin-once" : ""} ${className}`}
      style={{
        left: pos.x,
        top: pos.y,
        transform: `rotate(${rot}deg)`,
        zIndex: dragging ? 200 : zHint,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
