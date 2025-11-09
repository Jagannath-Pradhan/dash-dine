// 'use client'

// import FoodCard from "@/components/FoodCard";

// // Demo Component with Examples
// const FoodCardDemo = () => {
//     // Sample data for different food types
//     const pizzaItem = {
//         id: 1,
//         name: "Margherita Pizza",
//         description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil",
//         image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
//         basePrice: 249,
//         rating: 4.5,
//         reviews: 328,
//         isVeg: true,
//         badge: "Bestseller",
//         portions: [
//             { id: 1, name: "Regular", description: "7 inch", price: 249 },
//             { id: 2, name: "Medium", description: "9 inch", price: 399 },
//             { id: 3, name: "Large", description: "12 inch", price: 549 }
//         ],
//         addons: [
//             { id: 1, name: "Extra Cheese", price: 40 },
//             { id: 2, name: "Stuffed Crust", price: 60 },
//             { id: 3, name: "Olives", price: 30 },
//             { id: 4, name: "Jalapeños", price: 25 },
//             { id: 5, name: "Mushrooms", price: 35 }
//         ]
//     };

//     const dessertItem = {
//         id: 2,
//         name: "Chocolate Brownie",
//         description: "Rich, fudgy brownie with Belgian chocolate and walnuts",
//         image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400",
//         basePrice: 129,
//         rating: 4.7,
//         reviews: 542,
//         isVeg: true,
//         badge: "Chef's Special"
//     };

//     const biryaniItem = {
//         id: 3,
//         name: "Veg Dum Biryani",
//         description: "Aromatic basmati rice with mixed vegetables and traditional spices",
//         image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
//         basePrice: 199,
//         rating: 4.6,
//         reviews: 892,
//         isVeg: true,
//         portions: [
//             { id: 1, name: "Half", description: "Serves 1", price: 199 },
//             { id: 2, name: "Full", description: "Serves 2", price: 349 }
//         ],
//         addons: [
//             { id: 1, name: "Extra Raita", price: 30 },
//             { id: 2, name: "Gulab Jamun (2pc)", price: 40 },
//             { id: 3, name: "Papad", price: 15 }
//         ]
//     };

//     const handleAddToCart = (item) => {
//         console.log("Added to cart:", item);
//         // Here you would integrate with your cart state management
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-8">
//             <div className="max-w-7xl mx-auto">
//                 <h1 className="text-4xl font-bold text-gray-800 mb-3 text-center">Food Card Component Demo</h1>
//                 <p className="text-gray-600 text-center mb-8">Customizable cards for different food categories</p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {/* Pizza Card - Full features */}
//                     <div>
//                         <h2 className="text-lg font-semibold text-gray-700 mb-3">Pizza (All Features)</h2>
//                         <FoodCard
//                             item={pizzaItem}
//                             showQuantity={true}
//                             showPortions={true}
//                             showAddons={true}
//                             onAddToCart={handleAddToCart}
//                         />
//                     </div>

//                     {/* Dessert Card - No addons */}
//                     <div>
//                         <h2 className="text-lg font-semibold text-gray-700 mb-3">Dessert (No Add-ons)</h2>
//                         <FoodCard
//                             item={dessertItem}
//                             showQuantity={true}
//                             showPortions={false}
//                             showAddons={false}
//                             onAddToCart={handleAddToCart}
//                         />
//                     </div>

//                     {/* Biryani Card - Half/Full portions */}
//                     <div>
//                         <h2 className="text-lg font-semibold text-gray-700 mb-3">Biryani (Half/Full)</h2>
//                         <FoodCard
//                             item={biryaniItem}
//                             showQuantity={true}
//                             showPortions={true}
//                             showAddons={true}
//                             onAddToCart={handleAddToCart}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FoodCardDemo;





'use client'

import FoodCard from "@/components/FoodCard";

