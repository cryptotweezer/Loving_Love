import type { Metadata } from "next";
import HeroSequence from "@/components/home/HeroSequence";
import IntroSection from "@/components/home/IntroSection";
import FocusSection from "@/components/home/FocusSection";
import GoogleReviewsPlaceholder from "@/components/home/GoogleReviewsPlaceholder";
import HomeSnapZone from "@/components/home/HomeSnapZone";
import FeaturedQuotes from "@/components/home/FeaturedQuotes";

export const metadata: Metadata = {
  title: "Lena Saunig — Loving Love | Authorised Marriage Celebrant",
  description:
    "Sydney-based Authorised Marriage Celebrant creating heartfelt, personalised ceremonies. Because your love story is like no other.",
};

export default function HomePage() {
  return (
    <>
      <HeroSequence />
      <IntroSection />
      <HomeSnapZone>
        <FocusSection />
        <GoogleReviewsPlaceholder />
        <FeaturedQuotes />
      </HomeSnapZone>
    </>
  );
}
