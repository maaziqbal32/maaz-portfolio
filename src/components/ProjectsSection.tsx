import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CampusGuard AI",
    badge: "Final Year Project",
    description: "AI-powered campus monitoring system detecting violations (smoking, fighting). Uses camera feeds + Raspberry Pi + e-challan system. Built dashboards using MERN stack for real-time data visualization.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Raspberry Pi", "AI/ML"],
    github: "#",
    demo: "#",
  },
  {
    title: "RBEX Ecommerce Website",
    badge: null,
    description: "Real-time car spare parts e-commerce platform. Features product browsing, search, and filtering functionality for seamless user experience.",
    tech: ["HTML", "Tailwind CSS", "React.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "PIA Clone Website",
    badge: "Personal Project",
    description: "Airline booking UI clone with focus on clean UI and accessibility. Pixel-perfect recreation of the Pakistan International Airlines booking interface.",
    tech: ["HTML", "CSS", "Bootstrap"],
    github: "#",
    demo: "#",
  },
  {
    title: "HooBank UI",
    badge: "Personal Project",
    description: "Modern banking UI with reusable components and mobile-first design. Clean, responsive interface showcasing modern financial dashboard aesthetics.",
    tech: ["React.js", "Vite", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Personal Portfolio",
    badge: "Personal Project",
    description: "Portfolio website fully responsive and optimized for performance. Showcases projects, skills, and professional experience with smooth animations.",
    tech: ["React.js", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Pantry App",
    badge: "Personal Project",
    description: "Full MERN stack pantry management system with REST APIs. Manage inventory, track expiration dates, and organize pantry items efficiently.",
    tech: ["React.js", "Express.js", "MongoDB", "Node.js"],
    github: "#",
    demo: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="glass p-6 group hover:glow-blue transition-shadow duration-500 relative overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.badge && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium whitespace-nowrap">
              {project.badge}
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-5 pt-4 border-t border-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg bg-muted/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-md"
          >
            <Github size={14} /> View Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-md"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Projects" subtitle="Some things I've built" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
