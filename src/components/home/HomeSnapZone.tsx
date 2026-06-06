"use client";

import { useEffect, useRef } from "react";

type HomeSnapZoneProps = {
  children: React.ReactNode;
};

export default function HomeSnapZone({ children }: HomeSnapZoneProps) {
  const zoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const zone = zoneRef.current;
    if (!zone) return;

    // threshold 0.2 — fires when ~80 vh of the snap zone is visible, meaning
    // the first section is substantially in view and IntroSection is done.
    // Previously 0.25, which is the *exact* max ratio for a 4-section zone
    // (100vh / 400vh) — browsers may never reach it due to floating-point
    // imprecision, so the class was silently never applied.
    const observer = new IntersectionObserver(
      ([entry]) => {
        document.documentElement.classList.toggle(
          "home-section-snap",
          entry.isIntersecting
        );
      },
      { threshold: 0.2 }
    );

    const onResize = () => {
      document.documentElement.classList.toggle(
        "home-section-snap",
        zone.getBoundingClientRect().bottom > 0 &&
          zone.getBoundingClientRect().top < window.innerHeight
      );
    };

    observer.observe(zone);
    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      document.documentElement.classList.remove("home-section-snap");
    };
  }, []);

  return <div ref={zoneRef}>{children}</div>;
}