const FoodCardDemo = () => {
    const cuisines = [
        {
            category: "Pizza",
            items: [
                {
                    id: 1,
                    name: "Margherita Pizza",
                    description: "Classic Italian pizza with mozzarella, tomatoes & basil",
                    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
                    basePrice: 249,
                    rating: 4.5,
                    reviews: 328,
                    badge: "Bestseller",
                    portions: [
                        { id: 1, name: "Regular", description: "7 inch", price: 249 },
                        { id: 2, name: "Medium", description: "9 inch", price: 399 },
                        { id: 3, name: "Large", description: "12 inch", price: 549 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Cheese", price: 40 },
                        { id: 2, name: "Stuffed Crust", price: 60 },
                        { id: 3, name: "Olives", price: 30 },
                        { id: 4, name: "Jalapeños", price: 25 },
                        { id: 5, name: "Mushrooms", price: 35 }
                    ],
                    isVeg: true
                },
                {
                    id: 2,
                    name: "Veggie Supreme",
                    description: "Loaded with capsicum, onion, tomato & corn",
                    image: "https://images.unsplash.com/photo-1601924582971-dc2d7f8dbf4b?w=400",
                    basePrice: 299,
                    rating: 4.6,
                    reviews: 256,
                    portions: [
                        { id: 1, name: "Regular", description: "7 inch", price: 299 },
                        { id: 2, name: "Medium", description: "9 inch", price: 429 },
                        { id: 3, name: "Large", description: "12 inch", price: 579 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Cheese", price: 40 },
                        { id: 2, name: "Paneer Cubes", price: 50 },
                        { id: 3, name: "Sweet Corn", price: 25 }
                    ],
                    isVeg: true
                },
                {
                    id: 3,
                    name: "Pepperoni Pizza",
                    description: "Classic pepperoni slices layered on mozzarella and tomato sauce",
                    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
                    basePrice: 349,
                    rating: 4.7,
                    reviews: 412,
                    badge: "Chef’s Special",
                    portions: [
                        { id: 1, name: "Regular", description: "7 inch", price: 349 },
                        { id: 2, name: "Medium", description: "9 inch", price: 499 },
                        { id: 3, name: "Large", description: "12 inch", price: 649 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Cheese", price: 50 },
                        { id: 2, name: "Spicy Pepperoni", price: 60 },
                        { id: 3, name: "Stuffed Crust", price: 70 },
                        { id: 4, name: "BBQ Sauce Drizzle", price: 25 }
                    ],
                    isVeg: true
                },
                {
                    id: 4,
                    name: "Farmhouse Pizza",
                    description: "A countryside mix of onion, capsicum, tomato & mushrooms on cheesy crust",
                    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd8?w=400",
                    basePrice: 319,
                    rating: 4.8,
                    reviews: 286,
                    portions: [
                        { id: 1, name: "Regular", description: "7 inch", price: 319 },
                        { id: 2, name: "Medium", description: "9 inch", price: 459 },
                        { id: 3, name: "Large", description: "12 inch", price: 619 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Cheese", price: 40 },
                        { id: 2, name: "Mushrooms", price: 35 },
                        { id: 3, name: "Olives", price: 30 },
                        { id: 4, name: "Garlic Dip", price: 25 },
                        { id: 5, name: "Chili Flakes", price: 10 }
                    ],
                    isVeg: true
                },
                {
                    id: 5,
                    name: "Paneer Tikka Pizza",
                    description: "Smoky paneer tikka cubes, onions, and capsicum on spicy tomato base",
                    image: "https://images.unsplash.com/photo-1631515243303-9ac4232de8c6?w=400",
                    basePrice: 329,
                    rating: 4.9,
                    reviews: 374,
                    badge: "Top Rated",
                    portions: [
                        { id: 1, name: "Regular", description: "7 inch", price: 329 },
                        { id: 2, name: "Medium", description: "9 inch", price: 469 },
                        { id: 3, name: "Large", description: "12 inch", price: 629 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Paneer", price: 50 },
                        { id: 2, name: "Cheese Burst", price: 70 },
                        { id: 3, name: "Mint Mayo Dip", price: 25 },
                        { id: 4, name: "Stuffed Crust", price: 60 }
                    ],
                    isVeg: true
                }
            ]
        },

        // 🍔 BURGER
        {
            category: "Burger",
            items: [
                {
                    id: 6,
                    name: "Classic Veg Burger",
                    description: "Crispy patty with lettuce, tomato & mayo",
                    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
                    basePrice: 129,
                    rating: 4.5,
                    reviews: 421,
                    addons: [
                        { id: 1, name: "Extra Cheese Slice", price: 20 },
                        { id: 2, name: "Fries Combo", price: 60 },
                        { id: 3, name: "Coke 250ml", price: 40 }
                    ],
                    portions: [
                        { id: 1, name: "Single", description: "1 patty", price: 129 },
                        { id: 2, name: "Double", description: "2 patties", price: 179 }
                    ],
                    isVeg: true
                },
                {
                    id: 7,
                    name: "Veggie Burger",
                    description: "Loaded with fresh lettuce, tomato, onion & veg patty with special sauce",
                    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
                    basePrice: 139,
                    rating: 4.6,
                    reviews: 392,
                    addons: [
                        { id: 1, name: "Extra Cheese Slice", price: 20 },
                        { id: 2, name: "Peri-Peri Fries", price: 70 },
                        { id: 3, name: "Chilli Mayo Dip", price: 25 },
                        { id: 4, name: "Coke 250ml", price: 40 }
                    ],
                    portions: [
                        { id: 1, name: "Single", description: "1 patty", price: 139 },
                        { id: 2, name: "Double", description: "2 patties", price: 189 },
                        { id: 3, name: "Jumbo", description: "2 patties + extra cheese", price: 239 }
                    ],
                    isVeg: true
                },
                {
                    id: 8,
                    name: "Paneer Tikka Burger",
                    description: "Grilled paneer tikka, spicy sauce & crunchy onions in a toasted bun",
                    image: "https://images.unsplash.com/photo-1629196916211-3dfdc1b4a7b2?w=400",
                    basePrice: 169,
                    rating: 4.8,
                    reviews: 518,
                    badge: "Bestseller",
                    addons: [
                        { id: 1, name: "Mint Mayo Dip", price: 25 },
                        { id: 2, name: "Cheese Slice", price: 20 },
                        { id: 3, name: "Fries Combo", price: 60 },
                        { id: 4, name: "Cold Coffee 300ml", price: 70 }
                    ],
                    portions: [
                        { id: 1, name: "Single", description: "Paneer tikka slice", price: 169 },
                        { id: 2, name: "Double", description: "Extra paneer layer", price: 219 }
                    ],
                    isVeg: true
                },
                {
                    id: 9,
                    name: "Aloo Tikki Burger",
                    description: "Crispy aloo tikki with tangy sauces and crunchy veggies",
                    image: "https://images.unsplash.com/photo-1620312536970-7c3c0e5d51cf?w=400",
                    basePrice: 119,
                    rating: 4.4,
                    reviews: 288,
                    addons: [
                        { id: 1, name: "Extra Cheese Slice", price: 20 },
                        { id: 2, name: "Masala Fries", price: 60 },
                        { id: 3, name: "Coke 250ml", price: 40 }
                    ],
                    portions: [
                        { id: 1, name: "Single", description: "1 patty", price: 119 },
                        { id: 2, name: "Double", description: "2 patties", price: 169 }
                    ],
                    isVeg: true
                },
                {
                    id: 10,
                    name: "Cheese Burst Burger",
                    description: "Juicy cheese-filled patty that melts in your mouth with every bite",
                    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400",
                    basePrice: 189,
                    rating: 4.9,
                    reviews: 634,
                    badge: "Top Rated",
                    addons: [
                        { id: 1, name: "Extra Cheese Burst", price: 40 },
                        { id: 2, name: "Garlic Mayo Dip", price: 25 },
                        { id: 3, name: "Peri-Peri Fries", price: 70 },
                        { id: 4, name: "Cold Drink Combo", price: 60 }
                    ],
                    portions: [
                        { id: 1, name: "Single", description: "1 patty", price: 189 },
                        { id: 2, name: "Double", description: "2 patties", price: 239 },
                        { id: 3, name: "Cheese Lover", description: "Extra cheese burst + fries combo", price: 299 }
                    ],
                    isVeg: true
                }
            ]
        },

        // Chowmein
        {
            category: "Chowmein",
            items: [
                {
                    id: 11,
                    name: "Veg Hakka Chowmein",
                    description: "Stir-fried noodles tossed with fresh vegetables, soy sauce, and a hint of garlic",
                    image: "https://images.unsplash.com/photo-1600628421055-9d91d1b6a6b8?w=400",
                    basePrice: 159,
                    rating: 4.6,
                    reviews: 512,
                    badge: "Bestseller",
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 159 },
                        { id: 2, name: "Large", description: "Serves 2", price: 249 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Noodles", price: 40 },
                        { id: 2, name: "Chilli Sauce", price: 20 },
                        { id: 3, name: "Fried Veg Manchurian (2 pc)", price: 60 },
                        { id: 4, name: "Spring Roll (1 pc)", price: 45 }
                    ],
                    isVeg: true
                },
                {
                    id: 12,
                    name: "Schezwan Chowmein",
                    description: "Spicy noodles with Schezwan sauce, veggies, and oriental spices for a fiery kick",
                    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400",
                    basePrice: 179,
                    rating: 4.7,
                    reviews: 684,
                    badge: "Chef's Special",
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 179 },
                        { id: 2, name: "Large", description: "Serves 2", price: 269 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Schezwan Sauce", price: 25 },
                        { id: 2, name: "Crispy Veg Ball (2 pc)", price: 50 },
                        { id: 3, name: "Coke 250ml", price: 40 }
                    ],
                    isVeg: true
                },
                {
                    id: 13,
                    name: "Chilli Garlic Noodles",
                    description: "Hot and tangy noodles infused with garlic, chilli flakes, and spring onions",
                    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400",
                    basePrice: 169,
                    rating: 4.5,
                    reviews: 448,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 169 },
                        { id: 2, name: "Large", description: "Serves 2", price: 259 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Garlic Sauce", price: 20 },
                        { id: 2, name: "Veg Momos (3 pcs)", price: 70 },
                        { id: 3, name: "Chilli Paneer (Half)", price: 120 }
                    ],
                    isVeg: true
                },
                {
                    id: 14,
                    name: "Paneer Chowmein",
                    description: "Noodles tossed with paneer cubes, vegetables, and flavorful Indo-Chinese sauce",
                    image: "https://images.unsplash.com/photo-1626082927389-6cd97d55c77f?w=400",
                    basePrice: 189,
                    rating: 4.8,
                    reviews: 792,
                    badge: "Most Loved",
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 189 },
                        { id: 2, name: "Large", description: "Serves 2", price: 279 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Paneer Cubes", price: 50 },
                        { id: 2, name: "Veg Manchurian Balls (2 pcs)", price: 60 },
                        { id: 3, name: "Cold Drink 300ml", price: 50 }
                    ],
                    isVeg: true
                }
            ]
        },

        // Starters
        {
            category: "Starters",
            items: [
                {
                    id: 15,
                    name: "Paneer Tikka",
                    description: "Grilled cottage cheese cubes marinated in spicy yogurt mix, served with mint chutney",
                    image: "https://images.unsplash.com/photo-1601050690597-7fef8b0c3a2b?w=400",
                    basePrice: 249,
                    rating: 4.7,
                    reviews: 856,
                    badge: "Bestseller",
                    portions: [
                        { id: 1, name: "Half", description: "6 pieces", price: 249 },
                        { id: 2, name: "Full", description: "12 pieces", price: 399 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Mint Chutney", price: 20 },
                        { id: 2, name: "Extra Paneer Cubes", price: 60 },
                        { id: 3, name: "Butter Roti (1 pc)", price: 25 },
                        { id: 4, name: "Lassi 300ml", price: 60 }
                    ],
                    isVeg: true
                },
                {
                    id: 16,
                    name: "Veg Manchurian",
                    description: "Crispy vegetable balls tossed in spicy Indo-Chinese Manchurian sauce",
                    image: "https://images.unsplash.com/photo-1626082927389-6cd97d55c77f?w=400",
                    basePrice: 199,
                    rating: 4.6,
                    reviews: 713,
                    portions: [
                        { id: 1, name: "Half", description: "Serves 1", price: 199 },
                        { id: 2, name: "Full", description: "Serves 2", price: 329 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Manchurian Sauce", price: 25 },
                        { id: 2, name: "Hakka Noodles Combo", price: 179 },
                        { id: 3, name: "Coke 250ml", price: 40 }
                    ],
                    isVeg: true
                },
                {
                    id: 17,
                    name: "Crispy Corn",
                    description: "Golden-fried corn kernels tossed with onions, herbs, and a hint of chaat masala",
                    image: "https://images.unsplash.com/photo-1626077874401-8a09256e5f84?w=400",
                    basePrice: 169,
                    rating: 4.5,
                    reviews: 498,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 169 },
                        { id: 2, name: "Large", description: "Serves 2", price: 249 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Lemon Seasoning", price: 15 },
                        { id: 2, name: "Peri Peri Mix", price: 20 },
                        { id: 3, name: "Mint Mayo Dip", price: 25 }
                    ],
                    isVeg: true
                },
                {
                    id: 18,
                    name: "Hara Bhara Kebab",
                    description: "Healthy spinach and green pea patties shallow fried to perfection",
                    image: "https://images.unsplash.com/photo-1667733937071-62d2779bcd41?w=400",
                    basePrice: 189,
                    rating: 4.6,
                    reviews: 564,
                    portions: [
                        { id: 1, name: "Half", description: "4 pieces", price: 189 },
                        { id: 2, name: "Full", description: "8 pieces", price: 319 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Chutney", price: 20 },
                        { id: 2, name: "Roti Combo", price: 45 },
                        { id: 3, name: "Sweet Lassi", price: 60 }
                    ],
                    isVeg: true
                },
                {
                    id: 19,
                    name: "Cheese Balls",
                    description: "Crispy cheese-stuffed balls served with tangy dip — a cheesy delight",
                    image: "https://images.unsplash.com/photo-1625944525935-d8c5d7e2c035?w=400",
                    basePrice: 199,
                    rating: 4.8,
                    reviews: 732,
                    badge: "Chef's Special",
                    portions: [
                        { id: 1, name: "Half", description: "6 balls", price: 199 },
                        { id: 2, name: "Full", description: "12 balls", price: 329 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Cheese Dip", price: 25 },
                        { id: 2, name: "French Fries", price: 70 },
                        { id: 3, name: "Cold Coffee", price: 75 }
                    ],
                    isVeg: true
                },
                {
                    id: 20,
                    name: "Tandoori Mushroom",
                    description: "Button mushrooms marinated in spiced yogurt and grilled in a clay oven",
                    image: "https://images.unsplash.com/photo-1641746972245-bb22e970742f?w=400",
                    basePrice: 229,
                    rating: 4.7,
                    reviews: 612,
                    portions: [
                        { id: 1, name: "Half", description: "Serves 1", price: 229 },
                        { id: 2, name: "Full", description: "Serves 2", price: 369 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Mint Chutney", price: 20 },
                        { id: 2, name: "Butter Naan (1 pc)", price: 30 },
                        { id: 3, name: "Masala Chaas 250ml", price: 45 }
                    ],
                    isVeg: true
                }
            ]
        },

        // South Indian
        {
            category: "South Indian",
            items: [
                {
                    id: 21,
                    name: "Masala Dosa",
                    description: "Crispy dosa stuffed with spiced potato filling, served with chutney & sambar",
                    image: "https://images.unsplash.com/photo-1601050690597-1d9b92f6b20d?w=400",
                    basePrice: 149,
                    rating: 4.7,
                    reviews: 645,
                    portions: [
                        { id: 1, name: "Single", description: "1 dosa", price: 149 },
                        { id: 2, name: "Combo", description: "2 dosas + chutney & sambar", price: 229 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Sambar", price: 30 },
                        { id: 2, name: "Extra Coconut Chutney", price: 20 },
                        { id: 3, name: "Butter Topping", price: 25 }
                    ],
                    isVeg: true
                },
                {
                    id: 22,
                    name: "Idli Sambar",
                    description: "Soft steamed idlis served with hot sambar and coconut chutney",
                    image: "https://images.unsplash.com/photo-1617196034796-73dfa1d7f565?w=400",
                    basePrice: 99,
                    rating: 4.6,
                    reviews: 582,
                    portions: [
                        { id: 1, name: "Regular", description: "2 idlis", price: 99 },
                        { id: 2, name: "Large", description: "4 idlis + extra sambar", price: 149 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Sambar", price: 20 },
                        { id: 2, name: "Ghee Drizzle", price: 25 }
                    ],
                    isVeg: true
                },
                {
                    id: 23,
                    name: "Uttapam",
                    description: "Thick dosa topped with onions, tomatoes & chilies",
                    image: "https://images.unsplash.com/photo-1596560548462-52b4cb1f9d7f?w=400",
                    basePrice: 139,
                    rating: 4.5,
                    reviews: 314,
                    portions: [
                        { id: 1, name: "Single", description: "1 Uttapam", price: 139 },
                        { id: 2, name: "Double", description: "2 Uttapams + sambar", price: 199 }
                    ],
                    addons: [
                        { id: 1, name: "Cheese Topping", price: 30 },
                        { id: 2, name: "Butter", price: 20 }
                    ],
                    isVeg: true
                },
                {
                    id: 24,
                    name: "Medu Vada",
                    description: "Crispy lentil doughnuts served with coconut chutney & sambar",
                    image: "https://images.unsplash.com/photo-1617026061346-8a5b3bdfcff9?w=400",
                    basePrice: 119,
                    rating: 4.4,
                    reviews: 275,
                    portions: [
                        { id: 1, name: "Regular", description: "2 pieces", price: 119 },
                        { id: 2, name: "Combo", description: "4 pieces + sambar", price: 179 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Sambar", price: 25 },
                        { id: 2, name: "Curd Bowl", price: 30 }
                    ],
                    isVeg: true
                },
                {
                    id: 25,
                    name: "Ven Pongal",
                    description: "Comforting South Indian dish made of rice & moong dal, tempered with ghee & pepper",
                    image: "https://images.unsplash.com/photo-1626082927389-9a476f56b6a9?w=400",
                    basePrice: 129,
                    rating: 4.6,
                    reviews: 201,
                    portions: [
                        { id: 1, name: "Regular", description: "Single bowl", price: 129 },
                        { id: 2, name: "Meal Combo", description: "Pongal + Vada + Chutney", price: 189 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Ghee", price: 20 },
                        { id: 2, name: "Coconut Chutney", price: 15 }
                    ],
                    isVeg: true
                },
                {
                    id: 26,
                    name: "Rava Kesari",
                    description: "Sweet semolina pudding flavored with saffron & cardamom",
                    image: "https://images.unsplash.com/photo-1617191519105-41e64778a639?w=400",
                    basePrice: 99,
                    rating: 4.3,
                    reviews: 189,
                    portions: [
                        { id: 1, name: "Small", description: "100g", price: 99 },
                        { id: 2, name: "Large", description: "200g", price: 159 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Ghee", price: 25 },
                        { id: 2, name: "Cashew Topping", price: 20 }
                    ],
                    isVeg: true
                }
            ]
        },

        // North Indian
        {
            category: "North Indian",
            items: [
                {
                    id: 27,
                    name: "Paneer Butter Masala",
                    description: "Creamy tomato-based curry with soft paneer cubes, cooked in butter and spices",
                    image: "https://images.unsplash.com/photo-1617196034796-73dfa1d7f565?w=400",
                    basePrice: 229,
                    rating: 4.8,
                    reviews: 845,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 229 },
                        { id: 2, name: "Family Pack", description: "Serves 2-3", price: 389 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Butter", price: 25 },
                        { id: 2, name: "Extra Gravy", price: 35 },
                        { id: 3, name: "Tandoori Roti", price: 20 },
                        { id: 4, name: "Butter Naan", price: 30 }
                    ],
                    isVeg: true
                },
                {
                    id: 28,
                    name: "Dal Makhani",
                    description: "Slow-cooked black lentils in creamy butter and tomato sauce",
                    image: "https://images.unsplash.com/photo-1625938145542-0401a0e744a2?w=400",
                    basePrice: 199,
                    rating: 4.7,
                    reviews: 732,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 199 },
                        { id: 2, name: "Large", description: "Serves 2", price: 299 }
                    ],
                    addons: [
                        { id: 1, name: "Butter Naan", price: 30 },
                        { id: 2, name: "Steamed Rice", price: 40 },
                        { id: 3, name: "Extra Cream", price: 20 }
                    ],
                    isVeg: true
                },
                {
                    id: 29,
                    name: "Dal Tadka",
                    description: "Yellow lentils tempered with ghee, cumin, and garlic — simple yet flavorful",
                    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400",
                    basePrice: 179,
                    rating: 4.5,
                    reviews: 598,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 179 },
                        { id: 2, name: "Family Pack", description: "Serves 2-3", price: 289 }
                    ],
                    addons: [
                        { id: 1, name: "Jeera Rice", price: 50 },
                        { id: 2, name: "Papad", price: 15 },
                        { id: 3, name: "Butter Roti", price: 25 }
                    ],
                    isVeg: true
                },
                {
                    id: 30,
                    name: "Chole Bhature",
                    description: "Spicy chickpea curry served with fluffy fried bhature and pickle",
                    image: "https://images.unsplash.com/photo-1626776876149-3a4e9429d3c9?w=400",
                    basePrice: 169,
                    rating: 4.8,
                    reviews: 912,
                    portions: [
                        { id: 1, name: "Regular", description: "2 Bhature + Chole", price: 169 },
                        { id: 2, name: "Large", description: "3 Bhature + Chole + Salad", price: 219 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Bhatura", price: 40 },
                        { id: 2, name: "Onion Salad", price: 20 },
                        { id: 3, name: "Pickle Refill", price: 10 }
                    ],
                    isVeg: true
                },
                {
                    id: 31,
                    name: "Rajma Chawal",
                    description: "Comforting red kidney beans curry served with steamed basmati rice",
                    image: "https://images.unsplash.com/photo-1617196034796-73dfa1d7f565?w=400",
                    basePrice: 149,
                    rating: 4.6,
                    reviews: 664,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 149 },
                        { id: 2, name: "Combo", description: "Rajma + Rice + Salad", price: 199 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Rajma Curry", price: 40 },
                        { id: 2, name: "Fried Papad", price: 20 },
                        { id: 3, name: "Boondi Raita", price: 30 }
                    ],
                    isVeg: true
                },
                {
                    id: 32,
                    name: "Kadai Paneer",
                    description: "Paneer cooked in a spicy tomato gravy with bell peppers & onions",
                    image: "https://images.unsplash.com/photo-1631515242808-497c3a7c52b3?w=400",
                    basePrice: 239,
                    rating: 4.7,
                    reviews: 788,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 239 },
                        { id: 2, name: "Family Pack", description: "Serves 2-3", price: 399 }
                    ],
                    addons: [
                        { id: 1, name: "Butter Naan", price: 30 },
                        { id: 2, name: "Tandoori Roti", price: 20 },
                        { id: 3, name: "Extra Gravy", price: 35 }
                    ],
                    isVeg: true
                }
            ]
        },

        //  Biryani & Rice
        {
            category: "Biryani & Rice",
            items: [
                {
                    id: 33,
                    name: "Hyderabadi Veg Biryani",
                    description: "Fragrant basmati rice cooked with spiced vegetables, mint, and saffron",
                    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
                    basePrice: 229,
                    rating: 4.8,
                    reviews: 1120,
                    badge: "Chef's Special",
                    portions: [
                        { id: 1, name: "Half", description: "Serves 1", price: 229 },
                        { id: 2, name: "Full", description: "Serves 2", price: 379 },
                        { id: 3, name: "Family Pack", description: "Serves 3-4", price: 549 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Raita", price: 25 },
                        { id: 2, name: "Gulab Jamun (2pcs)", price: 40 },
                        { id: 3, name: "Paneer 65 (Side)", price: 79 }
                    ],
                    isVeg: true
                },
                {
                    id: 34,
                    name: "Paneer Biryani",
                    description: "Aromatic basmati rice layered with paneer tikka and Hyderabadi spices",
                    image: "https://images.unsplash.com/photo-1642003376880-30a623f3a06e?w=400",
                    basePrice: 249,
                    rating: 4.7,
                    reviews: 954,
                    portions: [
                        { id: 1, name: "Half", description: "Serves 1", price: 249 },
                        { id: 2, name: "Full", description: "Serves 2", price: 389 }
                    ],
                    addons: [
                        { id: 1, name: "Mint Raita", price: 25 },
                        { id: 2, name: "Onion Salad", price: 20 },
                        { id: 3, name: "Extra Paneer Cubes", price: 40 }
                    ],
                    isVeg: true
                },
                {
                    id: 35,
                    name: "Veg Fried Rice",
                    description: "Stir-fried rice with colorful vegetables and soy seasoning",
                    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400",
                    basePrice: 189,
                    rating: 4.6,
                    reviews: 802,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 189 },
                        { id: 2, name: "Large", description: "Serves 2", price: 279 }
                    ],
                    addons: [
                        { id: 1, name: "Schezwan Sauce", price: 20 },
                        { id: 2, name: "Chilli Garlic Sauce", price: 20 },
                        { id: 3, name: "Spring Roll (2pcs)", price: 50 }
                    ],
                    isVeg: true
                },
                {
                    id: 36,
                    name: "Jeera Rice",
                    description: "Simple and flavorful basmati rice tempered with cumin seeds and ghee",
                    image: "https://images.unsplash.com/photo-1627308595121-8879f37a2867?w=400",
                    basePrice: 149,
                    rating: 4.5,
                    reviews: 524,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 149 },
                        { id: 2, name: "Family Pack", description: "Serves 2-3", price: 249 }
                    ],
                    addons: [
                        { id: 1, name: "Dal Tadka", price: 79 },
                        { id: 2, name: "Papad", price: 15 },
                        { id: 3, name: "Boondi Raita", price: 25 }
                    ],
                    isVeg: true
                },
                {
                    id: 37,
                    name: "Veg Pulao",
                    description: "Fragrant basmati rice cooked with seasonal veggies and mild spices",
                    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
                    basePrice: 179,
                    rating: 4.4,
                    reviews: 476,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 179 },
                        { id: 2, name: "Large", description: "Serves 2", price: 259 }
                    ],
                    addons: [
                        { id: 1, name: "Raita", price: 25 },
                        { id: 2, name: "Papad", price: 15 },
                        { id: 3, name: "Pickle", price: 10 }
                    ],
                    isVeg: true
                },
                {
                    id: 38,
                    name: "Curd Rice",
                    description: "South Indian-style rice mixed with creamy curd and tempered with mustard seeds",
                    image: "https://images.unsplash.com/photo-1626132647523-66f2f97b275d?w=400",
                    basePrice: 159,
                    rating: 4.6,
                    reviews: 388,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 159 },
                        { id: 2, name: "Combo", description: "Curd Rice + Papad + Pickle", price: 209 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Curd", price: 20 },
                        { id: 2, name: "Fried Chillies", price: 15 },
                        { id: 3, name: "Papad", price: 15 }
                    ],
                    isVeg: true
                }
            ]
        },

        // Indian Curries
        {
            category: "Indian Curries",
            items: [
                {
                    id: 39,
                    name: "Paneer Butter Masala",
                    description: "Rich, buttery tomato gravy with soft paneer cubes — a North Indian classic",
                    image: "https://images.unsplash.com/photo-1617196034796-73dfa1d7f565?w=400",
                    basePrice: 239,
                    rating: 4.8,
                    reviews: 920,
                    badge: "Bestseller",
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 239 },
                        { id: 2, name: "Family Pack", description: "Serves 2–3", price: 399 }
                    ],
                    addons: [
                        { id: 1, name: "Butter Naan", price: 30 },
                        { id: 2, name: "Jeera Rice", price: 50 },
                        { id: 3, name: "Extra Gravy", price: 35 }
                    ],
                    isVeg: true
                },
                {
                    id: 40,
                    name: "Shahi Paneer",
                    description: "Royal Mughlai curry with paneer cubes cooked in creamy cashew gravy",
                    image: "https://images.unsplash.com/photo-1603899122778-e0a6efb73a3e?w=400",
                    basePrice: 249,
                    rating: 4.7,
                    reviews: 802,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 249 },
                        { id: 2, name: "Large", description: "Serves 2", price: 379 }
                    ],
                    addons: [
                        { id: 1, name: "Butter Roti", price: 25 },
                        { id: 2, name: "Gulab Jamun (2pcs)", price: 40 },
                        { id: 3, name: "Extra Cashew Gravy", price: 45 }
                    ],
                    isVeg: true
                },
                {
                    id: 41,
                    name: "Palak Paneer",
                    description: "Cubes of paneer simmered in a flavorful spinach and garlic gravy",
                    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400",
                    basePrice: 229,
                    rating: 4.6,
                    reviews: 744,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 229 },
                        { id: 2, name: "Large", description: "Serves 2", price: 349 }
                    ],
                    addons: [
                        { id: 1, name: "Butter Naan", price: 30 },
                        { id: 2, name: "Plain Rice", price: 40 },
                        { id: 3, name: "Boondi Raita", price: 25 }
                    ],
                    isVeg: true
                },
                {
                    id: 42,
                    name: "Kadai Vegetable",
                    description: "Assorted seasonal vegetables cooked in a spiced tomato and capsicum gravy",
                    image: "https://images.unsplash.com/photo-1631515242808-497c3a7c52b3?w=400",
                    basePrice: 219,
                    rating: 4.5,
                    reviews: 625,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 219 },
                        { id: 2, name: "Family Pack", description: "Serves 2–3", price: 369 }
                    ],
                    addons: [
                        { id: 1, name: "Plain Paratha", price: 25 },
                        { id: 2, name: "Onion Salad", price: 20 },
                        { id: 3, name: "Pickle", price: 10 }
                    ],
                    isVeg: true
                },
                {
                    id: 43,
                    name: "Malai Kofta",
                    description: "Soft paneer and potato dumplings served in a rich creamy cashew gravy",
                    image: "https://images.unsplash.com/photo-1668236543095-cd2d4ef4ab2c?w=400",
                    basePrice: 259,
                    rating: 4.8,
                    reviews: 1085,
                    badge: "Chef’s Special",
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 259 },
                        { id: 2, name: "Large", description: "Serves 2", price: 399 }
                    ],
                    addons: [
                        { id: 1, name: "Butter Naan", price: 30 },
                        { id: 2, name: "Jeera Rice", price: 50 },
                        { id: 3, name: "Extra Kofta (1pc)", price: 45 }
                    ],
                    isVeg: true
                }
            ]
        },

        // Chinese
        {
            category: "Chinese",
            items: [
                {
                    id: 44,
                    name: "Hakka Noodles",
                    description: "Stir-fried noodles tossed with mixed veggies, soy sauce & garlic.",
                    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1e1b4?w=400",
                    basePrice: 169,
                    rating: 4.5,
                    reviews: 621,
                    portions: [
                        { id: 1, name: "Regular", description: "Single serving", price: 169 },
                        { id: 2, name: "Large", description: "Double serving", price: 239 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Schezwan Sauce", price: 25 },
                        { id: 2, name: "Paneer Cubes", price: 40 },
                        { id: 3, name: "Veg Manchurian Balls", price: 50 }
                    ],
                    isVeg: true
                },
                {
                    id: 45,
                    name: "Schezwan Fried Rice",
                    description: "Spicy rice tossed with Schezwan sauce & fresh vegetables.",
                    image: "https://images.unsplash.com/photo-1607114588685-8c2e4e647d2d?w=400",
                    basePrice: 179,
                    rating: 4.4,
                    reviews: 489,
                    portions: [
                        { id: 1, name: "Regular", description: "Single serving", price: 179 },
                        { id: 2, name: "Large", description: "Double serving", price: 249 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Schezwan Sauce", price: 25 },
                        { id: 2, name: "Spring Roll (2 pcs)", price: 60 },
                        { id: 3, name: "Chilli Paneer Side", price: 80 }
                    ],
                    isVeg: true
                },
                {
                    id: 46,
                    name: "Chilli Paneer Dry",
                    description: "Paneer cubes tossed with onions, capsicum, and spicy soy sauce.",
                    image: "https://images.unsplash.com/photo-1601050690597-4d5b2c748a6c?w=400",
                    basePrice: 209,
                    rating: 4.7,
                    reviews: 672,
                    portions: [
                        { id: 1, name: "Half", description: "Serves 1", price: 209 },
                        { id: 2, name: "Full", description: "Serves 2-3", price: 279 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Paneer", price: 50 },
                        { id: 2, name: "Chilli Sauce", price: 20 },
                        { id: 3, name: "Veg Fried Rice Combo", price: 70 }
                    ],
                    isVeg: true
                },
                {
                    id: 47,
                    name: "Spring Rolls",
                    description: "Crispy golden rolls filled with spiced vegetables.",
                    image: "https://images.unsplash.com/photo-1608039755401-4a4f04e2e3a7?w=400",
                    basePrice: 159,
                    rating: 4.3,
                    reviews: 312,
                    portions: [
                        { id: 1, name: "4 pcs", description: "Serves 1-2", price: 159 },
                        { id: 2, name: "8 pcs", description: "Serves 2-3", price: 249 }
                    ],
                    addons: [
                        { id: 1, name: "Sweet Chilli Sauce", price: 15 },
                        { id: 2, name: "Schezwan Dip", price: 20 },
                        { id: 3, name: "Cold Drink", price: 40 }
                    ],
                    isVeg: true
                },
                {
                    id: 48,
                    name: "Veg Momos (Steamed)",
                    description: "Soft dumplings stuffed with spiced veggies, served with chilli sauce.",
                    image: "https://images.unsplash.com/photo-1606755962773-0a0a1e3b81ad?w=400",
                    basePrice: 149,
                    rating: 4.5,
                    reviews: 542,
                    portions: [
                        { id: 1, name: "6 pcs", description: "Regular portion", price: 149 },
                        { id: 2, name: "12 pcs", description: "Large portion", price: 249 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Chilli Sauce", price: 20 },
                        { id: 2, name: "Fried Momos Upgrade", price: 30 },
                        { id: 3, name: "Coke 250ml", price: 40 }
                    ],
                    isVeg: true
                }
            ]
        },

        // 🌯 Wraps & Rolls
        {
            category: "Wraps & Rolls",
            items: [
                {
                    id: 49,
                    name: "Paneer Kathi Roll",
                    description: "Soft paratha roll stuffed with spicy paneer tikka, onions & mint chutney.",
                    image: "https://images.unsplash.com/photo-1627308595186-e6bb3671285a?w=400",
                    basePrice: 149,
                    rating: 4.6,
                    reviews: 528,
                    portions: [
                        { id: 1, name: "Single Roll", description: "Serves 1", price: 149 },
                        { id: 2, name: "Double Roll", description: "Serves 2", price: 249 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Paneer Filling", price: 40 },
                        { id: 2, name: "Cheese Add-on", price: 30 },
                        { id: 3, name: "Mint Chutney Dip", price: 15 }
                    ],
                    isVeg: true
                },
                {
                    id: 50,
                    name: "Veg Frankie",
                    description: "Tangy and spicy mixed veg stuffing rolled in a soft roti.",
                    image: "https://images.unsplash.com/photo-1604908177225-0c3f2b7f9f77?w=400",
                    basePrice: 119,
                    rating: 4.4,
                    reviews: 412,
                    portions: [
                        { id: 1, name: "Single Roll", description: "Serves 1", price: 119 },
                        { id: 2, name: "Double Roll", description: "Serves 2", price: 199 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Veg Filling", price: 25 },
                        { id: 2, name: "Cheese Topping", price: 20 },
                        { id: 3, name: "Schezwan Sauce", price: 15 }
                    ],
                    isVeg: true
                },
                {
                    id: 51,
                    name: "Aloo Tikki Roll",
                    description: "Crispy spiced potato tikki wrapped with lettuce and chutneys.",
                    image: "https://images.unsplash.com/photo-1622445275644-d2064b07a79a?w=400",
                    basePrice: 109,
                    rating: 4.3,
                    reviews: 386,
                    portions: [
                        { id: 1, name: "Single Roll", description: "Serves 1", price: 109 },
                        { id: 2, name: "Combo (Roll + Drink)", description: "Roll + Coke 250ml", price: 159 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Aloo Tikki", price: 25 },
                        { id: 2, name: "Chilli Mayo", price: 20 },
                        { id: 3, name: "Fries Add-on", price: 50 }
                    ],
                    isVeg: true
                },
                {
                    id: 52,
                    name: "Paneer Schezwan Roll",
                    description: "Paneer tossed in spicy Schezwan sauce wrapped with veggies in paratha.",
                    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400",
                    basePrice: 159,
                    rating: 4.7,
                    reviews: 495,
                    portions: [
                        { id: 1, name: "Single Roll", description: "Serves 1", price: 159 },
                        { id: 2, name: "Double Roll", description: "Serves 2", price: 259 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Schezwan Sauce", price: 20 },
                        { id: 2, name: "Cheese Burst", price: 30 },
                        { id: 3, name: "Cold Drink Combo", price: 40 }
                    ],
                    isVeg: true
                },
                {
                    id: 53,
                    name: "Mushroom Masala Roll",
                    description: "Juicy mushrooms in spicy masala wrapped with onions and mint sauce.",
                    image: "https://images.unsplash.com/photo-1603030922281-1c62e3f4b24b?w=400",
                    basePrice: 139,
                    rating: 4.5,
                    reviews: 328,
                    portions: [
                        { id: 1, name: "Single Roll", description: "Serves 1", price: 139 },
                        { id: 2, name: "Double Roll", description: "Serves 2", price: 229 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Mushroom Filling", price: 35 },
                        { id: 2, name: "Mint Chutney", price: 15 },
                        { id: 3, name: "Spicy Upgrade", price: 10 }
                    ],
                    isVeg: true
                },
                {
                    id: 54,
                    name: "Cheese Burst Veg Roll",
                    description: "Melty cheese-stuffed veg roll with a crispy outer layer and rich flavor.",
                    image: "https://images.unsplash.com/photo-1627042115360-3b4a5b9e8a4b?w=400",
                    basePrice: 169,
                    rating: 4.8,
                    reviews: 573,
                    portions: [
                        { id: 1, name: "Single Roll", description: "Serves 1", price: 169 },
                        { id: 2, name: "Double Roll", description: "Serves 2", price: 269 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Cheese", price: 30 },
                        { id: 2, name: "Schezwan Dip", price: 20 },
                        { id: 3, name: "Coke 250ml", price: 40 }
                    ],
                    isVeg: true
                }
            ]
        },


        // 🍴 Snacks & Chaats
        {
            category: "Snacks & Chaats",
            items: [
                {
                    id: 55,
                    name: "Pani Puri",
                    description: "Crispy puris served with tangy, spicy, and sweet flavored waters.",
                    image: "https://images.unsplash.com/photo-1626601536900-1b6de38d4d0c?w=400",
                    basePrice: 69,
                    rating: 4.8,
                    reviews: 924,
                    badge: "Bestseller",
                    portions: [
                        { id: 1, name: "Half Plate", description: "6 puris", price: 69 },
                        { id: 2, name: "Full Plate", description: "10 puris", price: 99 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Spicy Water", price: 10 },
                        { id: 2, name: "Sweet Tamarind Water", price: 10 },
                        { id: 3, name: "Extra Puris (4 pcs)", price: 20 }
                    ],
                    isVeg: true
                },
                {
                    id: 56,
                    name: "Bhel Puri",
                    description: "Crispy puffed rice mixed with chutneys, sev, onion & tangy spices.",
                    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400",
                    basePrice: 79,
                    rating: 4.7,
                    reviews: 716,
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 79 },
                        { id: 2, name: "Large", description: "Serves 2", price: 119 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Sev", price: 10 },
                        { id: 2, name: "Chopped Onions", price: 15 },
                        { id: 3, name: "Sweet Chutney", price: 10 }
                    ],
                    isVeg: true
                },
                {
                    id: 57,
                    name: "Aloo Tikki Chaat",
                    description: "Golden fried potato patties topped with curd, chutneys & spices.",
                    image: "https://images.unsplash.com/photo-1617692855027-c3d4e7aa8c74?w=400",
                    basePrice: 99,
                    rating: 4.6,
                    reviews: 682,
                    portions: [
                        { id: 1, name: "Single Plate", description: "2 tikkis", price: 99 },
                        { id: 2, name: "Double Plate", description: "4 tikkis", price: 169 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Curd", price: 20 },
                        { id: 2, name: "Sweet Tamarind Chutney", price: 15 },
                        { id: 3, name: "Extra Tikki (1 pc)", price: 25 }
                    ],
                    isVeg: true
                },
                {
                    id: 58,
                    name: "Sev Puri",
                    description: "Crispy puris layered with potatoes, chutneys & topped with sev.",
                    image: "https://images.unsplash.com/photo-1634728388885-0b37761e33a4?w=400",
                    basePrice: 89,
                    rating: 4.5,
                    reviews: 534,
                    portions: [
                        { id: 1, name: "Half Plate", description: "6 puris", price: 89 },
                        { id: 2, name: "Full Plate", description: "10 puris", price: 129 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Sev", price: 10 },
                        { id: 2, name: "Spicy Chutney", price: 15 },
                        { id: 3, name: "Extra Potatoes", price: 20 }
                    ],
                    isVeg: true
                },
                {
                    id: 59,
                    name: "Dahi Puri",
                    description: "Crispy puris filled with potatoes, curd, and sweet chutneys — a cooling delight!",
                    image: "https://images.unsplash.com/photo-1593629714320-d4df9b91c4a5?w=400",
                    basePrice: 99,
                    rating: 4.7,
                    reviews: 618,
                    portions: [
                        { id: 1, name: "Half Plate", description: "6 puris", price: 99 },
                        { id: 2, name: "Full Plate", description: "10 puris", price: 139 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Curd", price: 20 },
                        { id: 2, name: "Sweet Tamarind Sauce", price: 15 },
                        { id: 3, name: "Extra Sev", price: 10 }
                    ],
                    isVeg: true
                },
                {
                    id: 60,
                    name: "Samosa Chaat",
                    description: "Crumbled samosas topped with curd, chutneys & tangy spices — the perfect snack-time dish.",
                    image: "https://images.unsplash.com/photo-1652906703484-b47e1cc39863?w=400",
                    basePrice: 109,
                    rating: 4.8,
                    reviews: 748,
                    badge: "Most Loved",
                    portions: [
                        { id: 1, name: "Single Plate", description: "1 samosa", price: 109 },
                        { id: 2, name: "Double Plate", description: "2 samosas", price: 179 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Chutney", price: 15 },
                        { id: 2, name: "Curd Add-on", price: 20 },
                        { id: 3, name: "Extra Samosa", price: 35 }
                    ],
                    isVeg: true
                }
            ]
        },

        // 🥗 Healthy & Detox
        {
            category: "Healthy & Detox",
            items: [
                {
                    id: 61,
                    name: "Quinoa Salad",
                    description: "Protein-rich quinoa tossed with chickpeas, bell peppers, and lemon dressing.",
                    image: "https://images.unsplash.com/photo-1604909053197-3be8e3b0a6f9?w=400",
                    basePrice: 199,
                    rating: 4.8,
                    reviews: 612,
                    badge: "Bestseller",
                    portions: [
                        { id: 1, name: "Single Bowl", description: "Serves 1", price: 199 },
                        { id: 2, name: "Family Bowl", description: "Serves 2–3", price: 349 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Avocado", price: 50 },
                        { id: 2, name: "Feta Cheese Crumble", price: 40 },
                        { id: 3, name: "Extra Dressing", price: 20 }
                    ],
                    isVeg: true
                },
                {
                    id: 62,
                    name: "Detox Green Smoothie",
                    description: "A refreshing blend of spinach, cucumber, green apple & mint for a perfect detox.",
                    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
                    basePrice: 159,
                    rating: 4.7,
                    reviews: 498,
                    badge: "Editor's Choice",
                    portions: [
                        { id: 1, name: "Small", description: "300ml", price: 159 },
                        { id: 2, name: "Large", description: "500ml", price: 219 }
                    ],
                    addons: [
                        { id: 1, name: "Add Chia Seeds", price: 20 },
                        { id: 2, name: "Add Honey", price: 15 },
                        { id: 3, name: "Add Almond Milk", price: 30 }
                    ],
                    isVeg: true
                },
                {
                    id: 63,
                    name: "Fruit Bowl",
                    description: "Fresh seasonal fruits topped with honey and chia seeds for a natural energy boost.",
                    image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=400",
                    basePrice: 179,
                    rating: 4.9,
                    reviews: 854,
                    badge: "Most Loved",
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 179 },
                        { id: 2, name: "Family", description: "Serves 2–3", price: 299 }
                    ],
                    addons: [
                        { id: 1, name: "Extra Honey Drizzle", price: 15 },
                        { id: 2, name: "Greek Yogurt Add-on", price: 30 },
                        { id: 3, name: "Chopped Nuts", price: 25 }
                    ],
                    isVeg: true
                },
                {
                    id: 64,
                    name: "Avocado Toast",
                    description: "Whole-grain toast topped with smashed avocado, lemon juice & chili flakes.",
                    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1e0c2?w=400",
                    basePrice: 189,
                    rating: 4.6,
                    reviews: 576,
                    portions: [
                        { id: 1, name: "Single", description: "1 slice", price: 189 },
                        { id: 2, name: "Double", description: "2 slices", price: 259 }
                    ],
                    addons: [
                        { id: 1, name: "Add Poached Egg (veg-friendly)", price: 0 }, // You can skip this if strictly veg.
                        { id: 2, name: "Extra Avocado Spread", price: 40 },
                        { id: 3, name: "Add Tomato Salsa", price: 25 }
                    ],
                    isVeg: true
                },
                {
                    id: 65,
                    name: "Sprout Salad",
                    description: "A crunchy mix of moong sprouts, cucumber, tomato, and tangy lemon dressing.",
                    image: "https://images.unsplash.com/photo-1627308595189-ff0e5c74a3e3?w=400",
                    basePrice: 149,
                    rating: 4.5,
                    reviews: 489,
                    portions: [
                        { id: 1, name: "Small Bowl", description: "Serves 1", price: 149 },
                        { id: 2, name: "Large Bowl", description: "Serves 2", price: 229 }
                    ],
                    addons: [
                        { id: 1, name: "Add Lemon Juice", price: 10 },
                        { id: 2, name: "Add Boiled Corn", price: 20 },
                        { id: 3, name: "Add Pomegranate", price: 25 }
                    ],
                    isVeg: true
                },
                {
                    id: 66,
                    name: "Protein Smoothie Bowl",
                    description: "Banana, oats, peanut butter & almond milk blended to perfection — rich in protein.",
                    image: "https://images.unsplash.com/photo-1604908177074-4d8d59a7f4e0?w=400",
                    basePrice: 229,
                    rating: 4.8,
                    reviews: 692,
                    badge: "High Protein",
                    portions: [
                        { id: 1, name: "Regular", description: "Serves 1", price: 229 },
                        { id: 2, name: "Large", description: "Serves 2", price: 329 }
                    ],
                    addons: [
                        { id: 1, name: "Add Choco Chips", price: 20 },
                        { id: 2, name: "Add Granola", price: 30 },
                        { id: 3, name: "Add Peanut Butter Drizzle", price: 25 }
                    ],
                    isVeg: true
                }
            ]
        },

        // Desserts
        {
            category: "Desserts",
            items: [
                {
                    id: 67,
                    name: "Gulab Jamun",
                    description: "Soft, sweet milk dumplings soaked in rose-flavored syrup.",
                    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
                    basePrice: 99,
                    rating: 4.8,
                    reviews: 512,
                    addons: [
                        { id: 1, name: "Extra Syrup", price: 20 },
                        { id: 2, name: "Vanilla Ice Cream Scoop", price: 40 }
                    ],
                    portions: [
                        { id: 1, name: "2 pcs", description: "2 soft gulab jamuns", price: 99 },
                        { id: 2, name: "4 pcs", description: "4 gulab jamuns", price: 149 }
                    ],
                    isVeg: true
                },
                {
                    id: 68,
                    name: "Chocolate Brownie",
                    description: "Warm chocolate brownie served with chocolate syrup.",
                    image: "https://images.unsplash.com/photo-1614707267537-f8d51a6d8c3d?w=400",
                    basePrice: 159,
                    rating: 4.9,
                    reviews: 783,
                    addons: [
                        { id: 1, name: "Vanilla Ice Cream Scoop", price: 40 },
                        { id: 2, name: "Extra Chocolate Syrup", price: 25 }
                    ],
                    portions: [
                        { id: 1, name: "Single", description: "1 piece brownie", price: 159 },
                        { id: 2, name: "Double", description: "2 pieces brownie", price: 229 }
                    ],
                    isVeg: true
                },
                {
                    id: 69,
                    name: "Rasgulla",
                    description: "Soft and spongy Bengali sweet balls dipped in sugar syrup.",
                    image: "https://images.unsplash.com/photo-1673625163633-3b9c8f215c07?w=400",
                    basePrice: 99,
                    rating: 4.6,
                    reviews: 460,
                    addons: [
                        { id: 1, name: "Extra Syrup", price: 20 },
                        { id: 2, name: "Rabri Topping", price: 40 }
                    ],
                    portions: [
                        { id: 1, name: "2 pcs", description: "2 rasgullas", price: 99 },
                        { id: 2, name: "4 pcs", description: "4 rasgullas", price: 149 }
                    ],
                    isVeg: true
                },
                {
                    id: 70,
                    name: "Ice Cream Sundae",
                    description: "A delightful mix of ice creams topped with syrup and nuts.",
                    image: "https://images.unsplash.com/photo-1599785209707-28f3d5c28e52?w=400",
                    basePrice: 179,
                    rating: 4.7,
                    reviews: 612,
                    addons: [
                        { id: 1, name: "Extra Nuts", price: 25 },
                        { id: 2, name: "Chocolate Syrup", price: 20 }
                    ],
                    portions: [
                        { id: 1, name: "Small", description: "Single layer sundae", price: 179 },
                        { id: 2, name: "Large", description: "Double scoop sundae", price: 229 }
                    ],
                    isVeg: true
                },
                {
                    id: 71,
                    name: "Rasmalai",
                    description: "Soft paneer discs soaked in creamy saffron milk.",
                    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&fit=crop",
                    basePrice: 129,
                    rating: 4.8,
                    reviews: 544,
                    addons: [
                        { id: 1, name: "Extra Rabri", price: 30 },
                        { id: 2, name: "Dry Fruit Topping", price: 35 }
                    ],
                    portions: [
                        { id: 1, name: "2 pcs", description: "2 rasmalai pieces", price: 129 },
                        { id: 2, name: "4 pcs", description: "4 rasmalai pieces", price: 189 }
                    ],
                    isVeg: true
                },
                {
                    id: 72,
                    name: "Kesar Pista Kulfi",
                    description: "Rich Indian frozen dessert flavored with saffron and pistachio.",
                    image: "https://images.unsplash.com/photo-1604335399105-74bcae6f6a7f?w=400",
                    basePrice: 99,
                    rating: 4.5,
                    reviews: 390,
                    addons: [
                        { id: 1, name: "Rabri Topping", price: 30 },
                        { id: 2, name: "Dry Fruits", price: 25 }
                    ],
                    portions: [
                        { id: 1, name: "Single Stick", description: "1 kulfi", price: 99 },
                        { id: 2, name: "Double Stick", description: "2 kulfis", price: 149 }
                    ],
                    isVeg: true
                },
                {
                    id: 73,
                    name: "Mango Mousse",
                    description: "Creamy and refreshing mango-flavored dessert mousse.",
                    image: "https://images.unsplash.com/photo-1589307004394-8d1d8d11aa25?w=400",
                    basePrice: 149,
                    rating: 4.6,
                    reviews: 328,
                    addons: [
                        { id: 1, name: "Extra Mango Pulp", price: 25 },
                        { id: 2, name: "Whipped Cream", price: 30 }
                    ],
                    portions: [
                        { id: 1, name: "Small Cup", description: "Single serving", price: 149 },
                        { id: 2, name: "Large Cup", description: "Double serving", price: 199 }
                    ],
                    isVeg: true
                }
            ]
        },


        // Beverages
        {
            category: "Beverages",
            items: [
                {
                    id: 74,
                    name: "Mango Lassi",
                    description: "Creamy yogurt-based mango drink with a touch of cardamom.",
                    image: "https://images.unsplash.com/photo-1621263764928-b9778b93d7b0?w=400",
                    basePrice: 99,
                    rating: 4.8,
                    reviews: 520,
                    addons: [
                        { id: 1, name: "Extra Mango Pulp", price: 20 },
                        { id: 2, name: "Dry Fruits Topping", price: 25 }
                    ],
                    portions: [
                        { id: 1, name: "Regular", description: "250 ml glass", price: 99 },
                        { id: 2, name: "Large", description: "400 ml glass", price: 139 }
                    ],
                    isVeg: true
                },
                {
                    id: 75,
                    name: "Fresh Lime Soda",
                    description: "Refreshing soda with lime and mint — available sweet or salty.",
                    image: "https://images.unsplash.com/photo-1590080875831-a0c92dc91fcd?w=400",
                    basePrice: 79,
                    rating: 4.7,
                    reviews: 610,
                    addons: [
                        { id: 1, name: "Mint Leaves", price: 10 },
                        { id: 2, name: "Extra Lemon Juice", price: 15 }
                    ],
                    portions: [
                        { id: 1, name: "Sweet", description: "With sugar syrup", price: 79 },
                        { id: 2, name: "Salty", description: "With salt & spice mix", price: 79 }
                    ],
                    isVeg: true
                },
                {
                    id: 76,
                    name: "Cold Coffee",
                    description: "Chilled coffee with milk and ice cream on top.",
                    image: "https://images.unsplash.com/photo-1590080875831-21d74b6ebdf8?w=400",
                    basePrice: 129,
                    rating: 4.9,
                    reviews: 844,
                    addons: [
                        { id: 1, name: "Chocolate Syrup", price: 20 },
                        { id: 2, name: "Whipped Cream", price: 30 }
                    ],
                    portions: [
                        { id: 1, name: "Regular", description: "250 ml glass", price: 129 },
                        { id: 2, name: "Deluxe", description: "With ice cream scoop", price: 169 }
                    ],
                    isVeg: true
                },
                {
                    id: 77,
                    name: "Masala Chai",
                    description: "Aromatic spiced Indian tea brewed with milk and cardamom.",
                    image: "https://images.unsplash.com/photo-1615485290394-3da43c1f3f33?w=400",
                    basePrice: 49,
                    rating: 4.6,
                    reviews: 745,
                    addons: [
                        { id: 1, name: "Extra Strong", price: 10 },
                        { id: 2, name: "Ginger Add-on", price: 10 }
                    ],
                    portions: [
                        { id: 1, name: "Cup", description: "Small cup (150 ml)", price: 49 },
                        { id: 2, name: "Glass", description: "Full glass (250 ml)", price: 69 }
                    ],
                    isVeg: true
                },
                {
                    id: 78,
                    name: "Iced Tea",
                    description: "Chilled tea with lemon and mint, perfect for summer.",
                    image: "https://images.unsplash.com/photo-1623066498264-f5c3b8a42e69?w=400",
                    basePrice: 99,
                    rating: 4.5,
                    reviews: 482,
                    addons: [
                        { id: 1, name: "Peach Flavor", price: 20 },
                        { id: 2, name: "Lemon Flavor", price: 15 }
                    ],
                    portions: [
                        { id: 1, name: "Regular", description: "250 ml glass", price: 99 },
                        { id: 2, name: "Large", description: "400 ml glass", price: 139 }
                    ],
                    isVeg: true
                },
                {
                    id: 79,
                    name: "Buttermilk (Chaas)",
                    description: "Refreshing yogurt-based drink with cumin and mint.",
                    image: "https://images.unsplash.com/photo-1621768216002-5d842edc9c93?w=400",
                    basePrice: 69,
                    rating: 4.7,
                    reviews: 398,
                    addons: [
                        { id: 1, name: "Extra Mint", price: 10 },
                        { id: 2, name: "Jeera Tadka", price: 10 }
                    ],
                    portions: [
                        { id: 1, name: "Regular", description: "250 ml glass", price: 69 },
                        { id: 2, name: "Large", description: "400 ml glass", price: 99 }
                    ],
                    isVeg: true
                },
                {
                    id: 80,
                    name: "Tender Coconut Water",
                    description: "Natural, hydrating coconut water served chilled.",
                    image: "https://images.unsplash.com/photo-1615485290338-3da43c1f3f33?w=400",
                    basePrice: 79,
                    rating: 4.9,
                    reviews: 560,
                    addons: [
                        { id: 1, name: "Lemon Squeeze", price: 10 },
                        { id: 2, name: "Mint Leaf", price: 5 }
                    ],
                    portions: [
                        { id: 1, name: "Single Coconut", description: "1 serving (300 ml approx)", price: 79 },
                        { id: 2, name: "Double Coconut", description: "2 servings", price: 149 }
                    ],
                    isVeg: true
                }
            ]
        }
    ];

    const handleAddToCart = (item) => console.log("Added to cart:", item);

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-3 text-center">Food Card Component Demo</h1>
                <p className="text-gray-600 text-center mb-8">Modern Pure-Veg Menu — Dynamic, Realistic & Flexible</p>

                {cuisines.map((cuisine) => (
                    <div key={cuisine.category} className="mb-10">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{cuisine.category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cuisine.items.map((item) => (
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodCardDemo;