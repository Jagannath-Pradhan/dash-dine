import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
      <div className="bg-white rounded-xl shadow-2xl p-4">
        <div className="flex items-center space-x-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for restaurants, cuisines, or dishes..."
            className="flex-1 outline-none text-gray-700"
          />
          <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;