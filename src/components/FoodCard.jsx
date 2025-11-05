'use client'

import { useState } from 'react';
import { Star, Plus, Minus, ShoppingCart } from 'lucide-react';

const FoodCard = ({
    item,
    showQuantity = true,
    showPortions = true,
    showAddons = true,
    onAddToCart
}) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedPortion, setSelectedPortion] = useState(item.portions?.[0] || null);
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [isAdded, setIsAdded] = useState(false);

    const calculateTotalPrice = () => {
        let total = item.basePrice;

        if (selectedPortion && selectedPortion.price) {
            total = selectedPortion.price;
        }

        selectedAddons.forEach(addon => {
            total += addon.price;
        });

        return total * quantity;
    };

    const handleAddonToggle = (addon) => {
        setSelectedAddons(prev => {
            const exists = prev.find(a => a.id === addon.id);
            if (exists) {
                return prev.filter(a => a.id !== addon.id);
            }
            return [...prev, addon];
        });
    };

    const handleAddToCart = () => {
        const cartItem = {
            ...item,
            quantity,
            selectedPortion,
            selectedAddons,
            totalPrice: calculateTotalPrice()
        };

        onAddToCart?.(cartItem);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm border border-gray-100">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {item.isVeg !== undefined && (
                    <div className="absolute top-3 left-3 bg-white rounded px-2 py-1 shadow-md">
                        <div className={`w-4 h-4 border-2 ${item.isVeg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center`}>
                            <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                        </div>
                    </div>
                )}
                {item.badge && (
                    <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {item.badge}
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-5">
                {/* Title and Rating */}
                <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">{item.description}</p>

                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                            <span>{item.rating}</span>
                            <Star className="w-3 h-3 fill-current" />
                        </div>
                        <span className="text-xs text-gray-500">({item.reviews} reviews)</span>
                    </div>
                </div>

                {/* Scrollable Options Container */}
                <div className="max-h-64 overflow-y-auto custom-scrollbar space-y-4 mb-4 pr-2">
                    {/* Quantity Selector */}
                    {showQuantity && (
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-2 block">Quantity</label>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-2 w-fit">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-8 h-8 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="font-bold text-gray-800 min-w-[2rem] text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-8 h-8 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Portion Selector */}
                    {showPortions && item.portions && (
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-2 block">Choose Portion</label>
                            <div className="grid grid-cols-2 gap-2">
                                {item.portions.map((portion) => (
                                    <button
                                        key={portion.id}
                                        onClick={() => setSelectedPortion(portion)}
                                        className={`p-3 rounded-lg border-2 transition-all text-left ${selectedPortion?.id === portion.id
                                                ? 'border-orange-500 bg-orange-50'
                                                : 'border-gray-200 bg-white hover:border-orange-300'
                                            }`}
                                    >
                                        <div className="font-semibold text-sm text-gray-800">{portion.name}</div>
                                        <div className="text-xs text-gray-600">{portion.description}</div>
                                        {portion.price && (
                                            <div className="text-sm font-bold text-orange-600 mt-1">₹{portion.price}</div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Add-ons */}
                    {showAddons && item.addons && item.addons.length > 0 && (
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-2 block">Add-ons (Optional)</label>
                            <div className="space-y-2">
                                {item.addons.map((addon) => (
                                    <label
                                        key={addon.id}
                                        className="flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all hover:border-orange-300"
                                        style={{
                                            borderColor: selectedAddons.find(a => a.id === addon.id) ? '#f97316' : '#e5e7eb',
                                            backgroundColor: selectedAddons.find(a => a.id === addon.id) ? '#fff7ed' : 'white'
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                checked={selectedAddons.some(a => a.id === addon.id)}
                                                onChange={() => handleAddonToggle(addon)}
                                                className="w-4 h-4 accent-orange-500"
                                            />
                                            <span className="text-sm font-medium text-gray-800">{addon.name}</span>
                                        </div>
                                        <span className="text-sm font-bold text-orange-600">+₹{addon.price}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                        <div className="text-2xl font-bold text-gray-800">₹{calculateTotalPrice()}</div>
                        {quantity > 1 && (
                            <div className="text-xs text-gray-500">₹{calculateTotalPrice() / quantity} each</div>
                        )}
                    </div>
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdded}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${isAdded
                                ? 'bg-green-500 text-white'
                                : 'bg-orange-500 text-white hover:bg-orange-600 active:scale-95'
                            }`}
                    >
                        {isAdded ? (
                            <>
                                <span>✓</span>
                                <span>Added!</span>
                            </>
                        ) : (
                            <>
                                <ShoppingCart className="w-5 h-5" />
                                <span>Add to Cart</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard