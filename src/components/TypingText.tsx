import { useState, useEffect } from "react";

const TypingText = ({ texts, className }: { texts: string[]; className?: string }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, deleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts]);

  return (
    <span className={className}>
      {texts[textIndex].slice(0, charIndex)}
      <span className="animate-pulse-glow text-primary">|</span>
    </span>
  );
};

export default TypingText;
