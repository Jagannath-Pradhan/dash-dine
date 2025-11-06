import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import CategoryNav from './components/CategoryNav';
import MenuGrid from './components/MenuGrid';
import SearchAndFilters from './components/SearchAndFilters';
import { getMenuData } from './components/Menu';


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
            previewCount={4} // <-- show only 4 items per category on main page
          />
        </Suspense>
      </div>
    </div>
  );
}