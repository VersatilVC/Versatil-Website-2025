import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Helped our startup attract new partners and raise funds. The work is always on point and delivered on time. I love it.",
      author: "Poyan Sandnell",
      title: "Founder · Catch Me®",
    },
    {
      quote: "Tremendous value, fast and perfect.. they knew exactly what I wanted. I wish this was around when I started.",
      author: "Aoi Yamamoto", 
      title: "CMO · Jason Wu Beauty",
    },
    {
      quote: "We are very happy with LightStage and happy to support their mission.",
      author: "Ray Hurst",
      title: "Founder · Codeium",
    },
    {
      quote: "Responsive, professional and agile. Highly recommend Light Stage for the consistent quality, simplicity and sheer efficiency.",
      author: "Alexander Gäverström",
      title: "COO · VL Developers",
    },
    {
      quote: "What I like is their personal approach, and the fact that they understand so well. For me, the service is more than what I expect.",
      author: "Guido Rossi",
      title: "Co-Founder · Onai",
    },
    {
      quote: "The service strikes the perfect balance between speed, quality and price. Highly recommend the team at LightStage.",
      author: "Roberta Rivera",
      title: "Marketing Lead · Lookie AI",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
            YOU'RE IN
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold">Good company</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gray-900/50 rounded-2xl p-8 lg:p-12 border border-gray-800 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-600/30" />
            
            <div className="relative z-10">
              <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8 text-gray-100">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white mb-1">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentIndex].title}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;