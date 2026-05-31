"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// ─── Component ────────────────────────────────────────────────────────────────

export default function FocusSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Hide the navbar while this section is in view, restore it when leaving
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
    <section ref={sectionRef} className="relative w-full h-[100dvh] bg-neutral-950">
      <Image
        src="/images/hero3.webp"
        alt="Wedding ceremony — Loving Love"
        fill
        className="object-cover md:object-contain object-center"
        sizes="100vw"
        priority
      />

      {/* Radial spotlight — desktop only */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 68% 62% at 50% 50%, transparent 0%, transparent 42%, rgba(0,0,0,0.5) 62%, rgba(0,0,0,1) 80%)",
        }}
      />

      {/* Left & right edge kill — desktop only */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 8%, transparent 20%, transparent 80%, rgba(0,0,0,1) 92%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* Text overlay — centred over the image */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center
                      px-10 md:px-32 text-center pointer-events-none">

        <h2
          className="mt-16 font-display font-normal text-white leading-tight
                     uppercase tracking-[0.1em] md:tracking-[0.15em]"
          style={{
            fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)",
            textShadow: "0 2px 24px rgba(0,0,0,0.7)",
          }}
        >
          My focus is to create and deliver
          a ceremony that is as unique
          as you are
        </h2>

        <div className="w-10 h-px bg-white/50 my-4 md:my-5" />

        <p
          className="text-white/80 leading-relaxed max-w-xl"
          style={{
            fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)",
            textShadow: "0 1px 16px rgba(0,0,0,0.6)",
          }}
        >
          A most significant part of your wedding day is your ceremony.
          So, I will work with you to ensure it&apos;s exactly how you would
          like it, and for it to be a true reflection of your love
          and relationship.
        </p>

      </div>
    </section>
  );
}
