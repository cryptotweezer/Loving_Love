"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useScrollSnap } from "@/hooks/useScrollSnap";

export default function YourCeremonyStep2() {
  const sectionRef = useScrollSnap({ desktopOnly: true });

  return (
    <section ref={sectionRef} className="flex min-h-[100svh] items-center bg-white
                        px-6 py-20 md:min-h-[100dvh] md:px-16 xl:px-24">
      <div className="grid w-full max-w-7xl mx-auto gap-12
                      md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]
                      md:gap-16 xl:gap-20 2xl:max-w-[1400px] items-center">

        {/* ── Photo collage — left ──────────────────────────────────────────── */}
        <motion.div
          className="relative h-[72vw] min-h-[320px] md:h-[min(74dvh,700px)]"
          initial={{ opacity: 0, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* lena13 — top-right, larger */}
          <motion.div
            className="absolute right-0 top-[3%] h-[64%] w-[58%] overflow-hidden bg-neutral-100"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/images/lena13.png"
              alt="Lena planning a ceremony with a couple"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 65vw, 38vw"
            />
          </motion.div>

          {/* lena14 — bottom-left, overlapping */}
          <motion.div
            className="absolute left-0 bottom-[3%] z-10 h-[62%] w-[52%] overflow-hidden bg-neutral-100"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/images/lena14.png"
              alt="Lena reviewing ceremony details"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 58vw, 34vw"
            />
          </motion.div>
        </motion.div>

        {/* ── Text — right ─────────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <h2
            className="font-display font-normal text-neutral-900 leading-tight mb-7"
            style={{ fontSize: "clamp(2rem, 3.6vw, 3.75rem)" }}
          >
            We Plan the Ceremony Together
          </h2>

          <p
            className="text-neutral-500 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.15rem)" }}
          >
            Once you decide to connect, you will lodge, with me, a Notice of
            Intended Marriage. It is a legal requirement for this Notice to be
            lodged at least one month before the date of your marriage, and not
            more than 18 months prior to the date. And so, we become a bit of a
            team as we begin the process of creating YOUR ceremony! Based on the
            style of ceremony, we&apos;ll discuss options; I note your thoughts
            and ideas, I share mine, provide you with information and a range of
            readings, as well as examples to support you in writing your own
            special vows. Basically, I work with you until you&apos;re totally
            happy.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
