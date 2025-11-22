// export async function fetchCategories() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/food-category`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     console.error("Failed to fetch categories");
//     return [];
//   }

//   const data = await res.json();
//   return data?.data || [];
// }

// // export async function fetchFoodItems() {
// //   const res = await fetch(
// //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/food-items`,
// //     { cache: "no-store" }
// //   );

// //   if (!res.ok) {
// //     console.error("Failed to fetch food items");
// //     return [];
// //   }

// //   const data = await res.json();
// //   return data?.items || [];
// // }

// export async function fetchFoodItems() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/food-items`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     console.error("Failed to fetch food items");
//     return [];
//   }

//   const data = await res.json();
//   const rawItems = data?.items || [];

//   // 🔥 Map items to UI format
//   return rawItems.map((item) => ({
//     id: item._id,
//     name: item.name,
//     description: item.description,
//     image: item.image,
//     price: item.basePrice,                 // FIXED
//     rating: item.rating,
//     reviews: item.reviews,
//     isVeg: item.isVeg,
//     category: item.categoryName?.slug,     // FIXED
//     categoryName: item.categoryName?.categoryName,
//   }));
// }

// export async function fetchItemsByCategorySlug(slug) {
//   const items = await fetchFoodItems();

//   return items
//     .filter((i) => i.categoryName?.slug === slug)
//     .map((item) => ({
//       id: item._id,
//       name: item.name,
//       description: item.description,
//       image: item.image,
//       rating: item.rating,
//       reviews: item.reviews,
//       isVeg: item.isVeg,
//       price: item.basePrice,
//       category: item.categoryName?.slug,
//     }));
// }

// export async function fetchMenuData() {
//   const categories = await fetchCategories();
//   const items = await fetchFoodItems();
//   return { categories, items };
// }




// lib/utils/fetchMenu.js
const BASE = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") || "";

export async function fetchCategories() {
  const res = await fetch(`${BASE}/api/food-category`, { cache: "no-store" });
  if (!res.ok) {
    console.error("Failed to fetch categories", await res.text());
    return [];
  }
  const data = await res.json();
  // API returns { success: true, count, data: categories }
  return data?.data || [];
}

export async function fetchFoodItems() {
  const res = await fetch(`${BASE}/api/food-items`, { cache: "no-store" });
  if (!res.ok) {
    console.error("Failed to fetch food items", await res.text());
    return [];
  }
  const data = await res.json();
  return (data?.items || []).map(item => ({
    id: item._id,
    name: item.name,
    description: item.description,
    image: item.image,
    basePrice: item.basePrice,
    price: item.basePrice, // for MenuItem compatibility
    rating: item.rating,
    reviews: item.reviews,
    badge: item.badge,
    portions: (item.portions || []).map(p => ({ ...p, id: p._id || p.id })),
    addons: (item.addons || []).map(a => ({ ...a, id: a._id || a.id })),
    isVeg: item.isVeg,
    category: item.categoryName?.slug,
    categoryName: item.categoryName?.categoryName,
    raw: item, // keep raw DB item if needed
  }));
}

export async function fetchItemsByCategorySlug(slug) {
  if (!slug) return [];

  const res = await fetch(`${BASE}/api/food-items/${encodeURIComponent(slug)}`, { cache: "no-store" });
  if (!res.ok) {
    // For debugging, log response body
    try {
      const txt = await res.text();
      console.error(`Failed to fetch items for ${slug}:`, txt);
    } catch (e) { /* ignore */ }
    return [];
  }

  const data = await res.json();
  const rawItems = data?.items || [];

  // Map to UI-friendly format that FoodCard expects
  return rawItems.map(item => ({
    id: item._id,
    _id: item._id,
    name: item.name,
    description: item.description,
    image: item.image,
    basePrice: item.basePrice,
    price: item.basePrice, // keep both names to satisfy MenuItem
    rating: item.rating,
    reviews: item.reviews,
    badge: item.badge,
    portions: (item.portions || []).map(p => ({
      id: p._id ? String(p._id) : p.id,
      name: p.name,
      description: p.description,
      price: p.price
    })),
    addons: (item.addons || []).map(a => ({
      id: a._id ? String(a._id) : (a.id || a._id || Math.random().toString(36).slice(2)),
      name: a.name,
      price: a.price
    })).map(a => ({ ...a, id: a.id || a.name })), // ensure id exists
    isVeg: item.isVeg,
    category: item.categoryName?.slug,
    categoryName: item.categoryName?.categoryName,
    raw: item,
  }));
}

export async function fetchMenuData() {
  const [categories, items] = await Promise.all([fetchCategories(), fetchFoodItems()]);
  return { categories, items };
}
