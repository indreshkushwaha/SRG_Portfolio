"use client";

import React from "react";
import { PricingCard } from "@/components/ui/PricingCard";
import data from "@/data/Sudhi.json";

export const ServicesSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container px-4 relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-card-bg border border-card-border text-brand-primary text-sm font-mono mb-4">
            SERVICES
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Pricing & <span className="gradient-text">Services</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Comprehensive services designed to accelerate your business growth with measurable ROI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.services.map((service, index) => (
            <PricingCard
              key={index}
              title={service.title}
              price={service.price}
              description={service.description}
              features={service.features}
              isPopular={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
