import { motion } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold gradient-text">MI</h1>
        <motion.div
          className="mt-6 h-0.5 bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
