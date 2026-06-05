"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function MeetLenaIntro() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const trackX = useTransform(
    scrollYProgress,
    [0, 0.18, 0.62, 1],
    ["0vw", "0vw", "-100vw", "-100vw"]
  );

  const firstTextOpacity = useTransform(scrollYProgress, [0, 0.18, 0.5], [1, 1, 0]);
  const firstTextY = useTransform(scrollYProgress, [0, 0.18, 0.5], [0, 0, -24]);
  const secondTextOpacity = useTransform(scrollYProgress, [0.42, 0.62], [0, 1]);
  const secondTextY = useTransform(scrollYProgress, [0.42, 0.62], [32, 0]);

  return (
    <section ref={containerRef} className="relative h-[260vh] bg-white">
      <div className="sticky top-0 h-[100dvh] overflow-hidden bg-white">
        <motion.div className="absolute inset-0 flex" style={{ x: trackX }}>
          <Panel>
            <div className="grid w-full max-w-7xl gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.9fr)] md:gap-14 xl:gap-20">
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

              <div className="flex flex-col justify-center md:max-w-[470px] md:justify-self-end">
                <motion.h1
                  className="font-display font-normal text-neutral-900 leading-[0.98] mb-7"
                  style={{
                    fontSize: "clamp(3.25rem, 5.1vw, 5.75rem)",
                    opacity: firstTextOpacity,
                    y: firstTextY,
                  }}
                >
                  Hello, I&apos;m Lena Saunig,
                </motion.h1>

                <motion.p
                  className="font-display italic text-neutral-500 leading-relaxed mb-7"
                  style={{
                    fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
                    opacity: firstTextOpacity,
                    y: firstTextY,
                  }}
                >
                  Your Marriage Celebrant
                </motion.p>

                <motion.p
                  className="text-neutral-500 leading-relaxed"
                  style={{
                    fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
                    opacity: firstTextOpacity,
                    y: firstTextY,
                  }}
                >
                  Becoming a Marriage Celebrant had been a secret dream of mine for over
                  20 years, which I happened to mention to a friend who was the Celebrant
                  at a mutual friend&apos;s wedding. He encouraged me to get myself qualified
                  and registered. No longer a dream for many years now! I will be forever
                  grateful to him.
                </motion.p>
              </div>
            </div>
          </Panel>

          <Panel>
            <div className="grid w-full max-w-7xl gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.9fr)] md:gap-14 xl:gap-20">
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
                  className="absolute bottom-[4%] right-0 z-10 h-[48%] w-[52%] overflow-hidden bg-neutral-100"
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

              <div className="flex flex-col justify-center md:max-w-[470px] md:justify-self-end">
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
        </motion.div>
      </div>
    </section>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex h-full w-screen flex-shrink-0 items-center px-6 pb-12 pt-[calc(var(--navbar-h)+2rem)] md:px-16 md:py-20 xl:px-24"
    >
      {children}
    </div>
  );
}
