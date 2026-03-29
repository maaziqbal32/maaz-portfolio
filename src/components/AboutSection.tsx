import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Rocket, label: "Performance", desc: "Optimized for speed and efficiency" },
  { icon: Users, label: "User-Focused", desc: "Intuitive, accessible experiences" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="About Me" subtitle="Get to know me better" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass p-8 md:p-12"
      >
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
          I'm a passionate MERN Stack Developer with a strong foundation in building full-stack web applications.
          With a BS in Computer Science from the University of Education, Lahore, I specialize in creating
          scalable, performant, and user-centric digital experiences. I thrive on solving complex problems
          and transforming ideas into polished products using React.js, Node.js, Express.js, and MongoDB.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:glow-blue transition-all mb-4">
                <h.icon size={24} />
              </div>
              <h3 className="font-semibold text-foreground">{h.label}</h3>
              <p className="text-sm text-muted-foreground mt-1">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
