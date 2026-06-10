"use client";

import { motion } from "motion/react";
import { testimonials } from "@/data/testimonials";

const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0  },
};

export default function MomentsContent() {
  return (
    <div className="bg-white">

      {/* ── Heading ───────────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center px-6 pb-16 pt-40 text-center md:pb-20 md:pt-48 md:px-16 xl:px-24">
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

      {/* ── Testimonials — masonry columns ────────────────────────────────── */}
      <section className="px-6 pb-24 md:px-16 md:pb-32 xl:px-24">
        <div className="mx-auto max-w-7xl columns-1 gap-6 md:columns-2 xl:columns-3 2xl:max-w-[1400px]">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.couple + testimonial.venue}
              className="mb-6 break-inside-avoid rounded-2xl border border-neutral-200 bg-neutral-50 p-7 md:p-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: (index % 3) * 0.08,
              }}
            >
              <blockquote>
                <p className="whitespace-pre-line text-[15px] leading-relaxed text-neutral-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-900">
                  {testimonial.couple}
                </p>
                <p className="font-display mt-1 text-sm italic text-neutral-400">
                  {testimonial.venue}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </div>
  );
}
