export const HistorySection: React.FC = () => {
  const milestones = [
    {
      year: "Ancient Times",
      event:
        "Momos originated in Tibet, created by Tibetan monks as a nutritious and portable meal.",
    },
    {
      year: "14th Century",
      event:
        "Spread throughout the Himalayan region, becoming a staple food in Nepal and Bhutan.",
    },
    {
      year: "1960s",
      event:
        "Tibetan refugees brought authentic momo recipes to India and other parts of the world.",
    },
    {
      year: "2020",
      event:
        "The MoMo House was founded to preserve and share authentic Tibetan momo traditions.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-900 via-slate-800 to-brand-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Story of Momo
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover the rich history and cultural significance of Tibet&apos;s
            most beloved dish
          </p>
        </div>

        <div className="max-w-4xl mx-auto ">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-300"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 group"
              >
                <div className="absolute left-6 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                <div className="ml-16 bg-brand-500 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {milestone.year}
                  </h3>
                  <p className="text-brand-800">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🏔️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Himalayan Heritage
            </h3>
            <p className="text-gray-600">
              Born in the high mountains of Tibet, momos represent the soul of
              Himalayan cuisine.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">👨‍🍳</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Artisan Crafted
            </h3>
            <p className="text-gray-600">
              Each momo is hand-folded with techniques passed down through
              generations.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Pure Ingredients
            </h3>
            <p className="text-gray-600">
              Made with fresh, natural ingredients and traditional Tibetan
              spices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
