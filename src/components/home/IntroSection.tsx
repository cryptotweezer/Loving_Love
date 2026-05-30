"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// ─── Component ────────────────────────────────────────────────────────────────

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Phase 1: Welcome text rises from below ────────────────────────────────
  const welcomeY  = useTransform(scrollYProgress, [0, 0.15], [60, 0]);
  const welcomeOp = useTransform(
    scrollYProgress,
    [0, 0.12, 0.18, 0.36],
    [0,    1,    1,    0]
  );

  // ── Phase 2: Lines split — one up, one down ───────────────────────────────
  const line1Y = useTransform(scrollYProgress, [0.18, 0.38], [0, -180]);
  const line2Y = useTransform(scrollYProgress, [0.18, 0.38], [0,  180]);

  // ── Phase 3–7: Horizontal track slides right → left ──────────────────────
  const trackX = useTransform(
    scrollYProgress,
    [0.22,     0.46,   0.56,   0.75,    0.86,   1.00],
    ["100vw", "0vw",  "0vw", "-100vw", "-100vw", "-200vw"]
  );

  // ── Within-panel: Lena ────────────────────────────────────────────────────
  const lenaTitleOp = useTransform(scrollYProgress, [0.30, 0.46], [0, 1]);
  const lenaTitleY  = useTransform(scrollYProgress, [0.30, 0.46], [32, 0]);
  const lenaBodyOp  = useTransform(scrollYProgress, [0.35, 0.50], [0, 1]);
  const lenaBodyY   = useTransform(scrollYProgress, [0.35, 0.50], [24, 0]);
  const lenaImgOp   = useTransform(scrollYProgress, [0.28, 0.46], [0, 1]);

  // ── Within-panel: Ceremony ────────────────────────────────────────────────
  const cerTitleOp  = useTransform(scrollYProgress, [0.60, 0.74], [0, 1]);
  const cerTitleY   = useTransform(scrollYProgress, [0.60, 0.74], [32, 0]);
  const cerBodyOp   = useTransform(scrollYProgress, [0.65, 0.78], [0, 1]);
  const cerBodyY    = useTransform(scrollYProgress, [0.65, 0.78], [24, 0]);
  const cerImgOp    = useTransform(scrollYProgress, [0.58, 0.74], [0, 1]);

  // ── Within-panel: CTA ─────────────────────────────────────────────────────
  const ctaOp = useTransform(scrollYProgress, [0.88, 1.00], [0, 1]);
  const ctaY  = useTransform(scrollYProgress, [0.88, 1.00], [32, 0]);

  return (
    <div
      ref={containerRef}
      className="relative bg-white"
      style={{ height: "550vh" }}
    >
      {/* ── Sticky viewport ──────────────────────────────────────────────── */}
      <div
        className="sticky top-0 h-dvh w-full overflow-hidden bg-white"
      >

        {/* ══ Layer 1 — Welcome text (centered, splits apart) ══════════════ */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center
                     pointer-events-none z-10 px-6 text-center"
          style={{ opacity: welcomeOp, y: welcomeY }}
        >
          <motion.p
            className="font-display font-normal text-neutral-900 leading-tight"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              y: line1Y,
            }}
          >
            A big congratulations to you
          </motion.p>
          <motion.p
            className="font-display font-normal text-neutral-900 leading-tight"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              y: line2Y,
            }}
          >
            and thanks for visiting!
          </motion.p>
        </motion.div>

        {/* ══ Layer 2 — Horizontal track ═══════════════════════════════════ */}
        <motion.div
          className="absolute inset-0 flex"
          style={{ x: trackX }}
        >

          {/* ── Panel A: Lena ─────────────────────────────────────────────── */}
          <div className="w-screen flex-shrink-0 h-full flex items-center
                          px-8 md:px-16 xl:px-24">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* Text — left */}
              <div>
                <motion.h2
                  className="font-display font-normal text-neutral-900 leading-tight mb-5"
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
                    opacity: lenaTitleOp,
                    y: lenaTitleY,
                  }}
                >
                  My name&apos;s<br />Lena Saunig,
                </motion.h2>
                <motion.p
                  className="text-neutral-500 leading-relaxed"
                  style={{
                    fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
                    opacity: lenaBodyOp,
                    y: lenaBodyY,
                  }}
                >
                  I&apos;m a Sydney based Authorised Marriage Celebrant,
                  I do travel out of Sydney and yes, I most certainly love Love!
                </motion.p>
              </div>

              {/* Photo — right */}
              <motion.div
                className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden
                           bg-neutral-100"
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

          {/* ── Panel B: Ceremony ─────────────────────────────────────────── */}
          <div className="w-screen flex-shrink-0 h-full flex items-center
                          px-8 md:px-16 xl:px-24">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* Text — left */}
              <div>
                <motion.h2
                  className="font-display font-normal text-neutral-900 leading-tight mb-5"
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
                    opacity: cerTitleOp,
                    y: cerTitleY,
                  }}
                >
                  Your marriage ceremony is a celebration of your special and unique love.
                </motion.h2>
                <motion.p
                  className="text-neutral-500 leading-relaxed"
                  style={{
                    fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
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

              {/* Photo — right */}
              <motion.div
                className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden
                           bg-neutral-100"
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

          {/* ── Panel C: CTA ──────────────────────────────────────────────── */}
          <div className="w-screen flex-shrink-0 h-full flex items-center
                          justify-center px-6">
            <motion.div
              className="max-w-2xl text-center"
              style={{ opacity: ctaOp, y: ctaY }}
            >
              <h2
                className="font-display font-normal text-neutral-900 leading-tight mb-5"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)" }}
              >
                If you would like a meaningful and heartfelt ceremony,
                that truly reflects who you are,
              </h2>
              <p
                className="text-neutral-500 leading-relaxed mb-10"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)" }}
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
        {/* end track */}

      </div>
      {/* end sticky */}

    </div>
  );
}
