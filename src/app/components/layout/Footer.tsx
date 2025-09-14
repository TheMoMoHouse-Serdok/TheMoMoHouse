export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <span className="text-white font-bold text-lg">མོག་མོག་</span>

                <h3 className="text-2xl font-bold">The MoMo House</h3>
                <p className="text-brand-300">Authentic Tibetan Cuisine</p>
              </div>
            </div>
            <p className="text-brand-200 max-w-md">
              Bringing you the authentic taste of Tibet through traditional
              momos and warm hospitality since 2020.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-brand-200">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-300 transition-colors duration-300"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-300 transition-colors duration-300"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-300 transition-colors duration-300"
                >
                  Order Online
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-300 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-brand-200">
              <li>
                <a href="tel:+14169646060">(416) 964-6060</a>
              </li>

              <li>info@themomohouse.com</li>
              <li>
                1422 Queen St W
                <br />
                Parkdale, Toronto, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-brand-300">
          <p>
            &copy; 2025 The Momo House. All rights reserved. Made with ❤️ and
            authentic Tibetan recipes.
          </p>
        </div>
      </div>
    </footer>
  );
};
