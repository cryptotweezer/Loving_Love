"use client";

import { motion } from "motion/react";

export default function MomentsContent() {
  return (
    <section className="flex h-[100svh] flex-col items-center justify-center bg-white px-6 text-center md:h-[100dvh] md:px-16 xl:px-24">
      <div className="max-w-3xl">

        <motion.p
          className="font-display italic text-neutral-400 mb-6"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
        >
          Moments
        </motion.p>

        <motion.h1
          className="font-display font-normal text-neutral-900 leading-tight"
          style={{ fontSize: "clamp(2rem, 3.8vw, 3.75rem)" }}
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          Moments &amp; Thoughtful Words
        </motion.h1>

        <motion.p
          className="font-display italic text-neutral-400 mt-8"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          Words from the wonderful couples Lena has had the privilege of
          celebrating.
        </motion.p>

      </div>
    </section>
  );
}
