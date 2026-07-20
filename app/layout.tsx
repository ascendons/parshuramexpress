import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
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
  title: "Parshuram Express Logistics Pvt. Ltd. | Trusted Transportation & Logistics",
  description: "India's leading transporter. Reliable cargo transportation all over India, including woodworking machines, CNC machines, industrial goods, warehousing, packing, and moving.",
  keywords: "Parshuram Express, Parshuram Logistics, Transporter, Woodworking machine transport, CNC machine transport, Warehousing Ranchi, Logistics India, Packers and Movers",
  authors: [{ name: "Parshuram Express Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased">
        <SmoothScroll />
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
