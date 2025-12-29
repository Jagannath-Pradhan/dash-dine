import { Home, Briefcase, Edit2, Trash2 } from "lucide-react";

export default function AddressCard({
  address,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
}) {
  return (
    <div
      onClick={onSelect}
      className={`bg-white rounded-xl p-4 sm:p-5 cursor-pointer transition-all border-2 ${
        isSelected
          ? "border-orange-500 shadow-lg ring-2 ring-orange-200"
          : "border-gray-200 hover:border-orange-300 hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-lg ${
              address.type === "home" ? "bg-blue-100" : "bg-purple-100"
            }`}
          >
            {address.type === "home" ? (
              <Home className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            ) : (
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            )}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">
              {address.name}
            </h3>
            {address.isDefault && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full inline-block mt-1">
                Default
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-1 sm:gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Edit address"
          >
            <Edit2 className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="p-1.5 sm:p-2 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Delete address"
          >
            <Trash2 className="w-4 h-4 text-red-600" />
          </button>
        </div>
      </div>

      <div className="space-y-1 text-sm">
        <p className="text-gray-700">{address.line1}</p>
        {address.line2 && <p className="text-gray-700">{address.line2}</p>}
        <p className="text-gray-600">
          {address.city}, {address.state} - {address.pincode}
        </p>
        <p className="text-gray-600 font-medium">Phone: {address.phone}</p>
      </div>

      {isSelected && (
        <div className="mt-3 pt-3 border-t border-orange-100">
          <p className="text-xs text-orange-600 font-semibold flex items-center gap-1">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Selected for delivery
          </p>
        </div>
      )}
    </div>
  );
}