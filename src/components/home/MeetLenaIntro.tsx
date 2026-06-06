"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

const SCROLL_END_DELAY = 420;
const SNAP_SETTLE_MS = 1100;

// DOWN: snap to the panel that is arriving (heading forward).
// — Gap [0.25 → 0.30] between panels 1 and 2 is now closed (Panel 2 starts at 0.25).
// — Panel 4 range ends at 0.92 so snap stops pulling the user back once they
//   are heading into MeetLenaSocial (which starts appearing past ~0.93).
const DOWN_SNAPS = [
  { target: 0.12, range: [0.02, 0.25] as [number, number] }, // Panel 1 settled
  { target: 0.48, range: [0.25, 0.57] as [number, number] }, // Panel 2 arriving
  { target: 0.68, range: [0.58, 0.77] as [number, number] }, // Panel 3 arriving
  { target: 0.87, range: [0.78, 0.92] as [number, number] }, // Panel 4 arriving
];

// UP: snap to the panel the user is returning to.
// Ranges follow the DEPARTURE transition of each panel (the band where it
// slides OUT of view as the user scrolls back up), so the snap pulls them
// back to the correct settled position.
const UP_SNAPS = [
  { target: 0.12, range: [0.02, 0.30] as [number, number] }, // back to Panel 1
  { target: 0.48, range: [0.42, 0.55] as [number, number] }, // back to Panel 2
  { target: 0.68, range: [0.62, 0.75] as [number, number] }, // back to Panel 3
  { target: 0.87, range: [0.82, 0.94] as [number, number] }, // back to Panel 4
];

