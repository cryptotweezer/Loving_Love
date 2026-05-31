"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// ─── Config ───────────────────────────────────────────────────────────────────

const TOTAL_FRAMES         = 118;
const BASE_URL             = "https://pub-f6cbcd08f38e4342ba2b2514b0d3d0c2.r2.dev";
const SCROLL_HEIGHT        = "600vh";  // desktop
const SCROLL_HEIGHT_MOBILE = "280vh";  // mobile — less scrolling needed

// ─── Scroll-driven titles ─────────────────────────────────────────────────────

const TITLES = [
  { line1: "A ceremony as unique", line2: "as your love."  },
  { line1: "Heartfelt moments,",   line2: "forever yours." },
] as const;

function getTitleIndex(progress: number): number {
  return progress < 0.5 ? 0 : 1;
}

// ─── Frame URL ────────────────────────────────────────────────────────────────

function getFrameUrl(frame: number): string {
  return `${BASE_URL}/bride_${String(frame).padStart(4, "0")}.webp`;
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

      const isPortrait = W < H;

      // Cover — no extra zoom, preserves proportions
      const scale = Math.max(W / iW, H / iH);
      const drawW = iW * scale;
      const drawH = iH * scale;

      // Horizontal bias: 0 = leftmost crop · 0.5 = center · 1 = rightmost crop
      const hBias   = isPortrait ? 0.75 : 0.5;
      const offsetX = (W - drawW) * hBias;

      // Vertical: always center
      const offsetY = (H - drawH) * 0.5;

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

        // Mobile: blur the hero as it physically slides off the top —
        // Apple-style frosted-glass transition into the white IntroSection.
        // exitScrolled = 0 while sticky (animation running), positive once
        // the hero is scrolling off. One viewport height later blur is at max.
        if (whiteOverlayRef.current && window.innerWidth < 768) {
          const exitScrolled = Math.max(0, scrolled - scrollable);
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
  const titleMotion = (
    <AnimatePresence mode="wait">
      <motion.span
        key={titleIndex}
        className="block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        aria-live="polite"
      >
        <span className="whitespace-nowrap">{TITLES[titleIndex].line1}</span>
        <br />
        {TITLES[titleIndex].line2}
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
        className="sticky top-0 z-0 w-full"
        style={{ height: "100dvh" }}
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
        <div className="md:hidden absolute inset-0 pointer-events-none">

          {/* Gradient — single layer, strong enough for white text */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 28%, rgba(0,0,0,0.20) 52%, transparent 70%)",
            }}
          />

          {/* Text block — bottom-0 + paddingBottom handles safe area + offset.
              env(safe-area-inset-bottom) needs viewport-fit=cover (layout.tsx). */}
          <div
            className="absolute bottom-0 left-0 right-0 px-6"
            style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 3.5rem)" }}
          >
            {/* Eyebrow */}
            <p className="text-[9px] tracking-[0.26em] uppercase text-white/90 mb-3">
              Lena Saunig · Loving Love
            </p>

            {/* H1 — vw-based so "A ceremony as unique" fits without overflow.
                7.5vw ≈ 29px on 390px (iPhone 14 Pro). */}
            <h1
              className="font-display font-normal text-white mb-3"
              style={{ fontSize: "clamp(1.75rem, 7.5vw, 2.5rem)", lineHeight: 1.1 }}
            >
              {titleMotion}
            </h1>

            {/* Tagline — italic, clearly smaller than h1, clearly larger than body */}
            <p
              className="font-display italic text-white/70 mb-2.5"
              style={{ fontSize: "clamp(0.9375rem, 3.8vw, 1.125rem)" }}
            >
              Celebrating love, and also life.
            </p>

            {/* Body — noticeably smaller than tagline */}
            <p
              className="text-white/65 leading-relaxed mb-5"
              style={{ fontSize: "clamp(0.8125rem, 3.2vw, 0.9375rem)" }}
            >
              Your ceremony is the heart of your wedding day. I create
              deeply personal, heartfelt ceremonies that are a true
              reflection of who you are, leaving everyone in the room moved.
            </p>

            <Link
              href="/connect"
              className="pointer-events-auto inline-flex items-center
                         px-6 py-2.5 rounded-full text-sm font-medium
                         bg-white text-neutral-900
                         hover:opacity-85 transition-opacity duration-200"
            >
              Let&apos;s Chat
            </Link>
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

        {/* Text */}
        <div className="
          hidden md:flex
          absolute inset-0 z-20
          flex-col justify-center
          pointer-events-none
        ">
          <div className="md:pl-24 lg:pl-32 xl:pl-36 md:max-w-[46%]">

            {/* Eyebrow — tight to heading */}
            <p className="text-[10px] tracking-[0.26em] uppercase text-neutral-400 mb-2">
              Lena Saunig · Loving Love
            </p>

            {/* H1 — dvh-based, lineHeight 1.08 gives breathing room on 2 lines */}
            <h1
              className="font-display font-normal text-neutral-900 mb-4"
              style={{ fontSize: "clamp(3rem, 9.5dvh, 6.5rem)", lineHeight: 1.08 }}
            >
              {titleMotion}
            </h1>

            {/* Tagline — italic, clearly smaller than h1 */}
            <p
              className="font-display italic text-neutral-500 mb-3"
              style={{ fontSize: "clamp(1rem, 1.9dvh, 1.25rem)" }}
            >
              Celebrating love, and also life.
            </p>

            {/* Body — noticeably smaller than tagline, good line length */}
            <p
              className="text-neutral-500 leading-relaxed max-w-xs mb-8"
              style={{ fontSize: "clamp(0.875rem, 1.5dvh, 1.0625rem)" }}
            >
              Your ceremony is the heart of your wedding day. I create
              deeply personal, heartfelt ceremonies that are a true
              reflection of who you are, leaving everyone in the room moved.
            </p>

            <Link
              href="/connect"
              className="pointer-events-auto inline-flex items-center
                         px-7 py-3 rounded-full text-sm font-medium
                         bg-neutral-900 text-white
                         hover:opacity-85 transition-opacity duration-200"
            >
              Let&apos;s Chat
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
