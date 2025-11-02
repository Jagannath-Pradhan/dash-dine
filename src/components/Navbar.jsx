import { ShoppingCart, User, LogOut, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from "react";

const Navbar = ({ isLoggedIn, userName, onLogin, onLogout, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent italic">
                DashDine
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#menu" className={`transition ${isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'
                }`}>Menu</a>
              {isLoggedIn && (
                <a href="#orders" className={`transition ${isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'
                  }`}>My Orders</a>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button className={`p-2 rounded-full transition relative ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white hover:bg-opacity-20'
                }`}>
                <ShoppingCart className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
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
                  <div className="w-9 h-9 bg-linear-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {userName}
                  </div>
                  <span className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>{userName}</span>
                </div>
                <button
                  onClick={onLogout}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${isScrolled
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      : 'bg-white bg-opacity-20 hover:bg-opacity-30 text-white backdrop-blur-sm'
                    }`}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              // <button
              //   onClick={onLogin}
              //   className={`flex items-center space-x-2 px-6 py-2 rounded-lg hover:shadow-lg transition cursor-pointer ${
              //     isScrolled
              //       ? 'bg-linear-to-r from-orange-500 to-red-500 text-white'
              //       : 'bg-white text-gray-800 hover:bg-opacity-90'
              //   }`}
              // >
              //   <User className="w-4 h-4" />
              //   <span>Login / Register</span>
              // </button>
              <Link href={'/auth'}
                className={`flex items-center space-x-2 px-6 py-2 rounded-lg hover:shadow-lg transition cursor-pointer ${isScrolled
                    ? 'bg-linear-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-white text-gray-800 hover:bg-opacity-90'
                  }`}
              >
                <User className="w-4 h-4" />
                <span>Login / Register</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white hover:bg-opacity-20'
              }`}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t ${isScrolled ? 'bg-white' : 'bg-black bg-opacity-80 backdrop-blur-md'}`}>
          <div className="px-4 py-3 space-y-3">
            <a href="#menu" className={`block ${isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>Menu</a>
            {isLoggedIn && (
              <a href="#orders" className={`block ${isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>My Orders</a>
            )}
            <div className={`pt-3 ${isScrolled ? 'border-t border-gray-200' : 'border-t border-white border-opacity-20'}`}>
              {isLoggedIn ? (
                <>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-9 h-9 bg-linear-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {userName}
                    </div>
                    <span className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>{userName}</span>
                  </div>
                  <button
                    onClick={onLogout}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg ${isScrolled ? 'bg-gray-100' : 'bg-white bg-opacity-20 text-white'
                      }`}
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <Link href={'/auth'}
                  className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg cursor-pointer ${isScrolled
                      ? 'bg-linear-to-r from-orange-500 to-red-500 text-white'
                      : 'bg-white text-gray-800'
                    }`}
                >
                  <User className="w-4 h-4" />
                  <span>Login / Register</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;