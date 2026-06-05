import type { Metadata } from "next";
import MeetLenaIntro from "@/components/home/MeetLenaIntro";

export const metadata: Metadata = {
  title: "Meet Lena",
  description:
    "Get to know Lena Saunig — the heart behind Loving Love. Sydney celebrant with a passion for meaningful, personal ceremonies.",
};

export default function MeetLenaPage() {
  return <MeetLenaIntro />;
}
