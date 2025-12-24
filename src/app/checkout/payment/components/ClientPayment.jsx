"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CreditCard,
  Wallet,
  Building2,
  Smartphone,
  CheckCircle2,
  Shield,
  MapPin,
  Package,
} from "lucide-react";

export default function ClientPayment({ user }) {
  const router = useRouter();
  const [checkoutData, setCheckoutData] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");

  const paymentMethods = [
    {
      id: "card",
      name: "Credit / Debit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, RuPay",
      color: "blue",
    },
    {
      id: "upi",
      name: "UPI",
      icon: Smartphone,
      description: "Google Pay, PhonePe, Paytm",
      color: "purple",
    },
    {
      id: "netbanking",
      name: "Net Banking",
      icon: Building2,
      description: "All major banks",
      color: "green",
    },
    {
      id: "wallet",
      name: "Wallets",
      icon: Wallet,
      description: "Paytm, PhonePe, Amazon Pay",
      color: "orange",
    },
    {
      id: "cod",
      name: "Cash on Delivery",
      icon: Package,
      description: "Pay when you receive",
      color: "gray",
    },
  ];

  useEffect(() => {
    const data = sessionStorage.getItem("checkoutData");
    if (!data) {
      router.push("/my-cart");
      return;
    }

    const parsedData = JSON.parse(data);
    if (!parsedData.deliveryAddress) {
      router.push("/checkout/address");
      return;
    }

    setCheckoutData(parsedData);
  }, [router]);

  const handlePaymentMethodSelect = (methodId) => {
    setSelectedPaymentMethod(methodId);
    // Reset form data when switching payment methods
    setCardDetails({
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
    });
    setUpiId("");
  };

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\s/g, "");
    const chunks = cleaned.match(/.{1,4}/g);
    return chunks ? chunks.join(" ") : cleaned;
  };

  const formatExpiryDate = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const handleCardInputChange = (field, value) => {
    let formattedValue = value;

    if (field === "cardNumber") {
      formattedValue = formatCardNumber(value.replace(/\D/g, "").slice(0, 16));
    } else if (field === "expiryDate") {
      formattedValue = formatExpiryDate(value.slice(0, 5));
    } else if (field === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 3);
    }

    setCardDetails((prev) => ({
      ...prev,
      [field]: formattedValue,
    }));
  };

  const validatePayment = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method");
      return false;
    }

    if (selectedPaymentMethod === "card") {
      if (
        !cardDetails.cardNumber ||
        !cardDetails.cardName ||
        !cardDetails.expiryDate ||
        !cardDetails.cvv
      ) {
        alert("Please fill in all card details");
        return false;
      }
      if (cardDetails.cardNumber.replace(/\s/g, "").length !== 16) {
        alert("Please enter a valid 16-digit card number");
        return false;
      }
      if (cardDetails.cvv.length !== 3) {
        alert("Please enter a valid 3-digit CVV");
        return false;
      }
    }

    if (selectedPaymentMethod === "upi" && !upiId) {
      alert("Please enter your UPI ID");
      return false;
    }

    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validatePayment()) return;

    setIsProcessing(true);

    // Prepare order data for API
    const orderData = {
      userId: user?.id,
      items: checkoutData.items,
      deliveryAddress: checkoutData.deliveryAddress,
      paymentMethod: selectedPaymentMethod,
      paymentDetails:
        selectedPaymentMethod === "card"
          ? {
              last4: cardDetails.cardNumber.slice(-4),
              cardName: cardDetails.cardName,
            }
          : selectedPaymentMethod === "upi"
          ? { upiId }
          : {},
      amount: {
        subtotal: checkoutData.subtotal,
        deliveryFee: checkoutData.deliveryFee,
        discount: checkoutData.discount,
        total: checkoutData.total,
      },
      timestamp: new Date().toISOString(),
    };

    // TODO: Replace with actual API call
    // Example:
    // try {
    //   const response = await fetch('/api/orders/create', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(orderData)
    //   });
    //   const result = await response.json();
    //   if (result.success) {
    //     sessionStorage.setItem('orderId', result.orderId);
    //     sessionStorage.removeItem('checkoutData');
    //     router.push('/order-confirmation');
    //   }
    // } catch (error) {
    //   console.error('Order placement failed:', error);
    //   alert('Failed to place order. Please try again.');
    // }

    // Simulate API call
    setTimeout(() => {
      console.log("Order Data:", orderData);
      sessionStorage.setItem("orderId", "ORD" + Date.now());
      sessionStorage.removeItem("checkoutData");
      setIsProcessing(false);
      router.push("/order-confirmation");
    }, 2000);
  };

  if (!checkoutData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const { deliveryAddress } = checkoutData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-700 hover:text-orange-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Address</span>
        </button>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Method
          </h1>
          <p className="text-gray-600">Choose how you want to pay</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <span className="ml-2 font-semibold text-green-600">Cart</span>
            </div>
            <div className="w-20 h-1 bg-green-500 mx-2" />
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <span className="ml-2 font-semibold text-green-600">
                Address
              </span>
            </div>
            <div className="w-20 h-1 bg-orange-500 mx-2" />
            <div className="flex items-center">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <span className="ml-2 font-semibold text-orange-600">
                Payment
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Payment Methods */}
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Method Selection */}
            <div className="space-y-3">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                const isSelected = selectedPaymentMethod === method.id;

                return (
                  <div
                    key={method.id}
                    onClick={() => handlePaymentMethodSelect(method.id)}
                    className={`bg-white rounded-xl p-5 cursor-pointer transition-all border-2 ${
                      isSelected
                        ? "border-orange-500 shadow-lg"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-lg bg-${method.color}-100`}
                        >
                          <Icon
                            className={`w-6 h-6 text-${method.color}-600`}
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">
                            {method.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {method.description}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          isSelected
                            ? "border-orange-500 bg-orange-500"
                            : "border-gray-300"
                        }`}
                      >
                        {isSelected && (
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Payment Details Form */}
            {selectedPaymentMethod === "card" && (
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-orange-500" />
                  Enter Card Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={cardDetails.cardNumber}
                      onChange={(e) =>
                        handleCardInputChange("cardNumber", e.target.value)
                      }
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      value={cardDetails.cardName}
                      onChange={(e) =>
                        handleCardInputChange("cardName", e.target.value)
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={cardDetails.expiryDate}
                        onChange={(e) =>
                          handleCardInputChange("expiryDate", e.target.value)
                        }
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={cardDetails.cvv}
                        onChange={(e) =>
                          handleCardInputChange("cvv", e.target.value)
                        }
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedPaymentMethod === "upi" && (
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-orange-500" />
                  Enter UPI ID
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@paytm"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {selectedPaymentMethod === "netbanking" && (
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-orange-500" />
                  Select Your Bank
                </h3>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option value="">Choose your bank</option>
                  <option value="sbi">State Bank of India</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="icici">ICICI Bank</option>
                  <option value="axis">Axis Bank</option>
                  <option value="kotak">Kotak Mahindra Bank</option>
                </select>
              </div>
            )}

            {selectedPaymentMethod === "wallet" && (
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-orange-500" />
                  Select Wallet
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["Paytm", "PhonePe", "Amazon Pay", "Mobikwik"].map(
                    (wallet) => (
                      <button
                        key={wallet}
                        className="p-4 border-2 border-gray-200 hover:border-orange-500 rounded-lg transition-colors font-medium"
                      >
                        {wallet}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {selectedPaymentMethod === "cod" && (
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">
                      Cash on Delivery
                    </h3>
                    <p className="text-sm text-blue-800">
                      Pay with cash when your order is delivered. Please keep
                      exact change handy.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-5 sticky top-6 space-y-4">
              <h3 className="font-bold text-lg">Order Summary</h3>

              {/* Delivery Address */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span className="font-semibold text-sm">Delivering to</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">
                  {deliveryAddress.name}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  {deliveryAddress.line1}, {deliveryAddress.city},{" "}
                  {deliveryAddress.state} - {deliveryAddress.pincode}
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Items ({checkoutData.items.length})
                  </span>
                  <span className="font-semibold">
                    ₹{checkoutData.subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">
                    {checkoutData.deliveryFee === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `₹${checkoutData.deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>

                {checkoutData.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-semibold">
                      -₹{checkoutData.discount.toFixed(2)}
                    </span>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Total Amount</span>
                  <span className="text-2xl font-bold text-orange-600">
                    ₹{checkoutData.total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                disabled={!selectedPaymentMethod || isProcessing}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-300 disabled:to-gray-300 text-white font-bold py-3 rounded-xl transition-all shadow-lg disabled:cursor-not-allowed"
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </button>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}