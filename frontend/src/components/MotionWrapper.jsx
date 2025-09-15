import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Page transition wrapper
export const PageTransition = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing for premium feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger children animations
export const StaggerContainer = ({ 
  children, 
  staggerChildren = 0.1, 
  delayChildren = 0,
  className = "" 
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Individual stagger item
export const StaggerItem = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Floating animation for design cards
export const FloatingCard = ({ 
  children, 
  delay = 0, 
  rotateX = 0, 
  rotateY = 0, 
  className = "" 
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        rotateX,
        rotateY,
        y: 50,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateX,
        rotateY,
        y: 0,
      }}
      whileHover={{
        scale: 1.05,
        rotateY: rotateY + 5,
        z: 50,
        transition: { duration: 0.3 },
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3 + delay,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Premium button animations
export const PremiumButton = ({ children, variant = "primary", ...props }) => {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        y: -2,
      }}
      whileTap={{ 
        scale: 0.98,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      {...props}
    >
      <motion.div
        initial={false}
        whileHover={variant === "primary" ? {
          background: "linear-gradient(90deg, #1E40AF 0%, #7C3AED 100%)",
        } : {}}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

// Scroll-triggered animations
export const ScrollReveal = ({ 
  children, 
  direction = "up",
  distance = 50,
  className = "" 
}) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      viewport={{ 
        once: true, 
        margin: "-100px" 
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Magnetic hover effect
export const MagneticHover = ({ children, strength = 20 }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0px, 0px) scale(1)';
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};

export default {
  PageTransition,
  StaggerContainer,
  StaggerItem,
  FloatingCard,
  PremiumButton,
  ScrollReveal,
  MagneticHover,
};