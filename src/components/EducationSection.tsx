import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Award } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "BS Computer Science",
    institution: "University of Education, Lahore",
    period: "2020 – 2024",
  },
  {
    icon: Award,
    title: "Web Development Certification",
    institution: "Government of Punjab",
    period: "2023",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Education" subtitle="My academic background" />
      <div className="space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass p-6 md:p-8 flex items-start gap-5 hover:glow-blue transition-all duration-300"
          >
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-primary/80 font-medium">{item.institution}</p>
              <p className="text-muted-foreground text-sm mt-1 font-mono-code">{item.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
