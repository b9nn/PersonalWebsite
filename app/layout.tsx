import type { Metadata } from "next";
import { Chakra_Petch, Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display — technical, square sci-fi character for headings & hero
const displayFont = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Body — condensed HUD sans for UI copy
const bodyFont = Rajdhani({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Mono — terminal / console text
const monoFont = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Gladney",
  description: "Software Engineer & Developer - Portfolio showcasing projects in machine learning, web development, and computational research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased bg-void text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
