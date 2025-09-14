export const MenuSection: React.FC = () => {
  interface MenuItem {
    name: string;
    price: string;
    description: string;
    image: string;
    popular?: boolean;
  }

  interface MenuCategory {
    name: string;
    items: MenuItem[];
  }

  const menuCategories: MenuCategory[] = [
    {
      name: "Traditional Momos",
      items: [
        {
          name: "Chicken Momo",
          price: "$12.99",
          description: "Steamed dumplings filled with spiced chicken and herbs",
          image: "🥟",
          popular: true,
        },
        {
          name: "Vegetable Momo",
          price: "$10.99",
          description: "Fresh vegetables and tofu wrapped in delicate dough",
          image: "🥬",
        },
        {
          name: "Buff Momo",
          price: "$13.99",
          description: "Traditional buffalo meat momos with Tibetan spices",
          image: "🥩",
        },
        {
          name: "Cheese Momo",
          price: "$11.99",
          description: "Creamy cheese and herb filling for vegetarian delight",
          image: "🧀",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-brand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-brand-700 mb-6">Our Menu</h2>
          <p className="text-xl text-brand-600 max-w-3xl mx-auto">
            Authentic Tibetan flavors crafted with traditional recipes
          </p>
        </div>

        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-3xl font-bold text-center text-brand-600 mb-8">
              {category.name}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-brand-100"
                >
                  {item.popular && (
                    <div className="absolute -top-2 -right-2 bg-brand-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Popular
                    </div>
                  )}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-3xl mr-3">{item.image}</span>
                        <h4 className="text-xl font-bold text-brand-700">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-brand-600 mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-brand-600">
                          {item.price}
                        </span>
                        <button className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform group-hover:scale-105">
                          Add to Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
