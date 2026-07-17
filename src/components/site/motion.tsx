import { useEffect, useRef, useState } from "react";

export function MountainDivider({
  from = "#FFFFFF",
  to = "#F5F5F5",
  flip = false,
}: {
  from?: string;
  to?: string;
  flip?: boolean;
}) {
  return (
    <div className="w-full leading-[0]" style={{ background: from }} aria-hidden>
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={`block h-[60px] md:h-[90px] w-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,0 L360,60 L720,10 L1080,70 L1440,20 L1440,90 L0,90 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}

/** Animated counter that fires once when scrolled into view. */
export function CountUp({
  end,
  suffix = "",
  duration = 1400,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(end);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(end * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/** Fade-up on scroll into view (once). */
export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }: {
  children: React.ReactNode;
  delay?: number;
  as?: any;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as any}
      style={{ animationDelay: `${delay}ms` }}
      className={[className, shown ? "animate-fade-up" : "opacity-0"].join(" ")}
    >
      {children}
    </Tag>
  );
}
