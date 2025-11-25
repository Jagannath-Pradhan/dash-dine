'use client'

import { useState, useEffect } from 'react';
import { X, Tag, Check, AlertCircle } from 'lucide-react';

// Mock coupons - Replace with API call
const AVAILABLE_COUPONS = [
  {
    id: 1,
    code: 'FIRST50',
    description: '50% off on your first order',
    type: 'percentage',
    value: 50,
    maxDiscount: 100,
    minOrder: 199,
    isNew: true,
  },
  {
    id: 2,
    code: 'SAVE100',
    description: 'Flat ₹100 off on orders above ₹499',
    type: 'flat',
    value: 100,
    minOrder: 499,
  },
  {
    id: 3,
    code: 'MEGA20',
    description: '20% off on orders above ₹299',
    type: 'percentage',
    value: 20,
    maxDiscount: 150,
    minOrder: 299,
  },
  {
    id: 4,
    code: 'WEEKEND30',
    description: '30% off on weekend orders',
    type: 'percentage',
    value: 30,
    maxDiscount: 200,
    minOrder: 399,
  },
];

const CouponModal = ({ subtotal, onClose, onApplyCoupon, currentCoupon }) => {
  const [selectedCoupon, setSelectedCoupon] = useState(currentCoupon);
  const [customCode, setCustomCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const calculateDiscount = (coupon) => {
    if (subtotal < coupon.minOrder) return 0;
    
    if (coupon.type === 'percentage') {
      return Math.min(
        (subtotal * coupon.value) / 100,
        coupon.maxDiscount || Infinity
      );
    }
    return coupon.value;
  };

  const isCouponApplicable = (coupon) => {
    return subtotal >= coupon.minOrder;
  };

  const handleApplyCoupon = (coupon) => {
    if (!isCouponApplicable(coupon)) {
      setError(`Minimum order of ₹${coupon.minOrder} required for this coupon`);
      return;
    }
    
    setSelectedCoupon(coupon);
    setError('');
  };

  const handleApplyCustomCode = () => {
    const coupon = AVAILABLE_COUPONS.find(
      c => c.code.toLowerCase() === customCode.toLowerCase()
    );
    
    if (!coupon) {
      setError('Invalid coupon code');
      return;
    }
    
    if (!isCouponApplicable(coupon)) {
      setError(`Minimum order of ₹${coupon.minOrder} required`);
      return;
    }
    
    setSelectedCoupon(coupon);
    setError('');
    setCustomCode('');
  };

  const handleConfirm = () => {
    if (selectedCoupon) {
      onApplyCoupon(selectedCoupon);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Tag className="w-6 h-6" />
              Apply Coupon
            </h2>
            <p className="text-orange-100 text-sm mt-1">
              Save more on your order
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)] custom-scrollbar">
          {/* Custom Code Input */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Have a coupon code?
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={customCode}
                onChange={(e) => {
                  setCustomCode(e.target.value.toUpperCase());
                  setError('');
                }}
                placeholder="Enter coupon code"
                className="flex-1 p-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none font-semibold uppercase"
              />
              <button
                onClick={handleApplyCustomCode}
                disabled={!customCode}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-bold rounded-xl transition-colors disabled:cursor-not-allowed"
              >
                Apply
              </button>
            </div>
            {error && (
              <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}
          </div>

          {/* Available Coupons */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Available Coupons
            </h3>
            <div className="space-y-3">
              {AVAILABLE_COUPONS.map((coupon) => {
                const isApplicable = isCouponApplicable(coupon);
                const discount = calculateDiscount(coupon);
                const isSelected = selectedCoupon?.id === coupon.id;
                
                return (
                  <div
                    key={coupon.id}
                    className={`relative border-2 rounded-xl overflow-hidden transition-all ${
                      isSelected
                        ? 'border-orange-500 bg-orange-50 shadow-md'
                        : isApplicable
                        ? 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-md'
                        : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}
                  >
                    {/* Coupon Badge */}
                    {coupon.isNew && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        NEW
                      </div>
                    )}
                    
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg font-bold text-sm border-2 border-dashed border-orange-300">
                              {coupon.code}
                            </div>
                            {isSelected && (
                              <div className="bg-green-500 text-white p-1 rounded-full">
                                <Check className="w-4 h-4" />
                              </div>
                            )}
                          </div>
                          <p className="text-gray-700 text-sm mb-2">
                            {coupon.description}
                          </p>
                          <p className="text-xs text-gray-500">
                            Min. order: ₹{coupon.minOrder}
                            {coupon.maxDiscount && ` • Max discount: ₹${coupon.maxDiscount}`}
                          </p>
                        </div>
                      </div>

                      {isApplicable ? (
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-green-600 font-bold">
                            You save ₹{discount.toFixed(0)}
                          </span>
                          <button
                            onClick={() => handleApplyCoupon(coupon)}
                            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                              isSelected
                                ? 'bg-green-500 text-white'
                                : 'bg-orange-500 hover:bg-orange-600 text-white'
                            }`}
                          >
                            {isSelected ? 'Selected' : 'Apply'}
                          </button>
                        </div>
                      ) : (
                        <div className="mt-3 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>
                            Add ₹{coupon.minOrder - subtotal} more to unlock
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
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
            onClick={handleConfirm}
            disabled={!selectedCoupon}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-300 disabled:to-gray-300 text-white font-bold rounded-xl transition-all shadow-lg disabled:cursor-not-allowed disabled:shadow-none"
          >
            {selectedCoupon ? `Apply ${selectedCoupon.code}` : 'Select a Coupon'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponModal;