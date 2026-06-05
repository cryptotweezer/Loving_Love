"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// ─── Config ───────────────────────────────────────────────────────────────────

const TOTAL_FRAMES         = 144;
const BASE_URL             = "https://pub-a0ca4de753364cf088c21e9b4c9ee9ef.r2.dev";
const SCROLL_HEIGHT        = "600vh";  // desktop
const SCROLL_HEIGHT_MOBILE = "280vh";  // mobile — less scrolling needed

const DESKTOP_IMAGE_X = -0.72;
const DESKTOP_IMAGE_Y = 0.08;
const DESKTOP_IMAGE_ZOOM = 1.12;
const MOBILE_IMAGE_X  = 0.50;
const MOBILE_IMAGE_Y  = 0.5;
const MOBILE_IMAGE_ZOOM = 1;
const HERO_EXIT_FADE_DISTANCE = 0.9;

// ─── Scroll-driven titles ─────────────────────────────────────────────────────

const TITLES = [
  { line1: "Loving Love", line2: "Marriage Celebrant" },
  { line1: "A ceremony as unique", line2: "as your love."  },
] as const;

const EYEBROWS = [
  "Lena Saunig",
  "Lena Saunig Loving Love",
] as const;

const TAGLINES = [
  "Celebrating love, and also life.",
  "Celebrating love, and also life.",
] as const;

const BODY_COPY = [
  "Lena is a Sydney based Authorised Marriage Celebrant creating meaningful, personal ceremonies across Sydney and beyond.",
  "Your ceremony is the heart of your wedding day. I create deeply personal, heartfelt ceremonies that are a true reflection of who you are, leaving everyone in the room moved.",
] as const;

const TEXT_TRANSITION = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
} as const;
const TEXT_INITIAL = { opacity: 0, y: 12, filter: "blur(6px)" };
const TEXT_EXIT = { opacity: 0, y: -10, filter: "blur(6px)" };

function getTitleIndex(progress: number): number {
  return progress < 0.5 ? 0 : 1;
}

// ─── Frame URL ────────────────────────────────────────────────────────────────

function getFrameUrl(frame: number): string {
  return `${BASE_URL}/groom_${String(frame).padStart(4, "0")}.webp`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSequence() {
  const containerRef    = useRef<HTMLDivElement>(null);
  const stickyRef       = useRef<HTMLDivElement>(null);
  const canvasRef         = useRef<HTMLCanvasElement>(null);
  const imagesRef         = useRef<HTMLImageElement[]>([]);
  const currentFrameRef   = useRef(0);
  const rafRef            = useRef<number | null>(null);
  // Mobile-only: white overlay that fades in over the last 20% of hero scroll,
  // dissolving the hero cleanly into the white IntroSection below.
  const whiteOverlayRef = useRef<HTMLDivElement>(null);

  const [titleIndex, setTitleIndex]   = useState(0);
  const titleIndexRef                 = useRef(0);

  // Responsive scroll height — shorter on mobile so less swiping is needed
  const [scrollHeight, setScrollHeight] = useState(SCROLL_HEIGHT);
  useEffect(() => {
    const update = () =>
      setScrollHeight(window.innerWidth < 768 ? SCROLL_HEIGHT_MOBILE : SCROLL_HEIGHT);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const sticky = stickyRef.current;
    if (!canvas || !sticky) return;

    // ── Canvas draw ───────────────────────────────────────────────────────────
    function drawFrame(index: number) {
      const canvas = canvasRef.current;
      const img    = imagesRef.current[index];
      if (!canvas || !img?.complete || !img.naturalWidth) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const W  = canvas.width;
      const H  = canvas.height;
      const iW = img.naturalWidth;
      const iH = img.naturalHeight;

      const isMobile = window.innerWidth < 768;

      // Cover — no extra zoom, preserves proportions
      const imageZoom = isMobile ? MOBILE_IMAGE_ZOOM : DESKTOP_IMAGE_ZOOM;
      const scale = Math.max(W / iW, H / iH) * imageZoom;
      const drawW = iW * scale;
      const drawH = iH * scale;

      // Crop bias: 0 = start edge, 0.5 = center, 1 = end edge.
      const imageX  = isMobile ? MOBILE_IMAGE_X : DESKTOP_IMAGE_X;
      const imageY  = isMobile ? MOBILE_IMAGE_Y : DESKTOP_IMAGE_Y;
      const offsetX = (W - drawW) * imageX;
      const offsetY = (H - drawH) * imageY;

      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    }

    function resizeCanvas() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr     = window.devicePixelRatio || 1;
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      drawFrame(currentFrameRef.current);
    }

    const ro = new ResizeObserver(resizeCanvas);
    ro.observe(sticky);
    resizeCanvas();

    // ── Preload frames ────────────────────────────────────────────────────────
    imagesRef.current = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const img = new Image();
      img.src   = getFrameUrl(i + 1);
      if (i === 0) img.onload = () => drawFrame(0);
      return img;
    });

    // ── Scroll → frame + title ────────────────────────────────────────────────
    function onScroll() {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const container = containerRef.current;
        if (!container) return;

        const rect       = container.getBoundingClientRect();
        const scrollable = container.offsetHeight - window.innerHeight;
        const scrolled   = -rect.top;
        const progress   = Math.max(0, Math.min(1, scrolled / scrollable));

        const frame = Math.round(progress * (TOTAL_FRAMES - 1));
        if (frame !== currentFrameRef.current) {
          currentFrameRef.current = frame;
          drawFrame(frame);
        }

        const newTitleIndex = getTitleIndex(progress);
        if (newTitleIndex !== titleIndexRef.current) {
          titleIndexRef.current = newTitleIndex;
          setTitleIndex(newTitleIndex);
        }

        // Fade the full hero as it physically slides off and the next section rises.
        const exitScrolled = Math.max(0, scrolled - scrollable);
        const exitProgress = Math.max(
          0,
          Math.min(1, exitScrolled / (window.innerHeight * HERO_EXIT_FADE_DISTANCE))
        );
        if (stickyRef.current) {
          stickyRef.current.style.opacity = String(1 - exitProgress);
        }

        // Mobile: blur the hero as it physically slides off the top —
        // Apple-style frosted-glass transition into the white IntroSection.
        // exitScrolled = 0 while sticky (animation running), positive once
        // the hero is scrolling off. One viewport height later blur is at max.
        if (whiteOverlayRef.current && window.innerWidth < 768) {
          const t      = Math.max(0, Math.min(1, exitScrolled / window.innerHeight));
          const blurPx = (t * 24).toFixed(1);
          const fadeW  = (t * 0.85).toFixed(3);
          whiteOverlayRef.current.style.backdropFilter = `blur(${blurPx}px)`;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (whiteOverlayRef.current.style as any).webkitBackdropFilter = `blur(${blurPx}px)`;
          whiteOverlayRef.current.style.background = `rgba(255,255,255,${fadeW})`;
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resizeCanvas);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── Animated headline — shared between mobile and desktop ────────────────────
  // mode="popLayout": exiting element becomes position:absolute immediately so
  // it leaves the layout flow without collapsing the parent height. The entering
  // element takes its natural position at the same time → clean crossfade, no jump.
  const titleMotion = (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={titleIndex}
        className="block"
        initial={TEXT_INITIAL}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        exit={TEXT_EXIT}
        transition={TEXT_TRANSITION}
        aria-live="polite"
        style={{ originX: 0, originY: 0.5 }}
      >
        <span className="whitespace-nowrap">{TITLES[titleIndex].line1}</span>
        <br />
        <span className="block text-[0.42em] uppercase tracking-[0.18em]">
          {TITLES[titleIndex].line2}
        </span>
      </motion.span>
    </AnimatePresence>
  );

  const eyebrowMotion = (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={titleIndex}
        className="block"
        initial={TEXT_INITIAL}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={TEXT_EXIT}
        transition={TEXT_TRANSITION}
      >
        {EYEBROWS[titleIndex]}
      </motion.span>
    </AnimatePresence>
  );

  const taglineMotion = (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={titleIndex}
        className="block"
        initial={TEXT_INITIAL}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={TEXT_EXIT}
        transition={TEXT_TRANSITION}
      >
        {TAGLINES[titleIndex]}
      </motion.span>
    </AnimatePresence>
  );

  const bodyMotion = (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={titleIndex}
        className="block"
        initial={TEXT_INITIAL}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={TEXT_EXIT}
        transition={TEXT_TRANSITION}
      >
        {BODY_COPY[titleIndex]}
      </motion.span>
    </AnimatePresence>
  );

  return (
    <div
      ref={containerRef}
      style={{ height: scrollHeight }}
      className="relative z-[10]"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 z-0 w-full h-[100lvh] md:h-[100dvh]"
      >

        {/* ── Canvas — full bleed ───────────────────────────────────────────── */}
        <div className="absolute inset-0 bg-neutral-100">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            aria-label="Wedding ceremony film — scroll to play"
          />
        </div>

        {/* Mobile only — frosted-glass blur overlay: increases as the hero
            physically slides off the top (Apple-style exit transition).
            backdrop-filter blurs the canvas behind it; no background colour. */}
        <div
          ref={whiteOverlayRef}
          className="md:hidden absolute inset-0 z-20 pointer-events-none"
          style={{ backdropFilter: "blur(0px)" }}
        />

        {/* ══════════════════════════════════════════════════════════════════════
            MOBILE  (<md)
            Full-bleed image · dark gradient from bottom · text overlay
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="md:hidden absolute inset-0 pointer-events-none z-30">

          {/* Gradient — single layer, strong enough for white text */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.74) 30%, rgba(0,0,0,0.38) 58%, transparent 78%)",
            }}
          />

          {/* Text block — button lives in its own sibling div so text height
              changes never shift the button position.
              paddingBottom reserves space so text never grows into button area. */}
          <div
            className="absolute left-0 right-0 px-6"
            style={{
              bottom: "calc(100lvh - 100dvh)",
              paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 7.5rem)",
            }}
          >
            {/* Eyebrow */}
            <p className="text-[9px] tracking-[0.26em] uppercase text-white/90 mb-1.5">
              {eyebrowMotion}
            </p>

            {/* H1 — vw-based so "A ceremony as unique" fits without overflow.
                7.5vw ≈ 29px on 390px (iPhone 14 Pro). */}
            <h1
              className="font-display font-normal text-white mb-0.5"
              style={{
                fontSize:
                  titleIndex === 1
                    ? "clamp(1.4rem, 6.4vw, 2.05rem)"
                    : "clamp(1.75rem, 7.5vw, 2.5rem)",
                lineHeight: 1,
              }}
            >
              {titleMotion}
            </h1>

            {/* Tagline — italic, clearly smaller than h1, clearly larger than body */}
            <p
              className="font-display italic text-white/70 mb-1"
              style={{ fontSize: "clamp(0.9375rem, 3.8vw, 1.125rem)" }}
            >
              {taglineMotion}
            </p>

            {/* Body — noticeably smaller than tagline */}
            <p
              className="text-white/65 leading-relaxed"
              style={{ fontSize: "clamp(0.8125rem, 3.2vw, 0.9375rem)" }}
            >
              {bodyMotion}
            </p>
          </div>

          {/* Button — own anchor, never moves when text changes height */}
          <div
            className="absolute left-0 right-0 px-6"
            style={{
              bottom: "calc(100lvh - 100dvh)",
              paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 3.5rem)",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <Link
                href="/connect"
                className="pointer-events-auto inline-flex items-center
                           px-6 py-2.5 rounded-full text-sm font-medium
                           bg-white text-neutral-900
                           hover:opacity-85 transition-opacity duration-200"
              >
                Let&apos;s Chat
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            DESKTOP  (md+)
            Left white panel · bottom fade · text overlay top-left
        ══════════════════════════════════════════════════════════════════════ */}

        {/* Combined left + bottom gradient — single overlay element */}
        <div
          className="hidden md:block absolute inset-0 pointer-events-none z-10"
          style={{
            background: `
              linear-gradient(to right,  rgba(255,255,255,1) 0%, rgba(255,255,255,1) 42%, rgba(255,255,255,0) 62%),
              linear-gradient(to top,    rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.45) 18%, transparent 40%)
            `,
          }}
        />

        {/* Text — button removed from flow so height changes never move it */}
        <div className="
          hidden md:flex
          absolute inset-0 z-20
          flex-col justify-center
          pointer-events-none
        ">
          <div className="md:pl-24 lg:pl-32 xl:pl-36 md:max-w-[46%]">

            {/* Eyebrow — tight to heading */}
            <p className="text-[10px] tracking-[0.26em] uppercase text-neutral-400 mb-0.5">
              {eyebrowMotion}
            </p>

            {/* H1 — dvh-based, lineHeight 1.08 gives breathing room on 2 lines */}
            <h1
              className="font-display font-normal text-neutral-900 mb-1"
              style={{
                fontSize:
                  titleIndex === 1
                    ? "clamp(2.4rem, 7.6dvh, 5.2rem)"
                    : "clamp(3rem, 9.5dvh, 6.5rem)",
                lineHeight: 1,
              }}
            >
              {titleMotion}
            </h1>

            {/* Tagline — italic, clearly smaller than h1 */}
            <p
              className="font-display italic text-neutral-500 mb-1"
              style={{ fontSize: "clamp(1rem, 1.9dvh, 1.25rem)" }}
            >
              {taglineMotion}
            </p>

            {/* Body — noticeably smaller than tagline, good line length */}
            <p
              className="text-neutral-500 leading-relaxed max-w-xs"
              style={{ fontSize: "clamp(0.875rem, 1.5dvh, 1.0625rem)" }}
            >
              {bodyMotion}
            </p>
          </div>
        </div>

        {/* Desktop button — own absolute anchor aligned with text column.
            Sits at a fixed bottom position so text height changes never move it. */}
        <div
          className="hidden md:block absolute z-20 pointer-events-none
                     md:left-24 lg:left-32 xl:left-36"
          style={{ bottom: "12dvh" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Link
              href="/connect"
              className="pointer-events-auto inline-flex items-center
                         px-7 py-3 rounded-full text-sm font-medium
                         bg-neutral-900 text-white
                         hover:opacity-85 transition-opacity duration-200"
            >
              Let&apos;s Chat
            </Link>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
