'use client'

import { Plus, Minus, Trash2, Pencil } from 'lucide-react';
import { useState } from 'react';

const CartItem = ({ item, onUpdateQuantity, onRemove, onEdit }) => {
  // console.log('Rendering CartItem:', item);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => onRemove(item._id), 300);
  };

  const pricePerUnit = item.totalPrice / item.quantity;

  return (
    // <div
    //   className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${
    //     isRemoving ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    //   }`}
    // >
    <div
      className={`
    bg-white rounded-2xl shadow-md hover:shadow-xl
    transition-all duration-300 overflow-hidden border border-gray-100
    ${isRemoving ? 'opacity-0 scale-95 max-h-0 mb-0' : 'opacity-100 scale-100 max-h-[1000px]'}
  `}
    >

      <div className="p-4 sm:p-5">
        <div className="flex gap-4">
          {/* Image */}
          <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            {item.isVeg !== undefined && (
              <div className="absolute top-2 left-2 bg-white rounded px-1.5 py-0.5 shadow">
                <div className={`w-3 h-3 border-2 ${item.isVeg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                </div>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 text-lg truncate">{item.name}</h3>
                {item.selectedPortion && (
                  <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded mt-1">
                    {item.selectedPortion.name}
                  </span>
                )}
              </div>

              <button
                onClick={onEdit}
                className="flex-shrink-0 p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                title="Edit item"
              >
                <Pencil className="w-4 h-4" />
              </button>
            </div>

            {/* Add-ons */}
            {item.selectedAddons && item.selectedAddons.length > 0 && (
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-1">Add-ons:</p>
                <div className="flex flex-wrap gap-1">
                  {item.selectedAddons.map((addon, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {addon.name} (+₹{addon.price})
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Special Instructions */}
            {item.specialInstructions && (
              <div className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs text-yellow-800">
                  <span className="font-semibold">Note:</span> {item.specialInstructions}
                </p>
              </div>
            )}

            {/* Quantity and Price */}
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                <button
                  onClick={() => onUpdateQuantity(item._id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="w-7 h-7 rounded-md bg-white shadow hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-800"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-bold text-gray-800 min-w-[1.5rem] text-center text-sm">
                  {item.quantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item._id, item.quantity + 1)}
                  className="w-7 h-7 rounded-md bg-white shadow hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">₹{item.totalPrice}</div>
                {item.quantity > 1 && (
                  <div className="text-xs text-gray-500">₹{pricePerUnit.toFixed(2)} each</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Remove Button - Mobile */}
        <button
          onClick={handleRemove}
          className="mt-3 w-full sm:hidden flex items-center justify-center gap-2 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
        >
          <Trash2 className="w-4 h-4" />
          <span>Remove</span>
        </button>
      </div>

      {/* Remove Button - Desktop */}
      <div className="hidden sm:block border-t border-gray-100">
        <button
          onClick={handleRemove}
          className="w-full flex items-center justify-center gap-2 py-3 text-red-600 hover:bg-red-50 transition-colors font-medium"
        >
          <Trash2 className="w-4 h-4" />
          <span>Remove Item</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;