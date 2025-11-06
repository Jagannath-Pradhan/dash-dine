// components/MenuGrid.jsx
import MenuItem from './MenuItem';
import Link from 'next/link';

export default function MenuGrid({ menuItems, categories, previewCount = 4 }) {
  // Group items by category
  const itemsByCategory = categories.reduce((acc, category) => {
    acc[category.slug] = menuItems.filter(item => item.category === category.slug);
    return acc;
  }, {});

  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const items = itemsByCategory[category.slug] || [];
        if (!items || items.length === 0) return null;

        const previewItems = previewCount ? items.slice(0, previewCount) : items;

        return (
          <div key={category.id} id={`category-${category.slug}`} className="scroll-mt-40">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                <p className="text-gray-500 mt-1">{items.length} items available</p>
              </div>

              {/* View All button */}
              <div className="ml-4">
                <Link
                  href={`/menu/${category.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all text-sm bg-white border border-gray-200 hover:bg-gray-50 shadow-sm"
                >
                  View all
                  <span className="text-xs text-gray-500">({items.length})</span>
                </Link>
              </div>
            </div>

            {/* Items Grid (preview or full based on previewCount) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {previewItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
