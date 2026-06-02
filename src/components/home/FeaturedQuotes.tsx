"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const featuredQuotes = [
  {
    quote:
      "We felt that it was a true reflection of our story and one that had our guests crying and laughing.",
    couple: "Belle & Matt",
  },
  {
    quote: "We would 150% recommend Lena.",
    couple: "Lucy & Ryan",
  },
  {
    quote:
      "When you look for a wedding celebrant, you're not just looking for an official. You are looking for someone to be part of your family.",
    couple: "Bec & Andy",
  },
  {
    quote:
      "So much love for Lena - she's a beautiful soul who genuinely loves what she's doing - and it shows.",
    couple: "Tina & Jason",
  },
  {
    quote:
      "Speechless! Absolutely speechless at how amazing Lena was from the very first meet, all the way right through to our special day!",
    couple: "Jo & Fahad",
  },
  {
    quote:
      "Lena created a beautiful personalised ceremony that was lighthearted, intimate, and totally us. She is definitely worth more than 5 stars.",
    couple: "Jess & Andre",
  },
] as const;

export default function FeaturedQuotes() {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const activeQuote = featuredQuotes[activeIndex];

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );

    observer.observe(title);
    return () => observer.disconnect();
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? featuredQuotes.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === featuredQuotes.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="relative flex h-[100lvh] snap-start items-center overflow-hidden bg-white px-6 py-24 md:h-[100dvh] md:px-16 xl:px-24">
      <button
        type="button"
        onClick={showPrevious}
        aria-label="Previous quote"
        className="absolute bottom-32 left-1/2 z-10 flex h-11 w-11 -translate-x-[3.25rem] items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-neutral-900 shadow-sm backdrop-blur transition-opacity duration-200 hover:opacity-70 md:left-8 md:top-1/2 md:bottom-auto md:-translate-x-0 md:-translate-y-1/2"
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
      </button>

      <div className="mx-auto w-full max-w-5xl -translate-y-8 pb-24 text-center md:translate-y-0 md:pb-0">
        <motion.p
          ref={titleRef}
          initial={{ opacity: 0, y: 16 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`font-display italic text-shimmer mx-auto mb-5 inline-block max-w-2xl text-xs uppercase tracking-[0.26em] md:mb-6 md:text-sm ${
            titleVisible ? "is-visible" : ""
          }`}
        >
          Thoughtful comments shared by wonderful couples
        </motion.p>

        <div className="flex w-full items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeQuote.couple}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <p className="font-display text-4xl font-normal leading-tight text-neutral-900 md:text-6xl">
                &ldquo;{activeQuote.quote}&rdquo;
              </p>
              <footer className="mt-8 text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
                {activeQuote.couple}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <Link
            href="/moments"
            className="mt-10 inline-flex items-center rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85 md:mt-12"
          >
            Moments
          </Link>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={showNext}
        aria-label="Next quote"
        className="absolute bottom-32 left-1/2 z-10 flex h-11 w-11 translate-x-2 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-neutral-900 shadow-sm backdrop-blur transition-opacity duration-200 hover:opacity-70 md:left-auto md:right-8 md:top-1/2 md:bottom-auto md:translate-x-0 md:-translate-y-1/2"
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
      </button>
    </section>
  );
}
