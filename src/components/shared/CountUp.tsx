"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
};

export function CountUp({ target, duration = 1500, prefix = "", suffix = "" }: Props) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) {
      setN(target);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setN(Math.round(target * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}
