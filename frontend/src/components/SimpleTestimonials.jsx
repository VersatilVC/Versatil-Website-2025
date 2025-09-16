import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Quote, Star } from "lucide-react";

const SimpleTestimonials = () => {
  const { theme } = useTheme();

  const testimonials = [
    {
      quote: "VERSATIL understood our brand better than our own team. IPO communication went from 3-week cycles to 3-day sprints.",
      author: "Dan Brahmy",
      title: "CEO, Cyabra",
      rating: 5
    },
    {
      quote: "Market research that used to take 4 weeks now takes 4 days. We identified $2.3B TAM with 91% accuracy.",
      author: "Liran Miron", 
      title: "Co-Founder, SolarWine.ai",
      rating: 5
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
              What{" "}
            </span>
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}>
              Leaders Say
            </span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl border backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-gray-900/30 border-gray-700/30'
                  : 'bg-white/50 border-gray-200'
              } shadow-xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Quote Icon */}
              <Quote className={`w-8 h-8 mb-6 ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`} />

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                    : 'bg-gradient-to-br from-purple-600 to-pink-600'
                } flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
                  }`}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleTestimonials;