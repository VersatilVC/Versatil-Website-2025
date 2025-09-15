import React from "react";

const MagicalDesignShowcase = () => {
  const designCards = [
    {
      id: 1,
      title: "Brand Pack",
      image: "https://images.unsplash.com/photo-1634224088541-44ea8d7a9a87?w=400&h=250&fit=crop",
      className: "w-48 h-36 rotate-12 top-0 right-16",
      delay: 0,
    },
    {
      id: 2,
      title: "Web Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
      className: "w-52 h-40 -rotate-6 top-12 right-0",
      delay: 0.2,
    },
    {
      id: 3,
      title: "Logo Design",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop",
      className: "w-44 h-32 rotate-3 top-24 right-28",
      delay: 0.4,
    },
    {
      id: 4,
      title: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      className: "w-56 h-36 -rotate-12 top-44 right-4",
      delay: 0.6,
    },
    {
      id: 5,
      title: "Brand Identity",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
      className: "w-48 h-40 rotate-6 top-60 right-32",
      delay: 0.8,
    },
    {
      id: 6,
      title: "UI/UX",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      className: "w-40 h-28 -rotate-3 top-16 right-48",
      delay: 1.0,
    },
    {
      id: 7,
      title: "Packaging",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      className: "w-44 h-36 rotate-8 top-76 right-20",
      delay: 1.2,
    },
    {
      id: 8,
      title: "Digital Art",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=250&fit=crop",
      className: "w-36 h-32 -rotate-9 top-8 right-60",
      delay: 1.4,
    },
  ];

  return (
    <div className="relative w-full h-[500px]">
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-60 w-20 h-20 bg-cyan-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {designCards.map((card, index) => (
        <div
          key={card.id}
          className={`absolute bg-gray-900/70 rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden transition-all duration-1000 hover:scale-110 hover:shadow-blue-500/30 hover:border-blue-500/50 backdrop-blur-sm group ${card.className}`}
          style={{
            animation: `magicalFloat ${3 + index * 0.3}s ease-in-out infinite, fadeInScale 0.8s ease-out forwards`,
            animationDelay: `${card.delay}s, ${card.delay}s`,
            transform: `translateY(20px) scale(0)`,
          }}
        >
          {/* Card Content */}
          <div className="relative h-full">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
            />
            
            {/* Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-transparent to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300" />
            
            {/* Card Info */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="flex items-center justify-between">
                <p className="text-white text-sm font-semibold truncate group-hover:text-blue-300 transition-colors">
                  {card.title}
                </p>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
          </div>
        </div>
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${10 + Math.random() * 80}%`,
              animation: `floatParticle ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes magicalFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(var(--rotation, 0deg)); 
          }
          50% { 
            transform: translateY(-15px) rotate(var(--rotation, 0deg)); 
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-10px) translateX(5px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default MagicalDesignShowcase;