"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import data from "@/data/Sudhi.json";

export const WorkProcessSection = () => {
  const process = data.profile.workProcess || [];

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
            PROCESS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            A proven methodology that ensures your project succeeds from day one
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary/30 via-brand-secondary/30 to-brand-primary/30" />
          
          <div className="space-y-12">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start gap-8 group"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-brand-primary/50 to-transparent -translate-x-1/2" />
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="glass-card p-6 rounded-2xl border border-card-border hover:border-brand-primary/50 transition-all group-hover:shadow-xl">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs font-mono text-brand-primary mb-2 block">
                          STEP {step.step}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-brand-primary transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-card-bg border border-card-border text-foreground/60">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

