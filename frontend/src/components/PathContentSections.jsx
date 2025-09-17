import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Target, Zap, Settings, Calendar, Play, CheckCircle, BarChart3, Shield, Database, Cpu } from "lucide-react";

const PathContentSections = () => {
  const { theme } = useTheme();
  const [activeTrack, setActiveTrack] = useState(null);

  const executiveData = {
    title: "Executive Impact Dashboard",
    kpis: [
      { metric: "Marketing ROI", value: "+340% improvement", icon: BarChart3 },
      { metric: "Content Velocity", value: "3.4x baseline performance", icon: Zap },
      { metric: "Team Efficiency", value: "240% capacity amplification", icon: Target },
      { metric: "Quality Maintenance", value: "94% at scale", icon: Shield },
      { metric: "Competitive Advantage", value: "67% faster time-to-market", icon: Cpu }
    ],
    testimonials: [
      {
        quote: "VERSATIL's company DNA understood our disinformation narrative better than our own team. IPO communication went from 3-week cycles to 3-day sprints.",
        author: "Dan Brahmy",
        title: "CEO, Cyabra (Pre-IPO)"
      },
      {
        quote: "Market research that used to take 4 weeks now takes 4 days. We identified $2.3B TAM with 91% data accuracy.",
        author: "Liran Miron",
        title: "Co-Founder, SolarWine.ai"
      }
    ]
  };

  const marketingData = {
    title: "Marketing Team Workflow",
    beforeWorkflow: [
      "Monday: Briefing meeting, research gathering",
      "Tuesday-Wednesday: First drafts, multiple revisions",
      "Thursday: Brand review, compliance checks",
      "Friday: Final approvals, publishing prep",
      "Result: 5-day cycle, 60% first-draft acceptance"
    ],
    afterWorkflow: [
      "Hour 1: Brief uploaded to company brain",
      "Hour 2: Pixel agents deliver publish-ready draft",
      "Hour 3: Human review and refinement",
      "Hour 4: Approved and published",
      "Result: 4-hour cycle, 89% first-draft acceptance"
    ],
    qualityMetrics: [
      { metric: "Brand Voice Match", value: "94.2% accuracy", comparison: "vs. 31% generic AI" },
      { metric: "Fact Verification", value: "99.2% source-mapped claims", comparison: "" },
      { metric: "Edit Requirements", value: "15%", comparison: "vs. 89% generic tools" },
      { metric: "Publishing Confidence", value: "84% ready-to-ship rate", comparison: "" },
      { metric: "Team Satisfaction", value: "8.9/10", comparison: "was 4.2/10" }
    ]
  };

  const technicalData = {
    title: "Technical Architecture & Integration",
    specifications: [
      { spec: "Deployment", value: "Multi-cloud (AWS, Azure, GCP)" },
      { spec: "Security", value: "SOC2 Type II, GDPR compliant" },
      { spec: "API Access", value: "RESTful + GraphQL endpoints" },
      { spec: "Integration", value: "Slack, HubSpot, Salesforce, 20+ tools" },
      { spec: "Data Sovereignty", value: "Customer-controlled data residency" },
      { spec: "SLA", value: "99.9% uptime, <200ms response time" }
    ],
    performance: [
      { metric: "Processing Speed", value: "12x faster than human baseline" },
      { metric: "Concurrent Users", value: "500+ simultaneous sessions" },
      { metric: "Content Volume", value: "10,000+ pieces per month per client" },
      { metric: "Accuracy Rate", value: "99.2% fact verification maintained" },
      { metric: "Learning Speed", value: "Model improvements within 48 hours" }
    ]
  };

  const pathButtons = [
    { id: 'executive', title: 'Executive Strategy', icon: Target, color: 'purple' },
    { id: 'marketing', title: 'Marketing Demo', icon: Zap, color: 'blue' },
    { id: 'technical', title: 'Technical Deep Dive', icon: Settings, color: 'green' }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Path Selection Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {pathButtons.map((button, index) => {
            const IconComponent = button.icon;
            return (
              <motion.button
                key={button.id}
                onClick={() => setActiveTrack(activeTrack === button.id ? null : button.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTrack === button.id
                    ? `bg-${button.color}-500 text-white shadow-lg`
                    : theme === 'dark'
                      ? `border border-${button.color}-500/50 text-${button.color}-400 hover:bg-${button.color}-500/10`
                      : `border border-${button.color}-300 text-${button.color}-600 hover:bg-${button.color}-50`
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="flex items-center space-x-2">
                  <IconComponent className="w-5 h-5" />
                  <span>{button.title}</span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content Sections */}
        <AnimatePresence>
          {/* Executive Track */}
          {activeTrack === 'executive' && (
            <motion.div
              key="executive"
              className={`p-8 rounded-2xl border ${
                theme === 'dark' 
                  ? 'bg-gray-900/60 border-purple-500/30' 
                  : 'bg-white/80 border-purple-200'
              } backdrop-blur-xl shadow-2xl`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">{executiveData.title}</h3>
              
              {/* KPIs */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                {executiveData.kpis.map((kpi, index) => {
                  const IconComponent = kpi.icon;
                  return (
                    <motion.div
                      key={index}
                      className={`text-center p-4 rounded-xl ${
                        theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <IconComponent className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                      <p className="font-semibold text-sm mb-2">{kpi.metric}</p>
                      <p className="text-lg font-bold text-purple-500">{kpi.value}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {executiveData.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-xl ${
                      theme === 'dark' ? 'bg-gray-800/30' : 'bg-gray-50'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    <blockquote className="text-sm mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
                    }`}>
                      {testimonial.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Marketing Track */}
          {activeTrack === 'marketing' && (
            <motion.div
              key="marketing"
              className={`p-8 rounded-2xl border ${
                theme === 'dark' 
                  ? 'bg-gray-900/60 border-blue-500/30' 
                  : 'bg-white/80 border-blue-200'
              } backdrop-blur-xl shadow-2xl`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">{marketingData.title}</h3>
              
              {/* Before/After Workflow */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className={`text-lg font-bold mb-4 ${
                    theme === 'dark' ? 'text-red-400' : 'text-red-600'
                  }`}>
                    ❌ Before VERSATIL
                  </h4>
                  <div className="space-y-3">
                    {marketingData.beforeWorkflow.map((step, index) => (
                      <motion.div
                        key={index}
                        className={`p-3 rounded-lg ${
                          theme === 'dark' ? 'bg-red-900/20' : 'bg-red-50'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <p className="text-sm">{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className={`text-lg font-bold mb-4 ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`}>
                    ✅ After VERSATIL
                  </h4>
                  <div className="space-y-3">
                    {marketingData.afterWorkflow.map((step, index) => (
                      <motion.div
                        key={index}
                        className={`p-3 rounded-lg ${
                          theme === 'dark' ? 'bg-green-900/20' : 'bg-green-50'
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <p className="text-sm">{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quality Metrics */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-center">🎨 Quality Control Dashboard</h4>
                <div className="space-y-4">
                  {marketingData.qualityMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      className={`flex justify-between items-center p-4 rounded-lg ${
                        theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <span className="font-medium">{metric.metric}</span>
                      <div className="text-right">
                        <span className="font-bold text-blue-500">{metric.value}</span>
                        {metric.comparison && (
                          <div className="text-xs text-gray-500">{metric.comparison}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Technical Track */}
          {activeTrack === 'technical' && (
            <motion.div
              key="technical"
              className={`p-8 rounded-2xl border ${
                theme === 'dark' 
                  ? 'bg-gray-900/60 border-green-500/30' 
                  : 'bg-white/80 border-green-200'
              } backdrop-blur-xl shadow-2xl`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">{technicalData.title}</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Specifications */}
                <div>
                  <h4 className="text-lg font-bold mb-4">🏗️ Enterprise Infrastructure</h4>
                  <div className="space-y-3">
                    {technicalData.specifications.map((spec, index) => (
                      <motion.div
                        key={index}
                        className={`p-4 rounded-lg ${
                          theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium text-green-500">{spec.spec}:</span>
                          <span className="text-sm">{spec.value}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Performance */}
                <div>
                  <h4 className="text-lg font-bold mb-4">📊 Performance Metrics</h4>
                  <div className="space-y-3">
                    {technicalData.performance.map((perf, index) => (
                      <motion.div
                        key={index}
                        className={`p-4 rounded-lg ${
                          theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{perf.metric}:</span>
                          <span className="text-sm font-bold text-green-500">{perf.value}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA when no track is selected */}
        {!activeTrack && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Select your role above to see relevant content and features
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PathContentSections;