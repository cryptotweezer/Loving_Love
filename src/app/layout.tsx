import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NavbarThemeProvider } from "@/context/NavbarThemeContext";

// Self-hosted Playfair Display (variable, latin) — no network fetch at build
// time, so the build never depends on Google Fonts being reachable.
const playfair = localFont({
  src: [
    {
      path: "./fonts/playfair-display-latin-wght-normal.woff2",
      style: "normal",
      weight: "400 900",
    },
    {
      path: "./fonts/playfair-display-latin-wght-italic.woff2",
      style: "italic",
      weight: "400 900",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lovinglove.com.au"),
  title: {
    template: "%s — Loving Love",
    default: "Lena Saunig — Loving Love | Authorised Marriage Celebrant",
  },
  description:
    "Sydney-based Authorised Marriage Celebrant creating heartfelt, personalised ceremonies. Because your love story is like no other.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        <NavbarThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NavbarThemeProvider>
      </body>
    </html>
  );
}
