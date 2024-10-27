import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollSection = ({ children, className = "", name }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <motion.div
      name={name}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
      className={`w-full min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
