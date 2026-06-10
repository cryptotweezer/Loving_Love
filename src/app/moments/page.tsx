import type { Metadata } from "next";
import MomentsContent from "@/components/moments/MomentsContent";

export const metadata: Metadata = {
  title: "Moments & Thoughtful Words",
  description:
    "Words from the couples Lena has had the privilege of celebrating — because every love story is worth telling.",
};

export default function MomentsPage() {
  return <MomentsContent />;
}
