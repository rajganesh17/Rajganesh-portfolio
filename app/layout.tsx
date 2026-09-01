import type { Metadata } from "next";
import { JetBrains_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-dancing-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raj Ganesh — Product Designer & Builder",
  description:
    "Senior Product Designer with a data & engineering background. Designing 0→1 AI & fintech at Katalyst Labs by day, building side projects by night.",
  themeColor: "#F4F3F1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${dancingScript.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nata+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-body font-sans antialiased">{children}</body>
    </html>
  );
}
