import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CampusGuard AI",
    badge: "Final Year Project",
    description:
      "AI-powered campus monitoring system designed to detect violations such as smoking and fighting using real-time camera feeds. Integrated with Raspberry Pi for edge processing and an automated e-challan system for instant reporting. Developed interactive dashboards using the MERN stack to visualize real-time data, track incidents, and improve campus security management.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Raspberry Pi",
      "AI/ML",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "RBEX Ecommerce",
    description:
      "Developed a professional e-commerce platform for an international client focused on car spare parts. The application provides a seamless and responsive user experience with advanced product browsing, real-time search, and dynamic filtering capabilities. Emphasis was placed on clean UI design, performance optimization, and intuitive navigation to enhance customer engagement and usability across devices.",
    tech: ["HTML", "Tailwind CSS", "React.js"],
    github: "#",
    demo: "https://www.rbex.parts/",
  },
  {
    title: "PIA Clone Website",
    description:
      "A beginner-friendly airline booking UI clone developed to practice clean layout design, responsiveness, and basic accessibility principles. Inspired by the Pakistan International Airlines booking interface, this project helped strengthen my front-end fundamentals.",
    tech: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/maaziqbal32/PIA-clone-Website",
    demo: "https://pia-clone-website.vercel.app/",
  },
  {
    title: "HooBank UI",
    description:
      "Modern banking UI with reusable components and mobile-first design. Clean, responsive interface showcasing modern financial dashboard aesthetics.",
    tech: ["React.js", "Vite", "Tailwind CSS"],
    github: "https://github.com/maaziqbal32/Hoo-Bank",
    demo: "https://hoo-bank-two-kappa.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    description:
      "Designed and developed a fully responsive personal portfolio website to showcase projects, technical skills, and professional experience. Implemented smooth animations and modern UI/UX principles to create an engaging user experience. Focused on performance optimization, clean code structure, and accessibility to ensure fast loading and seamless interaction across all devices.",
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/maaziqbal32/maaz-portfolio",
    demo: "https://maaz-portfolio-two.vercel.app/",
  },
  {
    title: "FrostBite",
    badge: "",
    description:
      "An advanced real-time file builder application featuring a drag-and-drop interface for dynamic configuration. Includes a live console for tracking build progress and system logs. Focused on creating a highly interactive UI with efficient state management and seamless user experience.",
    tech: ["React.js", "Tailwind CSS", "HTML"],
    github: "https://github.com/maaziqbal32/FrostBite",
    demo: "https://frost-bite.vercel.app/",
  },
  {
    title: "CleaningHub",
    description:
      "Developed a modern service-based website for a solar panel and building cleaning business focused on maximizing energy efficiency and maintenance. The platform highlights professional services such as solar panel, window, and building cleaning, emphasizing increased energy output and customer trust. Designed a clean, responsive UI with engaging sections, strong call-to-actions, and smooth user experience to effectively convert visitors into clients.",
    tech: ["React.js","TypeScript", "Tailwind CSS", "HTML"],
    github: "https://github.com/maaziqbal32/solar-Cleaning",
    demo: "https://solar-cleaning-tau.vercel.app/",
  },
  {
  title: "Assignment Hub",
  description:
    "Developed a professional academic service platform designed to assist university students with research proposals, assignments, case studies, and dissertations. The website focuses on delivering a clean, trustworthy, and conversion-driven user experience with clear service sections, strong call-to-actions, and easy navigation. Emphasized responsive design, modern UI/UX, and performance optimization to effectively engage users across regions including the UK, Australia, Canada, and the USA.",
  tech: ["TypeScript","React.js", "Tailwind CSS", "HTML"],
  github: "https://github.com/maaziqbal32/assignment-hub",
  demo: "https://assignment-hub-five.vercel.app/",
},
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
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
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
            >
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
