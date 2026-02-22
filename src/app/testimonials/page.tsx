import React from "react";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Footer } from "@/components/sections/Footer";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <TestimonialsSection />
      <Footer />
    </main>
  );
}

