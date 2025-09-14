"use client";
import { useState } from "react";
import { SectionId } from "./types/navigation";
import { HeroSection } from "./components/sections/HeroSection";
import { HistorySection } from "./components/sections/HistorySection";
import { MenuSection } from "./components/sections/MenuSection";
import { LocationSection } from "./components/sections/LocationSection";
import { OrderOnlineSection } from "./components/sections/OrderOnlineSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Script from "next/script";

const MomoHouseApp: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("home"); // Start with history!

  const renderSection = () => {
    switch (activeSection) {
      case "history":
        return <HistorySection />;
      case "home":
        return <HeroSection setActiveSection={setActiveSection} />;
      case "menu":
        return <MenuSection />;
      case "location":
        return <LocationSection />;
      case "order":
        return <OrderOnlineSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HistorySection />; // Default to history
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <main>{renderSection()}</main>

        <Footer />

        {/* Custom Tailwind Configuration for Brand Colors */}
        <style jsx global>{`
          :root {
            --brand-50: #f8f9fb;
            --brand-100: #f1f3f7;
            --brand-200: #e3e7ef;
            --brand-300: #d1d9e3;
            --brand-400: #8696b6;
            --brand-500: #6b7c9d;
            --brand-600: #5a6b87;
            --brand-700: #4a5a70;
            --brand-800: #3d4a5a;
            --brand-900: #323c47;
          }

          .text-brand-50 {
            color: var(--brand-50);
          }
          .text-brand-100 {
            color: var(--brand-100);
          }
          .text-brand-200 {
            color: var(--brand-200);
          }
          .text-brand-300 {
            color: var(--brand-300);
          }
          .text-brand-400 {
            color: var(--brand-400);
          }
          .text-brand-500 {
            color: var(--brand-500);
          }
          .text-brand-600 {
            color: var(--brand-600);
          }
          .text-brand-700 {
            color: var(--brand-700);
          }
          .text-brand-800 {
            color: var(--brand-800);
          }
          .text-brand-900 {
            color: var(--brand-900);
          }
          .text-brand-white {
            color: #ffffff;
          }
          .bg-brand-50 {
            background-color: var(--brand-50);
          }
          .bg-brand-100 {
            background-color: var(--brand-100);
          }
          .bg-brand-200 {
            background-color: var(--brand-200);
          }
          .bg-brand-300 {
            background-color: var(--brand-300);
          }
          .bg-brand-400 {
            background-color: var(--brand-400);
          }
          .bg-brand-500 {
            background-color: var(--brand-500);
          }
          .bg-brand-600 {
            background-color: var(--brand-600);
          }
          .bg-brand-700 {
            background-color: var(--brand-700);
          }
          .bg-brand-800 {
            background-color: var(--brand-800);
          }
          .bg-brand-900 {
            background-color: var(--brand-900);
          }

          .border-brand-50 {
            border-color: var(--brand-50);
          }
          .border-brand-100 {
            border-color: var(--brand-100);
          }
          .border-brand-200 {
            border-color: var(--brand-200);
          }
          .border-brand-300 {
            border-color: var(--brand-300);
          }
          .border-brand-400 {
            border-color: var(--brand-400);
          }
          .border-brand-500 {
            border-color: var(--brand-500);
          }
          .border-brand-600 {
            border-color: var(--brand-600);
          }
          .border-brand-700 {
            border-color: var(--brand-700);
          }
          .border-brand-800 {
            border-color: var(--brand-800);
          }
          .border-brand-900 {
            border-color: var(--brand-900);
          }

          .from-brand-50 {
            --tw-gradient-from: var(--brand-50);
          }
          .from-brand-100 {
            --tw-gradient-from: var(--brand-100);
          }
          .from-brand-200 {
            --tw-gradient-from: var(--brand-200);
          }
          .from-brand-300 {
            --tw-gradient-from: var(--brand-300);
          }
          .from-brand-400 {
            --tw-gradient-from: var(--brand-400);
          }
          .from-brand-500 {
            --tw-gradient-from: var(--brand-500);
          }
          .from-brand-600 {
            --tw-gradient-from: var(--brand-600);
          }
          .from-brand-700 {
            --tw-gradient-from: var(--brand-700);
          }
          .from-brand-800 {
            --tw-gradient-from: var(--brand-800);
          }
          .from-brand-900 {
            --tw-gradient-from: var(--brand-900);
          }

          .to-brand-50 {
            --tw-gradient-to: var(--brand-50);
          }
          .to-brand-100 {
            --tw-gradient-to: var(--brand-100);
          }
          .to-brand-200 {
            --tw-gradient-to: var(--brand-200);
          }
          .to-brand-300 {
            --tw-gradient-to: var(--brand-300);
          }
          .to-brand-400 {
            --tw-gradient-to: var(--brand-400);
          }
          .to-brand-500 {
            --tw-gradient-to: var(--brand-500);
          }
          .to-brand-600 {
            --tw-gradient-to: var(--brand-600);
          }
          .to-brand-700 {
            --tw-gradient-to: var(--brand-700);
          }
          .to-brand-800 {
            --tw-gradient-to: var(--brand-800);
          }
          .to-brand-900 {
            --tw-gradient-to: var(--brand-900);
          }

          .via-brand-50 {
            --tw-gradient-via: var(--brand-50);
          }
          .via-brand-100 {
            --tw-gradient-via: var(--brand-100);
          }
          .via-brand-200 {
            --tw-gradient-via: var(--brand-200);
          }
          .via-brand-300 {
            --tw-gradient-via: var(--brand-300);
          }
          .via-brand-400 {
            --tw-gradient-via: var(--brand-400);
          }
          .via-brand-500 {
            --tw-gradient-via: var(--brand-500);
          }
          .via-brand-600 {
            --tw-gradient-via: var(--brand-600);
          }
          .via-brand-700 {
            --tw-gradient-via: var(--brand-700);
          }
          .via-brand-800 {
            --tw-gradient-via: var(--brand-800);
          }
          .via-brand-900 {
            --tw-gradient-via: var(--brand-900);
          }

          .shadow-brand-100 {
            --tw-shadow-color: var(--brand-100);
          }
          .shadow-brand-200 {
            --tw-shadow-color: var(--brand-200);
          }
          .shadow-brand-300 {
            --tw-shadow-color: var(--brand-300);
          }
          .shadow-brand-400 {
            --tw-shadow-color: var(--brand-400);
          }
          .shadow-brand-500 {
            --tw-shadow-color: var(--brand-500);
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Custom hover effects */
          .hover-lift {
            transition: all 0.3s ease;
          }

          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px -12px rgba(134, 150, 182, 0.25);
          }
        `}</style>
      </div>
    </>
  );
};

export default MomoHouseApp;
