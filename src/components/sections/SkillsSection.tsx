"use client";

import React from "react";
import { Code2, Cloud, Database, GitBranch } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import data from "@/data/sudhi.json";

export const SkillsSection = () => {
  const skills = [
    {
      title: "Full Stack Development",
      description: "Build production-ready applications 3x faster with Next.js, React, and modern backend. Every project includes performance optimization, SEO, and scalable architecture.",
      icon: <Code2 className="w-6 h-6" />,
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      title: "DevOps & CI/CD",
      description: "Reduce deployment time by 80% with automated pipelines. Achieve 99.9% uptime through containerization, monitoring, and infrastructure automation.",
      icon: <GitBranch className="w-6 h-6" />,
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Cloud Architecture",
      description: "Design cost-effective, scalable cloud solutions on AWS/GCP. Average 40% infrastructure cost reduction through intelligent auto-scaling and optimization.",
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      title: "Database Design",
      description: "Optimize database performance for high-traffic applications. Achieve 60% faster query times with PostgreSQL, MongoDB, and Redis optimization.",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="mb-20 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-card-bg border border-card-border text-brand-primary text-sm font-mono mb-4">
            EXPERTISE
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Core <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            {data.profile.experience} of delivering measurable business value through technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <FeatureCard
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              gradient={skill.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
