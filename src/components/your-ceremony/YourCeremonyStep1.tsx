"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useScrollSnap } from "@/hooks/useScrollSnap";

export default function YourCeremonyStep1() {
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
          initial={{ opacity: 0, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2
            className="font-display font-normal text-neutral-900 leading-tight mb-7"
            style={{ fontSize: "clamp(2rem, 3.6vw, 3.75rem)" }}
          >
            We Get to Know Each Other
          </h2>

          <p
            className="text-neutral-500 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.15rem)" }}
          >
            We&apos;ll have catch ups, the initial being obligation free. These may
            be face-to-face, via emails, telephone, Face Time or other. The style
            of ceremony is a reflection of you. At our initial catch up, we discuss
            what you&apos;d like or envisage; whether it&apos;s a short and simple
            ceremony with a small number of guests, or a longer more detailed and
            personalised ceremony, involving a large bridal party and number of
            guests. You may be planning an elopement or a surprise ceremony.
            I&apos;ll outline all that&apos;s involved, from legal requirements to
            ceremony process, and provide my fee.
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
          {/* lena11 — top-left, larger */}
          <motion.div
            className="absolute left-0 top-[3%] h-[64%] w-[58%] overflow-hidden bg-neutral-100"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/images/lena11.png"
              alt="Lena with a couple — getting to know each other"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 65vw, 38vw"
            />
          </motion.div>

          {/* lena12 — bottom-right, overlapping */}
          <motion.div
            className="absolute right-0 bottom-[3%] z-10 h-[62%] w-[52%] overflow-hidden bg-neutral-100"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/images/lena12.png"
              alt="Lena connecting with a couple"
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
