"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useScrollSnap } from "@/hooks/useScrollSnap";

export default function YourCeremonyStep4() {
  const sectionRef = useScrollSnap({ desktopOnly: true });

  return (
    <section ref={sectionRef} className="flex min-h-[100svh] items-center bg-white
                        px-6 py-20 md:min-h-[100dvh] md:px-16 xl:px-24">
      <div className="grid w-full max-w-7xl mx-auto gap-12
                      md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]
                      md:gap-16 xl:gap-20 items-center">

        {/* ── Photo — left ─────────────────────────────────────────────────── */}
        <motion.div
          className="relative h-[72vw] min-h-[320px] md:h-[min(74dvh,700px)]"
          initial={{ opacity: 0, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 overflow-hidden bg-neutral-100"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/images/lena17.png"
              alt="Lena after the wedding — registering the marriage"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
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
            After your Wedding
          </h2>

          <p
            className="text-neutral-500 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.15rem)" }}
          >
            I register your marriage and lodge all legal documents with the
            Registry of Births, Deaths and Marriages within fourteen days from
            the date of your wedding. If requested by you, I apply for the
            Official Certificate of Marriage on your behalf, at the same time
            of registering your marriage.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