export default function MeetLenaIntro() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.35,
  });

  // ── Horizontal track — 4 panels ──────────────────────────────────────────────
  // 520vh total, 420vh scrollable → ~105vh per panel.
  //
  // Panel 1  visible:   0 → 0.12 (rest) then slides out
  // Panel 2  settles:   0.48
  // Panel 3  settles:   0.68
  // Panel 4  settles:   0.87
  const trackX = useTransform(
    smoothProgress,
    [0,     0.14,  0.46,      0.52,      0.66,      0.72,      0.85,      0.91,      1      ],
    ["0vw", "0vw", "-100vw", "-100vw", "-200vw", "-200vw", "-300vw", "-300vw", "-300vw"]
  );

  // ── Panel 1 — fades OUT as it slides away ─────────────────────────────────────
  const firstTextOpacity = useTransform(smoothProgress, [0, 0.16, 0.38], [1, 1, 0]);
  const firstTextY       = useTransform(smoothProgress, [0, 0.16, 0.38], [0, 0, -24]);

  // ── Panel 2 — fades IN; completes before the 0.48 settle ─────────────────────
  const secondTextOpacity = useTransform(smoothProgress, [0.32, 0.48], [0, 1]);
  const secondTextY       = useTransform(smoothProgress, [0.32, 0.48], [34, 0]);

  // ── Panel 3 — fades IN; text span matches Panel 2 (0.13) ─────────────────────
  const thirdImgOpacity  = useTransform(smoothProgress, [0.56, 0.68], [0, 1]);
  const thirdTextOpacity = useTransform(smoothProgress, [0.54, 0.68], [0, 1]);
  const thirdTextY       = useTransform(smoothProgress, [0.54, 0.68], [34, 0]);

  // ── Panel 4 — fades IN; text span matches Panel 2 (0.13) ─────────────────────
  const fourthImgOpacity  = useTransform(smoothProgress, [0.76, 0.87], [0, 1]);
  const fourthTextOpacity = useTransform(smoothProgress, [0.73, 0.87], [0, 1]);
  const fourthTextY       = useTransform(smoothProgress, [0.73, 0.87], [34, 0]);

  // ── Scroll snap — snaps to each settled panel position after user stops ───────
  useEffect(() => {
    let snapTimer: ReturnType<typeof setTimeout>;
    let isSnapping    = false;
    let lastSnappedAt = -1;
    let lastScrollY   = window.scrollY;
    let goingDown     = true;

    const getProgress = (): number => {
      const el = containerRef.current;
      if (!el) return -1;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return -1;
      return Math.max(0, Math.min(1, -el.getBoundingClientRect().top / scrollable));
    };

    const snapTo = (target: number) => {
      const el = containerRef.current;
      if (!el || isSnapping) return;
      if (Math.abs(target - lastSnappedAt) < 0.04) return;
      const scrollable   = el.offsetHeight - window.innerHeight;
      const containerTop = window.scrollY + el.getBoundingClientRect().top;
      const targetY      = containerTop + target * scrollable;
      isSnapping    = true;
      lastSnappedAt = target;
      window.scrollTo({ top: targetY, behavior: "smooth" });
      setTimeout(() => { isSnapping = false; }, SNAP_SETTLE_MS);
    };

    const onScrollEnd = () => {
      const progress = getProgress();
      // Stop snapping near the very start and once Panel 4 is settled and the
      // user is heading into MeetLenaSocial (progress > 0.95).
      if (progress < 0.02 || progress > 0.95) return;
      const zones = goingDown ? DOWN_SNAPS : UP_SNAPS;
      for (const { target, range } of zones) {
        if (progress >= range[0] && progress <= range[1]) {
          snapTo(target);
          break;
        }
      }
    };

    const onScroll = () => {
      const y   = window.scrollY;
      goingDown = y >= lastScrollY;
      lastScrollY = y;
      const p = getProgress();
      if (p >= 0 && Math.abs(p - lastSnappedAt) > 0.12) lastSnappedAt = -1;
      if (isSnapping) return;
      clearTimeout(snapTimer);
      snapTimer = setTimeout(onScrollEnd, SCROLL_END_DELAY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(snapTimer);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[520vh] bg-white">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-white md:h-[100dvh]">
        <motion.div className="absolute inset-0 flex" style={{ x: trackX }}>

          {/* ── Panel 1: Hello, I'm Lena ─────────────────────────────────────── */}
          <Panel>
            <div className="grid w-full max-w-7xl gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.9fr)] md:gap-14 xl:gap-20 2xl:max-w-[1400px] 2xl:mx-auto">
              <motion.div
                className="relative h-[72vw] min-h-[320px] md:h-[min(76dvh,720px)]"
                style={{ opacity: firstTextOpacity }}
              >
                <motion.div
                  className="absolute left-0 top-0 h-full w-full overflow-hidden bg-neutral-100"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src="/images/lena1.png"
                    alt="Lena Saunig"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 42vw"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Exit wrapper — fades out + lifts up as panel scrolls away */}
              <motion.div
                className="flex flex-col justify-center md:max-w-[470px] md:justify-self-end 2xl:justify-self-start"
                style={{ opacity: firstTextOpacity, y: firstTextY }}
              >
                {/* Each element enters with the same fade-up as panels 2–4 */}
                <motion.h1
                  className="font-display font-normal text-neutral-900 leading-[0.98] mb-7"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  style={{ fontSize: "clamp(3.25rem, 5.1vw, 5.75rem)" }}
                >
                  Hello, I&apos;m Lena Saunig,
                </motion.h1>

                <motion.p
                  className="font-display italic text-neutral-500 leading-relaxed mb-7"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  style={{ fontSize: "clamp(1rem, 1.25vw, 1.2rem)" }}
                >
                  Your Marriage Celebrant
                </motion.p>

                <motion.p
                  className="text-neutral-500 leading-relaxed"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  style={{ fontSize: "clamp(1rem, 1.25vw, 1.2rem)" }}
                >
                  Becoming a Marriage Celebrant had been a secret dream of mine for over
                  20 years, which I happened to mention to a friend who was the Celebrant
                  at a mutual friend&apos;s wedding. He encouraged me to get myself qualified
                  and registered. No longer a dream for many years now! I will be forever
                  grateful to him.
                </motion.p>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <Link
                    href="/connect"
                    className="inline-flex text-sm font-bold text-neutral-900
                               underline underline-offset-[6px] decoration-neutral-900 decoration-2
                               transition-opacity duration-200 hover:opacity-70"
                  >
                    Let&apos;s Chat
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </Panel>

          {/* ── Panel 2: I'm passionate ──────────────────────────────────────── */}
          <Panel>
            <div className="grid w-full max-w-7xl gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.9fr)] md:gap-14 xl:gap-20 2xl:max-w-[1400px] 2xl:mx-auto">
              <motion.div
                className="relative h-[72vw] min-h-[320px] md:h-[min(72dvh,680px)]"
                style={{ opacity: secondTextOpacity }}
              >
                <motion.div
                  className="absolute left-0 top-[4%] h-[58%] w-[64%] overflow-hidden bg-neutral-100"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src="/images/lena3.png"
                    alt="Lena Saunig"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 70vw, 42vw"
                  />
                </motion.div>

                <motion.div
                  className="absolute bottom-[4%] right-0 z-10 h-[56%] w-[44%] overflow-hidden bg-neutral-100"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src="/images/lena4.png"
                    alt="Lena connecting with people"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 60vw, 34vw"
                  />
                </motion.div>
              </motion.div>

              <div className="flex flex-col justify-center md:max-w-[470px] md:justify-self-end 2xl:justify-self-start">
                <motion.h2
                  className="font-display font-normal text-neutral-900 leading-[0.98] mb-7"
                  style={{
                    fontSize: "clamp(2.45rem, 3.7vw, 4.35rem)",
                    opacity: secondTextOpacity,
                    y: secondTextY,
                  }}
                >
                  I&apos;m passionate about love, people, communication and connection
                </motion.h2>

                <motion.p
                  className="text-neutral-500 leading-relaxed"
                  style={{
                    fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
                    opacity: secondTextOpacity,
                    y: secondTextY,
                  }}
                >
                  I have a varied background; from advertising and public relations,
                  to education, counselling and supporting parents &amp; teens to
                  connect, and I place great value on taking the time to get to know
                  the people I work with.
                </motion.p>
              </div>
            </div>
          </Panel>

          {/* ── Panel 3: As a Marriage Celebrant ─────────────────────────────── */}
          <Panel>
            <div className="grid w-full max-w-7xl gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.9fr)] md:gap-14 xl:gap-20 2xl:max-w-[1400px] 2xl:mx-auto">
              <motion.div
                className="relative h-[72vw] min-h-[320px] md:h-[min(72dvh,680px)]"
                style={{ opacity: thirdImgOpacity }}
              >
                {/* lena7 — portrait, ceremony scene, top-left */}
                <motion.div
                  className="absolute left-0 top-[2%] h-[62%] w-[42%] overflow-hidden bg-neutral-100"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src="/images/lena7.png"
                    alt="Lena officiating a wedding ceremony"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 28vw"
                  />
                </motion.div>

                {/* lena9 — portrait, outdoor group, top-right */}
                <motion.div
                  className="absolute right-[2%] top-[16%] h-[56%] w-[37%] overflow-hidden bg-neutral-100"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src="/images/lena9.png"
                    alt="Lena with a couple outdoors"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </motion.div>

                {/* lena8 — landscape ~4:3, indoor group, bottom-centre */}
                <motion.div
                  className="absolute left-[22%] bottom-[2%] z-10 h-[44%] w-[54%] overflow-hidden bg-neutral-100"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src="/images/lena8.png"
                    alt="Lena with a couple at a venue"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 65vw, 36vw"
                  />
                </motion.div>
              </motion.div>

              <div className="flex flex-col justify-center md:max-w-[470px] md:justify-self-end 2xl:justify-self-start">
                <motion.h2
                  className="font-display font-normal text-neutral-900 leading-[0.98] mb-7"
                  style={{
                    fontSize: "clamp(2.6rem, 4vw, 4.75rem)",
                    opacity: thirdTextOpacity,
                    y: thirdTextY,
                  }}
                >
                  As a Marriage Celebrant
                </motion.h2>

                <motion.p
                  className="text-neutral-500 leading-relaxed mb-8"
                  style={{
                    fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
                    opacity: thirdTextOpacity,
                    y: thirdTextY,
                  }}
                >
                  I have the opportunity to, not only connect with amazing couples,
                  but to also get a sense of their love and the wonderful connection
                  they share, which for me is important for creating a ceremony that
                  is a true reflection of each couple I work with.
                </motion.p>

                <motion.div
                  className="mt-8"
                  style={{ opacity: thirdTextOpacity, y: thirdTextY }}
                >
                  <Link
                    href="/moments"
                    className="inline-flex text-sm font-bold text-neutral-900
                               underline underline-offset-[6px] decoration-neutral-900 decoration-2
                               transition-opacity duration-200 hover:opacity-70"
                  >
                    Moments
                  </Link>
                </motion.div>
              </div>
            </div>
          </Panel>

          {/* ── Panel 4: Married 20+ years ───────────────────────────────────── */}
          <Panel>
            <div className="grid w-full max-w-7xl gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.9fr)] md:gap-14 xl:gap-20 2xl:max-w-[1400px] 2xl:mx-auto">

              {/* Collage — lena5 top-left (couple portrait), lena10 bottom-right (couple selfie) */}
              <motion.div
                className="relative h-[72vw] min-h-[320px] md:h-[min(72dvh,680px)]"
                style={{ opacity: fourthImgOpacity }}
              >
                {/* lena5 — couple portrait, top-left, larger */}
                <motion.div
                  className="absolute left-0 top-[3%] h-[64%] w-[58%] overflow-hidden bg-neutral-100"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src="/images/lena5.png"
                    alt="Lena and her husband"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 65vw, 38vw"
                  />
                </motion.div>

                {/* lena10 — 725×906px (0.80:1), bottom-right */}
                <motion.div
                  className="absolute right-[2%] bottom-[3%] z-10 h-[68%] w-[54%] overflow-hidden bg-neutral-100"
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src="/images/lena10.png"
                    alt="Lena and her husband"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 60vw, 36vw"
                  />
                </motion.div>
              </motion.div>

              {/* Text — single wrapper layer so all children fade/move as one unit */}
              <motion.div
                className="flex flex-col justify-center md:max-w-[470px] md:justify-self-end 2xl:justify-self-start"
                style={{ opacity: fourthTextOpacity, y: fourthTextY }}
              >
                <h2
                  className="font-display font-normal text-neutral-900 leading-[0.98] mb-7"
                  style={{ fontSize: "clamp(2.45rem, 3.7vw, 4.35rem)" }}
                >
                  Once, I said yes.
                </h2>

                <p
                  className="text-neutral-500 leading-relaxed mb-4"
                  style={{ fontSize: "clamp(1rem, 1.25vw, 1.2rem)" }}
                >
                  I know what that moment feels like, really know it. Standing
                  there, heart full, the world holding its breath around you.
                  It is everything. And it passes in an instant.
                </p>

                <p
                  className="text-neutral-500 leading-relaxed"
                  style={{ fontSize: "clamp(1rem, 1.25vw, 1.2rem)" }}
                >
                  That&apos;s why I pour everything I have into every ceremony
                  I create. Every word, every detail, every quiet pause between
                  vows, cared for completely, so that yours is everything
                  it should be.
                </p>

                <p
                  className="font-display italic text-neutral-500 mt-5"
                  style={{ fontSize: "clamp(1rem, 1.25vw, 1.2rem)" }}
                >
                  Cheers to love!
                </p>

                <div
                  className="mt-8"
                >
                  <Link
                    href="/connect"
                    className="inline-flex text-sm font-bold text-neutral-900
                               underline underline-offset-[6px] decoration-neutral-900 decoration-2
                               transition-opacity duration-200 hover:opacity-70"
                  >
                    Let&apos;s Chat
                  </Link>
                </div>
              </motion.div>
            </div>
          </Panel>

        </motion.div>
      </div>
    </section>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-screen flex-shrink-0 items-center px-6 pb-12 pt-[calc(var(--navbar-h)+2rem)] md:px-16 md:py-20 xl:px-24">
      {children}
    </div>
  );
}
