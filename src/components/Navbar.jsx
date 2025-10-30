import { ShoppingCart, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from "react";

const Navbar = ({ isLoggedIn, userName, onLogin, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent italic">
                DashDine
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#menu" className="text-gray-700 hover:text-orange-500 transition">Menu</a>
              {isLoggedIn && (
                <a href="#orders" className="text-gray-700 hover:text-orange-500 transition">My Orders</a>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
            
            {isLoggedIn ? (
              <>
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {userName}
                  </div>
                  <span className="text-gray-700 font-medium">{userName}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <button
                onClick={onLogin}
                className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition"
              >
                <User className="w-4 h-4" />
                <span>Login / Register</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <a href="#menu" className="block text-gray-700 hover:text-orange-500">Menu</a>
            {isLoggedIn && (
              <a href="#orders" className="block text-gray-700 hover:text-orange-500">My Orders</a>
            )}
            <div className="pt-3 border-t">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {userName}
                    </div>
                    <span className="text-gray-700 font-medium">{userName}</span>
                  </div>
                  <button
                    onClick={onLogout}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={onLogin}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg"
                >
                  <User className="w-4 h-4" />
                  <span>Login / Register</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;