"use client";
import GlfButtons from "../GlfScript";
import GlfYorkVilleButtons from "../GlfScriptYorkVille";

export const OrderOnlineSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-600 to-slate-700">
      <div className="container mx-auto px-4">
        <div className="text-center text-white ">
          <h2 className="text-5xl font-black mb-6">Order Online</h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto opacity-90">
            Enjoy our delicious momos from the comfort of your home
          </p>
          <p className="text-lg opacity-75">
            Choose your nearest location to place your order
          </p>
        </div>

        <div className="text-center text-white ">
          <h2 className="text-4xl font-black my-5"> The MoMo House</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Location 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Parkdale</h3>
              <div className="space-y-1 opacity-90">
                <p className="text-white">1416 Queen St W</p>
                <p className="text-sm opacity-75 text-white">(416) 588-6522</p>
                <p className="text-white">info@themomohouse.com</p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <GlfButtons />
            </div>
          </div>

          {/* Location 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Yorkville</h3>
              <div className="space-y-1 opacity-90">
                <p className="text-white"> 1240 Bay St. Unit 107</p>
                <p className="text-sm opacity-75 text-white">(416) 964-6060</p>
                <p className="text-white">info@themomohouse.com</p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <GlfYorkVilleButtons />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 text-white/75 text-sm">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span>All major cards accepted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
