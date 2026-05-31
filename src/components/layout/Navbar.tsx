"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

// ─── Nav links ────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Home",          href: "/"              },
  { label: "Meet Lena",     href: "/meet-lena"     },
  { label: "Your Ceremony", href: "/your-ceremony"  },
  { label: "Moments",       href: "/moments"        },
  { label: "Services",      href: "/other-services" },
  { label: "Partners",      href: "/partners"       },
];

// ─── Glass token (inline styles — reliable cross-browser) ─────────────────────

const glass: React.CSSProperties = {
  background:           "rgba(255, 255, 255, 0.15)",
  backdropFilter:       "blur(16px) saturate(180%)",
  WebkitBackdropFilter: "blur(16px) saturate(180%)",
  border:               "1px solid rgba(0, 0, 0, 0.20)",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname  = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () =>
      document.documentElement.style.setProperty("--navbar-h", `${el.offsetHeight}px`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      ref={headerRef}
      data-navbar
      className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 pointer-events-none
                 transition-transform duration-500 ease-in-out"
    >
      {/* ── Main row ──────────────────────────────────────────────────────────
            Mobile:  flex justify-between (logo+name ← → hamburger)
            Desktop: 3-col grid keeps pill perfectly centred             */}
      <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4">

        {/* ── Left: logo + brand name (mobile only) ─────────────────────── */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            aria-label="Loving Love — Home"
            className="w-12 h-12 rounded-2xl flex items-center justify-center
                       pointer-events-auto transition-opacity duration-200 hover:opacity-75"
            style={glass}
          >
            <Image
              src="/images/logo.webp"
              alt="Loving Love"
              width={140}
              height={56}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* Brand name — mobile only, sits right next to the logo */}
          <span className="md:hidden font-display text-sm font-medium text-black/80 tracking-wide">
            Loving Love
          </span>
        </div>

        {/* ── Center: glass pill with links + CTA inside — desktop only ───── */}
        <nav aria-label="Main navigation" className="hidden md:block pointer-events-auto">
          <div
            className="flex items-center gap-0.5 rounded-full px-1.5 py-1.5"
            style={glass}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap
                  transition-colors duration-200
                  ${isActive(link.href)
                    ? "text-black font-semibold"
                    : "text-black/40 hover:text-black/70"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}

            {/* Let's Chat — inside the pill, black button */}
            <Link
              href="/connect"
              className="ml-1 px-4 py-2 rounded-full text-sm font-medium
                         bg-neutral-900 text-white whitespace-nowrap
                         transition-opacity duration-200 hover:opacity-85"
            >
              Let&apos;s Chat
            </Link>
          </div>
        </nav>

        {/* ── Right: Sign In (desktop) + hamburger (mobile) ───────────────── */}
        <div className="flex items-center justify-end gap-3">

          {/* Sign In — placeholder, desktop only */}
          <button
            disabled
            className="hidden md:inline-flex items-center
                       px-4 py-2 rounded-full text-sm font-medium
                       text-black/70 pointer-events-auto
                       transition-opacity duration-200 hover:opacity-75"
            style={glass}
          >
            Sign In
          </button>

          {/* Mobile hamburger — glass 48×48 */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden w-12 h-12 rounded-2xl flex items-center justify-center
                       pointer-events-auto transition-opacity duration-200 hover:opacity-75"
            style={glass}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "x" : "menu"}
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0  }}
                exit={{   opacity: 0, rotate:  10 }}
                transition={{ duration: 0.15 }}
                className="flex text-black/80"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{    opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-2 rounded-2xl overflow-hidden pointer-events-auto"
            style={glass}
          >
            <div className="px-3 py-3 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0  }}
                  transition={{ delay: i * 0.04, duration: 0.18 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      block px-3 py-2.5 rounded-xl text-sm font-medium
                      transition-colors duration-200
                      ${isActive(link.href)
                        ? "bg-black/10 text-black font-semibold"
                        : "text-black/80 hover:text-black hover:bg-black/5"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.05, duration: 0.18 }}
                className="mt-1 pt-2 border-t border-black/10"
              >
                <Link
                  href="/connect"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2.5 rounded-full
                             bg-white text-neutral-900 text-sm font-medium
                             transition-opacity duration-200 hover:opacity-85"
                >
                  Let&apos;s Chat
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
