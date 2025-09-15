import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { FloatingCard } from "./MotionWrapper";

const EnhancedDesignShowcase = () => {
  const { theme } = useTheme();

  const designCards = [
    {
      id: 1,
      title: "Brand Pack",
      image: "https://images.unsplash.com/photo-1634224088541-44ea8d7a9a87?w=400&h=250&fit=crop",
      position: { x: 15, y: 20, rotate: 12 },
      delay: 0,
      size: { width: 200, height: 140 },
    },
    {
      id: 2,
      title: "Web Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
      position: { x: 70, y: 15, rotate: -6 },
      delay: 0.2,
      size: { width: 220, height: 160 },
    },
    {
      id: 3,
      title: "Logo Design",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop",
      position: { x: 25, y: 60, rotate: 3 },
      delay: 0.4,
      size: { width: 180, height: 120 },
    },
    {
      id: 4,
      title: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      position: { x: 75, y: 65, rotate: -12 },
      delay: 0.6,
      size: { width: 240, height: 140 },
    },
    {
      id: 5,
      title: "Brand Identity",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
      position: { x: 45, y: 35, rotate: 6 },
      delay: 0.8,
      size: { width: 200, height: 160 },
    },
    {
      id: 6,
      title: "UI/UX",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      position: { x: 5, y: 45, rotate: -3 },
      delay: 1.0,
      size: { width: 160, height: 110 },
    },
  ];

  return (
    <div className="relative w-full h-[500px] perspective-1000">
      {/* Background Glow Effects */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className={`absolute w-32 h-32 rounded-full blur-2xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' 
                : 'bg-gradient-to-br from-blue-200/20 to-purple-200/20'
            }`}
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Floating Design Cards */}
      {designCards.map((card) => (
        <FloatingCard
          key={card.id}
          delay={card.delay}
          rotateX={card.position.rotate * 0.3}
          rotateY={card.position.rotate}
          className="absolute cursor-pointer group"
          style={{
            left: `${card.position.x}%`,
            top: `${card.position.y}%`,
            width: `${card.size.width}px`,
            height: `${card.size.height}px`,
            transform: `translate(-50%, -50%) rotate(${card.position.rotate}deg)`,
          }}
        >
          <motion.div
            className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ${
              theme === 'dark' 
                ? 'bg-gray-900/80 border border-gray-700/50' 
                : 'bg-white/90 border border-gray-200/50'
            } backdrop-blur-sm`}
            whileHover={{
              rotateY: card.position.rotate + 10,
              rotateX: card.position.rotate * 0.5,
              z: 100,
              boxShadow: theme === 'dark' 
                ? "0 25px 50px -12px rgba(59, 130, 246, 0.25)" 
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image */}
            <motion.div 
              className="relative w-full h-full overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />

              {/* Holographic Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20"
                style={{
                  background: `linear-gradient(45deg, 
                    transparent 30%, 
                    rgba(255,255,255,0.5) 50%, 
                    transparent 70%)`,
                }}
                animate={{
                  x: [-100, 300],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Content */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-4"
              initial={{ y: 10, opacity: 0.8 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <motion.h3 
                  className="text-white text-sm font-semibold"
                  initial={false}
                  whileHover={{
                    color: theme === 'dark' ? '#60A5FA' : '#3B82F6',
                  }}
                >
                  {card.title}
                </motion.h3>
                
                {/* Status Indicator */}
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>

              {/* Progress Bar */}
              <motion.div 
                className="mt-2 h-1 bg-gray-600/50 rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </FloatingCard>
      ))}

      {/* Connecting Lines Animation */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        {designCards.map((card, index) => {
          if (index === designCards.length - 1) return null;
          const nextCard = designCards[index + 1];
          
          return (
            <motion.line
              key={`line-${index}`}
              x1={`${card.position.x}%`}
              y1={`${card.position.y}%`}
              x2={`${nextCard.position.x}%`}
              y2={`${nextCard.position.y}%`}
              stroke={theme === 'dark' ? '#374151' : '#9CA3AF'}
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: 2 + index * 0.5,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </motion.svg>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 rounded-full ${
            theme === 'dark' ? 'bg-blue-400/40' : 'bg-blue-600/30'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default EnhancedDesignShowcase;