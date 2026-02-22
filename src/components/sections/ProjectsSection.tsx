"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import data from "@/data/sudhi.json";

export const ProjectsSection = () => {
  // Helper function to clean and format URLs
  const formatUrl = (url: string) => {
    // Remove trailing slashes and ensure proper format
    const cleaned = url.replace(/\/$/, '');
    // If it doesn't start with http, add https://
    if (!cleaned.startsWith('http://') && !cleaned.startsWith('https://')) {
      return `https://${cleaned}`;
    }
    return cleaned;
  };

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-card-bg border border-card-border text-brand-primary text-sm font-mono mb-4">
            ALL PROJECTS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Complete <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Browse through all {data.projects.length} projects showcasing diverse industries, technologies, and business solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {data.projects.map((project, index) => {
            const projectUrl = formatUrl(project.url);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative rounded-2xl glass-card p-8 overflow-hidden border border-card-border hover:border-brand-primary/50 transition-all duration-500 h-full">
                  <div className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                      `bg-gradient-to-br ${project.gradient}`
                  )} />
                  
                  <div className={cn(
                      "absolute -inset-1 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500",
                      `bg-gradient-to-br ${project.gradient}`
                  )} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg",
                          `bg-gradient-to-br ${project.gradient}`
                      )}>
                        <Code2 className="w-7 h-7" />
                      </div>
                      <a 
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/40 hover:text-brand-primary transition-colors group/link"
                        aria-label={`Visit ${project.name}`}
                      >
                        <ArrowUpRight className="w-6 h-6 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-foreground/60 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Impact Metrics */}
                    {(project as any).impact && (
                      <div className="mb-4 p-3 rounded-lg bg-brand-primary/5 border border-brand-primary/20">
                        <p className="text-xs font-semibold text-brand-primary mb-1">KEY IMPACT</p>
                        <p className="text-sm text-foreground/80 leading-relaxed">{(project as any).impact}</p>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg bg-card-bg border border-card-border text-xs font-medium text-foreground/70 hover:border-brand-primary/50 hover:text-brand-primary transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                      aria-label={`Visit ${project.name} project`}
                    >
                      <Button variant="outline" size="sm" className="w-full group mt-auto">
                        Visit Project
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
