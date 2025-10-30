import { ChevronRight, Star } from 'lucide-react';

const categories = [
  {
    name: 'Indian',
    items: [
      { id: 1, name: 'Butter Chicken', price: 299, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop', rating: 4.5 },
      { id: 2, name: 'Biryani', price: 249, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&h=200&fit=crop', rating: 4.7 },
      { id: 3, name: 'Paneer Tikka', price: 199, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop', rating: 4.3 },
      { id: 4, name: 'Dal Makhani', price: 179, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop', rating: 4.6 }
    ]
  },
  {
    name: 'Chinese',
    items: [
      { id: 5, name: 'Hakka Noodles', price: 189, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=200&fit=crop', rating: 4.4 },
      { id: 6, name: 'Manchurian', price: 219, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop', rating: 4.5 },
      { id: 7, name: 'Fried Rice', price: 169, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop', rating: 4.2 },
      { id: 8, name: 'Spring Rolls', price: 149, image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=300&h=200&fit=crop', rating: 4.3 }
    ]
  },
  {
    name: 'Italian',
    items: [
      { id: 9, name: 'Margherita Pizza', price: 349, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop', rating: 4.8 },
      { id: 10, name: 'Pasta Alfredo', price: 279, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=200&fit=crop', rating: 4.6 },
      { id: 11, name: 'Lasagna', price: 329, image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&h=200&fit=crop', rating: 4.7 },
      { id: 12, name: 'Garlic Bread', price: 129, image: 'https://images.unsplash.com/photo-1573140401552-3fab0b24f2b6?w=300&h=200&fit=crop', rating: 4.4 }
    ]
  }
];

const CategorySection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Popular by Category</h2>
      </div>

      {categories.map((category, catIndex) => (
        <div key={catIndex} className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">{category.name}</h3>
            <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center space-x-1">
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden cursor-pointer"
              >
                <div className="relative h-48">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-lg flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-orange-500">₹{item.price}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg text-sm hover:shadow-lg transition">
                      Add
                    </button>
                  </div>
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