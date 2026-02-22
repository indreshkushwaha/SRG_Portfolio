"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import data from "@/data/indresh.json";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="mb-20 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-card-bg border border-card-border text-brand-primary text-sm font-mono mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Hear from clients who've experienced measurable business impact and exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {data.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl glass-card p-8 border border-card-border hover:border-brand-primary/50 transition-all overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <Quote className="w-10 h-10 text-brand-primary/30 mb-4" />
                
                {/* Rating Stars */}
                {testimonial.rating && (
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                )}
                
                <p className="text-foreground/80 mb-6 leading-relaxed text-base relative z-10">
                  "{testimonial.content}"
                </p>
                
                <div className="relative z-10 pt-4 border-t border-card-border">
                  <p className="font-semibold text-foreground mb-1">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60 mb-1">{testimonial.role}</p>
                  {testimonial.company && (
                    <p className="text-xs text-brand-primary font-medium">{testimonial.company}</p>
                  )}
                  {testimonial.project && (
                    <p className="text-xs text-foreground/40 mt-2 italic">Project: {testimonial.project}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
