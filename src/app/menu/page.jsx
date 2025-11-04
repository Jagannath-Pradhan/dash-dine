// app/menu/page.jsx
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import CategoryNav from './components/CategoryNav';
import MenuGrid from './components/MenuGrid';
import SearchAndFilters from './components/SearchAndFilters';

// Mock data - Replace with actual API call
async function getMenuData() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    categories: [
      { id: '1', name: 'Pizza', slug: 'pizza', count: 12 },
      { id: '2', name: 'Starters', slug: 'starters', count: 8 },
      { id: '3', name: 'South Indian', slug: 'south-indian', count: 15 },
      { id: '4', name: 'North Indian', slug: 'north-indian', count: 10 },
      { id: '5', name: 'Chinese', slug: 'chinese', count: 9 },
      { id: '6', name: 'Desserts', slug: 'desserts', count: 7 },
      { id: '7', name: 'Beverages', slug: 'beverages', count: 6 },
    ],
    menuItems: [
      // Pizza
      { id: '1', name: 'Margherita Pizza', category: 'pizza', price: 299, rating: 4.5, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop', description: 'Classic cheese pizza with tomato sauce', isVeg: true },
      { id: '2', name: 'Pepperoni Pizza', category: 'pizza', price: 399, rating: 4.7, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop', description: 'Loaded with spicy pepperoni', isVeg: false },
      { id: '3', name: 'Veggie Supreme', category: 'pizza', price: 349, rating: 4.3, image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400&h=300&fit=crop', description: 'Fresh vegetables with cheese', isVeg: true },
      
      // Starters
      { id: '4', name: 'Paneer Tikka', category: 'starters', price: 249, rating: 4.6, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop', description: 'Grilled cottage cheese with spices', isVeg: true },
      { id: '5', name: 'Chicken Wings', category: 'starters', price: 299, rating: 4.8, image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop', description: 'Spicy buffalo wings', isVeg: false },
      { id: '6', name: 'Spring Rolls', category: 'starters', price: 199, rating: 4.2, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop', description: 'Crispy vegetable spring rolls', isVeg: true },
      
      // South Indian
      { id: '7', name: 'Masala Dosa', category: 'south-indian', price: 149, rating: 4.7, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop', description: 'Crispy dosa with potato filling', isVeg: true },
      { id: '8', name: 'Idli Sambar', category: 'south-indian', price: 99, rating: 4.5, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop', description: 'Steamed rice cakes with sambar', isVeg: true },
      { id: '9', name: 'Uttapam', category: 'south-indian', price: 129, rating: 4.4, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop', description: 'Thick rice pancake with toppings', isVeg: true },
      
      // North Indian
      { id: '10', name: 'Butter Chicken', category: 'north-indian', price: 349, rating: 4.9, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop', description: 'Creamy tomato-based chicken curry', isVeg: false },
      { id: '11', name: 'Paneer Butter Masala', category: 'north-indian', price: 299, rating: 4.6, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop', description: 'Rich cottage cheese curry', isVeg: true },
      { id: '12', name: 'Dal Makhani', category: 'north-indian', price: 249, rating: 4.5, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop', description: 'Creamy black lentil curry', isVeg: true },
      
      // Chinese
      { id: '13', name: 'Hakka Noodles', category: 'chinese', price: 199, rating: 4.4, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop', description: 'Stir-fried noodles with vegetables', isVeg: true },
      { id: '14', name: 'Manchurian', category: 'chinese', price: 229, rating: 4.5, image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop', description: 'Crispy balls in spicy sauce', isVeg: true },
      
      // Desserts
      { id: '15', name: 'Gulab Jamun', category: 'desserts', price: 99, rating: 4.7, image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=300&fit=crop', description: 'Sweet milk solid balls in syrup', isVeg: true },
      { id: '16', name: 'Chocolate Brownie', category: 'desserts', price: 149, rating: 4.6, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop', description: 'Rich chocolate brownie with ice cream', isVeg: true },
      
      // Beverages
      { id: '17', name: 'Mango Lassi', category: 'beverages', price: 79, rating: 4.5, image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop', description: 'Sweet mango yogurt drink', isVeg: true },
      { id: '18', name: 'Cold Coffee', category: 'beverages', price: 99, rating: 4.4, image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop', description: 'Chilled coffee with ice cream', isVeg: true },
    ]
  };
}

export default async function MenuPage() {
  const { categories, menuItems } = await getMenuData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-lg bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Full Menu
          </h1>
          <p className="text-gray-600 mt-2">Explore our delicious selection</p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-[104px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryNav categories={categories} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <SearchAndFilters />
        </div>

        {/* Menu Items */}
        <Suspense fallback={
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-orange-600" />
          </div>
        }>
          <MenuGrid 
            menuItems={menuItems} 
            categories={categories}
          />
        </Suspense>
      </div>
    </div>
  );
}