"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import data from "@/data/sudhi.json";

export const CertificationsCompactSection = () => {
  const certifications = data.profile.certifications || [];

  if (certifications.length === 0) return null;

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-card-bg border border-card-border text-brand-primary text-sm font-mono mb-4">
            CERTIFICATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industry <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Validated expertise recognized by leading technology providers
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-8">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative"
            >
              <div className="relative rounded-xl glass-card p-6 border border-card-border hover:border-brand-primary/50 transition-all duration-300 min-w-[280px] max-w-[320px]">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      {cert.icon || <Award className="w-6 h-6 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-brand-primary transition-colors truncate">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-brand-primary font-medium truncate">
                        {cert.issuer}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-foreground/30 group-hover:text-brand-primary transition-colors flex-shrink-0" />
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-foreground/50">
                    <Award className="w-3 h-3" />
                    <span>Verified on Credly</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {certifications.length > 0 && (
          <div className="text-center">
            <Link href="/about">
              <Button variant="outline" size="sm">
                View All Credentials
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

