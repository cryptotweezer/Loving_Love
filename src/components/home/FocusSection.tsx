"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

// ─── Animation variants ───────────────────────────────────────────────────────

// Title: starts blurred + invisible, resolves to sharp focus
const blurIn = {
  hidden:  { opacity: 0, filter: "blur(14px)" },
  visible: { opacity: 1, filter: "blur(0px)"  },
};

// Supporting elements: fade up
const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function FocusSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.documentElement.classList.toggle("hide-navbar", entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate h-[100lvh] w-full snap-start overflow-hidden bg-neutral-950 md:h-[100dvh]"
    >

      {/* ── Image ─────────────────────────────────────────────────────────────
          Mobile:  full-screen (inset-0)
          Desktop: right 58% of the screen (left: 42%)                      */}
      <div className="absolute inset-0 md:left-[42%]">
        <Image
          src="/images/hero3.webp"
          alt="Wedding ceremony — Loving Love"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 58vw"
          priority
        />
      </div>

      {/* Desktop — soft gradient blends black left panel into image */}
      <div
        className="hidden md:block absolute top-0 bottom-0 z-10 pointer-events-none"
        style={{
          left: "30%",
          width: "20%",
          background: "linear-gradient(to right, rgb(10,10,10) 0%, transparent 100%)",
        }}
      />

      {/* ══ MOBILE — gradient from bottom + text at bottom ════════════════════ */}
      <div className="md:hidden absolute inset-0 pointer-events-none">

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 28%, rgba(0,0,0,0.20) 52%, transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 right-0 px-6"
          style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 7rem)" }}
        >
          <motion.p
            className="text-[9px] tracking-[0.26em] uppercase text-white/90 mb-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Lena Saunig · Loving Love
          </motion.p>

          <motion.h2
            className="font-display font-normal text-white leading-tight mb-3"
            style={{ fontSize: "clamp(1.375rem, 5.5vw, 1.75rem)", lineHeight: 1.1 }}
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
          >
            My focus is to create and deliver a ceremony that is as unique as you are
          </motion.h2>

          <motion.p
            className="text-white/65 leading-relaxed mb-5"
            style={{ fontSize: "clamp(0.8125rem, 3.2vw, 0.9375rem)" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          >
            A most significant part of your wedding day is your ceremony.
            So, I will work with you to ensure it&apos;s exactly how you would
            like it, and for it to be a true reflection of your love and relationship.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <Link
              href="/your-ceremony"
              className="pointer-events-auto inline-flex items-center
                         px-6 py-2.5 rounded-full text-sm font-medium
                         bg-white text-neutral-900
                         hover:opacity-85 transition-opacity duration-200"
            >
              Your Ceremony
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ══ DESKTOP — text left on black · scroll animations ══════════════════ */}
      <div className="hidden md:flex absolute inset-0 z-20
                      flex-col justify-center pointer-events-none">
        <div className="md:pl-24 lg:pl-32 xl:pl-36 md:max-w-[40%]">

          {/* Eyebrow — fade up */}
          <motion.p
            className="text-[10px] tracking-[0.26em] uppercase text-white/50 mb-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Lena Saunig · Loving Love
          </motion.p>

          {/* Title — blur → focus */}
          <motion.h2
            className="font-display font-normal text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5dvh, 3.5rem)", lineHeight: 1.08 }}
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.15 }}
          >
            My focus is to create and deliver a ceremony that is as unique as you are
          </motion.h2>

          {/* Body — fade up */}
          <motion.p
            className="text-white/60 leading-relaxed mb-8"
            style={{ fontSize: "clamp(0.875rem, 1.5dvh, 1.0625rem)" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.4 }}
          >
            A most significant part of your wedding day is your ceremony.
            So, I will work with you to ensure it&apos;s exactly how you would
            like it, and for it to be a true reflection of your love
            and relationship.
          </motion.p>

          {/* Button — fade up */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.6 }}
          >
            <Link
              href="/your-ceremony"
              className="pointer-events-auto inline-flex items-center
                         px-7 py-3 rounded-full text-sm font-medium
                         bg-white text-neutral-900
                         hover:opacity-85 transition-opacity duration-200"
            >
              Your Ceremony
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
