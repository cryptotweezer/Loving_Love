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

    // threshold 0.25 — snap activates only once a meaningful portion of the
    // snap zone is visible, preventing early activation while IntroSection
    // is still animating at its very end.
    const observer = new IntersectionObserver(
      ([entry]) => {
        document.documentElement.classList.toggle(
          "home-section-snap",
          entry.isIntersecting
        );
      },
      { threshold: 0.25 }
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
