// menu/[slug]/page.jsx
// import Link from "next/link";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import FoodCard from "@/components/FoodCard";
// import { ShoppingCart } from "lucide-react";
// import { getServerSession } from "@/lib/utils/auth";
// import { fetchCategories, fetchItemsByCategorySlug } from "@/lib/utils/fetchMenu";

// export default async function CategoryPage({ params }) {
//   const rawSlug = params?.slug;
//   const slug = String(rawSlug || "").toLowerCase();
//   const user = await getServerSession();

//   const categories = await fetchCategories();
//   const items = await fetchItemsByCategorySlug(slug);

//   // find category — note your model field is `categoryName` and slug is `slug`
//   const category = categories.find((c) => String(c.slug).toLowerCase() === slug);

//   if (!category) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
//         <div className="text-center bg-white rounded-xl p-8 shadow-md border border-gray-200">
//           <h2 className="text-2xl font-semibold text-gray-800">Category not found</h2>
//           <Link
//             href="/menu"
//             className="mt-4 inline-block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
//           >
//             Back to Menu
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar user={user} isScrolled={true} />

//       <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-11">
//         {/* Sticky Header */}
//         <div className="bg-white border-b border-gray-200 z-40 backdrop-blur-md bg-white/80">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
//                 {category.categoryName}
//               </h1>
//               <p className="text-gray-600 mt-1">{items.length} delicious items available</p>
//             </div>
//             <Link
//               href="/menu"
//               className="mt-3 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition"
//             >
//               <ShoppingCart className="w-5 h-5" />
//               Back to Menu
//             </Link>
//           </div>
//         </div>

//         {/* Category Section */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-semibold text-gray-800">
//               Explore {category.categoryName} Specials
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Handpicked {String(category.categoryName).toLowerCase()} items crafted to delight your taste buds
//             </p>
//           </div>

//           {items.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {items.map((item) => (
//                 <FoodCard
//                   key={item.id || item._id}
//                   item={{
//                     // ensure FoodCard has the fields it expects
//                     _id: item._id || item.id,
//                     id: item._id || item.id,
//                     name: item.name,
//                     description: item.description,
//                     image: item.image,
//                     basePrice: item.basePrice || item.price,
//                     rating: item.rating || 0,
//                     reviews: item.reviews || 0,
//                     badge: item.badge || "",
//                     portions: item.portions || [],
//                     addons: item.addons || [],
//                     isVeg: item.isVeg !== undefined ? item.isVeg : true,
//                     categoryName: item.categoryName || item.categoryName || category.categoryName,
//                   }}
//                   showQuantity={true}
//                   showPortions={true}
//                   showAddons={true}
//                 />
//               ))}
//             </div>
//           ) : (
//             <div className="text-center text-gray-600 mt-10">
//               <p>No items found in this category.</p>
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }




import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodCard from "@/components/FoodCard";
import { ShoppingCart } from "lucide-react";
import { getServerSession } from "@/lib/utils/auth";
import { fetchCategories, fetchItemsByCategorySlug } from "@/lib/utils/fetchMenu";

export default async function CategoryPage({ params }) {
  // ----------------------------
  // IMPORTANT: params can be a Promise — await it
  // ----------------------------
  const { slug: rawSlug } = await params;
  const slug = String(rawSlug || "").toLowerCase();

  // SSR auth
  const user = await getServerSession();

  // fetch categories and items in parallel
  const [categories, items] = await Promise.all([
    fetchCategories(),
    fetchItemsByCategorySlug(slug),
  ]);

  // ----------------------------
  // Robust category lookup:
  // handle variations in returned shape (slug, categoryName, etc.)
  // ----------------------------
  const category = (categories || []).find((c) => {
    if (!c) return false;
    const cSlug = (c.slug ?? "").toString().toLowerCase();
    const cName = (c.categoryName ?? c.name ?? "").toString().toLowerCase();
    // match by slug or by categoryName (defensive)
    return cSlug === slug || cName === slug;
  });

  // Debugging tip (server-side): if you still get "Category not found", console.log categories and items.
  // console.log("categories:", categories);
  // console.log("items:", items);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
        <div className="text-center bg-white rounded-xl p-8 shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">Category not found</h2>
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

  return (
    <>
      <Navbar user={user} isScrolled={true} />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-11">
        {/* Sticky Header */}
        <div className="bg-white border-b border-gray-200 z-40 backdrop-blur-md bg-white/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {category.categoryName ?? category.name}
              </h1>
              <p className="text-gray-600 mt-1">{(items || []).length} delicious items available</p>
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
              Explore {(category.categoryName ?? category.name).toString()} Specials
            </h2>
            <p className="text-gray-500 mt-2">
              Handpicked {(category.categoryName ?? category.name).toString().toLowerCase()} items crafted to delight your taste buds
            </p>
          </div>

          {items && items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => {
                // Defensive normalization so FoodCard always gets the fields it expects
                const normalized = {
                  _id: item._id ?? item.id ?? item._id,
                  id: item._id ?? item.id,
                  name: item.name ?? item.title ?? "Untitled",
                  description: item.description ?? "",
                  image: item.image ?? "/images/placeholder-food.png",
                  basePrice: item.basePrice ?? item.price ?? 0,
                  rating: item.rating ?? 0,
                  reviews: item.reviews ?? 0,
                  badge: item.badge ?? "",
                  portions: Array.isArray(item.portions)
                    ? item.portions.map((p) => ({ id: p._id ?? p.id ?? p.name, ...p }))
                    : [],
                  addons: Array.isArray(item.addons)
                    ? item.addons.map((a) => ({ id: a._id ?? a.id ?? a.name, ...a }))
                    : [],
                  isVeg: typeof item.isVeg === "boolean" ? item.isVeg : true,
                  categoryName: item.categoryName?.categoryName ?? category.categoryName ?? category.name,
                };

                return (
                  <FoodCard
                    key={normalized.id}
                    item={normalized}
                    showQuantity={true}
                    showPortions={true}
                    showAddons={true}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-600 mt-10">
              <p>No items found in this category.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
