import type { Metadata } from "next";
import ConnectContent from "@/components/connect/ConnectContent";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Ready to chat? I'd love to hear from you. Let's arrange an obligation free catch up — perhaps over coffee.",
};

export default function ConnectPage() {
  return <ConnectContent />;
}
