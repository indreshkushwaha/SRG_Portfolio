"use client";

import React from "react";
import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import data from "@/data/Sudhi.json";

export const Footer = () => {
  return (
    <footer className="py-20 bg-background border-t border-card-border relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              {data.profile.name}
            </h3>
            <p className="text-foreground/60 mb-6 leading-relaxed">
              {data.profile.headline}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-foreground/60">{data.profile.availability?.status || "Available for new projects"}</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-3 text-foreground/60">
              <li>
                <Link href="/" className="hover:text-brand-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-brand-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Get in Touch</h4>
            <ul className="space-y-3 text-foreground/60 mb-6">
              <li>
                <a href="mailto:contact@Sudhi.dev" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  contact@Sudhi.dev
                </a>
              </li>
              <li className="text-sm text-foreground/50">
                Response time: {data.profile.availability?.responseTime || "< 2 hours"}
              </li>
              <li className="text-sm text-foreground/50">
                Timezone: {data.profile.availability?.timezone || "IST (UTC+5:30)"}
              </li>
            </ul>
            
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/sudhi-ranjan-gupta-6a557112b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-card-bg border border-card-border flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Slasher190" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-card-bg border border-card-border flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-foreground/40 text-sm">
            <p>© {new Date().getFullYear()} {data.profile.name}. All rights reserved.</p>
            <p className="text-foreground/50">Available on <span className="text-foreground/70">Upwork</span> • <span className="text-foreground/70">Toptal</span> • <span className="text-foreground/70">Fiverr Pro</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};
