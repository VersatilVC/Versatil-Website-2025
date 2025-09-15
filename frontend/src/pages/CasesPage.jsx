import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";

const CasesPage = () => {
  const { theme } = useTheme();

  const cases = [
    {
      title: "Lookie AI",
      subtitle: "IN-DEPTH STUDY",
      description: "Igniting organic brand growth for a company recreating smart learning from any video or podcast.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      category: "AI & Technology"
    },
    {
      title: "Brand Identity Pack™",
      subtitle: "APPLIED BRANDING",
      description: "Forging premium brands that lay the foundation for growth. Launch-ready in days.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "Brand Identity"
    },
    {
      title: "Catch Me",
      subtitle: "IN-DEPTH STUDY",
      description: "Making talent matchmaking memorable with a strong identity that speeds up growth.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      category: "Talent Platform"
    },
    {
      title: "Pitch Power Pack™",
      subtitle: "APPLIED BRANDING",
      description: "Making early-stage visions into clear, fundable stories that investors can't ignore. Pitch-ready in a sprint.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      category: "Pitch Deck"
    },
    {
      title: "Super Web Pack™",
      subtitle: "APPLIED BRANDING",
      description: "Launching fast sites that turn traffic into traction, complete with asset suites for effective lead capture.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
      category: "Web Development"
    },
    {
      title: "Cryptique",
      subtitle: "IN-DEPTH STUDY",
      description: "Turning AI privacy into everyday trust with a brand that inspires people to secure their online assets.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      category: "Cybersecurity"
    },
    {
      title: "Social Content Pack™",
      subtitle: "APPLIED BRANDING",
      description: "Stopping scrolls and expanding reach with targeted content campaigns for business growth.",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=400&fit=crop",
      category: "Social Media"
    },
    {
      title: "Jason Wu Beauty",
      subtitle: "IN-DEPTH STUDY",
      description: "Elevating a LA beauty icon with campaign aesthetics that turns intrigue into demand.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
      category: "Beauty & Fashion"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-black text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className={`text-sm font-medium tracking-widest uppercase mb-6 ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`}>
            FEATURED CASES
          </p>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            Startup expertise,{" "}
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            }`}>
              layered for speed
            </span>
          </h1>
          
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Packs and other custom work powering 25+ teams to growth, funding, and accelerated timelines.
          </p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseStudy, index) => (
              <div
                key={index}
                className={`group rounded-2xl overflow-hidden ${
                  theme === 'dark' 
                    ? 'bg-gray-900/50 border border-gray-800 hover:border-blue-500/50' 
                    : 'bg-white border border-gray-200 hover:border-blue-300 shadow-lg'
                } transition-all duration-300 hover:shadow-2xl hover:scale-105`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className={`text-xs font-medium tracking-wider uppercase mb-2 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {caseStudy.subtitle}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {caseStudy.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {caseStudy.description}
                  </p>
                  
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                    <span>View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Brand like you mean business
          </h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Whether you're raising, launching, or growing—your next move starts here.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg">
            See Plans
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasesPage;