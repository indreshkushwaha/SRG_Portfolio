import React from "react";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkProcessSection } from "@/components/sections/WorkProcessSection";
import { Footer } from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <div className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            I'm a Senior Full Stack & DevOps Engineer with 4+ years of experience building scalable digital solutions. 
            I specialize in transforming complex business requirements into elegant, high-performance applications.
          </p>
          <p className="text-foreground/60 leading-relaxed max-w-3xl mx-auto">
            My approach combines technical excellence with business acumen, ensuring every project delivers measurable value. 
            I've helped 25+ clients scale their businesses, reduce infrastructure costs by 40%, and accelerate time-to-market by 3x.
          </p>
        </div>
      </div>
      <CertificationsSection />
      <WorkProcessSection />
      <TechStackSection />
      <SkillsSection />
      <Footer />
    </main>
  );
}

