"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Terminal } from "lucide-react";
import data from "@/data/indresh.json";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 100, -60, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-brand-secondary/20 to-transparent rounded-full blur-[150px]"
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-brand-primary/10 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['<div>', '</div>', '{ }', 'const', '=>', '()'][Math.floor(Math.random() * 6)]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card-bg border border-card-border backdrop-blur-xl mb-8 glass-card"
          >
            <Terminal className="w-4 h-4 text-brand-primary" />
            <span className="text-sm font-mono text-foreground/80">
              <span className="text-brand-secondary">$</span> {data.profile.role}
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6 max-w-5xl mx-auto leading-tight"
          >
            <span className="block mb-2">Sudhi Ranjan Gupta</span>
            <span className="gradient-text text-5xl md:text-7xl">
              Full Stack & DevOps
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed font-light"
          >
            {data.profile.headline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm md:text-base"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card-bg/50 border border-card-border">
              <span className="text-brand-primary font-semibold">{data.profile.stats?.projectsDelivered || "25+"}</span>
              <span className="text-foreground/60">Projects</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card-bg/50 border border-card-border">
              <span className="text-brand-primary font-semibold">{data.profile.stats?.clientSatisfaction || "98%"}</span>
              <span className="text-foreground/60">Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card-bg/50 border border-card-border">
              <span className="text-brand-primary font-semibold">{data.profile.availability?.responseTime || "< 2h"}</span>
              <span className="text-foreground/60">Response</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-green-400 font-semibold">{data.profile.availability?.status || "Available"}</span>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-foreground/50 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {data.profile.valueProposition}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="mailto:contact@Sudhi.dev">
              <Button 
                size="lg" 
                className="h-14 px-10 text-base group glow-effect"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-10 text-base border-card-border hover:border-brand-primary"
              onClick={() => scrollToSection("projects")}
            >
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("projects")}
      >
        <div className="w-6 h-10 rounded-full border-2 border-card-border flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-brand-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};
