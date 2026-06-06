"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "motion/react";
import { useScrollSnap } from "@/hooks/useScrollSnap";

export default function FinalCallToAction() {
  const sectionRef = useScrollSnap();

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
      className="relative flex h-[100dvh] min-h-[100svh] items-center justify-center overflow-hidden bg-neutral-950 px-6 text-white md:min-h-[720px] md:px-16"
      style={{ boxShadow: "0 -4px 0 rgb(10 10 10)" }}
    >
      <motion.div
        className="mx-auto max-w-3xl text-center"
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
