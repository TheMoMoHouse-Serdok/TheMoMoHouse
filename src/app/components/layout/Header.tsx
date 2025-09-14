"use client";

import { NavigationProps, SectionId } from "@/app/types/navigation";
import {
  MapPin,
  Phone,
  ShoppingBag,
  Utensils,
  History,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Header: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems: Array<{
    id: SectionId;
    label: string;
    icon: typeof Utensils;
  }> = [
    { id: "history", label: "Our Story", icon: History },
    { id: "home", label: "Home", icon: Utensils },
    { id: "menu", label: "Menu", icon: Utensils },
    { id: "location", label: "Location", icon: MapPin },
    { id: "order", label: "Order Online", icon: ShoppingBag },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  const handleNavClick = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-brand-200"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-16 h-16 max-sm:w-20 max-sm:h-14 bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span
                    className={`${
                      isScrolled ? "text-brand-600" : "text-white"
                    } font-bold text-lg sm:text-xl transform -rotate-3`}
                  >
                    མོག་མོག་
                  </span>
                </div>
              </div>
              <div>
                <h1
                  className={`text-lg sm:text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text ${
                    isScrolled ? "text-brand-600" : "text-white"
                  }`}
                >
                  The MoMo House
                </h1>
                <p className="text-xs sm:text-sm text-brand-500 font-medium hidden xs:block">
                  Heritage • Tradition • Authenticity
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`group flex items-center space-x-2 px-4 xl:px-6 py-3 rounded-2xl transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-brand-500 text-white shadow-lg shadow-brand-300/50 transform scale-105"
                        : "text-brand-600 hover:text-brand-700 hover:bg-brand-50 hover:shadow-md"
                    }`}
                  >
                    <Icon size={18} className="group-hover:animate-bounce" />
                    <span className="font-medium text-sm xl:text-base">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-600 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-brand-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">མོག་</span>
              </div>
              <span className="font-bold text-brand-700">The MoMo House</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-brand-50 text-brand-600"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <div className="flex-1 py-6">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center space-x-4 px-6 py-4 text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-brand-500 text-white border-r-4 border-brand-600"
                      : "text-brand-600 hover:bg-brand-50 hover:text-brand-700"
                  }`}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animation: isMobileMenuOpen
                      ? `slideIn 0.3s ease-out forwards`
                      : "none",
                  }}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-brand-100 bg-brand-25">
            <p className="text-xs text-brand-500 text-center">
              Heritage • Tradition • Authenticity
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};
