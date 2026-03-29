import { Code2, Database, Globe, GitBranch, Palette, Server, Flame, Cloud, Layout, FileCode, Boxes, Rocket } from "lucide-react";

const skills = [
  { name: "HTML", icon: Globe },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: FileCode },
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Boxes },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Rocket },
  { name: "MongoDB", icon: Database },
  { name: "Firebase", icon: Flame },
  { name: "Git", icon: GitBranch },
  { name: "Tailwind CSS", icon: Layout },
  { name: "Vercel", icon: Cloud },
];

const SkillsMarquee = () => (
  <div className="py-10 overflow-hidden border-y border-border bg-muted/20">
    <div className="animate-marquee flex w-max gap-8">
      {[...skills, ...skills].map((skill, i) => (
        <div
          key={`${skill.name}-${i}`}
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass text-sm font-medium text-foreground whitespace-nowrap hover:text-primary hover:border-primary/30 transition-colors cursor-default"
        >
          <skill.icon size={18} className="text-primary" />
          {skill.name}
        </div>
      ))}
    </div>
  </div>
);

export default SkillsMarquee;
