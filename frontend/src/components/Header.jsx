import React from "react";
import { Button } from "./ui/button";
import { Globe, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* VERSATIL Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Official VERSATIL Logo */}
            <div className="relative">
              <img
                src={theme === 'dark' 
                  ? 'https://customer-assets.emergentagent.com/job_scene-capture/artifacts/krl4sg5i_horizontal_gradient%2Bwhite.png'
                  : 'https://customer-assets.emergentagent.com/job_scene-capture/artifacts/1u82lu4a_horizontal_gradient%2Bblack.png'
                }
                alt="VERSATIL"
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/cases" 
              className={`transition-colors relative group ${
                isActive('/cases') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Success Stories
              {isActive('/cases') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              )}
            </Link>
            <Link 
              to="/shop" 
              className={`transition-colors relative group ${
                isActive('/shop') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Demo
              {isActive('/shop') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              )}
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Log In
            </button>
            <a 
              href="https://app.versatil.vc/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 relative overflow-hidden group rounded-md inline-flex items-center justify-center font-medium transition-colors"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors relative overflow-hidden group"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-foreground group-hover:rotate-180 transition-transform duration-500" />
              ) : (
                <Moon className="w-4 h-4 text-foreground group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
            
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span className="text-xs">EN</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;