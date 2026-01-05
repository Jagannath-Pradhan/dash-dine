"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Package,
  MapPin,
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  Calendar,
  Clock,
  Download,
  Home,
  ShoppingBag,
  Truck,
  ArrowRight,
} from "lucide-react";

export default function ClientOrderConfirmation({ user }) {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const orderId = sessionStorage.getItem("orderId");
    
    if (!orderId) {
      router.push("/my-cart");
      return;
    }

    // TODO: Replace with actual API call to fetch order from MongoDB
    // Example:
    // const fetchOrderDetails = async () => {
    //   try {
    //     const response = await fetch(`/api/orders/${orderId}`);
    //     const data = await response.json();
    //     setOrderDetails(data.order);
    //   } catch (error) {
    //     console.error('Failed to fetch order:', error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchOrderDetails();

    // Simulate fetching order details (will be replaced with DB call)
    setTimeout(() => {
      const mockOrderData = {
        orderId: orderId,
        orderNumber: orderId,
        status: "confirmed",
        placedAt: new Date().toISOString(),
        estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        items: [
          {
            _id: "1",
            name: "Sample Product 1",
            quantity: 2,
            price: 299.99,
            image: "/placeholder-product.jpg",
          },
          {
            _id: "2",
            name: "Sample Product 2",
            quantity: 1,
            price: 599.99,
            image: "/placeholder-product.jpg",
          },
        ],
        deliveryAddress: {
          name: "John Doe",
          line1: "123 Main Street",
          line2: "Apt 4B",
          city: "Mumbai",
          state: "Maharashtra",
          pincode: "400001",
          phone: "+91 9876543210",
        },
        paymentMethod: "card",
        paymentDetails: {
          last4: "1234",
          cardName: "John Doe",
        },
        amount: {
          subtotal: 1199.97,
          deliveryFee: 0,
          discount: 100,
          total: 1099.97,
        },
      };

      setOrderDetails(mockOrderData);
      setIsLoading(false);
    }, 1000);
  }, [router]);

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

  const getPaymentMethodLabel = (method) => {
    switch (method) {
      case "card":
        return "Credit/Debit Card";
      case "upi":
        return "UPI";
      case "netbanking":
        return "Net Banking";
      case "wallet":
        return "Wallet";
      case "cod":
        return "Cash on Delivery";
      default:
        return "Unknown";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="text-center">
          <p className="text-gray-600">Order not found</p>
        </div>
      </div>
    );
  }

  const PaymentIcon = getPaymentMethodIcon(orderDetails.paymentMethod);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle2 className="w-8 h-8 sm:w-12 sm:h-12 text-green-600" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-4">
            Thank you for your order. We've received it successfully.
          </p>
          <div className="bg-orange-50 rounded-lg p-4 inline-block">
            <p className="text-sm text-gray-600 mb-1">Order ID</p>
            <p className="text-lg sm:text-xl font-bold text-orange-600">
              {orderDetails.orderNumber}
            </p>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Order Status
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Order Confirmed</h3>
                <p className="text-sm text-gray-600">
                  {formatDate(orderDetails.placedAt)} at {formatTime(orderDetails.placedAt)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-500">Processing</h3>
                <p className="text-sm text-gray-500">
                  We're preparing your order
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Truck className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-500">Shipped</h3>
                <p className="text-sm text-gray-500">
                  Estimated: {formatDate(orderDetails.estimatedDelivery)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Delivery Address */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-bold text-gray-900">
                Delivery Address
              </h2>
            </div>
            <div className="space-y-1 text-sm">
              <p className="font-semibold text-gray-900">
                {orderDetails.deliveryAddress.name}
              </p>
              <p className="text-gray-600">
                {orderDetails.deliveryAddress.line1}
              </p>
              {orderDetails.deliveryAddress.line2 && (
                <p className="text-gray-600">
                  {orderDetails.deliveryAddress.line2}
                </p>
              )}
              <p className="text-gray-600">
                {orderDetails.deliveryAddress.city},{" "}
                {orderDetails.deliveryAddress.state} -{" "}
                {orderDetails.deliveryAddress.pincode}
              </p>
              {orderDetails.deliveryAddress.phone && (
                <p className="text-gray-600 pt-2">
                  Phone: {orderDetails.deliveryAddress.phone}
                </p>
              )}
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <PaymentIcon className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-bold text-gray-900">
                Payment Method
              </h2>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-gray-900">
                {getPaymentMethodLabel(orderDetails.paymentMethod)}
              </p>
              {orderDetails.paymentMethod === "card" &&
                orderDetails.paymentDetails && (
                  <p className="text-gray-600">
                    Card ending in {orderDetails.paymentDetails.last4}
                  </p>
                )}
              {orderDetails.paymentMethod === "upi" &&
                orderDetails.paymentDetails && (
                  <p className="text-gray-600">
                    UPI ID: {orderDetails.paymentDetails.upiId}
                  </p>
                )}
              {orderDetails.paymentMethod === "cod" && (
                <p className="text-gray-600">Pay when you receive</p>
              )}
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Order Items ({orderDetails.items.length})
          </h2>
          <div className="space-y-4">
            {orderDetails.items.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-4 pb-4 border-b last:border-b-0"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Package className="w-8 h-8 text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-600">
                    ₹{item.price.toFixed(2)} each
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Payment Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">
                ₹{orderDetails.amount.subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-semibold">
                {orderDetails.amount.deliveryFee === 0 ? (
                  <span className="text-green-600">FREE</span>
                ) : (
                  `₹${orderDetails.amount.deliveryFee.toFixed(2)}`
                )}
              </span>
            </div>
            {orderDetails.amount.discount > 0 && (
              <div className="flex justify-between text-sm sm:text-base text-green-600">
                <span>Discount</span>
                <span className="font-semibold">
                  -₹{orderDetails.amount.discount.toFixed(2)}
                </span>
              </div>
            )}
            <div className="border-t pt-3 flex justify-between items-center">
              <span className="font-bold text-lg">Total Paid</span>
              <span className="text-2xl font-bold text-orange-600">
                ₹{orderDetails.amount.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid sm:grid-cols-2 gap-4">
          <button
            onClick={() => router.push("/my-orders")}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg"
          >
            <ShoppingBag className="w-5 h-5" />
            View My Orders
          </button>
          <button
            onClick={() => router.push("/")}
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg border-2 border-gray-200"
          >
            <Home className="w-5 h-5" />
            Continue Shopping
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Need help with your order? Contact us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-orange-600 hover:underline"
            >
              support@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}