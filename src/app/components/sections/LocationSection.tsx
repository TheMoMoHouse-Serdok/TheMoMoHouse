import { MapPin, Clock } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-brand-700 mb-6">Find Us</h2>
          <p className="text-xl text-brand-600 max-w-3xl mx-auto">
            Visit our cozy restaurant for an authentic Tibetan dining experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-brand-100">
              <h3 className="text-2xl font-bold text-brand-700 mb-6">
                Restaurant Location
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin
                    className="text-brand-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-brand-700">Address</h4>
                    <p className="text-brand-600">
                      1422 Queen St W
                      <br />
                      Parkdale, Toronto, CA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock
                    className="text-brand-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-brand-700">
                      Business Hours
                    </h4>
                    <div className="text-brand-600 space-y-1">
                      <p>Mon-Thu: 11:00 AM - 9:00 PM</p>
                      <p>Fri-Sat: 11:00 AM - 10:00 PM</p>
                      <p>Sunday: 12:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10">
                <MapPin size={64} className="text-brand-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-700 mb-2">
                  Interactive Map
                </h3>
                <p className="text-brand-600 mb-4">
                  Map integration coming soon!
                </p>
                <button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
