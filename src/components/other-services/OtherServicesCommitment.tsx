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

export default function OtherServicesCommitment() {
  const sectionRef = useScrollSnap({ desktopOnly: true });

  return (
    <section ref={sectionRef} className="flex min-h-[100svh] items-center bg-white
                        px-6 py-20 md:min-h-[100dvh] md:px-16 xl:px-24">
      <div className="grid w-full max-w-7xl mx-auto gap-12
                      md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]
                      md:gap-16 xl:gap-20 items-center">

        {/* ── Text — left ──────────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col justify-center"
          {...blurIn(0)}
        >
          <h2
            className="font-display font-normal text-neutral-900 leading-tight mb-7"
            style={{ fontSize: "clamp(2rem, 3.6vw, 3.75rem)" }}
          >
            Commitment Ceremony
          </h2>

          <p
            className="text-neutral-500 leading-relaxed mb-6"
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.15rem)" }}
          >
            You may not wish to get legally married, but would like to celebrate
            your commitment to each other. Together we plan a special ceremony
            to celebrate your love, excluding all the legal components.
          </p>

          <p
            className="font-display italic text-neutral-400"
            style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}
          >
            A commitment ceremony is not a legal ceremony.
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
              src="/images/services1.jpeg"
              alt="Commitment ceremony"
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
