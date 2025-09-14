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
          name: "Chicken MoMo",
          price: "$12.99",
          description: "Steamed dumplings filled with spiced chicken and herbs",
          image: "🥟",
          popular: true,
        },
        {
          name: "Vegetable MoMo",
          price: "$10.99",
          description: "Fresh vegetables and tofu wrapped in delicate dough",
          image: "🥬",
        },
        {
          name: "Buff MoMo",
          price: "$13.99",
          description: "Traditional buffalo meat momos with Tibetan spices",
          image: "🥩",
        },
        {
          name: "Cheese MoMo",
          price: "$11.99",
          description: "Creamy cheese and herb filling for vegetarian delight",
          image: "🧀",
        },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen py-28 bg-gradient-to-br from-brand-900 via-slate-800 to-brand-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-brand-white mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-brand-white max-w-3xl mx-auto">
            Authentic Tibetan flavors crafted with traditional recipes
          </p>
        </div>

        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12 ">
            <h3 className="text-3xl font-bold text-center text-brand-white mb-8">
              {category.name}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15"
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
                        <h4 className="text-xl font-bold text-brand-white">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-brand-white mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-brand-600">
                          {item.price}
                        </span>
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
