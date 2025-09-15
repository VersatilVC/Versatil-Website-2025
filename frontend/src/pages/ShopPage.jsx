import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "../components/ui/button";
import { ShoppingCart, Star, Clock, Users } from "lucide-react";

const ShopPage = () => {
  const { theme } = useTheme();

  const products = [
    {
      id: 1,
      name: "Brand Identity Pack™",
      price: 2999,
      originalPrice: 3999,
      rating: 4.9,
      reviews: 127,
      deliveryTime: "3-5 days",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "Complete brand foundation with logo, colors, typography, and brand guidelines.",
      features: ["Logo design", "Color palette", "Typography guide", "Brand guidelines", "Business card design"],
      bestseller: true
    },
    {
      id: 2,
      name: "Pitch Power Pack™",
      price: 4999,
      originalPrice: 6999,
      rating: 4.8,
      reviews: 89,
      deliveryTime: "5-7 days",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      description: "Investor-ready pitch deck that tells your story and secures funding.",
      features: ["10-15 slide deck", "Compelling narrative", "Data visualization", "Investor-focused design", "Multiple formats"],
      bestseller: false
    },
    {
      id: 3,
      name: "Super Web Pack™",
      price: 7999,
      originalPrice: 10999,
      rating: 4.9,
      reviews: 156,
      deliveryTime: "7-10 days",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
      description: "High-converting landing page with modern design and optimization.",
      features: ["Custom website design", "Mobile responsive", "SEO optimized", "Lead capture forms", "CMS integration"],
      bestseller: true
    },
    {
      id: 4,
      name: "Social Content Pack™",
      price: 1999,
      originalPrice: 2999,
      rating: 4.7,
      reviews: 203,
      deliveryTime: "2-3 days",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
      description: "30-day social media content with templates and brand consistency.",
      features: ["30 social posts", "Instagram templates", "LinkedIn content", "Brand consistency", "Multiple formats"],
      bestseller: false
    },
    {
      id: 5,
      name: "Ad Booster Pack™",
      price: 3999,
      originalPrice: 5499,
      rating: 4.8,
      reviews: 94,
      deliveryTime: "3-5 days",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      description: "High-performance ad creatives that drive conversions and ROI.",
      features: ["Ad creative suite", "A/B test variants", "Platform optimization", "Copy variations", "Performance focused"],
      bestseller: false
    },
    {
      id: 6,
      name: "Video Content Pack™",
      price: 5999,
      originalPrice: 7999,
      rating: 4.9,
      reviews: 67,
      deliveryTime: "7-10 days", 
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      description: "Professional video content for marketing and brand storytelling.",
      features: ["Promotional videos", "Social media clips", "Brand storytelling", "Motion graphics", "Multiple formats"],
      bestseller: false
    }
  ];

  const categories = [
    { name: "All Products", count: products.length, active: true },
    { name: "Brand Identity", count: 2, active: false },
    { name: "Marketing", count: 3, active: false },
    { name: "Web Design", count: 1, active: false }
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
            Custom Packs™{" "}
            <span className={`${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            }`}>
              Shop
            </span>
          </h1>
          
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto mb-12 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready-to-deploy creative solutions built for startups. Choose your pack and launch faster.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`group rounded-2xl overflow-hidden ${
                  theme === 'dark' 
                    ? 'bg-gray-900/50 border border-gray-800 hover:border-blue-500/50' 
                    : 'bg-white border border-gray-200 hover:border-blue-300 shadow-lg'
                } transition-all duration-300 hover:shadow-2xl hover:scale-105 relative`}
              >
                {product.bestseller && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      BESTSELLER
                    </span>
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className={`text-xs px-2 py-1 rounded-full ${
                            theme === 'dark' 
                              ? 'bg-gray-800 text-gray-300' 
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 3 && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          theme === 'dark' 
                            ? 'bg-gray-800 text-gray-400' 
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          +{product.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Delivery Time */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-500">{product.deliveryTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {product.reviews} customers
                      </span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold">${product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className={`ml-2 text-sm line-through ${
                          theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                        Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </span>
                    )}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className={`max-w-4xl mx-auto px-6 text-center p-12 rounded-3xl ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-gray-800' 
            : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need something custom?
          </h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Can't find what you're looking for? Let's create a custom solution tailored to your exact needs.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg">
            Request Custom Pack
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopPage;