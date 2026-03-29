import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer (MERN Stack)",
    company: "CodeDev System",
    period: "Current",
    description: "Working on full-stack MERN applications. Building scalable and efficient web solutions.",
    highlights: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    role: "Frontend Engineer (React.js)",
    company: "NextBridge System, Lahore, Pakistan",
    period: "May '25 — Feb '26",
    description: "Built responsive and user-friendly web interfaces using React and Tailwind CSS. Converted UI mockups into reusable components. Ensured smooth interactions and consistent styling across devices.",
    highlights: ["React.js", "Tailwind CSS", "UI Components", "Responsive Design"],
  },
  {
    role: "React.Js Developer Intern",
    company: "Catalyic Security, Lahore",
    period: "Nov '24 — Apr '25",
    description: "Developed responsive React applications enhancing user engagement and interface performance. Collaborated with senior developers to improve code quality and best practices.",
    highlights: ["React.js", "TypeScript", "UI/UX", "Agile"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Experience" subtitle="My professional journey" />
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      
            transition={{ duration: 0.6 }}
            className={`relative pl-12 md:pl-0 mb-12 ${
              i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"
            }`}
          >
            <div className="absolute left-2 md:left-1/2 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background -translate-x-1/2 glow-blue z-10" />
            <div className="glass p-6 hover:glow-blue transition-all duration-300">
              <div className="flex items-center gap-2 text-primary text-sm font-mono-code mb-2">
                <Briefcase size={14} />
                {exp.period}
              </div>
              <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
              <p className="text-primary/80 font-medium">{exp.company}</p>
              <p className="text-muted-foreground text-sm mt-3">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.highlights.map((h) => (
                  <span key={h} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
