import type { Metadata } from "next";
import PartnersContent from "@/components/partners/PartnersContent";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Favourite venues and trusted wedding partners Lena has had the joy of working with across Sydney and beyond.",
};

export default function PartnersPage() {
  return <PartnersContent />;
}
