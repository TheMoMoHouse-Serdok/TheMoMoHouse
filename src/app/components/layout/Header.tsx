"use client";

import { NavigationProps, SectionId } from "@/app/types/navigation";
import { MapPin, Phone, ShoppingBag, Utensils, History } from "lucide-react";
import { useEffect, useState } from "react";

export const Header: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-brand-200"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <span className="text-white font-bold text-xl transform -rotate-3">
                  མོ་མོ་
                </span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-300 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-white ">
                The Momo House
              </h1>
              <p className="text-sm text-brand-500 font-medium">
                Heritage • Tradition • Authenticity
              </p>
            </div>
          </div>

          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`group flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-brand-500 text-white shadow-lg shadow-brand-300/50 transform scale-105"
                      : "text-brand-600 hover:text-brand-700 hover:bg-brand-50 hover:shadow-md"
                  }`}
                >
                  <Icon size={18} className="group-hover:animate-bounce" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};
