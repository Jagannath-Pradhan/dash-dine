"use client";

import { useState, useMemo } from "react";
import SearchAndFilters from "./SearchAndFilters";
import MenuGrid from "./MenuGrid";

export default function MenuClient({ categories, items }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);

  // Compute filtered items
  const filteredItems = useMemo(() => {
    let filtered = items;

    // Apply Search
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply Rating filter
    if (selectedRating !== null) {
      filtered = filtered.filter((item) => item.rating >= selectedRating);
    }

    return filtered;
  }, [items, searchQuery, selectedRating]);

  return (
    <>
      {/* Pass callbacks to SearchAndFilters */}
      <SearchAndFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />

      {/* Conditions */}
      {filteredItems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-10">
          No items found for your search/filter.
        </div>
      ) : (
        <MenuGrid
          menuItems={filteredItems}
          categories={categories}
          previewCount={4}
        />
      )}
    </>
  );
}
