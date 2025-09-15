import React from "react";

const DesignShowcase = () => {
  const designCards = [
    {
      id: 1,
      title: "Brand Pack",
      image: "https://images.unsplash.com/photo-1634224088541-44ea8d7a9a87?w=300&h=200&fit=crop",
      className: "w-40 h-32 rotate-12 top-0 right-20",
    },
    {
      id: 2,
      title: "Web Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=200&fit=crop",
      className: "w-44 h-36 -rotate-6 top-16 right-0",
    },
    {
      id: 3,
      title: "Logo Design",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop",
      className: "w-36 h-28 rotate-3 top-32 right-32",
    },
    {
      id: 4,
      title: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      className: "w-48 h-32 -rotate-12 top-48 right-8",
    },
    {
      id: 5,
      title: "Brand Identity",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=300&h=200&fit=crop",
      className: "w-40 h-36 rotate-6 top-64 right-36",
    },
  ];

  return (
    <div className="relative w-full h-96">
      {designCards.map((card, index) => (
        <div
          key={card.id}
          className={`absolute bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden transition-all duration-1000 hover:scale-105 hover:shadow-blue-500/20 ${card.className}`}
          style={{
            animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-2 left-2 right-2">
            <p className="text-white text-xs font-medium truncate">{card.title}</p>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rotation)); }
          50% { transform: translateY(-10px) rotate(var(--rotation)); }
        }
      `}</style>
    </div>
  );
};

export default DesignShowcase;