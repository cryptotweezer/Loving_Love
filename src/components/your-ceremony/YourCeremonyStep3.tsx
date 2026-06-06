"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useScrollSnap } from "@/hooks/useScrollSnap";

export default function YourCeremonyStep3() {
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
          initial={{ opacity: 0, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2
            className="font-display font-normal text-neutral-900 leading-tight mb-7"
            style={{ fontSize: "clamp(2rem, 3.6vw, 3.75rem)" }}
          >
            On your Wedding Day
          </h2>

          <p
            className="text-neutral-500 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.15rem)" }}
          >
            I&apos;ll arrive 45 minutes earlier than the ceremony start time.
            If required, which we would establish earlier in the piece, I would
            have my great PA system, as well as my table and two chairs for
            signing of the Marriage Register. I would set up and connect with
            others involved in your ceremony; for example, I would work with,
            and alert photographers of any specific special moments to capture,
            touch base with musicians and support your suppliers working behind
            the scenes, if needed. I&apos;ll introduce myself to significant
            family members and mingle with your guests. Meet the groom and his
            crew, check in on the nerves! Quick hello to the bride and her
            party. Have tissues on hand! I deliver your ceremony with love, and
            ensure all documents are completed and signed in accordance with
            legal requirements.
          </p>
        </motion.div>

        {/* ── Photo collage — right ─────────────────────────────────────────── */}
        <motion.div
          className="relative h-[72vw] min-h-[320px] md:h-[min(74dvh,700px)]"
          initial={{ opacity: 0, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          {/* lena15 — top-left, larger */}
          <motion.div
            className="absolute left-0 top-[3%] h-[64%] w-[58%] overflow-hidden bg-neutral-100"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/images/lena15.png"
              alt="Lena on the wedding day"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 65vw, 38vw"
            />
          </motion.div>

          {/* lena16 — bottom-right, overlapping */}
          <motion.div
            className="absolute right-0 bottom-[3%] z-10 h-[62%] w-[52%] overflow-hidden bg-neutral-100"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/images/lena16.png"
              alt="Lena at the ceremony"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 58vw, 34vw"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
