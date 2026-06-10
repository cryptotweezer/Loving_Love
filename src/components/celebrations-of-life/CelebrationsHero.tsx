"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { useNavbarTheme } from "@/context/NavbarThemeContext";

const blurIn = (delay = 0) => ({
  initial:    { opacity: 0, filter: "blur(12px)" },
  animate:    { opacity: 1, filter: "blur(0px)"  },
  transition: { duration: 0.9, ease: "easeOut" as const, delay },
});

export default function CelebrationsHero() {
  const { setDark, setLight } = useNavbarTheme();

  // Keep navbar dark for the entire page
  useEffect(() => {
    setDark();
    return () => setLight();
  }, [setDark, setLight]);

  return (
    <section className="flex h-[100dvh] flex-col items-center justify-center
                        bg-black px-6 text-center md:px-16 xl:px-24">
      <div className="max-w-3xl">

        {/* Label */}
        <motion.p
          className="font-display italic text-white/40 mb-7"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          {...blurIn(0.1)}
        >
          Celebrations of Life
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-display font-normal text-white leading-tight"
          style={{ fontSize: "clamp(2rem, 3.8vw, 3.75rem)" }}
          {...blurIn(0.25)}
        >
          Honouring a life beautifully lived.
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="font-display italic text-white/55 mt-9 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}
          {...blurIn(0.45)}
        >
          A Celebration of Life is not about saying goodbye. It is about saying
          thank you. Thank you for every story shared, every moment of love,
          every memory that remains. Together, we create a ceremony as unique
          and as beautiful as the person it honours.
        </motion.p>

      </div>
    </section>
  );
}
