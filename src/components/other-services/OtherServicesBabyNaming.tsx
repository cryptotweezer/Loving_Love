"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useScrollSnap } from "@/hooks/useScrollSnap";

const blurIn = (delay = 0) => ({
  initial:     { opacity: 0, filter: "blur(12px)" },
  whileInView: { opacity: 1, filter: "blur(0px)"  },
  viewport:    { once: false, amount: 0.15 },
  transition:  { duration: 0.9, ease: "easeOut" as const, delay },
});

export default function OtherServicesBabyNaming() {
  const sectionRef = useScrollSnap({ desktopOnly: true });

  return (
    <section ref={sectionRef} className="flex min-h-[100svh] items-center bg-white
                        px-6 py-20 md:min-h-[100dvh] md:px-16 xl:px-24">
      <div className="grid w-full max-w-7xl mx-auto gap-12
                      md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]
                      md:gap-16 xl:gap-20 2xl:max-w-[1400px] items-center">

        {/* ── Text — left ──────────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col justify-center"
          {...blurIn(0)}
        >
          <h2
            className="font-display font-normal text-neutral-900 leading-tight mb-7"
            style={{ fontSize: "clamp(2rem, 3.6vw, 3.75rem)" }}
          >
            Baby Naming Ceremony
          </h2>

          <p
            className="text-neutral-500 leading-relaxed mb-6"
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.15rem)" }}
          >
            A naming ceremony is a celebration of your child, shared with family
            and friends. It&apos;s a lovely way to express the joy your child has
            brought to your life, and your commitment to your child. The ceremony
            we create together would be a celebration that involves the special
            people in your child&apos;s life.
          </p>

          <p
            className="font-display italic text-neutral-400"
            style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}
          >
            Every little one deserves a moment that belongs entirely to them.
          </p>
        </motion.div>

        {/* ── Image — right ────────────────────────────────────────────────── */}
        <motion.div
          className="relative h-[72vw] min-h-[320px] md:h-[min(74dvh,700px)] overflow-hidden bg-neutral-100"
          {...blurIn(0.15)}
        >
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/images/services2.jpeg"
              alt="Baby naming ceremony"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
