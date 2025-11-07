// import MenuItem from '@/app/menu/components/MenuItem';
// import Link from 'next/link';
// import { getMenuData } from '../components/Menu';

// export default async function CategoryPage({ params }) {
//     const { slug } = await params
//     const { categories, menuItems } = await getMenuData();

//     const category = categories.find((c) => c.slug === slug);
//     if (!category) {
//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-semibold">Category not found</h2>
//                     <p className="text-gray-500 mt-2">Try selecting another category.</p>
//                     <Link href="/menu" className="mt-4 inline-block px-4 py-2 bg-white border rounded-lg">Back to menu</Link>
//                 </div>
//             </div>
//         );
//     }

//     // all items for this category
//     const items = menuItems.filter((it) => it.category === slug);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
//             <div className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-lg bg-white/80">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//                     <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
//                         {category.name}
//                     </h1>
//                     <p className="text-gray-600 mt-2">{items.length} items</p>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                 <div className="mb-6">
//                     <Link href="/menu" className="text-sm text-gray-600 hover:underline">← Back to full menu</Link>
//                 </div>

//                 <div className="space-y-8">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                         {items.map((item) => (
//                             <MenuItem key={item.id} item={item} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




import Link from "next/link";
import { getMenuData } from "../components/Menu";
import { ShoppingCart } from "lucide-react";
import CategoryClient from "../components/CategoryClient";

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const { categories, menuItems } = await getMenuData();

  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
        <div className="text-center bg-white rounded-xl p-8 shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">Category not found</h2>
          <p className="text-gray-500 mt-2">Try selecting another category.</p>
          <Link
            href="/menu"
            className="mt-4 inline-block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const items = menuItems.filter((it) => it.category === slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Sticky Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {category.name}
            </h1>
            <p className="text-gray-600 mt-1">{items.length} delicious items available</p>
          </div>
          <Link
            href="/menu"
            className="mt-3 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            Back to Menu
          </Link>
        </div>
      </div>

      {/* Category Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            Explore {category.name} Specials
          </h2>
          <p className="text-gray-500 mt-2">
            Handpicked {category.name.toLowerCase()} items crafted to delight your taste buds
          </p>
        </div>

        {items.length > 0 ? (
          <CategoryClient items={items} />
        ) : (
          <div className="text-center text-gray-600 mt-10">
            <p>No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
