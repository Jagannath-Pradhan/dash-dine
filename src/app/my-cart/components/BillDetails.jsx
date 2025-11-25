'use client'

import { Tag, TruckIcon, Package, X, ShoppingCart, ArrowRight } from 'lucide-react';

const BillDetails = ({
  subtotal,
  deliveryFee,
  packagingCharges,
  discount,
  total,
  appliedCoupon,
  onRemoveCoupon,
  onApplyCoupon,
  onCheckout,
  isLoading
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Bill Details
        </h2>
      </div>

      <div className="p-5 space-y-4">
        {/* Item Total */}
        <div className="flex justify-between text-gray-700">
          <span>Item Total</span>
          <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
        </div>

        {/* Delivery Fee */}
        <div className="flex justify-between items-center text-gray-700">
          <div className="flex items-center gap-2">
            <TruckIcon className="w-4 h-4 text-gray-500" />
            <span>Delivery Fee</span>
          </div>
          {deliveryFee === 0 ? (
            <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through text-sm">₹40</span>
              <span className="font-semibold text-green-600">FREE</span>
            </div>
          ) : (
            <span className="font-semibold">₹{deliveryFee.toFixed(2)}</span>
          )}
        </div>

        {/* Packaging Charges */}
        {packagingCharges > 0 && (
          <div className="flex justify-between text-gray-700">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-gray-500" />
              <span>Packaging Charges</span>
            </div>
            <span className="font-semibold">₹{packagingCharges.toFixed(2)}</span>
          </div>
        )}

        {/* Coupon Section */}
        <div className="border-t border-dashed border-gray-300 pt-4">
          {appliedCoupon ? (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-green-600">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="font-medium">Coupon Applied</span>
                </div>
                <span className="font-semibold">-₹{discount.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                <div>
                  <p className="font-bold text-green-800">{appliedCoupon.code}</p>
                  <p className="text-xs text-green-600">{appliedCoupon.description}</p>
                </div>
                <button
                  onClick={onRemoveCoupon}
                  className="text-green-600 hover:text-green-700 p-1 hover:bg-green-100 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={onApplyCoupon}
              className="w-full flex items-center justify-between p-3 border-2 border-dashed border-orange-300 hover:border-orange-500 rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-orange-500" />
                <span className="font-medium text-gray-700 group-hover:text-orange-600">
                  Apply Coupon
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-orange-500" />
            </button>
          )}
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-200 pt-4">
          <div className="flex justify-between items-center text-lg">
            <span className="font-bold text-gray-900">Total Amount</span>
            <span className="font-bold text-gray-900 text-2xl">₹{total.toFixed(2)}</span>
          </div>
        </div>

        {/* Savings Badge */}
        {discount > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
            <p className="text-green-800 font-semibold">
              🎉 You saved ₹{discount.toFixed(2)} on this order!
            </p>
          </div>
        )}

        {/* Checkout Button */}
        <button
          onClick={onCheckout}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Safe and Secure */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Safe and Secure Payments</span>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;