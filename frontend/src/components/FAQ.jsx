import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why not just hire someone?",
      answer: "Hiring full-time designers is expensive, time-consuming, and often overkill for startup needs. Our model gives you access to senior talent without the overhead costs, HR complexities, or long-term commitments. You get professional results faster and more cost-effectively."
    },
    {
      question: "How fast do you deliver?", 
      answer: "Most packs are delivered within 3-7 business days, depending on complexity. Rush deliveries are available for urgent needs. Our streamlined process and dedicated team ensure quick turnarounds without compromising quality."
    },
    {
      question: "What exactly is a Custom Pack™?",
      answer: "A Custom Pack is a complete design solution tailored to your specific needs. It includes everything from brand identity and logos to web design, marketing materials, and investor presentations - all designed to work together cohesively for maximum impact."
    },
    {
      question: "What's the delivery process like?",
      answer: "After purchasing, you'll be onboarded by our Assistant who will gather your requirements. Our design team then creates your materials, with regular updates and revision rounds. Final files are delivered through our platform with full usage rights."
    },
    {
      question: "What's included in a membership?",
      answer: "Memberships include unlimited design requests, unlimited revisions, priority support, faster turnarounds, and access to premium features. Perfect for ongoing design needs and growing startups who need consistent brand development."
    },
    {
      question: "Who is my point of contact?",
      answer: "You'll have a dedicated project manager who will be your main point of contact throughout the process. They'll coordinate with our design team and ensure your project stays on track and meets your expectations."
    },
    {
      question: "What if I'm not happy with the work?",
      answer: "We offer unlimited revisions until you're completely satisfied. If we can't meet your expectations, we provide a full refund. Our goal is 100% satisfaction - we don't succeed unless you do."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Questions? Answers.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-br from-blue-900/20 to-transparent rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-bold mb-4">Run brand diagnostics</h3>
          <p className="text-gray-300 mb-6">
            Talk to a human strategist. Leave with a real plan.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;