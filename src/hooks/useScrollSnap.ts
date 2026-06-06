import { useEffect, useRef } from "react";

/**
 * Attaches a scroll-snap listener to the returned ref.
 * Snaps the section into full-screen view when the user stops scrolling
 * near it — both on the way down and on the way back up.
 * Does NOT interfere once the user has scrolled well past the section.
 */
export function useScrollSnap() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    let snapTimer: ReturnType<typeof setTimeout>;
    let isSnapping  = false;
    let lastScrollY = window.scrollY;
    let goingDown   = true;

    const onScrollEnd = () => {
      const top = section.getBoundingClientRect().top;
      const vh  = window.innerHeight;

      // Approaching from below (scrolling down)
      if (goingDown && top > 40 && top < vh * 0.65) {
        isSnapping = true;
        window.scrollTo({ top: window.scrollY + top, behavior: "smooth" });
        setTimeout(() => { isSnapping = false; }, 900);
        return;
      }
      // Approaching from above (scrolling up)
      if (!goingDown && top < -20 && top > -(vh * 0.55)) {
        isSnapping = true;
        window.scrollTo({ top: window.scrollY + top, behavior: "smooth" });
        setTimeout(() => { isSnapping = false; }, 900);
      }
    };

    const onScroll = () => {
      const y   = window.scrollY;
      goingDown = y >= lastScrollY;
      lastScrollY = y;
      if (isSnapping) return;
      clearTimeout(snapTimer);
      snapTimer = setTimeout(onScrollEnd, 350);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(snapTimer);
    };
  }, []);

  return ref;
}
