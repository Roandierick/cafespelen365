import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/lib/site-data";

import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Cafespelen huren en kopen in Vlaanderen`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.tagline,
  category: "business",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "L4ia0eAbACJe4nREVNtk6p8iSN4cQmcJ52ylsW4Q-DY"
  }
};

export const viewport: Viewport = {
  themeColor: "#101321"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${display.variable} ${sans.variable}`} lang="nl-BE">
      <body className="font-sans text-gray-900">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
