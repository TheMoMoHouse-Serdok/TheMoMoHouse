import { MapPin, Clock, Phone, Mail } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-28 bg-gradient-to-br from-brand-900 via-slate-800 to-brand-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">Find Us</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Visit our cozy restaurants for an authentic Tibetan dining
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Parkdale Location */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Parkdale</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-white mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-white mb-1">Address</h4>
                  <p className="text-white/90">
                    1416 Queen St W
                    <br />
                    Parkdale, Toronto, CA
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-white mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-white/90">(416) 588-6522</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-white mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-white/90">info@themomohouse.com</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6 mt-8">
              <button className="w-full bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/30">
                Get Directions
              </button>
            </div>
          </div>

          {/* Yorkville Location */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Yorkville</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-white mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-white mb-1">Address</h4>
                  <p className="text-white/90">
                    1240 Bay St. Unit 107
                    <br />
                    Yorkville, Toronto, CA
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-white mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-white/90">(416) 964-6060</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-white mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-white/90">info@themomohouse.com</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6 mt-8">
              <button className="w-full bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/30">
                Get Directions
              </button>
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Free parking available at both locations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
