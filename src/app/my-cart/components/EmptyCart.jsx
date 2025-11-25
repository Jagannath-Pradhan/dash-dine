'use client'

import { ShoppingCart, ArrowRight, UtensilsCrossed } from 'lucide-react';
import { useRouter } from 'next/navigation';

const EmptyCart = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Animated Illustration */}
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center animate-pulse">
            <ShoppingCart className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-4 border-dashed border-orange-200 rounded-full animate-spin-slow" />
        </div>

        {/* Text Content */}
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Your Cart is Empty
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Looks like you haven't added any delicious items to your cart yet. Start exploring our menu!
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => router.push('/menu')}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <UtensilsCrossed className="w-5 h-5" />
            <span>Browse Menu</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => router.push('/')}
            className="w-full border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 font-semibold py-3 px-8 rounded-xl transition-all cursor-pointer"
          >
            Go to Home
          </button>
        </div>

        {/* Popular Items Suggestion */}
        <div className="my-12 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200">
          <p className="text-sm font-semibold text-orange-800 mb-2">🔥 Trending Now</p>
          <p className="text-gray-700 text-sm">
            Check out our bestsellers and customer favorites to get started!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;