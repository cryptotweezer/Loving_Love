"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// ─── Snap points (scrollYProgress) — desktop only ─────────────────────────────
// target: ideal progress for this panel to look perfect.
// Only snap when scrolling DOWN and progress is between min and target+0.04
// (slightly past is OK — user hasn't truly scrolled past yet).
const SNAP_POINTS = [
  { target: 0.62, min: 0.52 }, // Lena panel settled
  { target: 0.81, min: 0.72 }, // Ceremony panel settled
  { target: 0.95, min: 0.88 }, // CTA — target matches end of track animation
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Welcome text ─────────────────────────────────────────────────────────────
  // Starts fully visible — no fade-in → no white flash on mobile.
  const welcomeOp = useTransform(scrollYProgress, [0.18, 0.42], [1, 0]);
  const line1Y    = useTransform(scrollYProgress, [0.18, 0.44], ["0vh", "-70vh"]);
  const line2Y    = useTransform(scrollYProgress, [0.18, 0.44], ["0vh",  "70vh"]);

  // ── Horizontal track ─────────────────────────────────────────────────────────
  // Animation completes at 0.95 (not 1.00) — leaves a 5% buffer at the bottom
  // so iOS rubber-band scrolling doesn't interfere with the CTA entrance.
  const trackX = useTransform(
    scrollYProgress,
    [0.42,     0.58,   0.65,   0.80,    0.82,   0.95,      1.00],
    ["100vw", "0vw",  "0vw", "-100vw", "-100vw", "-200vw", "-200vw"]
  );

  // ── Within-panel: Lena ───────────────────────────────────────────────────────
  const lenaTitleOp = useTransform(scrollYProgress, [0.46, 0.58], [0, 1]);
  const lenaTitleY  = useTransform(scrollYProgress, [0.46, 0.58], [32, 0]);
  const lenaBodyOp  = useTransform(scrollYProgress, [0.50, 0.62], [0, 1]);
  const lenaBodyY   = useTransform(scrollYProgress, [0.50, 0.62], [24, 0]);
  const lenaImgOp   = useTransform(scrollYProgress, [0.44, 0.58], [0, 1]);

  // ── Within-panel: Ceremony ───────────────────────────────────────────────────
  const cerTitleOp  = useTransform(scrollYProgress, [0.68, 0.80], [0, 1]);
  const cerTitleY   = useTransform(scrollYProgress, [0.68, 0.80], [32, 0]);
  const cerBodyOp   = useTransform(scrollYProgress, [0.72, 0.83], [0, 1]);
  const cerBodyY    = useTransform(scrollYProgress, [0.72, 0.83], [24, 0]);
  const cerImgOp    = useTransform(scrollYProgress, [0.66, 0.80], [0, 1]);

  // ── Within-panel: CTA ────────────────────────────────────────────────────────
  const ctaOp = useTransform(scrollYProgress, [0.85, 0.93, 1.00], [0, 1, 1]);
  const ctaY  = useTransform(scrollYProgress, [0.85, 0.93, 1.00], [32, 0, 0]);

  // ── Desktop scroll snap ───────────────────────────────────────────────────────
  // Snaps ONLY when scrolling DOWN and the user has paused near a panel's
  // ideal position. Direction-aware so it never pulls the user backward.
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    let scrollTimer: ReturnType<typeof setTimeout>;
    let isSnapping      = false;
    let lastSnappedAt   = -1;   // progress of last snap — prevents re-snap loop
    let lastScrollY     = window.scrollY;
    let goingDown       = true;

    const getProgress = (): number => {
      const el = containerRef.current;
      if (!el) return -1;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return -1;
      return Math.max(0, Math.min(1, -el.getBoundingClientRect().top / scrollable));
    };

    const snapTo = (target: number) => {
      const el = containerRef.current;
      if (!el || isSnapping) return;
      // Prevent re-snapping to the same point immediately after landing
      if (Math.abs(target - lastSnappedAt) < 0.04) return;

      const scrollable   = el.offsetHeight - window.innerHeight;
      const containerTop = window.scrollY + el.getBoundingClientRect().top;
      const targetY      = containerTop + target * scrollable;

      isSnapping    = true;
      lastSnappedAt = target;
      window.scrollTo({ top: targetY, behavior: "smooth" });
      // Release after smooth scroll has settled
      setTimeout(() => { isSnapping = false; }, 900);
    };

    const onScrollEnd = () => {
      // Only snap when scrolling DOWN — never pull the user backward
      if (!goingDown) return;

      const progress = getProgress();
      // Only act if inside the animated panels zone
      if (progress < 0.42 || progress > 0.98) return;

      for (const { target, min } of SNAP_POINTS) {
        // Trigger range: from min up to target + small overshoot tolerance
        const max = target + 0.04;
        if (progress >= min && progress <= max) {
          snapTo(target);
          break;
        }
      }
    };

    const onScroll = () => {
      const y   = window.scrollY;
      goingDown = y >= lastScrollY;
      lastScrollY = y;

      // Reset lastSnappedAt when the user scrolls significantly away from
      // the last snap — so they can re-enter that range and snap again if needed
      const p = getProgress();
      if (p >= 0 && Math.abs(p - lastSnappedAt) > 0.12) lastSnappedAt = -1;

      if (isSnapping) return;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(onScrollEnd, 240);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-white"
      style={{ height: "550vh" }}
    >
      <div
        className="sticky top-0 w-full overflow-hidden bg-white"
        style={{ height: "100svh" }}
      >

        {/* ══ Layer 1 — Welcome text ═══════════════════════════════════════ */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center
                     pointer-events-none z-10 px-6 text-center"
          style={{ opacity: welcomeOp }}
        >
          <motion.p
            className="font-display font-normal text-neutral-900 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", y: line1Y }}
          >
            A big congratulations to you
          </motion.p>
          <motion.p
            className="font-display font-normal text-neutral-900 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", y: line2Y }}
          >
            and thanks for visiting!
          </motion.p>
        </motion.div>

        {/* ══ Layer 2 — Horizontal track ═══════════════════════════════════ */}
        <motion.div
          className="absolute inset-0 flex"
          style={{ x: trackX }}
        >

          {/* ── Panel A: Lena ──────────────────────────────────────────────── */}
          <div className="w-screen flex-shrink-0 h-full flex
                          items-start md:items-center
                          px-6 md:px-16 xl:px-24
                          pt-24 pb-6 md:py-20">
            <div className="w-full grid grid-cols-1 md:grid-cols-2
                            gap-6 md:gap-16 items-start md:items-center">
              <div>
                <motion.h2
                  className="font-display font-normal text-neutral-900 leading-tight mb-4"
                  style={{
                    fontSize: "clamp(2.125rem, 6vw, 3.25rem)",
                    opacity: lenaTitleOp,
                    y: lenaTitleY,
                  }}
                >
                  My name&apos;s<br />Lena Saunig,
                </motion.h2>
                <motion.p
                  className="text-neutral-500 leading-relaxed"
                  style={{
                    fontSize: "clamp(1.0625rem, 1.4vw, 1.125rem)",
                    opacity: lenaBodyOp,
                    y: lenaBodyY,
                  }}
                >
                  I&apos;m a Sydney based Authorised Marriage Celebrant,
                  I do travel out of Sydney and yes, I most certainly love Love!
                </motion.p>
              </div>

              <motion.div
                className="relative w-full rounded-2xl overflow-hidden bg-neutral-100
                           h-[min(45vh,360px)] md:h-[min(58vh,520px)]"
                style={{ opacity: lenaImgOp }}
              >
                <Image
                  src="/images/hero1.webp"
                  alt="Lena Saunig — Loving Love"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>

          {/* ── Panel B: Ceremony ──────────────────────────────────────────── */}
          <div className="w-screen flex-shrink-0 h-full flex
                          items-start md:items-center
                          px-6 md:px-16 xl:px-24
                          pt-24 pb-6 md:py-20">
            <div className="w-full grid grid-cols-1 md:grid-cols-2
                            gap-6 md:gap-16 items-start md:items-center">
              <div>
                <motion.h2
                  className="font-display font-normal text-neutral-900 leading-tight mb-4"
                  style={{
                    fontSize: "clamp(1.75rem, 5vw, 3.25rem)",
                    opacity: cerTitleOp,
                    y: cerTitleY,
                  }}
                >
                  Your marriage ceremony is a celebration of your special and unique love.
                </motion.h2>
                <motion.p
                  className="text-neutral-500 leading-relaxed"
                  style={{
                    fontSize: "clamp(1.0625rem, 1.4vw, 1.125rem)",
                    opacity: cerBodyOp,
                    y: cerBodyY,
                  }}
                >
                  I want to make sure that you totally feel each moment, and for
                  the precious people in your life, taking part in witnessing your
                  marriage, to feel a deep sense of joy and connection with you,
                  and each other.
                </motion.p>
              </div>

              <motion.div
                className="relative w-full rounded-2xl overflow-hidden bg-neutral-100
                           h-[min(45vh,360px)] md:h-[min(58vh,520px)]"
                style={{ opacity: cerImgOp }}
              >
                <Image
                  src="/images/hero2.webp"
                  alt="Wedding ceremony — Loving Love"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>

          {/* ── Panel C: CTA ───────────────────────────────────────────────── */}
          <div className="w-screen flex-shrink-0 h-full flex items-center
                          justify-center px-6">
            <motion.div
              className="max-w-2xl text-center"
              style={{ opacity: ctaOp, y: ctaY }}
            >
              <h2
                className="font-display font-normal text-neutral-900 leading-tight mb-5"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3.25rem)" }}
              >
                If you would like a meaningful and heartfelt ceremony,
                that truly reflects who you are,
              </h2>
              <p
                className="text-neutral-500 leading-relaxed mb-10"
                style={{ fontSize: "clamp(1.0625rem, 1.4vw, 1.125rem)" }}
              >
                please get in touch. It would be a privilege to be your Celebrant.
              </p>
              <Link
                href="/connect"
                className="inline-flex items-center px-8 py-3.5 rounded-full
                           text-sm font-medium bg-neutral-900 text-white
                           hover:opacity-85 transition-opacity duration-200"
              >
                Let&apos;s Chat
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
