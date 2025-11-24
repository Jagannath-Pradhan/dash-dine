import { Star } from 'lucide-react';

const categories = [
  {
    name: 'Indian',
    items: [
      { id: 1, name: 'Masala Dosa', price: 149, image: './south-indian/masala-dosa.webp', rating: 4.7 },
      { id: 2, name: 'Paneer Butter Masala', price: 229, image: './north-indian/paneer-butter-masala.webp', rating: 4.8 },
      { id: 3, name: 'Dal Tadka', price: 179, image: './north-indian/dal-tadka.webp', rating: 4.5 },
      { id: 4, name: 'Pani Puri', price: 69, image: './snacks-chaats/pani-puri.jpg', rating: 4.9 }
    ]
  },
  {
    name: 'Chinese',
    items: [
      { id: 5, name: 'Hakka Noodles', price: 169, image: './chinese/hakka-noodles.webp', rating: 3.5 },
      { id: 6, name: 'Manchurian', price: 199, image: './starters/veg-manchurian.webp', rating: 4.6 },
      { id: 7, name: 'Spring Rolls', price: 159, image: './chinese/crispy-spring-rolls.webp', rating: 4.3 },
      { id: 8, name: 'Schezwan Fried Rice', price: 179, image: './chinese/schezwan-fried-rice.webp', rating: 4.3 }
    ]
  },
  {
    name: 'Beverages & Desserts',
    items: [
      { id: 9, name: 'Buttermilk (Chaas)', price: 69, image: './beverages/buttermilk.webp', rating: 4.7 },
      { id: 10, name: 'Gulab Jamun', price: 99, image: './desserts/gulab-jamuns.jpg', rating: 4.8 },
      { id: 11, name: 'Mango Lassi', price: 99, image: './beverages/mango-lassi.jpg', rating: 4.8 },
      { id: 12, name: 'Ice Cream Sundae', price: 179, image: './desserts/ice-cream-sundae.jpg', rating: 4.7 }
    ]
  }
];

const CategorySection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Popular by Category 🥗</h2>
      </div>

      {categories.map((category, catIndex) => (
        <div key={catIndex} className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">{category.name}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-lg flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
                  <span className="text-xl font-bold text-orange-500">₹{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;