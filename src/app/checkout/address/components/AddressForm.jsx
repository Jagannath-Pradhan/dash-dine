import { useState } from "react";
import { X, Home, Briefcase } from "lucide-react";

export default function AddressForm({ address, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    type: address?.type || "home",
    name: address?.name || "",
    line1: address?.line1 || "",
    line2: address?.line2 || "",
    city: address?.city || "",
    state: address?.state || "",
    pincode: address?.pincode || "",
    phone: address?.phone || "",
    isDefault: address?.isDefault || false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.line1.trim()) newErrors.line1 = "Address line 1 is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSave({
        ...formData,
        _id: address?._id, // Preserve ID for editing
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-4 sm:px-6 py-4 flex items-center justify-between rounded-t-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            {address ? "Edit Address" : "Add New Address"}
          </h2>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close form"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          {/* Address Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Address Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, type: "home" }))}
                className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${
                  formData.type === "home"
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="font-semibold">Home</span>
              </button>
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, type: "work" }))}
                className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${
                  formData.type === "work"
                    ? "border-purple-500 bg-purple-50 text-purple-700"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span className="font-semibold">Work</span>
              </button>
            </div>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Label (e.g., Home, Office) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g., Home, Office, Parents House"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Address Line 1 */}
          <div>
            <label htmlFor="line1" className="block text-sm font-semibold text-gray-700 mb-2">
              Address Line 1 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="line1"
              name="line1"
              value={formData.line1}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                errors.line1 ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="House No., Street Name"
            />
            {errors.line1 && <p className="mt-1 text-sm text-red-600">{errors.line1}</p>}
          </div>

          {/* Address Line 2 */}
          <div>
            <label htmlFor="line2" className="block text-sm font-semibold text-gray-700 mb-2">
              Address Line 2 (Optional)
            </label>
            <input
              type="text"
              id="line2"
              name="line2"
              value={formData.line2}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              placeholder="Landmark, Area"
            />
          </div>

          {/* City, State, Pincode */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                  errors.city ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="City"
              />
              {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                  errors.state ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="State"
              />
              {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
            </div>

            <div>
              <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 mb-2">
                Pincode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                maxLength="6"
                className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                  errors.pincode ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="000000"
              />
              {errors.pincode && <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="+91 00000 00000"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          {/* Set as Default */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isDefault"
              name="isDefault"
              checked={formData.isDefault}
              onChange={handleChange}
              className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
            />
            <label htmlFor="isDefault" className="ml-2 text-sm text-gray-700">
              Set as default address
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="w-full sm:w-auto px-6 py-2.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2.5 rounded-lg transition-all shadow-lg"
            >
              {address ? "Update Address" : "Save Address"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}