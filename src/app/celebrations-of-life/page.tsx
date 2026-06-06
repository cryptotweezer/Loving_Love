import type { Metadata } from "next";
import CelebrationsHero from "@/components/celebrations-of-life/CelebrationsHero";

export const metadata: Metadata = {
  title: "Celebrations of Life",
  description:
    "A ceremony that honours who they were and what they meant. Lena creates gentle, meaningful Celebrations of Life for those we love and carry with us always.",
};

export default function CelebrationsOfLifePage() {
  return (
    <>
      <CelebrationsHero />
    </>
  );
}
