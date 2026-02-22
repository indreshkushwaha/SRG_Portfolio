"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Award, Clock, Shield } from "lucide-react";
import data from "@/data/Sudhi.json";

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: data.profile.stats?.projectsDelivered || "25+",
    label: "Projects Delivered",
    description: "Successfully completed projects across industries",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: data.profile.stats?.clientSatisfaction || "98%",
    label: "Client Satisfaction",
    description: "Average client rating across all platforms",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    value: data.profile.stats?.averageUptime || "99.9%",
    label: "Average Uptime",
    description: "System reliability across all deployments",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    value: data.profile.stats?.deploymentTimeReduction || "80%",
    label: "Faster Deployments",
    description: "Reduction in deployment time with CI/CD",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: data.profile.stats?.performanceImprovement || "60%",
    label: "Performance Boost",
    description: "Average improvement in application speed",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: data.profile.stats?.clientsRetained || "85%",
    label: "Client Retention",
    description: "Long-term partnerships and repeat clients",
    gradient: "from-teal-500 to-cyan-500"
  }
];

export const StatsSection = () => {
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
            TRACK RECORD
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Measurable outcomes that drive business growth and operational efficiency
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative rounded-2xl glass-card p-8 border border-card-border hover:border-brand-primary/50 transition-all duration-300 h-full">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-4xl md:text-5xl font-bold gradient-text">
                      {stat.value}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-primary transition-colors">
                    {stat.label}
                  </h3>
                  
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {stat.description}
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

