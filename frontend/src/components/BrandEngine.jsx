import React from "react";
import { Button } from "./ui/button";
import { CheckCircle, Clock, DollarSign } from "lucide-react";

const BrandEngine = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Lean Ops",
      subtitle: "9 on 9",
      description: "communication with no need for meetings",
    },
    {
      icon: Clock,
      title: "Smart Workflows", 
      subtitle: "$0K+",
      description: "in savings with fixed, transparent pricing",
    },
    {
      icon: DollarSign,
      title: "Expert Team",
      subtitle: "100%",
      description: "satisfaction guaranteed unlimited revisions",
    },
  ];

  const services = [
    { title: "Strategic Growth", description: "Enjoy unlimited requests and revisions via our memberships for ongoing needs." },
    { title: "Custom Packs", description: "Speed meets precision." },
    { title: "100+ Packs Delivered", description: "" },
    { title: "Simple Workflow", description: "" },
    { title: "Flat Pricing", description: "Explore your options" },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
            YOUR BRAND ENGINE
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            One stop. Premium finish.{" "}
            <span className="block">Zero friction.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Start any request with a click, track progress, receive in days. For every creative need.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            See cases
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">{feature.subtitle}</div>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-900/50"
            >
              <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
              {service.description && (
                <p className="text-gray-400 text-sm">{service.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default BrandEngine;