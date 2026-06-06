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

    const snapToSectionTop = () => {
      if (isSnapping) return;
      isSnapping = true;
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
      setTimeout(() => { isSnapping = false; }, 1100);
    };

    const onScrollEnd = () => {
      const { top, bottom } = section.getBoundingClientRect();
      const vh  = window.innerHeight;

      // Approaching from below (scrolling down)
      if (goingDown && top > 16 && top < vh * 0.9) {
        snapToSectionTop();
        return;
      }

      // Approaching from below the section, such as scrolling up from footer.
      if (!goingDown && top < -16 && bottom > vh * 0.12) {
        snapToSectionTop();
      }
    };

    const onScroll = () => {
      const y   = window.scrollY;
      goingDown = y >= lastScrollY;
      lastScrollY = y;
      if (isSnapping) return;
      clearTimeout(snapTimer);
      snapTimer = setTimeout(onScrollEnd, 420);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(snapTimer);
    };
  }, []);

  return ref;
}
