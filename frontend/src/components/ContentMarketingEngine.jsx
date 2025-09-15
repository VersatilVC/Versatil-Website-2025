import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { 
  FileText, 
  Share2, 
  Mail, 
  Search, 
  BarChart3, 
  Megaphone,
  Camera,
  Video,
  Calendar,
  Target,
  Zap,
  Brain,
  CheckCircle,
  Clock,
  Users
} from "lucide-react";

const ContentMarketingEngine = () => {
  const { theme } = useTheme();
  const [activeWorkflows, setActiveWorkflows] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [engineMetrics, setEngineMetrics] = useState({
    contentGenerated: 0,
    socialPosts: 0,
    emailsCrafted: 0,
    seoOptimized: 0,
    campaignsLive: 0
  });

  // Content Marketing Task Definitions
  const marketingTasks = [
    {
      id: 'blog-content',
      title: 'Blog Content Generation',
      agent: 'Content AI',
      icon: FileText,
      color: 'blue',
      processes: ['Topic Research', 'SEO Keywords', 'Content Writing', 'Fact Checking'],
      duration: 4.5,
      priority: 'high'
    },
    {
      id: 'social-media',
      title: 'Social Media Campaign',
      agent: 'Social AI',
      icon: Share2,
      color: 'purple',
      processes: ['Platform Analysis', 'Content Creation', 'Hashtag Research', 'Scheduling'],
      duration: 2.8,
      priority: 'medium'
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing',
      agent: 'Email AI',
      icon: Mail,
      color: 'green',
      processes: ['Segmentation', 'Personalization', 'A/B Testing', 'Send Optimization'],
      duration: 3.2,
      priority: 'high'
    },
    {
      id: 'seo-optimization',
      title: 'SEO Content Optimization',
      agent: 'SEO AI',
      icon: Search,
      color: 'orange',
      processes: ['Keyword Analysis', 'Meta Tags', 'Internal Linking', 'Schema Markup'],
      duration: 2.1,
      priority: 'medium'
    },
    {
      id: 'video-content',
      title: 'Video Content Production',
      agent: 'Video AI',
      icon: Video,
      color: 'red',
      processes: ['Script Writing', 'Storyboarding', 'Asset Generation', 'Post Production'],
      duration: 6.8,
      priority: 'low'
    },
    {
      id: 'analytics-reporting',
      title: 'Analytics & Reporting',
      agent: 'Analytics AI',
      icon: BarChart3,
      color: 'cyan',
      processes: ['Data Collection', 'Trend Analysis', 'Report Generation', 'Insights'],
      duration: 1.9,
      priority: 'high'
    },
    {
      id: 'paid-campaigns',
      title: 'Paid Ad Campaigns',
      agent: 'Ad AI',
      icon: Megaphone,
      color: 'pink',
      processes: ['Audience Targeting', 'Ad Creation', 'Bid Optimization', 'Performance Tracking'],
      duration: 3.7,
      priority: 'medium'
    },
    {
      id: 'visual-assets',
      title: 'Visual Asset Creation',
      agent: 'Creative AI',
      icon: Camera,
      color: 'indigo',
      processes: ['Design Concepts', 'Brand Alignment', 'Multi-Format Export', 'Quality Check'],
      duration: 4.1,
      priority: 'medium'
    }
  ];

  // Multi-task Workflow Orchestration
  useEffect(() => {
    const runMultiTaskWorkflow = async () => {
      // Phase 1: Initialize high-priority tasks
      const highPriorityTasks = marketingTasks.filter(task => task.priority === 'high');
      setActiveWorkflows(highPriorityTasks.map(task => task.id));
      
      // Simulate parallel processing
      for (let i = 0; i < highPriorityTasks.length; i++) {
        setTimeout(() => {
          const task = highPriorityTasks[i];
          simulateTaskProgress(task);
        }, i * 500);
      }

      await new Promise(resolve => setTimeout(resolve, 3000));

      // Phase 2: Add medium priority tasks
      const mediumPriorityTasks = marketingTasks.filter(task => task.priority === 'medium');
      setActiveWorkflows(prev => [...prev, ...mediumPriorityTasks.map(task => task.id)]);
      
      for (let i = 0; i < mediumPriorityTasks.length; i++) {
        setTimeout(() => {
          const task = mediumPriorityTasks[i];
          simulateTaskProgress(task);
        }, i * 800);
      }

      await new Promise(resolve => setTimeout(resolve, 4000));

      // Phase 3: Add low priority tasks
      const lowPriorityTasks = marketingTasks.filter(task => task.priority === 'low');
      setActiveWorkflows(prev => [...prev, ...lowPriorityTasks.map(task => task.id)]);
      
      for (let i = 0; i < lowPriorityTasks.length; i++) {
        setTimeout(() => {
          const task = lowPriorityTasks[i];
          simulateTaskProgress(task);
        }, i * 1000);
      }

      await new Promise(resolve => setTimeout(resolve, 8000));

      // Reset cycle
      setTimeout(() => {
        setActiveWorkflows([]);
        setCompletedTasks([]);
        setEngineMetrics({
          contentGenerated: 0,
          socialPosts: 0,
          emailsCrafted: 0,
          seoOptimized: 0,
          campaignsLive: 0
        });
      }, 2000);
    };

    const simulateTaskProgress = async (task) => {
      const duration = task.duration * 1000;
      const steps = task.processes.length;
      const stepDuration = duration / steps;

      for (let i = 0; i < steps; i++) {
        await new Promise(resolve => setTimeout(resolve, stepDuration));
      }

      // Mark as completed
      setCompletedTasks(prev => [...prev, task.id]);
      setActiveWorkflows(prev => prev.filter(id => id !== task.id));
      
      // Update metrics
      setEngineMetrics(prev => ({
        contentGenerated: prev.contentGenerated + (task.id.includes('blog') || task.id.includes('video') ? 1 : 0),
        socialPosts: prev.socialPosts + (task.id.includes('social') ? 5 : 0),
        emailsCrafted: prev.emailsCrafted + (task.id.includes('email') ? 3 : 0),
        seoOptimized: prev.seoOptimized + (task.id.includes('seo') || task.id.includes('blog') ? 1 : 0),
        campaignsLive: prev.campaignsLive + (task.id.includes('paid') || task.id.includes('social') ? 1 : 0)
      }));
    };

    const interval = setInterval(runMultiTaskWorkflow, 20000);
    runMultiTaskWorkflow(); // Run immediately
    
    return () => clearInterval(interval);
  }, []);

  const getTaskColor = (color, isActive = false, isCompleted = false) => {
    const colors = {
      blue: {
        bg: isCompleted ? 'from-green-500/20 to-green-600/20' : (isActive ? 'from-blue-500/20 to-blue-600/20' : 'from-gray-800/30 to-gray-900/30'),
        border: isCompleted ? 'border-green-500/60' : (isActive ? 'border-blue-500/60' : 'border-gray-700/30'),
        icon: isCompleted ? 'bg-green-500' : (isActive ? 'bg-blue-500' : 'bg-gray-600'),
        glow: isCompleted ? 'shadow-green-500/30' : 'shadow-blue-500/30'
      },
      purple: {
        bg: isCompleted ? 'from-green-500/20 to-green-600/20' : (isActive ? 'from-purple-500/20 to-purple-600/20' : 'from-gray-800/30 to-gray-900/30'),
        border: isCompleted ? 'border-green-500/60' : (isActive ? 'border-purple-500/60' : 'border-gray-700/30'),
        icon: isCompleted ? 'bg-green-500' : (isActive ? 'bg-purple-500' : 'bg-gray-600'),
        glow: isCompleted ? 'shadow-green-500/30' : 'shadow-purple-500/30'
      },
      green: {
        bg: isCompleted ? 'from-green-500/20 to-green-600/20' : (isActive ? 'from-green-500/20 to-green-600/20' : 'from-gray-800/30 to-gray-900/30'),
        border: isCompleted ? 'border-green-500/60' : (isActive ? 'border-green-500/60' : 'border-gray-700/30'),
        icon: isCompleted ? 'bg-green-500' : (isActive ? 'bg-green-500' : 'bg-gray-600'),
        glow: 'shadow-green-500/30'
      },
      orange: {
        bg: isCompleted ? 'from-green-500/20 to-green-600/20' : (isActive ? 'from-orange-500/20 to-orange-600/20' : 'from-gray-800/30 to-gray-900/30'),
        border: isCompleted ? 'border-green-500/60' : (isActive ? 'border-orange-500/60' : 'border-gray-700/30'),
        icon: isCompleted ? 'bg-green-500' : (isActive ? 'bg-orange-500' : 'bg-gray-600'),
        glow: isCompleted ? 'shadow-green-500/30' : 'shadow-orange-500/30'
      },
      red: {
        bg: isCompleted ? 'from-green-500/20 to-green-600/20' : (isActive ? 'from-red-500/20 to-red-600/20' : 'from-gray-800/30 to-gray-900/30'),
        border: isCompleted ? 'border-green-500/60' : (isActive ? 'border-red-500/60' : 'border-gray-700/30'),
        icon: isCompleted ? 'bg-green-500' : (isActive ? 'bg-red-500' : 'bg-gray-600'),
        glow: isCompleted ? 'shadow-green-500/30' : 'shadow-red-500/30'
      },
      cyan: {
        bg: isCompleted ? 'from-green-500/20 to-green-600/20' : (isActive ? 'from-cyan-500/20 to-cyan-600/20' : 'from-gray-800/30 to-gray-900/30'),
        border: isCompleted ? 'border-green-500/60' : (isActive ? 'border-cyan-500/60' : 'border-gray-700/30'),
        icon: isCompleted ? 'bg-green-500' : (isActive ? 'bg-cyan-500' : 'bg-gray-600'),
        glow: isCompleted ? 'shadow-green-500/30' : 'shadow-cyan-500/30'
      },
      pink: {
        bg: isCompleted ? 'from-green-500/20 to-green-600/20' : (isActive ? 'from-pink-500/20 to-pink-600/20' : 'from-gray-800/30 to-gray-900/30'),
        border: isCompleted ? 'border-green-500/60' : (isActive ? 'border-pink-500/60' : 'border-gray-700/30'),
        icon: isCompleted ? 'bg-green-500' : (isActive ? 'bg-pink-500' : 'bg-gray-600'),
        glow: isCompleted ? 'shadow-green-500/30' : 'shadow-pink-500/30'
      },
      indigo: {
        bg: isCompleted ? 'from-green-500/20 to-green-600/20' : (isActive ? 'from-indigo-500/20 to-indigo-600/20' : 'from-gray-800/30 to-gray-900/30'),
        border: isCompleted ? 'border-green-500/60' : (isActive ? 'border-indigo-500/60' : 'border-gray-700/30'),
        icon: isCompleted ? 'bg-green-500' : (isActive ? 'bg-indigo-500' : 'bg-gray-600'),
        glow: isCompleted ? 'shadow-green-500/30' : 'shadow-indigo-500/30'
      }
    };
    return colors[color] || colors.blue;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'text-red-400 bg-red-500/10 border-red-500/30',
      medium: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
      low: 'text-green-400 bg-green-500/10 border-green-500/30'
    };
    return colors[priority];
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className={`text-sm font-medium tracking-widest uppercase mb-6 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            CONTENT MARKETING ENGINE
          </motion.p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Multi-Task{" "}
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}>
              AI Orchestration
            </span>
          </h2>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Watch our AI agents handle multiple content marketing tasks simultaneously - from blog posts to social campaigns, all running in parallel.
          </p>
        </motion.div>

        {/* Multi-Task Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketingTasks.map((task, index) => {
            const IconComponent = task.icon;
            const isActive = activeWorkflows.includes(task.id);
            const isCompleted = completedTasks.includes(task.id);
            const colors = getTaskColor(task.color, isActive, isCompleted);
            
            return (
              <motion.div
                key={task.id}
                className={`relative p-6 rounded-2xl border-2 backdrop-blur-sm transition-all duration-700 ${
                  colors.bg
                } ${colors.border} ${(isActive || isCompleted) ? `shadow-2xl ${colors.glow}` : ''}`}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
              >
                {/* Priority Badge */}
                <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-medium border ${
                  getPriorityColor(task.priority)
                }`}>
                  {task.priority.toUpperCase()}
                </div>

                {/* Task Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${colors.icon} shadow-lg`}
                  animate={isActive ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  } : isCompleted ? {
                    scale: 1.1
                  } : {}}
                  transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <IconComponent className="w-6 h-6 text-white" />
                  )}
                </motion.div>

                {/* Task Info */}
                <h3 className="text-lg font-bold mb-2">{task.title}</h3>
                <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Agent: {task.agent}
                </p>

                {/* Process Steps */}
                <div className="space-y-2 mb-4">
                  {task.processes.map((process, processIndex) => (
                    <motion.div
                      key={processIndex}
                      className={`flex items-center space-x-2 text-xs p-2 rounded ${
                        isActive 
                          ? `bg-${task.color}-500/20 text-${task.color}-400` 
                          : isCompleted
                          ? 'bg-green-500/20 text-green-400'
                          : `${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`
                      }`}
                      initial={{ opacity: 0.5 }}
                      animate={{ 
                        opacity: isActive || isCompleted ? 1 : 0.5,
                        x: isActive || isCompleted ? 5 : 0
                      }}
                      transition={{ duration: 0.3, delay: processIndex * 0.1 }}
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full ${
                          isCompleted ? 'bg-green-500' : (isActive ? `bg-${task.color}-500` : 'bg-gray-500')
                        }`}
                        animate={isActive ? {
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        } : {}}
                        transition={{ duration: 1, repeat: Infinity, delay: processIndex * 0.2 }}
                      />
                      <span>{process}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Task Duration */}
                <div className="flex items-center justify-between text-xs">
                  <span className={`flex items-center space-x-1 ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    <Clock className="w-3 h-3" />
                    <span>{task.duration}s</span>
                  </span>
                  
                  {/* Status Indicator */}
                  <motion.div
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      isCompleted ? 'bg-green-500/20 text-green-400' :
                      isActive ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-500'
                    }`}
                    animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {isCompleted ? 'Complete' : isActive ? 'Processing' : 'Queued'}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Real-Time Content Marketing Metrics */}
        <motion.div
          className={`p-8 rounded-2xl ${
            theme === 'dark' 
              ? 'bg-gray-900/50 border border-gray-800' 
              : 'bg-gray-50 border border-gray-200'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}>
              Live Content Marketing Metrics
            </span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { label: 'Content Generated', value: engineMetrics.contentGenerated, icon: FileText, color: 'blue' },
              { label: 'Social Posts', value: engineMetrics.socialPosts, icon: Share2, color: 'purple' },
              { label: 'Emails Crafted', value: engineMetrics.emailsCrafted, icon: Mail, color: 'green' },
              { label: 'SEO Optimized', value: engineMetrics.seoOptimized, icon: Search, color: 'orange' },
              { label: 'Campaigns Live', value: engineMetrics.campaignsLive, icon: Target, color: 'red' }
            ].map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  <motion.div 
                    className="flex items-center justify-center mb-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={`p-3 rounded-full bg-${metric.color}-500/20 border border-${metric.color}-500/30`}>
                      <IconComponent className={`w-6 h-6 text-${metric.color}-500`} />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className={`text-3xl font-bold text-${metric.color}-500 mb-2`}
                    animate={{ 
                      scale: metric.value > 0 ? [1, 1.05, 1] : 1
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {metric.value}
                  </motion.div>
                  
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Workflow Status */}
          <motion.div
            className={`mt-8 p-4 rounded-xl ${
              theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'
            } border border-gray-600/20`}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <motion.div
                  className="flex space-x-1"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </motion.div>
                <span className="font-medium">Multi-Task Processing Active</span>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <span className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{activeWorkflows.length} Active</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{completedTasks.length} Completed</span>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentMarketingEngine;