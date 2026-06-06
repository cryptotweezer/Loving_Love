"use client";

import { motion } from "motion/react";
import { useScrollSnap } from "@/hooks/useScrollSnap";

export default function YourCeremonyHero() {
  const sectionRef = useScrollSnap();

  return (
    <section ref={sectionRef} className="flex h-[100dvh] flex-col items-center justify-center bg-white px-6 text-center md:px-16 xl:px-24">
      <div className="max-w-4xl">

        {/* Title — visible on load, same presence as "A big congratulations" */}
        <motion.h1
          className="font-display font-normal text-neutral-900 leading-tight"
          style={{ fontSize: "clamp(1.75rem, 3.6vw, 3.5rem)" }}
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        >
          My focus is to create and deliver a ceremony that is heartfelt
          and meaningful to you
        </motion.h1>

        {/* Subtitle — italic display font, same as other page subtexts */}
        <motion.p
          className="font-display italic text-neutral-400 mt-8"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
        >
          The Ceremony Planning Process
        </motion.p>

      </div>
    </section>
  );
}
