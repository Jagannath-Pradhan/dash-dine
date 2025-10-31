import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";

const ResetPasswordModal = ({ isOpen, onClose, onSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;
    return strength;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData({...formData, password: newPassword});
    setPasswordStrength(calculatePasswordStrength(newPassword));
  };

  const getStrengthColor = () => {
    if (passwordStrength === 0) return 'bg-gray-200';
    if (passwordStrength === 1) return 'bg-red-500';
    if (passwordStrength === 2) return 'bg-yellow-500';
    if (passwordStrength === 3) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (passwordStrength === 0) return '';
    if (passwordStrength === 1) return 'Weak';
    if (passwordStrength === 2) return 'Fair';
    if (passwordStrength === 3) return 'Good';
    return 'Strong';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // This will be replaced with actual API call
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Side - Image */}
          <div className="md:w-1/2 relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=1000&fit=crop"
              alt="Delicious Food"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-teal-600/90 flex items-center justify-center p-8">
              <div className="text-white text-center">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  🔐
                </div>
                <h2 className="text-3xl font-bold mb-4">Create New Password</h2>
                <p className="text-lg opacity-90 mb-6">
                  Choose a strong password to keep your account secure
                </p>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-left space-y-2">
                  <p className="text-sm font-semibold mb-2">Password must contain:</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">At least 8 characters</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Upper & lowercase letters</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">At least one number</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Special character (!@#$%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 p-8 md:p-12 flex items-center">
            <div className="w-full max-w-md mx-auto">
              {/* Mobile Icon */}
              <div className="md:hidden mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-4xl">
                  🔐
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Reset Password
                </h3>
                <p className="text-gray-600">
                  Enter your new password below
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handlePasswordChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter new password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                  )}
                  
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-600">Password strength:</span>
                        <span className={`text-xs font-semibold ${
                          passwordStrength <= 1 ? 'text-red-600' :
                          passwordStrength === 2 ? 'text-yellow-600' :
                          passwordStrength === 3 ? 'text-blue-600' : 'text-green-600'
                        }`}>
                          {getStrengthText()}
                        </span>
                      </div>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={`h-1 flex-1 rounded-full transition-colors ${
                              level <= passwordStrength ? getStrengthColor() : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Confirm new password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105"
                >
                  Reset Password
                </button>
              </form>

              <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-xs text-gray-600 text-center">
                  After resetting, you'll be redirected to login with your new password
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;