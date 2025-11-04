// components/menu/CategoryNav.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CategoryNav({ categories }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef(null);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToCategory = (slug) => {
    setActiveCategory(slug);
    const element = document.getElementById(`category-${slug}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative py-4">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
      )}

      {/* Categories */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <button
          onClick={() => scrollToCategory('all')}
          className={`flex-shrink-0 px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Items
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => scrollToCategory(category.slug)}
            className={`flex-shrink-0 px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
              activeCategory === category.slug
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
            <span className="ml-2 text-xs opacity-75">({category.count})</span>
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      )}
    </div>
  );
}