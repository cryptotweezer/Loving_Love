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

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 — Hello, I'm Lena
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative bg-white grid md:grid-cols-[50fr_50fr] min-h-[100dvh]"
        style={{ paddingTop: "var(--navbar-h)" }}
      >

        {/* ── Text column ────────────────────────────────────────────────── */}
        <div className="flex flex-col justify-center
                        px-8 sm:px-12 md:pl-16 xl:pl-24 md:pr-12
                        py-16 md:py-20
                        order-2 md:order-1">

          {/* Eyebrow + Name — tight together */}
          <h1
            className="font-display font-normal text-neutral-900 leading-[1.02]"
            style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)" }}
          >
            <span
              className="block text-neutral-400 font-normal"
              style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", letterSpacing: "0.01em", marginBottom: "0.15em" }}
            >
              Hello, I&apos;m
            </span>
            Lena Saunig,
          </h1>

          {/* Sub-title */}
          <p
            className="font-display italic text-neutral-400 mt-3 mb-10"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}
          >
            Your Marriage Celebrant
          </p>


          {/* Body */}
          <p
            className="text-neutral-500 leading-relaxed"
            style={{ fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)", maxWidth: "44ch" }}
          >
            Becoming a Marriage Celebrant had been a secret dream of mine for over
            20 years, which I happened to mention to a friend who was the Celebrant
            at a mutual friend&apos;s wedding. He encouraged me to get myself qualified
            and registered. No longer a dream for many years now! I will be forever
            grateful to him.
          </p>

        </div>

        {/* ── Image column ───────────────────────────────────────────────── */}
        <div className="flex items-center order-1 md:order-2
                        px-8 sm:px-12 md:pl-8 md:pr-16 xl:pr-24
                        pt-8 pb-8 md:py-16">
          <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-100
                          h-[70vw] md:h-[min(72dvh,620px)]">
            <Image
              src="/images/lena1.png"
              alt="Lena Saunig — Loving Love"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

      </section>

    </>
  );
}
