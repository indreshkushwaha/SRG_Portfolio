"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={cn(
        "relative flex flex-col rounded-2xl p-8 transition-all duration-300 overflow-hidden glass-card",
        isPopular
          ? "border-2 border-brand-primary/50 shadow-[0_0_40px_rgba(127,92,255,0.3)]"
          : "border border-card-border hover:border-brand-primary/30"
      )}
    >
      {/* Animated Gradient Shadow */}
      {isPopular && (
        <motion.div
          animate={{
            boxShadow: [
              "0 0 40px rgba(127,92,255,0.3)",
              "0 0 60px rgba(127,92,255,0.5)",
              "0 0 40px rgba(127,92,255,0.3)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
        />
      )}

      {/* Background Gradient for Popular */}
      {isPopular && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-50" />
      )}

      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-4 py-1.5 text-xs font-bold text-white shadow-lg z-10">
          Most Popular
        </div>
      )}

      <div className="mb-6 relative z-10">
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-5xl font-bold tracking-tight gradient-text">{price}</span>
        </div>
        <p className="mt-4 text-sm text-foreground/60">{description}</p>
      </div>

      <div className="mb-8 flex-1 relative z-10">
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
              <div className="mt-0.5 rounded-full bg-brand-primary/20 p-1 text-brand-primary flex-shrink-0">
                <Check className="h-3 w-3" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href="mailto:contact@indresh.dev">
        <Button
          variant={isPopular ? "default" : "outline"}
          className="w-full relative z-10"
        >
          Get Started
        </Button>
      </a>
    </motion.div>
  );
};
