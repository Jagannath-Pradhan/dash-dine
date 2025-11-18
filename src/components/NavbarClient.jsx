'use client';

import { ShoppingCart, User, LogOut, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from "react";
import axios from "axios";
import { usePathname } from 'next/navigation';

const NavbarClient = ({ isLoggedIn, userName, userRole, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const pathname = usePathname()

  const getAvatarLetters = (name) => {
    if (!name) return '';
    const trimmed = name.trim();
    const parts = trimmed.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return (trimmed[0] + trimmed[trimmed.length - 1]).toUpperCase();
  };

  const initials = getAvatarLetters(userName);

  const isAdmin = userRole && userRole === 'Admin';

  const handleLogout = async () => {
    try {
      await axios.get("/api/auth/logout");
      window.location.reload();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent italic">
              DashDine
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {/* <Link href="/menu" className={`transition ${isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>
                Menu
              </Link> */}
              <Link
                href="/menu"
                className={`transition ${pathname === "/menu"
                  ? "text-orange-500 font-semibold"   // ACTIVE
                  : isScrolled
                    ? "text-gray-700 hover:text-orange-500"
                    : "text-white hover:text-orange-300"
                  }`}
              >
                Menu
              </Link>

              {isLoggedIn && (
                // <Link href="/my-orders" className={`transition ${isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>
                //   My Orders
                // </Link>
                <Link
                  href="/my-orders"
                  className={`transition ${pathname === "/my-orders"
                    ? "text-orange-500 font-semibold"   // ACTIVE
                    : isScrolled
                      ? "text-gray-700 hover:text-orange-500"
                      : "text-white hover:text-orange-300"
                    }`}
                >
                  My Orders
                </Link>
              )}

              {isLoggedIn && isAdmin && (
                // <Link href="/admin" className={`transition ${isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>
                //   Admin Panel
                // </Link>
                <Link
                  href="/admin"
                  className={`transition ${pathname === "/admin"
                    ? "text-orange-500 font-semibold"
                    : isScrolled
                      ? "text-gray-700 hover:text-orange-500"
                      : "text-white hover:text-orange-300"
                    }`}
                >
                  Admin Panel
                </Link>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn && (
              <div className="relative">
                <button className={`p-2 rounded-full transition relative cursor-pointer ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white hover:bg-opacity-20'}`}>
                  <ShoppingCart className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white hover:text-black'}`} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            )}

            {isLoggedIn ? (
              <>
                <div className="w-9 h-9 bg-linear-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {initials}
                </div>

                <button
                  onClick={handleLogout}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition cursor-pointer ${isScrolled ? 'bg-linear-to-r from-orange-500 to-red-500 text-white' : 'bg-white text-gray-800 hover:bg-opacity-90'}`}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link href={'/auth'} className={`flex items-center space-x-2 px-6 py-2 rounded-lg hover:shadow-lg transition cursor-pointer ${isScrolled ? 'bg-linear-to-r from-orange-500 to-red-500 text-white' : 'bg-white text-gray-800 hover:opacity-80'}`}>
                <User className="w-4 h-4" />
                <span>Login / Register</span>
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white hover:bg-opacity-20'}`}>

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

            {/* <Link href="/menu" className={`block ${isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>
              Menu
            </Link> */}
            <Link
              href="/menu"
              className={`block ${pathname === "/menu"
                ? "text-orange-500 font-semibold"   // ACTIVE
                : isScrolled
                  ? "text-gray-700 hover:text-orange-500"
                  : "text-white hover:text-orange-300"
                }`}
            >
              Menu
            </Link>

            {isLoggedIn && (
              // <Link href="/my-orders" className={`block ${isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>
              //   My Orders
              // </Link>
              <Link
                href="/my-orders"
                className={`block ${pathname === "/my-orders"
                  ? "text-orange-500 font-semibold"
                  : isScrolled
                    ? "text-gray-700 hover:text-orange-500"
                    : "text-white hover:text-orange-300"
                  }`}
              >
                My Orders
              </Link>
            )}

            {isLoggedIn && isAdmin && (
              // <Link href="/admin" className={`block ${isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>
              //   Admin Panel
              // </Link>
              <Link
                href="/admin"
                className={`block ${pathname === "/admin"
                    ? "text-orange-500 font-semibold"
                    : isScrolled
                      ? "text-gray-700 hover:text-orange-500"
                      : "text-white hover:text-orange-300"
                  }`}
              >
                Admin Panel
              </Link>
            )}

            <div className="pt-3 border-t border-gray-200">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-9 h-9 bg-linear-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {initials}
                    </div>
                    <span className="font-medium">{userName}</span>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-linear-to-r from-orange-500 to-red-500 text-white"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <Link href={'/auth'} className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-linear-to-r from-orange-500 to-red-500 text-white">
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

export default NavbarClient;
