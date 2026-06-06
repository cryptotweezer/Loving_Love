import type { Metadata } from "next";
import YourCeremonyHero from "@/components/your-ceremony/YourCeremonyHero";
import YourCeremonyStep1 from "@/components/your-ceremony/YourCeremonyStep1";
import YourCeremonyStep2 from "@/components/your-ceremony/YourCeremonyStep2";
import YourCeremonyStep3 from "@/components/your-ceremony/YourCeremonyStep3";
import YourCeremonyStep4 from "@/components/your-ceremony/YourCeremonyStep4";
import YourCeremonyCTA from "@/components/your-ceremony/YourCeremonyCTA";

export const metadata: Metadata = {
  title: "Your Ceremony",
  description:
    "From our first conversation to your wedding day — here's how Lena creates a ceremony that is truly, completely yours.",
};

export default function YourCeremonyPage() {
  return (
    <>
      <YourCeremonyHero />
      <YourCeremonyStep1 />
      <YourCeremonyStep2 />
      <YourCeremonyStep3 />
      <YourCeremonyStep4 />
      <YourCeremonyCTA />
    </>
  );
}
