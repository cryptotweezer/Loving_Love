"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useScrollSnap } from "@/hooks/useScrollSnap";

const blurIn = (delay = 0) => ({
  initial:     { opacity: 0, filter: "blur(12px)" },
  whileInView: { opacity: 1, filter: "blur(0px)"  },
  viewport:    { once: false, amount: 0.15 },
  transition:  { duration: 0.9, ease: "easeOut", delay },
});

export default function OtherServicesVowRenewal() {
  const sectionRef = useScrollSnap();

  return (
    <section ref={sectionRef} className="flex min-h-[100dvh] items-center bg-white
                        px-6 py-20 md:px-16 xl:px-24">
      <div className="grid w-full max-w-7xl mx-auto gap-12
                      md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]
                      md:gap-16 xl:gap-20 items-center">

        {/* ── Text — left ──────────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col justify-center"
          {...blurIn(0)}
        >
          <h2
            className="font-display font-normal text-neutral-900 leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 3.6vw, 3.75rem)" }}
          >
            Renewal of Marriage Vows
          </h2>

          <p
            className="font-display italic text-neutral-500 mb-3"
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.2rem)" }}
          >
            &ldquo;A lifetime ago I said &lsquo;I do&rsquo;, and still &lsquo;I do&rsquo;.&rdquo;
          </p>

          <p
            className="text-neutral-500 leading-relaxed mb-3"
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.15rem)" }}
          >
            This is a celebration of your marriage and commitment to each other.
            Together we plan a unique ceremony that celebrates your story.
          </p>

          <p
            className="font-display italic text-neutral-400"
            style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}
          >
            A vow renewal is not a legal ceremony.
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
              src="/images/services3.jpeg"
              alt="Renewal of marriage vows ceremony"
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
