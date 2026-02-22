import React from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustBadgesSection } from "@/components/sections/TrustBadgesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CertificationsCompactSection } from "@/components/sections/CertificationsCompactSection";
import { WhyHireMeSection } from "@/components/sections/WhyHireMeSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <TrustBadgesSection />
      <StatsSection />
      <CertificationsCompactSection />
      <WhyHireMeSection />
      <FeaturedProjectsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
