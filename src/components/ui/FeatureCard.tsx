"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  gradient?: string;
}

export const FeatureCard = ({ title, description, icon, className, gradient = "from-brand-primary to-brand-secondary" }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl glass-card p-8 border border-card-border hover:border-brand-primary/50 transition-all duration-500",
        className
      )}
    >
      {/* Gradient Border Glow */}
      <div className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl",
          `bg-gradient-to-br ${gradient}`
      )} />
      
      {/* Subtle Background Gradient */}
      <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500",
          `bg-gradient-to-br ${gradient}`
      )} />
      
      <div className="relative z-10">
        <div className={cn(
            "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg group-hover:scale-110 transition-transform",
            gradient
        )}>
          {icon}
        </div>
        
        <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-foreground/60 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
