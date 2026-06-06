"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function FinalCallToAction() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.documentElement.classList.toggle("hide-navbar-cta", entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("hide-navbar-cta");
    };
  }, [sectionRef]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative z-10 flex h-[100dvh] snap-start items-center justify-center overflow-hidden bg-white px-6 text-white md:h-[100dvh] md:min-h-[720px] md:px-16"
      style={{ boxShadow: "0 -10px 0 rgba(10, 10, 10, 0.76)" }}
    >
      {/* Mobile background — no scale to avoid zoom on toolbar show/hide */}
      <Image
        src="/images/mobile_background1.jpeg"
        alt=""
        fill
        className="z-0 object-cover md:hidden"
        sizes="100vw"
        priority={false}
      />
      {/* Desktop background */}
      <Image
        src="/images/background1.jpeg"
        alt=""
        fill
        className="z-0 scale-[1.01] object-cover hidden md:block"
        sizes="100vw"
        priority={false}
      />
      <div
        className="absolute -inset-2 z-[1]"
        style={{ backgroundColor: "rgba(10, 10, 10, 0.76)" }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial={{ y: 40 }}
        whileInView={{ y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.24em] text-white/45 md:mb-5 md:text-xs md:tracking-[0.26em]">
          Lena Saunig Loving Love
        </p>

        <h2
          className="font-display font-normal leading-[1.02] text-white"
          style={{ fontSize: "clamp(1.9rem, 8.5vw, 4.25rem)" }}
        >
          If you would like a meaningful and heartfelt ceremony,
          that truly reflects who you are,
        </h2>

        <p className="font-display mx-auto mt-6 max-w-2xl text-sm italic leading-relaxed text-white/60 md:mt-8 md:text-lg">
          please get in touch. It would be a privilege to be your Celebrant.
        </p>

        <div className="mt-8 md:mt-10">
          <Link
            href="/connect"
            className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-neutral-950 transition-opacity duration-200 hover:opacity-85"
          >
            Let&apos;s Chat
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
