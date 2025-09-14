import type { Metadata } from "next";
import "./globals.css";
import GlfScript from "./components/GlfScript";

export const metadata: Metadata = {
  title: "The MoMo House - Authentic Tibetan Cuisine",
  description:
    "Experience the authentic taste of Tibet with our traditional momos and Himalayan dishes. Fresh ingredients, traditional recipes, and warm hospitality.",
  keywords:
    "momo, tibetan food, himalayan cuisine, dumplings, authentic, restaurant",
  authors: [{ name: "The Momo House" }],
  openGraph: {
    title: "The MoMo House - Authentic Tibetan Cuisine",
    description:
      "Experience the authentic taste of Tibet with our traditional momos",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
