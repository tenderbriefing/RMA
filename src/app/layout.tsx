import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Resilient Markets Africa (RMA)",
    template: "%s · Resilient Markets Africa",
  },
  description:
    "Resilient Markets Africa (RMA) is a specialist market development and market preparation organisation building inclusive, high-performing, investment-ready supply chains across Africa’s most strategic economic sectors.",
  metadataBase: new URL("https://www.rma.africa"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--rma-ink)]">
        <NavBar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
