import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    mass: 0.25
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 right-0 left-0 z-[70] h-[3px] origin-left bg-[linear-gradient(90deg,var(--accent),#84cc16)]"
    />
  );
}

export default ScrollProgress;

