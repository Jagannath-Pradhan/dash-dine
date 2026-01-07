"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Package,
  ChevronRight,
  Calendar,
  MapPin,
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  Truck,
  CheckCircle2,
  XCircle,
  Clock,
  Filter,
  Search,
  ShoppingBag,
  Eye,
  X,
} from "lucide-react";

export default function ClientMyOrders({ user }) {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const statusOptions = [
    { value: "all", label: "All Orders", icon: Package },
    { value: "confirmed", label: "Confirmed", icon: CheckCircle2 },
    { value: "processing", label: "Processing", icon: Clock },
    { value: "shipped", label: "Shipped", icon: Truck },
    { value: "delivered", label: "Delivered", icon: CheckCircle2 },
    { value: "cancelled", label: "Cancelled", icon: XCircle },
  ];

  useEffect(() => {
    fetchOrders();
  }, [currentPage]);

  useEffect(() => {
    filterOrders();
  }, [orders, selectedStatus, searchQuery]);

  const fetchOrders = async () => {
    setIsLoading(true);

    // TODO: Replace with actual API call
    // try {
    //   const response = await fetch(`/api/orders/user?page=${currentPage}&limit=10`);
    //   const data = await response.json();
    //   setOrders(data.orders);
    //   setTotalPages(data.pagination.pages);
    // } catch (error) {
    //   console.error('Failed to fetch orders:', error);
    // } finally {
    //   setIsLoading(false);
    // }

    // Mock data for demonstration
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "1",
          orderNumber: "ORD1704123456789",
          status: "delivered",
          placedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
          deliveredAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          items: [
            { name: "Wireless Headphones", quantity: 1, price: 2999, image: "" },
            { name: "Phone Case", quantity: 2, price: 499, image: "" },
          ],
          deliveryAddress: {
            name: "John Doe",
            line1: "123 Main Street",
            city: "Mumbai",
            state: "Maharashtra",
            pincode: "400001",
          },
          paymentMethod: "card",
          amount: { total: 3997 },
        },
        {
          _id: "2",
          orderNumber: "ORD1704123456790",
          status: "shipped",
          placedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
          estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
          items: [
            { name: "Smart Watch", quantity: 1, price: 8999, image: "" },
          ],
          deliveryAddress: {
            name: "John Doe",
            line1: "123 Main Street",
            city: "Mumbai",
            state: "Maharashtra",
            pincode: "400001",
          },
          paymentMethod: "upi",
          trackingNumber: "TRK987654321",
          amount: { total: 8999 },
        },
        {
          _id: "3",
          orderNumber: "ORD1704123456791",
          status: "confirmed",
          placedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
          estimatedDelivery: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
          items: [
            { name: "Laptop Bag", quantity: 1, price: 1499, image: "" },
            { name: "Mouse Pad", quantity: 1, price: 299, image: "" },
          ],
          deliveryAddress: {
            name: "John Doe",
            line1: "456 Park Avenue",
            city: "Delhi",
            state: "Delhi",
            pincode: "110001",
          },
          paymentMethod: "cod",
          amount: { total: 1798 },
        },
      ];

      setOrders(mockOrders);
      setTotalPages(1);
      setIsLoading(false);
    }, 1000);
  };

  const filterOrders = () => {
    let filtered = [...orders];

    // Filter by status
    if (selectedStatus !== "all") {
      filtered = filtered.filter((order) => order.status === selectedStatus);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.orderNumber.toLowerCase().includes(query) ||
          order.items.some((item) => item.name.toLowerCase().includes(query))
      );
    }

    setFilteredOrders(filtered);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-100 text-blue-700";
      case "processing":
        return "bg-yellow-100 text-yellow-700";
      case "shipped":
        return "bg-purple-100 text-purple-700";
      case "delivered":
        return "bg-green-100 text-green-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "confirmed":
        return CheckCircle2;
      case "processing":
        return Clock;
      case "shipped":
        return Truck;
      case "delivered":
        return CheckCircle2;
      case "cancelled":
        return XCircle;
      default:
        return Package;
    }
  };

  const getPaymentMethodIcon = (method) => {
    switch (method) {
      case "card":
        return CreditCard;
      case "upi":
        return Smartphone;
      case "netbanking":
        return Building2;
      case "wallet":
        return Wallet;
      case "cod":
        return Package;
      default:
        return CreditCard;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleViewOrder = (orderId) => {
    sessionStorage.setItem("orderId", orderId);
    router.push("/order-confirmation");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-18 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            My Orders
          </h1>
          <p className="text-gray-600">
            Track, manage and view your order history
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by order number or product name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Status Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {statusOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.value}
                  onClick={() => setSelectedStatus(option.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedStatus === option.value
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No orders found
            </h3>
            <p className="text-gray-600 mb-6">
              {searchQuery || selectedStatus !== "all"
                ? "Try adjusting your filters"
                : "You haven't placed any orders yet"}
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => {
              const StatusIcon = getStatusIcon(order.status);
              const PaymentIcon = getPaymentMethodIcon(order.paymentMethod);

              return (
                <div
                  key={order._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Order Header */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 sm:p-6 border-b">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                            Order #{order.orderNumber}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                              order.status
                            )}`}
                          >
                            {order.status.charAt(0).toUpperCase() +
                              order.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Placed: {formatDate(order.placedAt)}</span>
                          </div>
                          {order.trackingNumber && (
                            <div className="flex items-center gap-1">
                              <Truck className="w-4 h-4" />
                              <span>Tracking: {order.trackingNumber}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600 mb-1">Total Amount</p>
                        <p className="text-xl sm:text-2xl font-bold text-orange-600">
                          ₹{order.amount.total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Order Body */}
                  <div className="p-4 sm:p-6">
                    {/* Items */}
                    <div className="space-y-3 mb-4">
                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 pb-3 border-b last:border-b-0"
                        >
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                            <Package className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                              {item.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600">
                              Qty: {item.quantity} × ₹{item.price.toFixed(2)}
                            </p>
                          </div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Delivery Info */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-orange-500" />
                          <span className="text-xs font-semibold text-gray-700">
                            Delivery Address
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">
                          {order.deliveryAddress.line1}, {order.deliveryAddress.city},{" "}
                          {order.deliveryAddress.state} - {order.deliveryAddress.pincode}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <PaymentIcon className="w-4 h-4 text-orange-500" />
                          <span className="text-xs font-semibold text-gray-700">
                            Payment Method
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 capitalize">
                          {order.paymentMethod === "cod"
                            ? "Cash on Delivery"
                            : order.paymentMethod}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleViewOrder(order.orderNumber)}
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 rounded-lg transition-all shadow-md"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>

                      {order.status === "shipped" && order.trackingNumber && (
                        <button className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-bold py-3 rounded-lg transition-all shadow-md border-2 border-gray-200">
                          <Truck className="w-4 h-4" />
                          Track Order
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white rounded-lg font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border shadow-sm"
            >
              Previous
            </button>
            <span className="px-4 py-2 bg-white rounded-lg font-medium text-gray-700 border shadow-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white rounded-lg font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border shadow-sm"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}