import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { ArrowRight, Calendar, Play } from "lucide-react";
import CalendarModal from "./CalendarModal";
import VideoModal from "./VideoModal";
import { useCalendarModal } from "../hooks/useCalendarModal";
import { useVideoModal } from "../hooks/useVideoModal";

const SimpleCTA = () => {
  const { theme } = useTheme();
  const { isOpen, openCalendar, closeCalendar } = useCalendarModal();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          className={`p-12 rounded-3xl border ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30'
              : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200'
          } backdrop-blur-xl shadow-2xl`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to see{" "}
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}>
              your transformation?
            </span>
          </motion.h2>

          <motion.p
            className={`text-lg mb-8 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            See how VERSATIL transforms your content operations in a 15-minute personalized demo.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
              } shadow-lg hover:shadow-xl`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Short Demo</span>
              </span>
            </motion.button>

            <motion.button
              onClick={openCalendar}
              className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 inline-flex items-center ${
                theme === 'dark'
                  ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                  : 'border-purple-600 text-purple-600 hover:bg-purple-50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book Strategy Call</span>
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              ✓ 15-minute personalized demo
            </div>
            <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              ✓ Custom ROI analysis
            </div>
            <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              ✓ Implementation roadmap
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Calendar Modal */}
      <CalendarModal isOpen={isOpen} onClose={closeCalendar} />
    </section>
  );
};

export default SimpleCTA;