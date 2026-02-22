"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
import { CustomTechIcon } from "@/components/CustomTechIcon";
import data from "@/data/indresh.json";

interface TechItem {
  name: string;
  icon: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
  color: string;
  iconName?: string;
}

const iconMap: Record<string, string> = {
  "Qdrant": "simple-icons:qdrant",
  "Pinecone": "simple-icons:pinecone",
  "ChromaDB": "simple-icons:chromadb",
  "HTML5": "simple-icons:html5",
  "CSS3": "simple-icons:css3",
  "JavaScript": "simple-icons:javascript",
  "TypeScript": "simple-icons:typescript",
  "Next.js": "simple-icons:nextdotjs",
  "Vue.js": "simple-icons:vuedotjs",
  "Nuxt.js": "simple-icons:nuxtdotjs",
  "Angular": "simple-icons:angular",
  "Tailwind CSS": "simple-icons:tailwindcss",
  "Bootstrap": "simple-icons:bootstrap",
  "Three.js": "simple-icons:threedotjs",
  "Node.js": "simple-icons:nodedotjs",
  "Express.js": "simple-icons:express",
  "MongoDB": "simple-icons:mongodb",
  "MySQL": "simple-icons:mysql",
  "PostgreSQL": "simple-icons:postgresql",
  "Redis": "simple-icons:redis",
  "Kafka": "simple-icons:apachekafka",
  "Python": "simple-icons:python",
  "Django": "simple-icons:django",
  "FastAPI": "simple-icons:fastapi",
  "Flask": "simple-icons:flask",
  "Datadog": "simple-icons:datadog",
  "Grafana": "simple-icons:grafana",
  "Prometheus": "simple-icons:prometheus",
  "Kibana": "simple-icons:kibana",
  "Elasticsearch": "simple-icons:elasticsearch",
  "AWS": "simple-icons:amazonaws",
  "Kubernetes": "simple-icons:kubernetes",
  "Docker": "simple-icons:docker",
  "Terraform": "simple-icons:terraform",
  "Linux": "simple-icons:linux",
  "Debian": "simple-icons:debian",
  "GitHub Actions": "simple-icons:githubactions",
  "Jenkins": "simple-icons:jenkins",
  "Ansible": "simple-icons:ansible",
  "GitHub": "simple-icons:github",
  "Jira": "simple-icons:jira",
  "SonarQube": "simple-icons:sonarqube",
  "Nginx": "simple-icons:nginx",
};

const customIconList = [
  "Milvus", "JavaScript ES6", "HTTP", "Cluster", "Multithreading", "ORM", "SQLite", 
  "Graph Databases", "CouchDB", "Memcache", "RabbitMQ", "Distributed Systems", 
  "RAG", "Graph-RAG", "Analytics", "Vector Databases", "Auto Scaling", 
  "Multi Availability", "Fault Tolerance", "Scalable Systems", "Solution Architect", 
  "VPS", "Serverless Architect", "Lambda Function"
];

export const TechStackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const categories: TechCategory[] = [
    { title: "Vector Databases", items: data.techStack.vectorDatabases, color: "from-purple-500 to-pink-500" },
    { title: "Frontend", items: data.techStack.frontend, color: "from-blue-500 to-cyan-500" },
    { title: "Styling & 3D", items: data.techStack.styling, color: "from-pink-500 to-rose-500" },
    { title: "Backend & Databases", items: data.techStack.backend, color: "from-green-500 to-emerald-500" },
    { title: "Python & AI", items: data.techStack.python, color: "from-yellow-500 to-orange-500" },
    { title: "Monitoring & Analytics", items: data.techStack.monitoring, color: "from-indigo-500 to-purple-500" },
    { title: "Cloud & Infrastructure", items: data.techStack.cloud, color: "from-cyan-500 to-blue-500" },
    { title: "DevOps & Tools", items: data.techStack.devops, color: "from-orange-500 to-red-500" },
    { title: "Quality & Serverless", items: data.techStack.tools, color: "from-teal-500 to-green-500" },
  ];

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className="py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Enhanced beam noodles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const delay = i * 0.2;
          const duration = 4 + Math.random() * 3;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-40 bg-gradient-to-b from-brand-primary/30 via-brand-secondary/40 to-transparent rounded-full blur-sm"
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                rotate: Math.random() * 360,
              }}
              animate={{
                y: [0, -150, 0],
                x: [0, (Math.random() - 0.5) * 100, 0],
                rotate: [0, 360, 720],
                opacity: [0.1, 0.7, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Animated connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F5CFF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00C6FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7F5CFF" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[...Array(12)].map((_, i) => {
          const x1 = 10 + Math.random() * 80;
          const y1 = 10 + Math.random() * 80;
          const x2 = 10 + Math.random() * 80;
          const y2 = 10 + Math.random() * 80;
          return (
            <motion.line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="url(#beam-gradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-card-bg border border-card-border text-brand-primary text-sm font-mono mb-4">
            TECH STACK
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Technology <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Comprehensive expertise across modern development stack
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="relative"
            >
              <div className="mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </span>
                </h3>
                <div className={`h-1 w-32 bg-gradient-to-r ${category.color} rounded-full`} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                {category.items.map((tech, index) => {
                  const iconName = iconMap[tech.name];
                  const needsCustomIcon = customIconList.includes(tech.name);
                  
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.05) + (index * 0.02) }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                      className="group relative"
                    >
                      {/* Beam glow effect on hover */}
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                        animate={{
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.1,
                        }}
                      />
                      
                      <div className="relative glass-card p-4 md:p-5 rounded-xl border border-card-border hover:border-brand-primary/50 transition-all duration-300 h-full flex flex-col items-center justify-center text-center min-h-[120px]">
                        <div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                          {iconName ? (
                            <Icon 
                              icon={iconName} 
                              className="w-8 h-8 md:w-10 md:h-10 text-foreground/80 group-hover:text-brand-primary transition-colors"
                            />
                          ) : needsCustomIcon ? (
                            <CustomTechIcon name={tech.name} className="w-8 h-8 md:w-10 md:h-10 text-foreground/80 group-hover:text-brand-primary transition-colors" />
                          ) : (
                            <span className="text-3xl md:text-4xl block group-hover:scale-110 transition-transform">
                              {tech.icon}
                            </span>
                          )}
                        </div>
                        <span className="text-xs md:text-sm font-medium text-foreground/80 group-hover:text-brand-primary transition-colors leading-tight">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
