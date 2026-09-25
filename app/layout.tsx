import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileDock from "../components/MobileDock";
import SmoothScroll from "../components/motion/SmoothScroll";
import { site } from "../lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#06101f",
};

export const metadata: Metadata = {
  title: {
    default: "Parshuram Express Logistics Pvt. Ltd. | FTL, LTL & Express Freight Transport",
    template: "%s | Parshuram Express Logistics",
  },
  description:
    "Parshuram Express Logistics Pvt. Ltd. — Pan-India transport & supply chain partner offering full truck load (FTL), part load (LTL), dedicated fleet, express transit, and door-to-door cargo delivery. We Connect. We Deliver. On Time, Every Time.",
  keywords:
    "Parshuram Express, Parshuram Express Logistics, FTL transport, LTL transport, part load logistics, dedicated fleet, express transit, door to door delivery, Ranchi logistics, Jharkhand transporter, Pan India freight",
  authors: [{ name: site.name }],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  slogan: site.tagline,
  telephone: `+91${site.phone}`,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Daladalli Chowk, Karamtoli, Opp. Hanuman Mandir",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    postalCode: "835303",
    addressCountry: "IN",
  },
  areaServed: "IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileDock />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
