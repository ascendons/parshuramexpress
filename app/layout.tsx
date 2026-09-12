import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Parshuram Express Logistics Pvt. Ltd. | FTL, LTL & Express Freight Transport",
  description: "Parshuram Express Logistics Pvt. Ltd. — Pan-India transport & supply chain partner offering full truck load (FTL), part load (LTL), dedicated fleet, express transit, and door-to-door cargo delivery. We Connect. We Deliver. On Time, Every Time.",
  keywords: "Parshuram Express, Parshuram Express Logistics, FTL transport, LTL transport, part load logistics, dedicated fleet, express transit, door to door delivery, Ranchi logistics, Jharkhand transporter, Pan India freight",
  authors: [{ name: "Parshuram Express Logistics Pvt. Ltd." }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="antialiased">
        <SmoothScroll />
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
