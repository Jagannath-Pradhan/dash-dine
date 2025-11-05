'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal, Star, X } from 'lucide-react';

export default function SearchAndFilters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRating, setSelectedRating] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [vegOnly, setVegOnly] = useState(false);

  const ratingOptions = [
    { value: 4, label: '4★ & up' },
    { value: 3, label: '3★ & up' },
    { value: 2, label: '2★ & up' },
    { value: 1, label: '1★ & up' },
  ];

  const clearFilters = () => {
    setSelectedRating(null);
    setVegOnly(false);
    setSearchQuery('');
  };

  const hasActiveFilters = selectedRating !== null || vegOnly || searchQuery;

  return (
    <div className="space-y-4">
      {/* Search Bar and Filter Button */}
      <div className="flex gap-3">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for dishes..."
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`px-6 py-3.5 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2 ${
            showFilters || hasActiveFilters
              ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          <SlidersHorizontal className="w-5 h-5" />
          Filters
          {hasActiveFilters && !showFilters && (
            <span className="bg-white text-orange-600 rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
              !
            </span>
          )}
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-orange-600 hover:text-orange-700 font-medium"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="space-y-6">
            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Rating
              </label>
              <div className="flex flex-wrap gap-2">
                {ratingOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedRating(
                      selectedRating === option.value ? null : option.value
                    )}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedRating === option.value
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Star className={`w-4 h-4 ${
                        selectedRating === option.value ? 'fill-white' : 'fill-orange-400'
                      }`} />
                      {option.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Veg Only Filter */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={vegOnly}
                    onChange={(e) => setVegOnly(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-gray-200 rounded-full peer-checked:bg-gradient-to-r peer-checked:from-green-500 peer-checked:to-green-600 transition-all"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-md"></div>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  Vegetarian Only
                </span>
                <div className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center ${
                  vegOnly ? 'border-green-600' : 'border-gray-400'
                }`}>
                  {vegOnly && <div className="w-2 h-2 bg-green-600 rounded-sm"></div>}
                </div>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && !showFilters && (
        <div className="flex flex-wrap gap-2">
          {searchQuery && (
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
              Search: "{searchQuery}"
              <button onClick={() => setSearchQuery('')} className="hover:text-orange-900">
                <X className="w-4 h-4" />
              </button>
            </span>
          )}
          {selectedRating && (
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
              <Star className="w-4 h-4 fill-orange-600" />
              {selectedRating}★ & up
              <button onClick={() => setSelectedRating(null)} className="hover:text-orange-900">
                <X className="w-4 h-4" />
              </button>
            </span>
          )}
          {vegOnly && (
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
              🌱 Veg Only
              <button onClick={() => setVegOnly(false)} className="hover:text-green-900">
                <X className="w-4 h-4" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}