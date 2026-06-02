import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet Lena",
  description:
    "Get to know Lena Saunig — the heart behind Loving Love. Sydney celebrant with a passion for meaningful, personal ceremonies.",
};

export default function MeetLenaPage() {
  return (
    <>
      {/* ── Hero — full-screen portrait ──────────────────────────────────── */}
      <section className="relative h-[100lvh] flex items-center justify-center overflow-hidden">

        {/* Background photo */}
        <Image
          src="/images/lena.png"
          alt="Lena Saunig — Loving Love"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.28) 100%)",
          }}
        />

        {/* Text */}
        <div className="relative z-10 text-center px-6">

          {/* Eyebrow */}
          <p className="text-[10px] tracking-[0.26em] uppercase text-white/60 mb-5">
            Lena Saunig
          </p>

          {/* Main title */}
          <h1
            className="font-display font-normal text-white mb-5"
            style={{ fontSize: "clamp(3rem, 9.5dvh, 6.5rem)", lineHeight: 1.08 }}
          >
            Loving Love
            <span className="block text-[0.42em] uppercase tracking-[0.18em] mt-1">
              Marriage Celebrant
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="font-display italic text-white/70"
            style={{ fontSize: "clamp(1rem, 1.9dvh, 1.25rem)" }}
          >
            Celebrating love, and also life.
          </p>

        </div>
      </section>
    </>
  );
}
