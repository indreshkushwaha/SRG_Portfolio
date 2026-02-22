import React from "react";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Footer } from "@/components/sections/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <ProjectsSection />
      <Footer />
    </main>
  );
}

