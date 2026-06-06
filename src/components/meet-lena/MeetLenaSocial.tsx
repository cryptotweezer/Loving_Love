"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { useScrollSnap } from "@/hooks/useScrollSnap";

const socialLinks = [
  {
    title: "Facebook",
    handle: "@lenalovinglove",
    href: "https://www.facebook.com/lenalovinglove/",
    icon: Facebook,
  },
  {
    title: "Instagram",
    handle: "@lenalovinglove",
    href: "https://www.instagram.com/lenalovinglove/",
    icon: Instagram,
  },
  {
    title: "Threads",
    handle: "@lenalovinglove",
    href: "https://www.threads.com/@lenalovinglove",
    icon: MessageCircle,
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0  },
};

export default function MeetLenaSocial() {
  const sectionRef = useScrollSnap();

  // ── Navbar CTA toggle ────────────────────────────────────────────────────────
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
      className="relative flex h-[100dvh] min-h-[100svh] flex-col items-center justify-center
                 overflow-hidden bg-white px-6 text-white
                 md:min-h-[720px] md:px-16"
      initial={{ opacity: 0.92 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src="/images/background2.jpeg"
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

      <motion.div
        className="relative z-10 flex w-full flex-col items-center justify-center py-24 text-center"
        initial={{ y: 36 }}
        whileInView={{ y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >

        {/* Eyebrow */}
        <motion.p
          className="mb-5 text-[9px] font-medium uppercase tracking-[0.26em] text-white/40 md:mb-6 md:text-[10px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Lena Saunig · Loving Love
        </motion.p>

        {/* Title */}
        <motion.h2
          className="font-display font-normal leading-tight text-white mb-4"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          Follow along
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="font-display italic text-white/50 mb-14 md:mb-16"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          Celebrating love, and also life.
        </motion.p>

        {/* Social links */}
        <motion.div
          className="flex flex-col items-center gap-5 sm:flex-row sm:gap-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          {socialLinks.map(({ title, handle, href, icon: Icon }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-opacity duration-200 hover:opacity-60"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-colors duration-200 group-hover:bg-white/10">
                <Icon aria-hidden="true" className="h-6 w-6 text-white" strokeWidth={1.5} />
              </span>
              <span className="flex flex-col items-center gap-0.5">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/90">
                  {title}
                </span>
                <span className="text-[11px] text-white/40">
                  {handle}
                </span>
              </span>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
