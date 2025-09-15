import React from "react";

const TrustedBy = () => {
  const companies = [
    { name: "Codeium", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop" },
    { name: "FluidFocus", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" },
    { name: "CatchMe", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "Onai", logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop" },
    { name: "Mentagram", logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=120&h=60&fit=crop" },
    { name: "Alloi", logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=120&h=60&fit=crop" },
    { name: "Gradio", logo: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=120&h=60&fit=crop" },
    { name: "Lyko", logo: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=120&h=60&fit=crop" },
  ];

  return (
    <section className="py-16 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-gray-400 text-sm font-medium tracking-wider uppercase mb-12">
          TRUSTED BY
        </h3>
        
        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-scroll">
            {/* First set */}
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100"
                />
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {companies.map((company, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;