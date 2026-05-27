import type { Metadata } from "next";
import { Lora, Schibsted_Grotesk, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollRestoration from "@/components/ScrollRestoration";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ujjaval Bhardwaj | Aspiring Product Manager Portfolio",
  description: "Ujjaval Bhardwaj's product management portfolio. Data analytics background, LLM evaluations, and detailed case studies demonstrating structured product thinking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${schibstedGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-dark font-sans selection:bg-accent/10 selection:text-accent">
        <SmoothScroll>
          <ScrollRestoration />
          <Navbar />
          <main className="flex-grow bg-white relative z-10 px-6 md:px-12 lg:px-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
