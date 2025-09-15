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
            {/* VERSATIL Geometric Logo */}
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 transform rotate-45 rounded-sm transition-transform duration-300 group-hover:rotate-90" />
              <div className="absolute top-1 left-1 w-2 h-2 bg-background rounded-xs" />
              <div className="absolute bottom-1 right-1 w-2 h-2 bg-background rounded-xs" />
            </div>
            <span className="text-foreground font-bold text-xl tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
              VERSATIL
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/platform" 
              className={`transition-colors relative group ${
                isActive('/platform') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Platform
              {isActive('/platform') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              )}
            </Link>
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
              to="/pricing" 
              className={`transition-colors relative group ${
                isActive('/pricing') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Pricing
              {isActive('/pricing') && (
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
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 relative overflow-hidden group">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
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