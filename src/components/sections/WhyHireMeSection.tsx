"use client";

import React from "react";
import { motion } from "framer-motion";
import data from "@/data/Sudhi.json";

export const WhyHireMeSection = () => {
  const reasons = data.profile.whyHireMe || [];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-card-bg border border-card-border text-brand-primary text-sm font-mono mb-4">
            WHY CHOOSE ME
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Why Clients <span className="gradient-text">Choose Me</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            What sets me apart from other developers and makes me the right choice for your project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative rounded-2xl glass-card p-6 border border-card-border hover:border-brand-primary/50 transition-all duration-300 h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                    {reason.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-primary transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

