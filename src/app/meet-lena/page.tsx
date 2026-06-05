import type { Metadata } from "next";
import MeetLenaIntro from "@/components/home/MeetLenaIntro";
import MeetLenaSocial from "@/components/meet-lena/MeetLenaSocial";

export const metadata: Metadata = {
  title: "Meet Lena",
  description:
    "Get to know Lena Saunig — the heart behind Loving Love. Sydney celebrant with a passion for meaningful, personal ceremonies.",
};

export default function MeetLenaPage() {
  return (
    <>
      <MeetLenaIntro />
      <MeetLenaSocial />
    </>
  );
}
