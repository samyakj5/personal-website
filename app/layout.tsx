import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samyak Jain",
  description: "Samyak's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", robotoMono.variable, "font-sans", geist.variable)}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
