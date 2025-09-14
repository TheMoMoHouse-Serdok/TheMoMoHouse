import { Phone, Mail } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">Contact Us</h2>
          <p className="text-xl text-brand-200 max-w-3xl mx-auto">
            Have questions? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="bg-white/20 p-2 rounded-full" size={32} />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-white/90">(555) 123-MOMO</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="bg-white/20 p-2 rounded-full" size={32} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-white/90">info@themomohouse.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Weekly Schedule</h3>
              <div className="space-y-3">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-slate-700 rounded-xl"
                  >
                    <span className="font-semibold">{day}</span>
                    <span className="text-brand-200">
                      {index === 5 || index === 6
                        ? "11:00 AM - 10:00 PM"
                        : "11:00 AM - 9:00 PM"}
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
