// import { Suspense } from 'react';
// import { Loader2 } from 'lucide-react';
// import CategoryNav from './components/CategoryNav';
// import MenuGrid from './components/MenuGrid';
// import SearchAndFilters from './components/SearchAndFilters';
// import { getMenuData } from './components/Menu';
// import { getServerSession } from '@/lib/utils/auth';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';


// export default async function MenuPage() {
//   const user = await getServerSession();         // ← SSR auth
//   const { categories, menuItems } = await getMenuData();

//   return (
//     <>
//       <Navbar user={user} isScrolled={true} />
//       <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-11">
//         {/* Header */}
//         <div className="bg-white border-b border-gray-200 z-40 backdrop-blur-lg bg-white/80">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//             <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
//               Full Menu
//             </h1>
//             <p className="text-gray-600 mt-2">Explore our delicious selection</p>
//           </div>
//         </div>

//         {/* Category Navigation */}
//         <div className="sticky top-[64px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <CategoryNav categories={categories} />
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           {/* Search and Filters */}
//           <div className="mb-8">
//             <SearchAndFilters />
//           </div>

//           {/* Menu Items */}
//           <Suspense fallback={
//             <div className="flex justify-center items-center py-20">
//               <Loader2 className="w-8 h-8 animate-spin text-orange-600" />
//             </div>
//           }>
//             <MenuGrid
//               menuItems={menuItems}
//               categories={categories}
//               previewCount={4} // <-- show only 4 items per category on main page
//             />
//           </Suspense>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }





// import { Suspense } from 'react';
// import { Loader2 } from 'lucide-react';
// import CategoryNav from './components/CategoryNav';
// import MenuGrid from './components/MenuGrid';
// import SearchAndFilters from './components/SearchAndFilters';
// import { getServerSession } from '@/lib/utils/auth';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// export default async function MenuPage() {
//   const user = await getServerSession(); // SSR Auth

//   // ⬇️ Fetch categories from API (SSR)
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/food-category`, {
//     cache: "no-store",
//   });

//   const categoryData = await res.json();
//   const categories = categoryData?.data || [];

//   // For now keep menuItems empty since you're not using it
//   const menuItems = [];

//   return (
//     <>
//       <Navbar user={user} isScrolled={true} />

//       <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-11">
//         {/* Header */}
//         <div className="bg-white border-b border-gray-200 z-40 backdrop-blur-lg bg-white/80">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//             <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
//               Full Menu
//             </h1>
//             <p className="text-gray-600 mt-2">Explore our delicious selection</p>
//           </div>
//         </div>

//         {/* Category Navigation */}
//         <div className="sticky top-[64px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <CategoryNav categories={categories} />
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

//           {/* Search and Filters */}
//           <div className="mb-8">
//             <SearchAndFilters />
//           </div>

//           {/* Menu Items */}
//           <Suspense fallback={
//             <div className="flex justify-center items-center py-20">
//               <Loader2 className="w-8 h-8 animate-spin text-orange-600" />
//             </div>
//           }>
//             <MenuGrid
//               menuItems={menuItems}
//               categories={categories}
//               previewCount={4} // <-- show only 4 items per category on main page
//             />
//           </Suspense>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }



import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import CategoryNav from './components/CategoryNav';
import MenuGrid from './components/MenuGrid';
import SearchAndFilters from './components/SearchAndFilters';
import { getServerSession } from '@/lib/utils/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function MenuPage() {
  const user = await getServerSession();    // SSR Auth

  // -------------------------------
  // Fetch categories
  // -------------------------------
  const catRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/food-category`,
    { cache: "no-store" }
  );
  const categoryData = await catRes.json();
  const categories = categoryData?.data || [];

  // -------------------------------
  // Fetch food items
  // -------------------------------
  const itemRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/food-items`,
    { cache: "no-store" }
  );
  const itemData = await itemRes.json();
  const rawItems = itemData?.items || [];

  // -------------------------------
  // Transform items to include category slug
  // -------------------------------
  const menuItems = rawItems.map((item) => ({
    id: item._id,
    name: item.name,
    description: item.description,
    image: item.image,
    rating: item.rating,
    reviews: item.reviews,
    isVeg: item.isVeg,
    price: item.basePrice,   // FIX: use proper price field
    category: item.category?.slug || "", // important!
  }));

  return (
    <>
      <Navbar user={user} isScrolled={true} />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-11">
        
        {/* Header */}
        <div className="bg-white border-b border-gray-200 z-40 backdrop-blur-lg bg-white/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Full Menu
            </h1>
            <p className="text-gray-600 mt-2">Explore our delicious selection</p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="sticky top-[64px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
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
          <Suspense
            fallback={
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-orange-600" />
              </div>
            }
          >
            <MenuGrid
              menuItems={menuItems}
              categories={categories}
              previewCount={4} // <-- show only 4 items per category on main page
            />
          </Suspense>

        </div>
      </div>

      <Footer />
    </>
  );
}