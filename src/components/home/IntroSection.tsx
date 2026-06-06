"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// ─── Snap points (scrollYProgress) — desktop only ─────────────────────────────
const SNAP_POINTS = [
  { target: 0.62, min: 0.52 }, // Lena panel settled
  { target: 0.81, min: 0.72 }, // Ceremony panel settled
  { target: 0.95, min: 0.88 }, // CTA
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mobile gets a taller scroll height to give the welcome-text animation
  // enough room while keeping panels feeling snappy (450vh vs 550vh desktop).
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ══════════════════════════════════════════════════════════════════════════
  // DESKTOP — unchanged from original
  // ══════════════════════════════════════════════════════════════════════════

  // Welcome text: starts fully visible, fades + splits out
  const welcomeOp = useTransform(scrollYProgress, [0.18, 0.42], [1, 0]);
  const line1Y    = useTransform(scrollYProgress, [0.18, 0.44], ["0vh", "-70vh"]);
  const line2Y    = useTransform(scrollYProgress, [0.18, 0.44], ["0vh",  "70vh"]);

  // Horizontal track (panels)
  const trackX = useTransform(
    scrollYProgress,
    [0.42,     0.58,   0.65,   0.80,    0.82,   0.95,    1.00],
    ["100vw", "0vw",  "0vw", "-100vw", "-100vw", "-200vw", "-200vw"]
  );

  // Lena panel
  const lenaTitleOp = useTransform(scrollYProgress, [0.46, 0.58], [0, 1]);
  const lenaTitleY  = useTransform(scrollYProgress, [0.46, 0.58], [32, 0]);
  const lenaBodyOp  = useTransform(scrollYProgress, [0.50, 0.62], [0, 1]);
  const lenaBodyY   = useTransform(scrollYProgress, [0.50, 0.62], [24, 0]);
  const lenaImgOp   = useTransform(scrollYProgress, [0.44, 0.58], [0, 1]);
  const lenaTextOp  = useTransform(scrollYProgress, [0.46, 0.62], [0, 1]);
  const lenaTextY   = useTransform(scrollYProgress, [0.46, 0.62], [32, 0]);

  // Ceremony panel
  const cerTitleOp  = useTransform(scrollYProgress, [0.68, 0.80], [0, 1]);
  const cerTitleY   = useTransform(scrollYProgress, [0.68, 0.80], [32, 0]);
  const cerBodyOp   = useTransform(scrollYProgress, [0.72, 0.83], [0, 1]);
  const cerBodyY    = useTransform(scrollYProgress, [0.72, 0.83], [24, 0]);
  const cerImgOp    = useTransform(scrollYProgress, [0.66, 0.80], [0, 1]);
  const cerTextOp   = useTransform(scrollYProgress, [0.68, 0.83], [0, 1]);
  const cerTextY    = useTransform(scrollYProgress, [0.68, 0.83], [32, 0]);

  // CTA panel
  const ctaOp = useTransform(scrollYProgress, [0.85, 0.93, 1.00], [0, 1, 1]);
  const ctaY  = useTransform(scrollYProgress, [0.85, 0.93, 1.00], [32, 0, 0]);

  // ══════════════════════════════════════════════════════════════════════════
  // MOBILE — 450vh height, 4-phase animation
  //
  // Mobile scroll timeline over 450vh (progress 0 → 1):
  //
  //  Phase 0 — HERO EXIT       (0 → 0.10 = 35vh)
  //    Hero slides off the top while text is hidden below viewport.
  //    IntroSection sticky already active — zero dead space.
  //
  //  Phase 1 — TEXT ENTRANCE   (0.10 → 0.27 = ~60vh)
  //    Both lines rise from BELOW the viewport (y=60vh, off-screen bottom)
  //    to the centre. Hero exits from the TOP simultaneously — they approach
  //    from opposite ends so the hero can never cut the text.
  //
  //  Phase 2 — TEXT STAY       (0.27 → 0.40 = 45.5vh)
  //    Text centred and fully visible — user reads it.
  //
  //  Phase 3 — TEXT EXIT       (0.40 → 0.50 = 35vh)
  //    Line 1 flies up (−80vh), line 2 flies down (+80vh).
  //    Opacity fades to 0.
  //
  //  Phase 4 — PANELS          (0.50 → 1.00 = 175vh ≈ 58vh per panel)
  //    Lena → Ceremony → CTA slide in from the RIGHT.
  // ══════════════════════════════════════════════════════════════════════════

  // Text starts at y=60vh — completely off-screen below the viewport.
  // As it rises to y=0 (centre), the hero is simultaneously scrolling off
  // from the top. They move toward each other from opposite sides of the
  // screen, so the hero can never overlap the rising text.
  const line1YM = useTransform(
    scrollYProgress,
    [0.10,    0.27,  0.40,   0.50],
    ["60vh", "0vh", "0vh", "-80vh"]
  );
  const line2YM = useTransform(
    scrollYProgress,
    [0.10,    0.27,  0.40,  0.50],
    ["60vh", "0vh", "0vh", "80vh"]
  );
  // Shared opacity — both lines fade in / out together
  const textOpM = useTransform(scrollYProgress,
    [0.10, 0.20, 0.38, 0.48], [0, 1, 1, 0]);

  // Horizontal track — slides right → left (user POV), panels start at 0.50
  const trackXM = useTransform(
    scrollYProgress,
    [0.50,     0.63,  0.68,   0.80,     0.83,     0.93,     1.00],
    ["100vw", "0vw", "0vw", "-100vw", "-100vw", "-200vw", "-200vw"]
  );

  // Lena panel content
  const lenaTitleOpM = useTransform(scrollYProgress, [0.53, 0.63], [0, 1]);
  const lenaTitleYM  = useTransform(scrollYProgress, [0.53, 0.63], [32, 0]);
  const lenaBodyOpM  = useTransform(scrollYProgress, [0.57, 0.67], [0, 1]);
  const lenaBodyYM   = useTransform(scrollYProgress, [0.57, 0.67], [24, 0]);
  const lenaImgOpM   = useTransform(scrollYProgress, [0.51, 0.63], [0, 1]);

  // Ceremony panel content
  const cerTitleOpM  = useTransform(scrollYProgress, [0.70, 0.80], [0, 1]);
  const cerTitleYM   = useTransform(scrollYProgress, [0.70, 0.80], [32, 0]);
  const cerBodyOpM   = useTransform(scrollYProgress, [0.74, 0.83], [0, 1]);
  const cerBodyYM    = useTransform(scrollYProgress, [0.74, 0.83], [24, 0]);
  const cerImgOpM    = useTransform(scrollYProgress, [0.68, 0.80], [0, 1]);

  // CTA panel content
  const ctaOpM = useTransform(scrollYProgress, [0.86, 0.93, 1.00], [0, 1, 1]);
  const ctaYM  = useTransform(scrollYProgress, [0.86, 0.93, 1.00], [32, 0, 0]);

  // ── Scroll snap — desktop + mobile, bidirectional ────────────────────────────
  // Works for both viewports. Snap zones are defined per direction so scrolling
  // UP correctly returns to the previous panel (fixing the "faded image" bug on
  // mobile where images appeared dim when the user stopped mid-animation).
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mobile = window.innerWidth < 768;

    // DOWN: snap when entering a panel (arriving from the left of its zone).
    // UP:   snap when backing into a panel (arriving from the right of its zone).
    // Values are scrollYProgress within the IntroSection container.
    const DOWN_SNAPS = mobile
      ? [
          { target: 0.63, range: [0.52, 0.67] as [number, number] },
          { target: 0.80, range: [0.70, 0.83] as [number, number] },
          { target: 0.93, range: [0.87, 0.97] as [number, number] },
        ]
      : [
          { target: 0.62, range: [0.52, 0.66] as [number, number] },
          { target: 0.81, range: [0.72, 0.85] as [number, number] },
          { target: 0.95, range: [0.88, 0.98] as [number, number] },
        ];

    const UP_SNAPS = mobile
      ? [
          { target: 0.63, range: [0.55, 0.72] as [number, number] },
          { target: 0.80, range: [0.74, 0.87] as [number, number] },
        ]
      : [
          { target: 0.62, range: [0.55, 0.72] as [number, number] },
          { target: 0.81, range: [0.75, 0.88] as [number, number] },
        ];

    let scrollTimer: ReturnType<typeof setTimeout>;
    let isSnapping    = false;
    let lastSnappedAt = -1;
    let lastScrollY   = window.scrollY;
    let goingDown     = true;

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
      if (Math.abs(target - lastSnappedAt) < 0.04) return;
      const scrollable   = el.offsetHeight - window.innerHeight;
      const containerTop = window.scrollY + el.getBoundingClientRect().top;
      const targetY      = containerTop + target * scrollable;
      isSnapping    = true;
      lastSnappedAt = target;
      window.scrollTo({ top: targetY, behavior: "smooth" });
      setTimeout(() => { isSnapping = false; }, 900);
    };

    const onScrollEnd = () => {
      const progress = getProgress();
      if (progress < 0.42 || progress > 0.98) return;
      const zones = goingDown ? DOWN_SNAPS : UP_SNAPS;
      for (const { target, range } of zones) {
        if (progress >= range[0] && progress <= range[1]) { snapTo(target); break; }
      }
    };

    const onScroll = () => {
      const y   = window.scrollY;
      goingDown = y >= lastScrollY;
      lastScrollY = y;
      const p = getProgress();
      if (p >= 0 && Math.abs(p - lastSnappedAt) > 0.12) lastSnappedAt = -1;
      if (isSnapping) return;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(onScrollEnd, 350); // 350ms — more reliable than 240ms
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); clearTimeout(scrollTimer); };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-white"
      style={{
        height: isMobile ? "450vh" : "550vh",
        // On mobile, pull IntroSection up by exactly one viewport height so it
        // starts right where the hero sticky releases — zero dead space.
        // The hero is z-[2], so it covers IntroSection during the overlap.
        // On desktop the two sections are separate and no overlap is needed.
        marginTop: isMobile ? "-100dvh" : 0,
      }}
    >
      <div
        className="sticky top-0 w-full overflow-hidden bg-white"
        style={{ height: "max(100svh, 100dvh)" }}
      >

        {/* ══ MOBILE — Welcome text ════════════════════════════════════════
            Centred on screen. Both lines rise as one unit from below;
            exit splits: line 1 up, line 2 down.                         */}
        <div
          className="md:hidden absolute inset-0 flex flex-col items-center
                     justify-center pointer-events-none z-10 px-6 text-center"
        >
          <motion.p
            className="font-display font-normal text-neutral-900 leading-tight"
            style={{
              fontSize: "clamp(1.75rem, 5.5vw, 3rem)",
              y:       line1YM,
              opacity: textOpM,
            }}
          >
            A big congratulations<br />to you
          </motion.p>
          <motion.p
            className="font-display font-normal text-neutral-900 leading-tight"
            style={{
              fontSize: "clamp(1.75rem, 5.5vw, 3rem)",
              y:       line2YM,
              opacity: textOpM,
            }}
          >
            and thanks for visiting!
          </motion.p>

          {/* Body text — same animation as "and thanks for visiting!" */}
          <motion.div
            className="mt-5 space-y-1"
            style={{ opacity: textOpM, y: line2YM }}
          >
            <p
              className="font-display italic text-neutral-500 leading-relaxed"
              style={{ fontSize: "clamp(1rem, 3.5vw, 1.125rem)" }}
            >
              I&apos;m so glad you found your way here.
            </p>
            <p
              className="font-display italic text-neutral-500 leading-relaxed"
              style={{ fontSize: "clamp(1rem, 3.5vw, 1.125rem)" }}
            >
              Let me introduce myself.
            </p>
          </motion.div>
        </div>

        {/* ══ DESKTOP — Welcome text (starts visible, fades + splits out) ══ */}
        <motion.div
          className="hidden md:flex absolute inset-0 flex-col items-center
                     justify-center pointer-events-none z-10 px-6 text-center"
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

          {/* Body text — same animation as "and thanks for visiting!" */}
          <motion.div
            className="mt-6 space-y-1"
            style={{ y: line2Y }}
          >
            <p
              className="font-display italic text-neutral-500 leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
            >
              I&apos;m so glad you found your way here.
            </p>
            <p
              className="font-display italic text-neutral-500 leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
            >
              Let me introduce myself.
            </p>
          </motion.div>
        </motion.div>

        {/* ══ Horizontal track ═════════════════════════════════════════════ */}
        <motion.div
          className="absolute inset-0 flex"
          style={{ x: isMobile ? trackXM : trackX }}
        >

          {/* ── Panel A: Lena ──────────────────────────────────────────────── */}
          <div className="w-screen flex-shrink-0 h-full flex
                          items-start md:items-center
                          px-6 md:px-16 xl:px-24
                          pt-24 pb-6 md:py-20">
            <div className="md:hidden w-full grid grid-cols-1 gap-6 items-start">
              <div>
                <motion.h2
                  className="font-display font-normal text-neutral-900 leading-tight mb-3"
                  style={{
                    fontSize: "clamp(2.125rem, 6vw, 3.25rem)",
                    opacity: isMobile ? lenaTitleOpM : lenaTitleOp,
                    y:       isMobile ? lenaTitleYM  : lenaTitleY,
                  }}
                >
                  My name&apos;s<br />Lena Saunig,
                </motion.h2>
                <motion.p
                  className="font-display italic text-neutral-500 mb-4"
                  style={{
                    fontSize: "clamp(1rem, 3.6vw, 1.125rem)",
                    opacity: isMobile ? lenaBodyOpM : lenaBodyOp,
                    y:       isMobile ? lenaBodyYM  : lenaBodyY,
                  }}
                >
                  Authorised Marriage Celebrant
                </motion.p>
                <motion.p
                  className="text-neutral-500 leading-relaxed"
                  style={{
                    fontSize: "clamp(1.0625rem, 1.4vw, 1.125rem)",
                    opacity: isMobile ? lenaBodyOpM : lenaBodyOp,
                    y:       isMobile ? lenaBodyYM  : lenaBodyY,
                  }}
                >
                  I&apos;m a Sydney based Authorised Marriage Celebrant,
                  I do travel out of Sydney and yes, I most certainly love Love!
                </motion.p>
                <motion.p
                  className="text-neutral-500 leading-relaxed mt-3"
                  style={{
                    fontSize: "clamp(1.0625rem, 1.4vw, 1.125rem)",
                    opacity: isMobile ? lenaBodyOpM : lenaBodyOp,
                    y:       isMobile ? lenaBodyYM  : lenaBodyY,
                  }}
                >
                  I&apos;m passionate about love, people, and connection.
                  Getting to truly know each couple I work with is something
                  I genuinely treasure.
                </motion.p>
              </div>

              <motion.div
                className="relative w-full rounded-2xl overflow-hidden bg-neutral-100
                           h-[min(45svh,360px)] md:h-[min(58dvh,520px)]"
                style={{ opacity: isMobile ? lenaImgOpM : lenaImgOp }}
                whileHover={isMobile ? {} : { scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
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

            <div className="hidden md:grid w-full grid-cols-[minmax(0,1.45fr)_minmax(360px,0.9fr)]
                            gap-14 xl:gap-20 items-center">
              <motion.div
                className="relative h-[min(72dvh,680px)]"
                style={{ opacity: lenaImgOp }}
              >
                <motion.div
                  className="absolute left-0 top-[2%] h-[72%] w-[43%] overflow-hidden bg-neutral-100"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src="/images/lena.png"
                    alt="Lena Saunig"
                    fill
                    className="object-cover"
                    sizes="28vw"
                    priority={false}
                  />
                </motion.div>

                <motion.div
                  className="absolute left-[31%] bottom-[2%] z-10 h-[44%] w-[38%] overflow-hidden bg-neutral-100"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src="/images/hero1.webp"
                    alt="Lena preparing a ceremony"
                    fill
                    className="object-cover"
                    sizes="28vw"
                  />
                </motion.div>

                <motion.div
                  className="absolute right-[2%] top-[27%] h-[54%] w-[34%] overflow-hidden bg-neutral-100"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src="/images/lena2.png"
                    alt="Lena Saunig wedding celebrant"
                    fill
                    className="object-cover"
                    sizes="24vw"
                  />
                </motion.div>
              </motion.div>

              <div className="max-w-[470px] justify-self-end">
                <motion.h2
                  className="font-display font-normal text-neutral-900 leading-[0.98] mb-4"
                  style={{
                    fontSize: "clamp(3.25rem, 5.1vw, 5.75rem)",
                    opacity: lenaTextOp,
                    y:       lenaTextY,
                  }}
                >
                  My name&apos;s Lena Saunig,
                </motion.h2>

                <motion.p
                  className="font-display italic text-neutral-500 leading-relaxed mb-7"
                  style={{
                    fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
                    opacity: lenaTextOp,
                    y:       lenaTextY,
                  }}
                >
                  Authorised Marriage Celebrant
                </motion.p>

                <motion.p
                  className="text-neutral-500 leading-relaxed"
                  style={{
                    fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
                    opacity: lenaTextOp,
                    y:       lenaTextY,
                  }}
                >
                  I&apos;m a Sydney based Authorised Marriage Celebrant,
                  I do travel out of Sydney and yes, I most certainly love Love!
                </motion.p>
                <motion.p
                  className="text-neutral-500 leading-relaxed mt-4"
                  style={{
                    fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
                    opacity: lenaTextOp,
                    y:       lenaTextY,
                  }}
                >
                  I&apos;m passionate about love, people, and connection.
                  Getting to truly know each couple I work with is something
                  I genuinely treasure.
                </motion.p>

                <motion.div
                  className="mt-8"
                  style={{
                    opacity: lenaTextOp,
                    y:       lenaTextY,
                  }}
                >
                  <Link
                    href="/meet-lena"
                    className="inline-flex text-sm font-bold text-neutral-900
                               underline underline-offset-[6px] decoration-neutral-900 decoration-2
                               transition-opacity duration-200 hover:opacity-70"
                  >
                    Meet Lena
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ── Panel B: Ceremony ──────────────────────────────────────────── */}
          <div className="w-screen flex-shrink-0 h-full flex
                          items-start md:items-center
                          px-6 md:px-16 xl:px-24
                          pt-24 pb-6 md:py-20">
            <div className="md:hidden w-full grid grid-cols-1 gap-6 items-start">
              <div>
                <motion.h2
                  className="font-display font-normal text-neutral-900 leading-tight mb-4"
                  style={{
                    fontSize: "clamp(1.75rem, 5vw, 3.25rem)",
                    opacity: isMobile ? cerTitleOpM : cerTitleOp,
                    y:       isMobile ? cerTitleYM  : cerTitleY,
                  }}
                >
                  Your marriage ceremony is a celebration of your special and unique love.
                </motion.h2>
                <motion.p
                  className="text-neutral-500 leading-relaxed"
                  style={{
                    fontSize: "clamp(1.0625rem, 1.4vw, 1.125rem)",
                    opacity: isMobile ? cerBodyOpM : cerBodyOp,
                    y:       isMobile ? cerBodyYM  : cerBodyY,
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
                           h-[min(45svh,360px)] md:h-[min(58dvh,520px)]"
                style={{ opacity: isMobile ? cerImgOpM : cerImgOp }}
                whileHover={isMobile ? {} : { scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
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

            <div className="hidden md:grid w-full grid-cols-[minmax(0,1.45fr)_minmax(360px,0.9fr)]
                            gap-14 xl:gap-20 items-center">
              <motion.div
                className="relative h-[min(72dvh,680px)]"
                style={{ opacity: cerImgOp }}
              >
                <motion.div
                  className="absolute left-[3%] top-[7%] h-[56%] w-[62%] overflow-hidden bg-neutral-100"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src="/images/hero2.webp"
                    alt="Wedding ceremony"
                    fill
                    className="object-cover"
                    sizes="42vw"
                  />
                </motion.div>

                <motion.div
                  className="absolute left-[35%] bottom-[5%] z-10 h-[46%] w-[50%] overflow-hidden bg-neutral-100"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src="/images/lena6.png"
                    alt="Wedding ceremony details"
                    fill
                    className="object-cover"
                    sizes="34vw"
                  />
                </motion.div>
              </motion.div>

              <div className="max-w-[470px] justify-self-end">
                <motion.h2
                  className="font-display font-normal text-neutral-900 leading-[0.98] mb-7"
                  style={{
                    fontSize: "clamp(2.45rem, 3.7vw, 4.35rem)",
                    opacity: cerTextOp,
                    y:       cerTextY,
                  }}
                >
                  Your marriage ceremony is a celebration of your special and unique love.
                </motion.h2>

                <motion.p
                  className="text-neutral-500 leading-relaxed"
                  style={{
                    fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
                    opacity: cerTextOp,
                    y:       cerTextY,
                  }}
                >
                  I want to make sure that you totally feel each moment, and for
                  the precious people in your life, taking part in witnessing your
                  marriage, to feel a deep sense of joy and connection with you,
                  and each other.
                </motion.p>

                <motion.div
                  className="mt-8"
                  style={{
                    opacity: cerTextOp,
                    y:       cerTextY,
                  }}
                >
                  <Link
                    href="/your-ceremony"
                    className="inline-flex text-sm font-bold text-neutral-900
                               underline underline-offset-[6px] decoration-neutral-900 decoration-2
                               transition-opacity duration-200 hover:opacity-70"
                  >
                    Your Ceremony
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ── Panel C: CTA ───────────────────────────────────────────────── */}
          <div className="w-screen flex-shrink-0 h-full flex items-center
                          justify-center px-6">
            <motion.div
              className="max-w-2xl text-center"
              style={{
                opacity: isMobile ? ctaOpM : ctaOp,
                y:       isMobile ? ctaYM  : ctaY,
              }}
            >
              <h2
                className="font-display font-normal text-neutral-900 leading-tight mb-5"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3.25rem)" }}
              >
                If you would like a meaningful and heartfelt ceremony,
                that truly reflects who you are,
              </h2>
              <p
                className="font-display italic text-neutral-500 leading-relaxed mb-10"
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
