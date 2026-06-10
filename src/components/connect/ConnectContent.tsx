"use client";

import { motion } from "motion/react";
import { Facebook, Instagram, Mail, MessageCircle, Phone } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0  },
};

const socialLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/lenalovinglove/",
    icon: Facebook,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/lenalovinglove/",
    icon: Instagram,
  },
  {
    title: "Threads",
    href: "https://www.threads.com/@lenalovinglove",
    icon: MessageCircle,
  },
];

export default function ConnectContent() {
  return (
    <div className="flex min-h-[100svh] items-center bg-white px-6 py-32 md:min-h-[100dvh] md:px-16 md:py-40 xl:px-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-16 xl:gap-20 2xl:max-w-[1400px]">

        {/* ── Left — heading + copy ─────────────────────────────────────────── */}
        <div>
          <motion.p
            className="font-display italic text-neutral-400 mb-6"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          >
            Connect
          </motion.p>

          <motion.h1
            className="font-display font-normal text-neutral-900 leading-tight mb-7"
            style={{ fontSize: "clamp(2.125rem, 4vw, 4rem)" }}
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            Hope you do get in touch.
          </motion.h1>

          <motion.p
            className="font-display italic text-neutral-500 leading-relaxed mb-6"
            style={{ fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          >
            It would be amazing to take part in one of the happiest
            celebrations of your life!
          </motion.p>

          <motion.p
            className="text-neutral-500 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.15rem)" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            Call me or send an email, and let&apos;s arrange an obligation free
            catch up — perhaps over a coffee or a drink! I will share a little
            more about myself, and further explain my role as your Marriage
            Celebrant. You can tell me a bit about you &amp; your wedding
            plans, and hopefully I do go on to create a meaningful ceremony,
            which captures your special love.
          </motion.p>
        </div>

        {/* ── Right — contact card ──────────────────────────────────────────── */}
        <motion.div
          className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-400">
            Lena Saunig · Authorised Marriage Celebrant
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="tel:0405143843"
              className="inline-flex items-center justify-center gap-2.5 rounded-full
                         bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white
                         transition-opacity duration-200 hover:opacity-85"
            >
              <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
              0405 143 843
            </a>
            <a
              href="mailto:lena@lovinglove.com.au"
              className="inline-flex items-center justify-center gap-2.5 rounded-full
                         border border-neutral-300 bg-white px-7 py-3.5 text-sm
                         font-medium text-neutral-900 transition-colors duration-200
                         hover:bg-neutral-100"
            >
              <Mail aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
              lena@lovinglove.com.au
            </a>
          </div>

          <div className="mt-9 border-t border-neutral-200 pt-7">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-400">
              Follow along
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ title, href, icon: Icon }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} — @lenalovinglove`}
                  className="flex h-11 w-11 items-center justify-center rounded-full
                             border border-neutral-300 bg-white text-neutral-900
                             transition-colors duration-200 hover:bg-neutral-100"
                >
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
