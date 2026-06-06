"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "motion/react";
import { useScrollSnap } from "@/hooks/useScrollSnap";

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0  },
};

export default function YourCeremonyCTA() {
  const sectionRef = useScrollSnap();

  // ── Hide navbar when section is in view ─────────────────────────────────────
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
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] flex-col items-center justify-center
                        overflow-hidden bg-white px-6 text-center text-neutral-900
                        md:h-[100dvh] md:px-16 xl:px-24"
    >
      <Image
        src="/images/background3.jpeg"
        alt=""
        fill
        className="z-0 scale-[1.01] object-cover"
        sizes="100vw"
        priority={false}
      />
      <div
        className="absolute -inset-2 z-[1]"
        style={{ backgroundColor: "rgba(10, 10, 10, 0.76)" }}
      />

      <motion.h2
        className="relative z-10 font-display font-normal text-white leading-tight mb-5"
        style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Ready for a Chat?
      </motion.h2>

      <motion.p
        className="relative z-10 font-display italic text-white/60 mb-12"
        style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
      >
        I&apos;d love to hear from you.
        <br />
        Tell me what you&apos;re dreaming of, and we can begin shaping a ceremony
        that feels meaningful, personal, and completely yours.
      </motion.p>

      <motion.div
        className="relative z-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      >
        <Link
          href="/connect"
          className="inline-flex items-center px-9 py-3.5 rounded-full
                     text-sm font-medium bg-white text-neutral-900
                     hover:opacity-85 transition-opacity duration-200"
        >
          Let&apos;s Chat
        </Link>
      </motion.div>

    </section>
  );
}
