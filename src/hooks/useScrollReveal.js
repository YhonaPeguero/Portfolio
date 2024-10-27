import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScrollReveal = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return [ref, controls];
};
