"use client";

import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Facebook, Instagram, Mail, MessageCircle, Phone } from "lucide-react";

const exploreLinks = [
  { title: "Meet Lena", href: "/meet-lena" },
  { title: "Your Ceremony", href: "/your-ceremony" },
  { title: "Moments", href: "/moments" },
  { title: "Other Services", href: "/other-services" },
  { title: "Partners", href: "/partners" },
  { title: "Connect", href: "/connect" },
];

const socialLinks = [
  { title: "Facebook", href: "https://www.facebook.com/lenalovinglove/", icon: Facebook },
  { title: "Instagram", href: "https://www.instagram.com/lenalovinglove/", icon: Instagram },
  { title: "Threads", href: "https://www.threads.com/@lenalovinglove?xmt=AQG0wnI16cecLOzCWwELXG1KWhY9YMM-mLXIWTm9XSdwUE0", icon: MessageCircle },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.documentElement.classList.toggle("hide-navbar", entry.isIntersecting);
      },
      { threshold: 0.12 }
    );

    observer.observe(footer);
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("hide-navbar");
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden bg-neutral-950 px-6 py-14 text-white md:px-16 md:py-20 xl:px-24"
    >
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-white/10 blur-sm" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(45%_140px_at_50%_0%,rgba(255,255,255,0.04),transparent)]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_1.95fr]">
        <AnimatedContainer className="space-y-7">
          <Link href="/" aria-label="Loving Love Home" className="inline-flex">
            <Image
              src="/images/logo.webp"
              alt="Loving Love"
              width={180}
              height={72}
              className="h-14 w-auto object-contain"
            />
          </Link>

          <div>
            <p className="font-display text-2xl leading-tight text-white">
              Lena Saunig
            </p>
            <p className="mt-1 text-sm text-white/50">
              Authorised Marriage Celebrant
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Image
              src="/images/amc_logo.webp"
              alt="Australian Marriage Celebrants"
              width={96}
              height={48}
              className="h-10 w-auto object-contain opacity-40 invert"
            />
            <Image
              src="/images/abia_logo.webp"
              alt="ABIA Weddings"
              width={96}
              height={48}
              className="h-10 w-auto object-contain opacity-40 invert"
            />
          </div>

          <p className="text-sm text-white/40">
            Copyright 2019 by Loving Love
          </p>
        </AnimatedContainer>

        <div className="grid gap-10 sm:grid-cols-3">
          <AnimatedContainer delay={0.15}>
            <FooterHeading>Explore</FooterHeading>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedContainer>

          <AnimatedContainer delay={0.25}>
            <FooterHeading>Connect</FooterHeading>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="tel:0405143843"
                  className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >
                  <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
                  0405 143 843
                </a>
              </li>
              <li>
                <a
                  href="mailto:lena@lovinglove.com.au"
                  className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >
                  <Mail aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
                  lena@lovinglove.com.au
                </a>
              </li>
            </ul>
          </AnimatedContainer>

          <AnimatedContainer delay={0.35}>
            <FooterHeading>Social</FooterHeading>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    {link.icon && (
                      <link.icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
                    )}
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedContainer>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-white">
      {children}
    </h2>
  );
}

type AnimatedContainerProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", y: 10, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
