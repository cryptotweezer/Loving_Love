import type { Metadata } from "next";
import OtherServicesHero from "@/components/other-services/OtherServicesHero";
import OtherServicesCommitment from "@/components/other-services/OtherServicesCommitment";
import OtherServicesBabyNaming from "@/components/other-services/OtherServicesBabyNaming";
import OtherServicesVowRenewal from "@/components/other-services/OtherServicesVowRenewal";
import OtherServicesCelebrationsOfLife from "@/components/other-services/OtherServicesCelebrationsOfLife";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From vow renewals to commitment ceremonies and baby namings — Lena creates meaningful ceremonies for every celebration of love.",
};

export default function OtherServicesPage() {
  return (
    <>
      <OtherServicesHero />
      <OtherServicesCommitment />
      <OtherServicesBabyNaming />
      <OtherServicesVowRenewal />
      <OtherServicesCelebrationsOfLife />
    </>
  );
}
