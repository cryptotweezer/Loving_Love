"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "motion/react";
import { useScrollSnap } from "@/hooks/useScrollSnap";
import { useNavbarTheme } from "@/context/NavbarThemeContext";

const blurIn = (delay = 0) => ({
  initial:     { opacity: 0, filter: "blur(12px)" },
  whileInView: { opacity: 1, filter: "blur(0px)"  },
  viewport:    { once: false, amount: 0.15 },
  transition:  { duration: 0.9, ease: "easeOut", delay },
});

export default function OtherServicesCelebrationsOfLife() {
  const sectionRef          = useScrollSnap();
  const { setDark, setLight } = useNavbarTheme();

  // Switch navbar to dark while this section is visible
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setDark();
        else setLight();
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [setDark, setLight, sectionRef]);

  return (
    <section
      ref={sectionRef}
      className="flex min-h-[100dvh] items-center bg-black
                 px-6 py-20 md:px-16 xl:px-24"
    >
      <div className="grid w-full max-w-7xl mx-auto gap-12
                      md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]
                      md:gap-16 xl:gap-20 items-center">

        {/* ── Text — left ──────────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col justify-center"
          {...blurIn(0)}
        >
          <h2
            className="font-display font-normal text-white leading-tight mb-7"
            style={{ fontSize: "clamp(2rem, 3.6vw, 3.75rem)" }}
          >
            Celebrations of Life
          </h2>

          <p
            className="text-white/65 leading-relaxed mb-6"
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.15rem)" }}
          >
            When someone we love passes, the world holds a different kind of quiet.
            A Celebration of Life is a ceremony that gathers those who loved them,
            a space to share stories, give thanks, and find warmth in one another.
            There is no right way to grieve, and there is no right way to remember.
            Together, we create something gentle and meaningful, that truly honours
            the life they lived and the love that remains.
          </p>

          <p
            className="font-display italic text-white/35 mb-10"
            style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}
          >
            A space to gather, to remember, and to celebrate a beautiful life.
          </p>

          <Link
            href="/celebrations-of-life"
            className="self-start inline-flex items-center
                       px-7 py-3 rounded-full
                       border border-white/25 text-white/80
                       text-[10px] tracking-[0.16em] uppercase font-medium whitespace-nowrap
                       hover:bg-white hover:text-neutral-900 hover:border-white
                       transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>

        {/* ── Image — right ────────────────────────────────────────────────── */}
        <motion.div
          className="relative h-[72vw] min-h-[320px] md:h-[min(74dvh,700px)] overflow-hidden bg-neutral-900"
          {...blurIn(0.15)}
        >
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/images/services4.jpeg"
              alt="Celebration of Life ceremony"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Base overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          {/* Fade — left edge (text side) */}
          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none z-10
                          bg-gradient-to-r from-black via-black/60 to-transparent" />

          {/* Fade — right edge */}
          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none z-10
                          bg-gradient-to-l from-black via-black/60 to-transparent" />

          {/* Fade — top edge */}
          <div className="absolute inset-x-0 top-0 h-1/4 pointer-events-none z-10
                          bg-gradient-to-b from-black via-black/60 to-transparent" />

          {/* Fade — bottom edge */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none z-10
                          bg-gradient-to-t from-black via-black/60 to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}
