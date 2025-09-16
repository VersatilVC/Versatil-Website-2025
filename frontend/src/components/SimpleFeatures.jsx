import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Brain, Database, Network, Shield } from "lucide-react";

const SimpleFeatures = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: Brain,
      title: "Company DNA Analysis",
      description: "AI learns your brand voice, tone, and messaging patterns to maintain perfect consistency.",
      color: "purple"
    },
    {
      icon: Database,
      title: "RAG Content Engine", 
      description: "Context-aware generation using your knowledge base and real-time market intelligence.",
      color: "blue"
    },
    {
      icon: Network,
      title: "Graph Neural Networks",
      description: "Complex relationship mapping between brand elements and audience segments.",
      color: "green"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC2 Type II compliant with customer-controlled data residency.",
      color: "orange"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className={`${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              How{" "}
            </span>
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}>
              VERSATIL Works
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Enterprise-grade technology that understands your brand and scales your content operations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-900/30 border-gray-700/30 hover:border-purple-500/30'
                    : 'bg-white/50 border-gray-200 hover:border-purple-300'
                } hover:shadow-xl`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <IconComponent className={`w-6 h-6 text-${feature.color}-500`} />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                } leading-relaxed`}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SimpleFeatures;