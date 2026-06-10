"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function PartnersContent() {
  return (
    <section className="flex h-[100svh] flex-col items-center justify-center bg-white px-6 text-center md:h-[100dvh] md:px-16 xl:px-24">
      <div className="max-w-3xl">

        <motion.p
          className="font-display italic text-neutral-400 mb-7"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
        >
          Partners
        </motion.p>

        <motion.h1
          className="font-display font-normal text-neutral-900 leading-tight"
          style={{ fontSize: "clamp(2rem, 3.8vw, 3.75rem)" }}
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          Favourite venues and trusted partners
        </motion.h1>

        <motion.p
          className="font-display italic text-neutral-500 mt-8 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
        >
          Lena is lovingly putting together a list of the venues and wedding
          partners she has had the joy of working with. It will live here very
          soon — in the meantime, she&apos;d be delighted to share her
          recommendations in person.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.75 }}
        >
          <Link
            href="/connect"
            className="inline-flex items-center rounded-full bg-neutral-900 px-8 py-3.5
                       text-sm font-medium text-white transition-opacity duration-200
                       hover:opacity-85"
          >
            Let&apos;s Chat
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
