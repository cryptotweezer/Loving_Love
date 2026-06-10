"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { motion } from "motion/react";

export default function GoogleReviewsPlaceholder() {
  return (
    <section
      className="flex h-[100svh] snap-start items-center bg-white px-6 py-24 md:h-[100dvh] md:px-16 md:py-32 xl:px-24"
    >
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.26em] text-neutral-400">
              Google Reviews
            </p>
            <h2 className="font-display text-4xl font-normal leading-tight text-neutral-900 md:text-5xl">
              Thoughtful words from couples Lena has celebrated
            </h2>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-10">
            <div className="mb-6 flex items-center gap-1 text-neutral-900">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  aria-hidden="true"
                  className="h-5 w-5 fill-current"
                  strokeWidth={1.5}
                />
              ))}
            </div>

            <p className="mb-6 text-lg leading-relaxed text-neutral-600">
              Couples consistently describe their ceremonies with Lena as
              personal, heartfelt and unforgettable.
            </p>

            <p className="mb-8 text-sm leading-relaxed text-neutral-500">
              Read their stories — in their own words — over on the Moments
              page.
            </p>

            <Link
              href="/moments"
              className="inline-flex items-center rounded-full bg-neutral-900 px-7 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85"
            >
              Read their words
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
