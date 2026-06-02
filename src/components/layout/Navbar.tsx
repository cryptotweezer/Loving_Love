"use client";

import Link from "next/link";
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

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname   = usePathname();
  const headerRef  = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Publish navbar height to CSS custom property
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
      className="fixed top-3 left-0 right-0 z-50 px-4 md:px-6 lg:px-10
                 pointer-events-none transition-transform duration-500 ease-in-out"
    >
      {/* ── Bar ──────────────────────────────────────────────────────────────
          Glass pill — centered, only as wide as content needs               */}
      <div
        className="pointer-events-auto flex items-center mx-auto w-fit
                   rounded-full px-5 md:px-6 py-2.5"
        style={{
          background:           "rgba(255, 255, 255, 0.08)",
          backdropFilter:       "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          border:               "1px solid rgba(0, 0, 0, 0.18)",
        }}
      >

        {/* ── Brand name ───────────────────────────────────────────────────── */}
        <Link
          href="/"
          aria-label="Loving Love — Home"
          className="font-display font-normal text-neutral-900 leading-none whitespace-nowrap
                     text-[1.6rem] md:text-[1.85rem]
                     hover:opacity-70 transition-opacity duration-200
                     mr-6 md:mr-10 flex-shrink-0"
        >
          Loving Love
        </Link>

        {/* ── Nav links — desktop only ─────────────────────────────────────── */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-5 lg:gap-7 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-[10px] tracking-[0.16em] uppercase font-medium whitespace-nowrap
                transition-colors duration-200
                ${isActive(link.href)
                  ? "text-neutral-900 underline underline-offset-[5px] decoration-neutral-900 decoration-[1.5px]"
                  : "text-neutral-400 hover:text-neutral-900"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Right: CTA + hamburger ───────────────────────────────────────── */}
        <div className="flex items-center gap-3 ml-auto md:ml-4">

          {/* Let's Chat — desktop */}
          <Link
            href="/connect"
            className="hidden md:inline-flex items-center
                       px-5 py-2.5 rounded-full
                       bg-neutral-900 text-white
                       text-[10px] tracking-[0.13em] uppercase font-medium whitespace-nowrap
                       hover:opacity-85 transition-opacity duration-200"
          >
            Let&apos;s Chat
          </Link>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center
                       bg-neutral-100 text-neutral-900
                       transition-opacity duration-200 hover:opacity-75"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "x" : "menu"}
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0   }}
                exit={{    opacity: 0, rotate:  10  }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{    opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-2 rounded-2xl overflow-hidden pointer-events-auto
                       bg-white border border-neutral-200
                       shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
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
                      block px-3 py-2.5 rounded-xl
                      text-[11px] tracking-[0.14em] uppercase font-medium
                      transition-colors duration-200
                      ${isActive(link.href)
                        ? "bg-neutral-100 text-neutral-900"
                        : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
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
                className="mt-1 pt-2 border-t border-neutral-100"
              >
                <Link
                  href="/connect"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2.5 rounded-full
                             bg-neutral-900 text-white
                             text-[11px] tracking-[0.12em] uppercase font-medium
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
