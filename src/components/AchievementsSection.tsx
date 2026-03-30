import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Trophy, Flame, Medal } from "lucide-react";

const achievements = [
  { icon: Flame, label: "LeetCode 100 Days Badge", value: 100, suffix: " Days" },
  { icon: Medal, label: "Fellowship Participation", value: 1, suffix: "" },
  { icon: Trophy, label: "Projects Completed", value: 15, suffix: "+" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const AchievementsSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Achievements" subtitle="Milestones I'm proud of" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass p-8 text-center hover:glow-purple transition-all duration-300"
          >
            <div className="inline-flex p-3 rounded-lg bg-accent/10 text-accent mb-4">
              <a.icon size={28} />
            </div>
            <div className="mb-2">
              <Counter target={a.value} suffix={a.suffix} />
            </div>
            <p className="text-muted-foreground text-sm">{a.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
