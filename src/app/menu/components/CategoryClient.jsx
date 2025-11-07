"use client";

import FoodCard from "@/components/FoodCard";

export default function CategoryClient({ items }) {
  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <FoodCard
          key={item.id}
          item={item}
          showQuantity={true}
          showPortions={!!item.portions}
          showAddons={!!item.addons}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
