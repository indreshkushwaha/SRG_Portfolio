import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sudhi Ranjan Gupta | Top-Rated Full Stack & DevOps Engineer | 25+ Projects Delivered",
  description: "Premium freelancer specializing in Next.js, React, Angular, and cloud architecture. Delivered 25+ enterprise projects with 98% client satisfaction. Expert in building scalable web applications, optimizing cloud infrastructure, and implementing CI/CD pipelines that reduce deployment time by 80%. Available on Upwork, Toptal, and Fiverr Pro.",
  keywords: ["Full Stack Developer", "DevOps Engineer", "Next.js Expert", "React Developer", "Angular Developer", "Cloud Architect", "CI/CD Specialist", "Freelance Developer", "Upwork", "Toptal", "Fiverr Pro"],
  openGraph: {
    title: "Sudhi Ranjan Gupta | Top-Rated Full Stack & DevOps Engineer",
    description: "25+ projects delivered | 98% client satisfaction | Enterprise-grade solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
