"use client";

import { motion } from "motion/react";
import { useScrollSnap } from "@/hooks/useScrollSnap";

const blurIn = (delay = 0) => ({
  initial:    { opacity: 0, filter: "blur(12px)" },
  animate:    { opacity: 1, filter: "blur(0px)"  },
  transition: { duration: 0.9, ease: "easeOut" as const, delay },
});

export default function OtherServicesHero() {
  // Always one-screen tall — snap on all screen sizes is safe and gives a
  // clean lock-in when the user scrolls back up from the first content section.
  const sectionRef = useScrollSnap();

  return (
    <section ref={sectionRef} className="flex h-[100svh] flex-col items-center justify-center
                        bg-white px-6 text-center md:h-[100dvh] md:px-16 xl:px-24">
      <div className="max-w-3xl">

        {/* Label */}
        <motion.p
          className="font-display italic text-neutral-400 mb-7"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          {...blurIn(0.1)}
        >
          Our Services
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-display font-normal text-neutral-900 leading-tight"
          style={{ fontSize: "clamp(2rem, 3.8vw, 3.75rem)" }}
          {...blurIn(0.25)}
        >
          At Loving Love, we celebrate love in all its expressions.
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="font-display italic text-neutral-500 mt-9 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}
          {...blurIn(0.45)}
        >
          Whether you&apos;re saying &lsquo;I do&rsquo; for the first time, renewing promises
          already made, welcoming a new life into your family, or celebrating a
          commitment, every expression of love deserves a ceremony that feels
          completely, beautifully yours.
        </motion.p>

      </div>
    </section>
  );
}
