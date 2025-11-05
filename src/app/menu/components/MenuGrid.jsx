import MenuItem from './MenuItem';

export default function MenuGrid({ menuItems, categories }) {
  // Group items by category
  const itemsByCategory = categories.reduce((acc, category) => {
    acc[category.slug] = menuItems.filter(item => item.category === category.slug);
    return acc;
  }, {});

  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const items = itemsByCategory[category.slug];
        if (!items || items.length === 0) return null;

        return (
          <div key={category.id} id={`category-${category.slug}`} className="scroll-mt-40">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                <p className="text-gray-500 mt-1">{items.length} items available</p>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}