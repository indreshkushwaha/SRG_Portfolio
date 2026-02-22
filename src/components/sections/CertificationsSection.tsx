"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import data from "@/data/Sudhi.json";

export const CertificationsSection = () => {
  const certifications = data.profile.certifications || [];

  if (certifications.length === 0) return null;

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
            CERTIFICATIONS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Validated expertise and industry-recognized certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative rounded-2xl glass-card p-8 border border-card-border hover:border-brand-primary/50 transition-all duration-300 h-full">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                        {cert.icon || <Award className="w-8 h-8 text-white" />}
                      </div>
                      <ExternalLink className="w-5 h-5 text-foreground/40 group-hover:text-brand-primary transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-primary transition-colors">
                      {cert.name}
                    </h3>
                    
                    <p className="text-sm text-brand-primary font-medium mb-4">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="mt-6 pt-4 border-t border-card-border">
                      <span className="text-xs text-foreground/50 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Verified Credential
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

