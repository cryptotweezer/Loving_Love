"use client";

import Link from "next/link";
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
    <section ref={sectionRef} className="flex h-[100dvh] flex-col items-center justify-center
                        bg-neutral-950 px-6 text-center text-white
                        md:px-16 xl:px-24">

      <motion.h2
        className="font-display font-normal text-white leading-tight mb-5"
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
        className="font-display italic text-white/60 mb-12"
        style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
      >
        I&apos;d love to hear from you.
      </motion.p>

      <motion.div
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
