import { Eye, EyeOff, Facebook, X } from 'lucide-react';
import { useState } from 'react';

const AuthModal = ({ isOpen, onClose, onLoginSuccess, onForgotPassword }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess(formData.name || 'JD');
    onClose();
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    onLoginSuccess('JD');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex flex-col md:flex-row overflow-y-auto">
          {/* Left Side - Image */}
          <div className="md:w-1/2 relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop"
              alt="Delicious Food"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 to-red-600/90 flex items-center justify-center p-6">
              <div className="text-white text-center space-y-3">
                <h2 className="text-3xl font-bold">Welcome to FoodExpress</h2>
                <p className="text-lg opacity-90">
                  Your favorite meals, delivered fresh and fast
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      🍕
                    </div>
                    <p className="text-left text-sm">Order from 500+ restaurants</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      ⚡
                    </div>
                    <p className="text-left text-sm">Lightning fast delivery</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      💰
                    </div>
                    <p className="text-left text-sm">Exclusive deals & offers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
            <div className="max-w-md mx-auto">
              {/* Mobile Image */}
              <div className="md:hidden mb-4 -mx-6 -mt-6">
                <div className="relative h-40">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=300&fit=crop"
                    alt="Food"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 to-red-600/90 flex items-center justify-center">
                    <h2 className="text-xl font-bold text-white">FoodExpress</h2>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {isLogin ? 'Welcome Back!' : 'Join FoodExpress'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isLogin
                    ? 'Sign in to continue your culinary journey'
                    : 'Create an account to get started'}
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-2 mb-5">
                <button
                  onClick={() => handleSocialLogin('Google')}
                  className="w-full flex items-center justify-center space-x-3 px-4 py-2.5 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition text-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="font-medium text-gray-700">Continue with Google</span>
                </button>

                <button
                  onClick={() => handleSocialLogin('Facebook')}
                  className="w-full flex items-center justify-center space-x-3 px-4 py-2.5 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition text-sm"
                >
                  <Facebook className="w-4 h-4 text-blue-600 fill-blue-600" />
                  <span className="font-medium text-gray-700">Continue with Facebook</span>
                </button>
              </div>

              <div className="relative mb-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-4 bg-white text-gray-500">Or continue with email</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {!isLogin && (
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-sm"
                      placeholder="John Doe"
                      required={!isLogin}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-sm"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-sm"
                      placeholder="+91 98765 43210"
                      required={!isLogin}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-sm"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between text-xs">
                    <label className="flex items-center">
                      <input type="checkbox" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                      <span className="ml-2 text-gray-600">Remember me</span>
                    </label>
                    <button 
                      type="button"
                      onClick={onForgotPassword}
                      className="text-orange-500 hover:text-orange-600 font-medium"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105 text-sm"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              <div className="mt-4 text-center text-sm">
                <p className="text-gray-600">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-orange-500 hover:text-orange-600 font-semibold"
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>

              {!isLogin && (
                <p className="mt-3 text-[11px] text-gray-500 text-center">
                  By creating an account, you agree to our{' '}
                  <a href="#" className="text-orange-500 hover:underline">Terms of Service</a> and{' '}
                  <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;