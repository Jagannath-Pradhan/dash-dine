'use client'

import { useState, useEffect } from 'react';
import { X, Plus, Minus, Save } from 'lucide-react';

const EditItemModal = ({ item, onClose, onUpdate }) => {
  // console.log('Editing item:', item);
  const [quantity, setQuantity] = useState(item.quantity);
  const [selectedPortion, setSelectedPortion] = useState(item.selectedPortion);
  const [selectedAddons, setSelectedAddons] = useState(item.selectedAddons || []);
  const [specialInstructions, setSpecialInstructions] = useState(item.specialInstructions || '');

  const calculateNewPrice = () => {
    let basePrice = item.basePrice;
    
    if (selectedPortion && selectedPortion.price) {
      basePrice = selectedPortion.price;
    }
    
    selectedAddons.forEach(addon => {
      basePrice += addon.price;
    });
    
    return basePrice * quantity;
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

  const handleSave = () => {
    const updates = {
      quantity,
      selectedPortion,
      selectedAddons,
      specialInstructions,
      totalPrice: calculateNewPrice(),
    };
    
    onUpdate(item._id, updates);
    onClose();
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[100vh] overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Edit Item</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)] custom-scrollbar">
          {/* Item Info */}
          <div className="flex gap-4 mb-6 pb-6 border-b border-gray-200">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 mb-3 block">Quantity</label>
            <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-3 w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="font-bold text-gray-800 text-xl min-w-[3rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Portions */}
          {item.portions && item.portions.length > 0 && (
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">Choose Portion</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {item.portions.map((portion) => (
                  <button
                    key={portion.id}
                    onClick={() => setSelectedPortion(portion)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selectedPortion?.id === portion.id
                        ? 'border-orange-500 bg-orange-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-orange-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-800">{portion.name}</div>
                    <div className="text-xs text-gray-600 mt-1">{portion.description}</div>
                    {portion.price && (
                      <div className="text-sm font-bold text-orange-600 mt-2">
                        ₹{portion.price}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add-ons */}
          {item.addons && item.addons.length > 0 && (
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">
                Add-ons (Optional)
              </label>
              <div className="space-y-2">
                {item.addons.map((addon) => (
                  <label
                    key={addon.id}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
                      selectedAddons.find(a => a.id === addon.id)
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 bg-white hover:border-orange-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedAddons.some(a => a.id === addon.id)}
                        onChange={() => handleAddonToggle(addon)}
                        className="w-5 h-5 accent-orange-500 cursor-pointer"
                      />
                      <span className="font-medium text-gray-800">{addon.name}</span>
                    </div>
                    <span className="text-sm font-bold text-orange-600">+₹{addon.price}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 mb-3 block">
              Special Instructions (Optional)
            </label>
            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="E.g., Extra spicy, No onion, Less oil..."
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none resize-none transition-colors"
              rows="3"
              maxLength="200"
            />
            <p className="text-xs text-gray-500 mt-2">
              {specialInstructions.length}/200 characters
            </p>
          </div>

          {/* Price Preview */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Updated Total:</span>
              <span className="text-2xl font-bold text-orange-600">
                ₹{calculateNewPrice()}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-200 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-6 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Save className="w-5 h-5" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditItemModal;