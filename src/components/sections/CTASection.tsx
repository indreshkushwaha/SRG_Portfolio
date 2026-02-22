"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import data from "@/data/sudhi.json";

export const CTASection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-card-bg border border-card-border text-brand-primary text-sm font-mono mb-6"
          >
            READY TO START?
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Something
            <span className="block gradient-text">Amazing Together</span>
          </h2>
          
          <p className="text-xl text-foreground/70 mb-4 max-w-2xl mx-auto leading-relaxed">
            I'm currently <span className="text-brand-primary font-semibold">{data.profile.availability?.status || "Available"}</span> and respond within <span className="text-brand-primary font-semibold">{data.profile.availability?.responseTime || "< 2 hours"}</span>
          </p>
          
          <p className="text-foreground/60 mb-12 max-w-xl mx-auto">
            Whether you need a full-stack application, cloud infrastructure setup, or DevOps automation, let's discuss how I can help your business grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:contact@Sudhi.dev">
              <Button 
                size="lg" 
                className="h-14 px-8 text-base group glow-effect"
              >
                <Mail className="mr-2 w-5 h-5" />
                Send Email
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link href="/projects">
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 text-base border-card-border hover:border-brand-primary"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                View Portfolio
              </Button>
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-card-border">
            <div>
              <p className="text-3xl font-bold gradient-text mb-1">
                {data.profile.stats?.projectsDelivered || "25+"}
              </p>
              <p className="text-xs text-foreground/60">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text mb-1">
                {data.profile.stats?.clientSatisfaction || "98%"}
              </p>
              <p className="text-xs text-foreground/60">Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text mb-1">
                {data.profile.availability?.responseTime || "< 2h"}
              </p>
              <p className="text-xs text-foreground/60">Response</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

