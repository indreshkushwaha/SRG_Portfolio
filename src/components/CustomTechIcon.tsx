"use client";

import React from "react";

interface CustomIconProps {
  name: string;
  className?: string;
}

export const CustomTechIcon = ({ name, className = "w-8 h-8" }: CustomIconProps) => {
  const iconMap: Record<string, React.ReactNode> = {
    "Milvus": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v8.64l-8 4-8-4V8.18l8-4z"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    "JavaScript ES6": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E"/>
        <path d="M14 16.5c0 .83-.67 1.5-1.5 1.5h-3c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v9z" fill="#000"/>
        <text x="12" y="14" fontSize="8" fill="#000" textAnchor="middle" fontWeight="bold">ES6</text>
      </svg>
    ),
    "HTTP": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h16v2H4v-2z"/>
        <circle cx="6" cy="5" r="1" fill="currentColor"/>
        <circle cx="6" cy="9" r="1" fill="currentColor"/>
        <circle cx="6" cy="13" r="1" fill="currentColor"/>
        <circle cx="6" cy="17" r="1" fill="currentColor"/>
      </svg>
    ),
    "Cluster": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.8"/>
        <circle cx="16" cy="8" r="3" fill="currentColor" opacity="0.8"/>
        <circle cx="8" cy="16" r="3" fill="currentColor" opacity="0.8"/>
        <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.8"/>
        <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="8" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="8" y1="8" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="16" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    "Multithreading": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <rect x="2" y="4" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="10" y="4" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="18" y="4" width="4" height="6" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="2" y="14" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="10" y="14" width="6" height="6" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="18" y="14" width="4" height="6" rx="1" fill="currentColor" opacity="0.7"/>
        <path d="M5 7h2M13 7h2M19 7h2M5 17h2M13 17h2M19 17h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "ORM": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 9h18M9 5v4M15 5v4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="7" cy="13" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="13" r="1.5" fill="currentColor"/>
        <circle cx="17" cy="13" r="1.5" fill="currentColor"/>
        <path d="M7 15l-2 4M12 15l0 4M17 15l2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "SQLite": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h6v2H8v-2z" fill="currentColor"/>
        <circle cx="6" cy="6" r="1" fill="white"/>
        <circle cx="18" cy="18" r="1" fill="white"/>
      </svg>
    ),
    "Graph Databases": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <circle cx="8" cy="8" r="2.5" fill="currentColor"/>
        <circle cx="16" cy="8" r="2.5" fill="currentColor"/>
        <circle cx="8" cy="16" r="2.5" fill="currentColor"/>
        <circle cx="16" cy="16" r="2.5" fill="currentColor"/>
        <path d="M10.5 8l3 0M8 10.5l0 3M16 10.5l0 3M13.5 16l-3 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10.5 8l3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "CouchDB": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <rect x="4" y="6" width="16" height="12" rx="2" fill="currentColor" opacity="0.3"/>
        <rect x="6" y="8" width="12" height="8" rx="1" fill="currentColor"/>
        <path d="M8 10h8M8 12h8M8 14h6" stroke="white" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    "Memcache": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" opacity="0.2"/>
        <rect x="6" y="6" width="12" height="12" rx="1" fill="currentColor"/>
        <path d="M8 10h8M8 13h6M8 16h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "RabbitMQ": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.2"/>
        <circle cx="12" cy="12" r="5" fill="currentColor"/>
        <circle cx="12" cy="12" r="2" fill="white"/>
        <path d="M12 4l0 4M12 16l0 4M4 12l4 0M16 12l4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Distributed Systems": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <circle cx="6" cy="6" r="2.5" fill="currentColor" opacity="0.8"/>
        <circle cx="18" cy="6" r="2.5" fill="currentColor" opacity="0.8"/>
        <circle cx="6" cy="18" r="2.5" fill="currentColor" opacity="0.8"/>
        <circle cx="18" cy="18" r="2.5" fill="currentColor" opacity="0.8"/>
        <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
        <path d="M8.5 6l3 6M15.5 6l-3 6M8.5 18l3-6M15.5 18l-3-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "RAG": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" opacity="0.2"/>
        <path d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z" fill="currentColor"/>
        <circle cx="12" cy="12" r="1.5" fill="white"/>
        <path d="M12 6l0 2M12 16l0 2M6 12l2 0M16 12l2 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Graph-RAG": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <circle cx="8" cy="8" r="2" fill="currentColor"/>
        <circle cx="16" cy="8" r="2" fill="currentColor"/>
        <circle cx="8" cy="16" r="2" fill="currentColor"/>
        <circle cx="16" cy="16" r="2" fill="currentColor"/>
        <path d="M10 8l4 0M8 10l0 4M16 10l0 4M10 16l4 0M10 8l4 8M14 8l-4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
      </svg>
    ),
    "Analytics": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <rect x="4" y="16" width="3" height="4" fill="currentColor"/>
        <rect x="9" y="12" width="3" height="8" fill="currentColor"/>
        <rect x="14" y="8" width="3" height="12" fill="currentColor"/>
        <rect x="19" y="4" width="3" height="16" fill="currentColor"/>
        <path d="M5.5 16l3-4 3 2 3-6 3 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "Vector Databases": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" opacity="0.2"/>
        <path d="M8 8h8v8H8V8zm1 1v6h6V9H9z" fill="currentColor"/>
        <path d="M10 10h4v4h-4v-4z" fill="white"/>
        <path d="M6 6l2 2M18 6l-2 2M6 18l2-2M18 18l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Auto Scaling": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <rect x="4" y="8" width="4" height="8" rx="1" fill="currentColor" opacity="0.6"/>
        <rect x="10" y="6" width="4" height="10" rx="1" fill="currentColor" opacity="0.8"/>
        <rect x="16" y="4" width="4" height="12" rx="1" fill="currentColor"/>
        <path d="M6 8l2-2M6 16l2 2M20 4l-2-2M20 16l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Multi Availability": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.7"/>
        <circle cx="16" cy="8" r="3" fill="currentColor" opacity="0.7"/>
        <circle cx="8" cy="16" r="3" fill="currentColor" opacity="0.7"/>
        <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.7"/>
        <path d="M11 8l2 0M11 16l2 0M8 11l0 2M16 11l0 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
    "Fault Tolerance": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <rect x="4" y="6" width="16" height="12" rx="2" fill="currentColor" opacity="0.2"/>
        <rect x="6" y="8" width="12" height="8" rx="1" fill="currentColor"/>
        <path d="M8 10h8M8 13h8M8 16h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 8l2 4M14 8l-2 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Scalable Systems": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <rect x="3" y="12" width="4" height="6" rx="1" fill="currentColor" opacity="0.6"/>
        <rect x="9" y="9" width="4" height="9" rx="1" fill="currentColor" opacity="0.8"/>
        <rect x="15" y="6" width="4" height="12" rx="1" fill="currentColor"/>
        <path d="M5 12l4-2M5 18l4 2M19 6l-4-2M19 18l-4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Solution Architect": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" opacity="0.2"/>
        <path d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z" fill="currentColor"/>
        <circle cx="12" cy="12" r="1.5" fill="white"/>
        <path d="M6 6l2 2M18 6l-2 2M6 18l2-2M18 18l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "VPS": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <rect x="4" y="6" width="16" height="12" rx="2" fill="currentColor" opacity="0.2"/>
        <rect x="6" y="8" width="12" height="8" rx="1" fill="currentColor"/>
        <path d="M8 10h8M8 13h8M8 16h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="11" r="0.5" fill="white"/>
        <circle cx="9" cy="14" r="0.5" fill="white"/>
        <circle cx="9" cy="17" r="0.5" fill="white"/>
      </svg>
    ),
    "Serverless Architect": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M4 12l8-8 8 8-8 8-8-8zm2.83 0L12 6.83 17.17 12 12 17.17 6.83 12z" fill="currentColor" opacity="0.3"/>
        <path d="M8 12l4-4 4 4-4 4-4-4zm1.17 0L12 9.17 14.83 12 12 14.83 9.17 12z" fill="currentColor"/>
        <circle cx="12" cy="12" r="1.5" fill="white"/>
      </svg>
    ),
    "Lambda Function": (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v8.64l-8 4-8-4V8.18l8-4z" fill="currentColor" opacity="0.3"/>
        <path d="M12 6l6 3v6l-6 3-6-3V9l6-3z" fill="currentColor"/>
        <path d="M10 10l4 2-4 2v-4z" fill="white"/>
      </svg>
    ),
  };

  return (
    <div className="flex items-center justify-center">
      {iconMap[name] || (
        <div className={`${className} rounded-lg bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center`}>
          <span className="text-xs font-bold text-brand-primary">{name.charAt(0)}</span>
        </div>
      )}
    </div>
  );
};

