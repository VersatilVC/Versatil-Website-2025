import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { X, CheckCircle, Zap, AlertTriangle } from "lucide-react";

const ShoreditchProblemSolution = () => {
  const { theme } = useTheme();

  // Sniper-precise problem statements
  const problems = [
    { text: "Generic AI → Generic trash", severity: "critical" },
    { text: "Teams burning out → Quality drops", severity: "high" },
    { text: "Enterprise speed vs startup quality", severity: "critical" },
    { text: "Brand consistency impossible at scale", severity: "high" }
  ];

  // Direct solution statements
  const solutions = [
    { text: "Company DNA → Brand-locked AI", impact: "game-changer" },
    { text: "Pixel agents → Creative team automation", impact: "force-multiplier" },
    { text: "Human checkpoints → Quality control", impact: "safety-net" },
    { text: "Zero hallucinations → Enterprise grade", impact: "trust-factor" }
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-r from-gray-900 via-black to-gray-900' 
        : 'bg-gradient-to-r from-gray-100 via-white to-gray-100'
    }`}>
      
      {/* Harsh Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23000' stroke-width='2'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header - Brutal & Direct */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className={`inline-flex items-center space-x-2 px-4 py-2 border-2 mb-8 ${
              theme === 'dark'
                ? 'border-yellow-500 bg-yellow-500/10 text-yellow-400'
                : 'border-yellow-600 bg-yellow-100 text-yellow-800'
            }`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
          >
            <AlertTriangle className="w-5 h-5" />
            <span className="font-mono text-sm font-bold tracking-wider">
              REALITY CHECK
            </span>
          </motion.div>

          <h2 className={`text-4xl md:text-6xl font-black mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`} style={{ fontFamily: 'Arial Black, sans-serif' }}>
            THE BRUTAL
            <br />
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              TRUTH
            </span>
          </h2>
        </motion.div>

        {/* Problem vs Solution Split */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Problems Side - Harsh Red Theme */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`p-8 border-2 ${
              theme === 'dark' 
                ? 'bg-red-900/20 border-red-500' 
                : 'bg-red-50 border-red-400'
            }`} style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
              
              <div className="flex items-center mb-8">
                <div className={`p-3 border-2 ${
                  theme === 'dark' ? 'border-red-400' : 'border-red-500'
                }`} style={{ clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)' }}>
                  <X className={`w-8 h-8 ${
                    theme === 'dark' ? 'text-red-400' : 'text-red-600'
                  }`} />
                </div>
                <h3 className={`text-2xl font-black ml-4 ${
                  theme === 'dark' ? 'text-red-300' : 'text-red-800'
                }`}>
                  CURRENT STATE
                </h3>
              </div>
              
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <div className={`w-6 h-6 border-2 flex items-center justify-center mt-1 ${
                      problem.severity === 'critical' 
                        ? theme === 'dark' ? 'border-red-400 bg-red-500/20' : 'border-red-500 bg-red-100'
                        : theme === 'dark' ? 'border-orange-400 bg-orange-500/20' : 'border-orange-500 bg-orange-100'
                    }`}>
                      <X className={`w-3 h-3 ${
                        problem.severity === 'critical' 
                          ? theme === 'dark' ? 'text-red-400' : 'text-red-600'
                          : theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                      }`} />
                    </div>
                    <div>
                      <p className={`font-bold ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        {problem.text}
                      </p>
                      <span className={`text-xs font-mono uppercase px-2 py-1 ${
                        problem.severity === 'critical'
                          ? theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700'
                          : theme === 'dark' ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {problem.severity}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions Side - Aggressive Green Theme */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={`p-8 border-2 ${
              theme === 'dark' 
                ? 'bg-green-900/20 border-green-500' 
                : 'bg-green-50 border-green-400'
            }`} style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
              
              <div className="flex items-center mb-8">
                <div className={`p-3 border-2 ${
                  theme === 'dark' ? 'border-green-400' : 'border-green-500'
                }`} style={{ clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)' }}>
                  <Zap className={`w-8 h-8 ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`} />
                </div>
                <h3 className={`text-2xl font-black ml-4 ${
                  theme === 'dark' ? 'text-green-300' : 'text-green-800'
                }`}>
                  VERSATIL FIX
                </h3>
              </div>
              
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <div className={`w-6 h-6 border-2 flex items-center justify-center mt-1 ${
                      theme === 'dark' ? 'border-green-400 bg-green-500/20' : 'border-green-500 bg-green-100'
                    }`}>
                      <CheckCircle className={`w-3 h-3 ${
                        theme === 'dark' ? 'text-green-400' : 'text-green-600'
                      }`} />
                    </div>
                    <div>
                      <p className={`font-bold ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        {solution.text}
                      </p>
                      <span className={`text-xs font-mono uppercase px-2 py-1 ${
                        theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                      }`}>
                        {solution.impact}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA - Direct & Aggressive */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className={`inline-flex items-center space-x-6 p-8 border-2 ${
            theme === 'dark' 
              ? 'bg-gray-900/50 border-purple-500' 
              : 'bg-purple-100 border-purple-600'
          }`} style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}>
            
            <div className={`text-3xl font-black ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-800'
            }`}>
              RESULT:
            </div>
            
            <div className={`text-xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              ZERO HALLUCINATIONS × ENTERPRISE QUALITY × STARTUP VELOCITY
            </div>
          </div>
          
          <motion.a
            href="#workflow"
            className={`inline-flex items-center space-x-2 mt-8 px-8 py-4 font-black text-lg border-2 transition-all duration-300 ${
              theme === 'dark'
                ? 'text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black'
                : 'text-yellow-700 border-yellow-600 hover:bg-yellow-600 hover:text-white'
            } transform hover:scale-105`}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
          >
            <span>SEE THE WEAPON</span>
            <Zap className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ShoreditchProblemSolution;