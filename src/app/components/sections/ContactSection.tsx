import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const ContactSection: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<"branch1" | "branch2">(
    "branch1"
  );

  const branchData = {
    branch1: {
      name: "Parkdale Branch",
      address: "1416 Queen St W, Toronto, ON M6K 1L1",
      phone: "416) 588-6522",
      email: "info@themomohouse.com",
      schedule: {
        weekday: "12:00 AM - 09:45 PM",
        weekend: "12:00 AM - 09:45 PM",
      },
    },
    branch2: {
      name: "Yorkville Branch",
      address: "1240 Bay St. Unit 107",
      phone: "416) 964-6060",
      email: "info@themomohouse.com",
      schedule: {
        weekday: "11:30 AM - 09:00 PM",
        weekend: "11:30 AM - 09:00 PM",
      },
    },
  };

  const currentBranch = branchData[activeBranch];

  return (
    <section className="relative min-h-screen py-28 bg-gradient-to-br from-brand-900 via-slate-800 to-brand-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-brand-200 max-w-3xl mx-auto">
            Have questions? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-600/50 shadow-2xl">
            <div className="flex relative">
              <button
                onClick={() => setActiveBranch("branch1")}
                className={`px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-500 ease-out relative z-10 transform ${
                  activeBranch === "branch1"
                    ? "text-white scale-105"
                    : "text-slate-400 hover:text-slate-200 hover:scale-102"
                }`}
              >
                Downtown
              </button>
              <button
                onClick={() => setActiveBranch("branch2")}
                className={`px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-500 ease-out relative z-10 transform ${
                  activeBranch === "branch2"
                    ? "text-white scale-105"
                    : "text-slate-400 hover:text-slate-200 hover:scale-102"
                }`}
              >
                Yorkville
              </button>

              {/* Sliding indicator with enhanced animations */}
              <div
                className={`absolute top-1.5 bottom-1.5 bg-gradient-to-r from-brand-500 via-brand-400 to-brand-500 rounded-xl shadow-xl border border-brand-400/30 transition-all duration-700 ease-out transform ${
                  activeBranch === "branch1"
                    ? "left-1.5 translate-x-0"
                    : "left-1.5 translate-x-full"
                }`}
                style={{ width: "calc(50% - 6px)" }}
              >
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-300/20 to-brand-200/20 rounded-xl" />
                {/* Animated shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {currentBranch.name}
                </h3>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin
                    className="bg-white/20 p-2 rounded-full mt-1 flex-shrink-0"
                    size={32}
                  />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-white/90 leading-relaxed">
                      {currentBranch.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone
                    className="bg-white/20 p-2 rounded-full flex-shrink-0"
                    size={32}
                  />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-white/90">{currentBranch.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail
                    className="bg-white/20 p-2 rounded-full flex-shrink-0"
                    size={32}
                  />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-white/90">{currentBranch.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="order-1 lg:order-2">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="text-brand-400" size={24} />
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Operating Hours
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  { day: "Monday", type: "weekday" },
                  { day: "Tuesday", type: "weekday" },
                  { day: "Wednesday", type: "weekday" },
                  { day: "Thursday", type: "weekday" },
                  { day: "Friday", type: "weekday" },
                  { day: "Saturday", type: "weekend" },
                  { day: "Sunday", type: "weekend" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-slate-700/60 rounded-xl border border-slate-600/30 hover:bg-slate-700/80 transition-colors duration-200"
                  >
                    <span className="font-semibold text-white">{item.day}</span>
                    <span className="text-brand-200 font-medium">
                      {item.type === "weekend"
                        ? currentBranch.schedule.weekend
                        : currentBranch.schedule.weekday}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
