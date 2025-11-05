// app/not-found.jsx
import Link from 'next/link';
import { Home, Search, UtensilsCrossed, ChefHat, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Food Icon */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <UtensilsCrossed className="w-32 h-32 text-orange-600 animate-bounce" strokeWidth={1.5} />
              <div className="absolute -top-2 -right-2">
                <ChefHat className="w-16 h-16 text-red-500 animate-wiggle" />
              </div>
            </div>
          </div>
        </div>

        {/* 404 Text with Gradient */}
        <h1 className="text-8xl md:text-9xl font-black mb-4">
          <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent animate-gradient">
            404
          </span>
        </h1>

        {/* Main Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          This page is as lost as pineapple on pizza 🍕
        </p>

        {/* Fun Messages */}
        {/* <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-orange-100 shadow-lg">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-orange-600">Don't worry!</span> We've got plenty of delicious options for you.
          </p>
          <p className="text-sm text-gray-500">
            Maybe this page is still cooking in our kitchen? 🍳
          </p>
        </div> */}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Home Button */}
          <Link
            href="/"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>

          {/* Menu Button */}
          <Link
            href="/menu"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-orange-500 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform text-orange-600" />
            Browse Menu
          </Link>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Popular pages you might be looking for:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="px-4 py-2 text-sm bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="px-4 py-2 text-sm bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors"
            >
              Full Menu
            </Link>
            <Link
              href="/my-orders"
              className="px-4 py-2 text-sm bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors"
            >
              My Orders
            </Link>
            <Link
              href="/cart"
              className="px-4 py-2 text-sm bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Food Emojis */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">🍕</div>
        <div className="absolute top-40 right-20 text-5xl animate-float-delayed opacity-20">🍔</div>
        <div className="absolute bottom-32 left-20 text-5xl animate-float opacity-20">🍜</div>
        <div className="absolute bottom-20 right-40 text-6xl animate-float-delayed opacity-20">🍰</div>
        <div className="absolute top-1/2 left-1/4 text-4xl animate-float opacity-10">🥗</div>
        <div className="absolute top-1/3 right-1/3 text-4xl animate-float-delayed opacity-10">🍱</div>
      </div>
    </div>
  );
}