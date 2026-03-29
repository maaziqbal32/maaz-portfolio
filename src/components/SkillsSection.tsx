import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 78 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 72 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "Vercel", level: 80 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Skills" subtitle="Technologies I work with" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="glass p-6 md:p-8"
          >
            <h3 className="text-lg font-semibold text-primary mb-6">{cat.title}</h3>
            <div className="space-y-5">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, hsl(var(--neon-blue)), hsl(var(--neon-purple)))`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: ci * 0.1 + si * 0.08, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
