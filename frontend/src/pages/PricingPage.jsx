import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "../components/ui/button";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const PricingPage = () => {
  const { theme } = useTheme();
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Starter Pack",
      icon: Zap,
      price: billingCycle === 'monthly' ? 2999 : 2699,
      originalPrice: billingCycle === 'monthly' ? null : 2999,
      period: billingCycle === 'monthly' ? '/month' : '/month (billed annually)',
      description: "Perfect for early-stage startups needing essential brand elements",
      features: [
        "2 requests per month",
        "3-5 day turnaround",
        "Brand identity basics",
        "Logo and business cards",
        "Email support",
        "1 revision round"
      ],
      cta: "Start Building",
      popular: false
    },
    {
      name: "Growth Pack",
      icon: Crown,
      price: billingCycle === 'monthly' ? 4999 : 4499,
      originalPrice: billingCycle === 'monthly' ? null : 4999,
      period: billingCycle === 'monthly' ? '/month' : '/month (billed annually)',
      description: "Ideal for scaling companies with ongoing creative needs",
      features: [
        "5 requests per month",
        "2-3 day turnaround",
        "Full brand suite",
        "Web design assets",
        "Social media templates",
        "Unlimited revisions",
        "Priority support",
        "Dedicated project manager"
      ],
      cta: "Scale Your Brand",
      popular: true
    },
    {
      name: "Enterprise Pack",
      icon: Rocket,
      price: billingCycle === 'monthly' ? 9999 : 8999,
      originalPrice: billingCycle === 'monthly' ? null : 9999,
      period: billingCycle === 'monthly' ? '/month' : '/month (billed annually)',
      description: "For established companies requiring comprehensive creative solutions",
      features: [
        "Unlimited requests",
        "24-48 hour turnaround",
        "Complete creative suite",
        "Custom illustrations",
        "Video & animation",
        "Brand guidelines",
        "White-label options",
        "Dedicated design team",
        "Strategy consultations"
      ],
      cta: "Go Enterprise",
      popular: false
    }
  ];

  const customPacks = [
    {
      name: "Brand Identity Pack™",
      price: "Starting at $2,999",
      description: "Complete brand foundation including logo, colors, typography, and guidelines."
    },
    {
      name: "Pitch Power Pack™", 
      price: "Starting at $4,999",
      description: "Investor-ready pitch deck with compelling storytelling and professional design."
    },
    {
      name: "Super Web Pack™",
      price: "Starting at $7,999",
      description: "High-converting website with custom design and lead capture optimization."
    },
    {
      name: "Social Content Pack™",
      price: "Starting at $1,999",
      description: "30-day social media content suite with templates and brand-consistent posts."
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
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            Plans that{" "}
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            }`}>
              scale with you
            </span>
          </h1>
          
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto mb-12 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Choose the perfect plan for your startup's creative needs. Upgrade or downgrade anytime.
          </p>

          {/* Billing Toggle */}
          <div className={`inline-flex items-center rounded-lg p-1 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all relative ${
                billingCycle === 'annually'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annually
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                Save 10%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? 'ring-2 ring-blue-500 scale-105'
                      : ''
                  } ${
                    theme === 'dark' 
                      ? 'bg-gray-900/50 border border-gray-800 hover:border-blue-500/50' 
                      : 'bg-white border border-gray-200 hover:border-blue-300 shadow-lg'
                  } transition-all duration-300 hover:shadow-2xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold">${plan.price.toLocaleString()}</span>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {plan.period}
                      </span>
                      {plan.originalPrice && (
                        <div className={`text-sm line-through ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                          ${plan.originalPrice.toLocaleString()}/month
                        </div>
                      )}
                    </div>
                    
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full py-3 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white rounded-lg transition-all duration-300`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Packs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Custom Packs™
            </h2>
            <p className={`text-xl leading-relaxed max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              One-time solutions for specific creative needs. Delivered in days, not weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customPacks.map((pack, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl ${
                  theme === 'dark' 
                    ? 'bg-gray-900/50 border border-gray-800 hover:border-blue-500/50' 
                    : 'bg-white border border-gray-200 hover:border-blue-300 shadow-lg'
                } transition-all duration-300 hover:shadow-xl`}
              >
                <h3 className="text-xl font-bold mb-2">{pack.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{pack.price}</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  {pack.description}
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;