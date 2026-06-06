"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    title: "Facebook",
    handle: "@lenalovinglove",
    href: "https://www.facebook.com/lenalovinglove/",
    icon: Facebook,
  },
  {
    title: "Instagram",
    handle: "@lenalovinglove",
    href: "https://www.instagram.com/lenalovinglove/",
    icon: Instagram,
  },
  {
    title: "Threads",
    handle: "@lenalovinglove",
    href: "https://www.threads.com/@lenalovinglove",
    icon: MessageCircle,
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0  },
};

export default function MeetLenaSocial() {
  const sectionRef = useRef<HTMLElement>(null);

  // ── Navbar CTA toggle ────────────────────────────────────────────────────────
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        document.documentElement.classList.toggle("hide-navbar-cta", entry.isIntersecting);
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("hide-navbar-cta");
    };
  }, []);

  // ── Scroll snap ──────────────────────────────────────────────────────────────
  // Snaps section into view when approaching from above (scrolling down) OR
  // from below (scrolling back up from the footer).
  // Once the user has scrolled PAST the section into the footer, no snap fires.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let snapTimer: ReturnType<typeof setTimeout>;
    let isSnapping  = false;
    let lastScrollY = window.scrollY;
    let goingDown   = true;

    const onScrollEnd = () => {
      const top = section.getBoundingClientRect().top;
      const vh  = window.innerHeight;

      // Approaching from below (scrolling down) — section is partially in view from bottom
      if (goingDown && top > 40 && top < vh * 0.65) {
        isSnapping = true;
        window.scrollTo({ top: window.scrollY + top, behavior: "smooth" });
        setTimeout(() => { isSnapping = false; }, 900);
        return;
      }

      // Approaching from above (scrolling up from footer) — section partially cut off at top
      // Guard: top > -(vh * 0.55) ensures we don't snap mid-footer scroll
      if (!goingDown && top < -20 && top > -(vh * 0.55)) {
        isSnapping = true;
        window.scrollTo({ top: window.scrollY + top, behavior: "smooth" });
        setTimeout(() => { isSnapping = false; }, 900);
      }
    };

    const onScroll = () => {
      const y   = window.scrollY;
      goingDown = y >= lastScrollY;
      lastScrollY = y;
      if (isSnapping) return;
      clearTimeout(snapTimer);
      snapTimer = setTimeout(onScrollEnd, 350);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(snapTimer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex h-[100dvh] min-h-[100svh] flex-col items-center justify-center
                 overflow-hidden bg-neutral-950 px-6 text-white
                 md:min-h-[720px] md:px-16"
    >
      <div className="flex w-full flex-col items-center justify-center py-24 text-center">

        {/* Eyebrow */}
        <motion.p
          className="mb-5 text-[9px] font-medium uppercase tracking-[0.26em] text-white/40 md:mb-6 md:text-[10px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Lena Saunig · Loving Love
        </motion.p>

        {/* Title */}
        <motion.h2
          className="font-display font-normal leading-tight text-white mb-4"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          Follow along
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="font-display italic text-white/50 mb-14 md:mb-16"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          Celebrating love, and also life.
        </motion.p>

        {/* Social links */}
        <motion.div
          className="flex flex-col items-center gap-5 sm:flex-row sm:gap-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          {socialLinks.map(({ title, handle, href, icon: Icon }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-opacity duration-200 hover:opacity-60"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-colors duration-200 group-hover:bg-white/10">
                <Icon aria-hidden="true" className="h-6 w-6 text-white" strokeWidth={1.5} />
              </span>
              <span className="flex flex-col items-center gap-0.5">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/90">
                  {title}
                </span>
                <span className="text-[11px] text-white/40">
                  {handle}
                </span>
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
