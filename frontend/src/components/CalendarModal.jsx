import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const CalendarModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
        {/* Modal */}
        <motion.div
          className={`relative w-full max-w-4xl h-[90vh] mx-4 border-2 ${
            theme === 'dark' 
              ? 'bg-gray-900 border-gray-700' 
              : 'bg-white border-gray-300'
          }`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
        >
          {/* Header */}
          <div className={`flex items-center justify-between p-6 border-b-2 ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div>
              <h2 className={`text-2xl font-black ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                BOOK YOUR DEMO
              </h2>
              <p className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Schedule a personalized VERSATIL demonstration
              </p>
            </div>
            
            <motion.button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                theme === 'dark'
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                  : 'hover:bg-gray-100 text-gray-600 hover:text-black'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Calendar Iframe */}
          <div className="flex-1 p-6">
            <iframe
              src="https://cal.com/nissimmenashe/versatil"
              className="w-full h-full rounded-lg border-2 border-gray-300"
              frameBorder="0"
              title="Book a Demo - VERSATIL Calendar"
              allow="camera; microphone; geolocation; clipboard-read; clipboard-write"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CalendarModal;