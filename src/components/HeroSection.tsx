import { motion } from "framer-motion";
import HeroScene from "./HeroScene";
import TypingText from "./TypingText";
import { Download, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroScene />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-primary font-mono-code text-sm mb-4 tracking-wider">
            {"<Hello World />"}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            I'm <span className="gradient-text">Maaz Iqbal</span>
          </h1>
          <div className="mt-4 text-lg md:text-2xl text-muted-foreground h-8 md:h-10">
            <TypingText
              texts={[
                "Software Engineer",
                "MERN Stack Developer",
                "Frontend Engineer",
              ]}
            />
          </div>
          <p className="mt-5 text-muted-foreground max-w-lg text-sm md:text-base">
            Building scalable, modern, and user-focused web applications
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center md:justify-start mb-8 sm:mb-0">
            <a
              href="#projects"
              className="btn-glow text-primary-foreground text-sm"
            >
              View Projects
            </a>
            <a
              href="/maaz-cv.pdf"
              download
              className="btn-outline-glow text-sm items-center gap-2 hidden sm:inline-flex"
            >
              <Download size={16} /> Download CV
            </a>
            <a href="#contact" className="btn-outline-glow text-sm">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="relative w-52 h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 animate-float">
            {" "}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" />
            <div className="relative rounded-full overflow-hidden border-2 border-primary/30 w-full h-full">
              <img
                src="/maaz-folio.png"
                alt="Maaz Iqbal"
                className="w-full h-full object-cover"
                width={512}
                height={512}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
