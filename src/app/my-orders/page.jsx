'use client'

import FoodCard from "@/components/FoodCard";

// Demo Component with Examples
const FoodCardDemo = () => {
    // Sample data for different food types
    const pizzaItem = {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
        basePrice: 249,
        rating: 4.5,
        reviews: 328,
        isVeg: true,
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
        ]
    };

    const dessertItem = {
        id: 2,
        name: "Chocolate Brownie",
        description: "Rich, fudgy brownie with Belgian chocolate and walnuts",
        image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400",
        basePrice: 129,
        rating: 4.7,
        reviews: 542,
        isVeg: true,
        badge: "Chef's Special"
    };

    const biryaniItem = {
        id: 3,
        name: "Veg Dum Biryani",
        description: "Aromatic basmati rice with mixed vegetables and traditional spices",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
        basePrice: 199,
        rating: 4.6,
        reviews: 892,
        isVeg: true,
        portions: [
            { id: 1, name: "Half", description: "Serves 1", price: 199 },
            { id: 2, name: "Full", description: "Serves 2", price: 349 }
        ],
        addons: [
            { id: 1, name: "Extra Raita", price: 30 },
            { id: 2, name: "Gulab Jamun (2pc)", price: 40 },
            { id: 3, name: "Papad", price: 15 }
        ]
    };

    const handleAddToCart = (item) => {
        console.log("Added to cart:", item);
        // Here you would integrate with your cart state management
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-3 text-center">Food Card Component Demo</h1>
                <p className="text-gray-600 text-center mb-8">Customizable cards for different food categories</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Pizza Card - Full features */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700 mb-3">Pizza (All Features)</h2>
                        <FoodCard
                            item={pizzaItem}
                            showQuantity={true}
                            showPortions={true}
                            showAddons={true}
                            onAddToCart={handleAddToCart}
                        />
                    </div>

                    {/* Dessert Card - No addons */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700 mb-3">Dessert (No Add-ons)</h2>
                        <FoodCard
                            item={dessertItem}
                            showQuantity={true}
                            showPortions={false}
                            showAddons={false}
                            onAddToCart={handleAddToCart}
                        />
                    </div>

                    {/* Biryani Card - Half/Full portions */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700 mb-3">Biryani (Half/Full)</h2>
                        <FoodCard
                            item={biryaniItem}
                            showQuantity={true}
                            showPortions={true}
                            showAddons={true}
                            onAddToCart={handleAddToCart}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCardDemo;