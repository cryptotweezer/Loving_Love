import type { Metadata } from "next";
import YourCeremonyHero from "@/components/your-ceremony/YourCeremonyHero";

export const metadata: Metadata = {
  title: "Your Ceremony",
  description:
    "From our first conversation to your wedding day — here's how Lena creates a ceremony that is truly, completely yours.",
};

export default function YourCeremonyPage() {
  return (
    <>
      <YourCeremonyHero />
    </>
  );
}
