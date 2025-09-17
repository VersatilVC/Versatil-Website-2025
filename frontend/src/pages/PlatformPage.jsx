import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "../components/ui/button";
import { CheckCircle, Zap, Users } from "lucide-react";
import { PageTransition, ScrollReveal, StaggerContainer, StaggerItem } from "../components/MotionWrapper";

const PlatformPage = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: Zap,
      title: "AI-Assisted Workflow",
      description: "Intelligent request routing and project management with AI"
    },
    {
      icon: Users,
      title: "Dedicated Team Lead",
      description: "Your personal point of contact for all projects and communications"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Multi-stage review process ensures consistent, on-brand results"
    }
  ];

  return (
    <PageTransition
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-black text-white' 
          : 'bg-white text-gray-900'
      }`}
    >
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className={`text-sm font-medium tracking-widest uppercase mb-6 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>
              AI-ASSISTED PLATFORM
            </p>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              Your brand's{" "}
              <span className={`${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
              }`}>
                command center
              </span>
            </h1>
            
            <p className={`text-xl leading-relaxed max-w-3xl mx-auto mb-12 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Run every request via one system, with a dedicated lead, fast loops and on-brand results that scale.
            </p>

            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transform hover:scale-105 transition-all duration-300">
              Start Your First Request
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Chart Section */}
      <ScrollReveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`rounded-3xl p-12 ${
              theme === 'dark' 
                ? 'bg-gray-900/50 border border-gray-800' 
                : 'bg-gray-50 border border-gray-200'
            }`}>
              <StaggerContainer staggerChildren={0.2}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
                  <StaggerItem>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Traditional Hiring</h3>
                      <ul className={`space-y-3 text-left ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        <li>• 3-6 months to hire</li>
                        <li>• $80K+ annual salary</li>
                        <li>• Limited skill range</li>
                        <li>• Management overhead</li>
                        <li>• No guarantee of quality</li>
                      </ul>
                    </div>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <div className={`lg:border-x ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} px-8`}>
                      <h3 className="text-2xl font-bold mb-4 text-blue-600">LightStage Platform</h3>
                      <ul className={`space-y-3 text-left ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        <li>• Instant access</li>
                        <li>• Fixed monthly pricing</li>
                        <li>• Full creative spectrum</li>
                        <li>• Fully managed service</li>
                        <li>• 100% satisfaction guarantee</li>
                      </ul>
                    </div>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Freelance Platforms</h3>
                      <ul className={`space-y-3 text-left ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        <li>• Inconsistent quality</li>
                        <li>• Project-by-project costs</li>
                        <li>• Communication barriers</li>
                        <li>• No brand continuity</li>
                        <li>• Time zone challenges</li>
                      </ul>
                    </div>
                  </StaggerItem>
                </div>
              </StaggerContainer>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <ScrollReveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className={`text-sm font-medium tracking-widest uppercase mb-6 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                HYPER-SPEED PRODUCTION
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Request, refine, grow, repeat.
              </h2>
            </div>

            <StaggerContainer staggerChildren={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <StaggerItem key={index}>
                      <div className={`p-8 rounded-2xl ${
                        theme === 'dark' 
                          ? 'bg-gray-900/50 border border-gray-800 hover:border-blue-500/50' 
                          : 'bg-gray-50 border border-gray-200 hover:border-blue-300'
                      } transition-all duration-300`}>
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-6">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature.description}
                        </p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </div>
            </StaggerContainer>

            <div className="text-center">
              <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Request with one click. Everything is expertly managed on our platform, for all your team. 
                Track, revise and scale your creative pipeline, without scaling your headcount.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg">
                See Plans
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </PageTransition>
  );
};

export default PlatformPage;