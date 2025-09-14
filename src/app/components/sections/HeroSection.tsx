import { SectionProps } from "@/app/types/navigation";

export const HeroSection: React.FC<SectionProps> = ({ setActiveSection }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-900 via-slate-800 to-brand-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(134,150,182,0.1),transparent_70%)]"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-brand-200 to-brand-300 bg-clip-text text-transparent">
            The Momo House
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-brand-200 max-w-3xl mx-auto leading-relaxed">
            Where ancient Tibetan traditions meet modern culinary artistry
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setActiveSection("history")}
              className="bg-brand-500 hover:bg-brand-600 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Discover Our Heritage
            </button>
            <button
              onClick={() => setActiveSection("menu")}
              className="bg-transparent border-2 border-brand-300 hover:bg-brand-300 hover:text-brand-900 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
