"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Clock, CheckCircle2, Star } from "lucide-react";
import data from "@/data/Sudhi.json";

export const TrustBadgesSection = () => {
  const badges = [
    {
      icon: <Award className="w-6 h-6" />,
      label: "Top-Rated",
      value: "98% Satisfaction",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Fast Response",
      value: data.profile.availability?.responseTime || "< 2 hours",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      label: "Available Now",
      value: data.profile.availability?.status || "Available",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Star className="w-6 h-6" />,
      label: "Platform Ratings",
      value: "4.9/5 Average",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden border-y border-card-border">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${badge.gradient} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                {badge.icon}
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">{badge.label}</p>
              <p className="text-xs text-foreground/60 leading-relaxed">{badge.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

