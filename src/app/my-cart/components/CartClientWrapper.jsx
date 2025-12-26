'use client'

import { useState, useEffect } from 'react';
import { ShoppingBag, ArrowLeft, Trash2, Plus, Minus, Edit3, Tag, TruckIcon } from 'lucide-react';
import CartItem from './CartItem';
import BillDetails from './BillDetails';
import EmptyCart from './EmptyCart';
import CouponModal from './CouponModal';
import EditItemModal from './EditItemModal';
import { useRouter } from 'next/navigation';

const CartClientWrapper = ({ initialCart, deliveryConfig, userId }) => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on mount (client-side persistence)
  useEffect(() => {
    const localCart = localStorage.getItem('dashdine-cart');
    if (localCart) {
      try {
        const parsed = JSON.parse(localCart);
        setCartItems(parsed);
      } catch (error) {
        console.error('Failed to parse cart:', error);
      }
    } else if (initialCart?.items) {
      setCartItems(initialCart.items);
    }
  }, [initialCart]);

  // Save cart to localStorage whenever it changes
  // useEffect(() => {
  //   if (cartItems.length > 0) {
  //     localStorage.setItem('dashdine-cart', JSON.stringify(cartItems));
  //     console.log(cartItems)

  //     // Sync with backend for logged users
  //     if (userId !== 'guest') {
  //       syncCartWithBackend();
  //     }
  //   } else {
  //     localStorage.removeItem('dashdine-cart');
  //   }
  // }, [cartItems, userId]);

useEffect(() => {
  if (cartItems.length > 0) {
    localStorage.setItem('dashdine-cart', JSON.stringify(cartItems));

    // 🔥 ADD THIS LINE
    window.dispatchEvent(new Event('cart-updated'));

    if (userId !== 'guest') {
      syncCartWithBackend();
    }
  } else {
    localStorage.removeItem('dashdine-cart');

    // 🔥 ADD THIS LINE
    window.dispatchEvent(new Event('cart-updated'));
  }
}, [cartItems, userId]);



  const syncCartWithBackend = async () => {
    try {
      await fetch(`/api/cart/sync`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, items: cartItems }),
      });
    } catch (error) {
      console.error('Failed to sync cart:', error);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  const calculateDeliveryFee = () => {
    const subtotal = calculateSubtotal();
    if (subtotal >= deliveryConfig.freeDeliveryThreshold) return 0;
    return deliveryConfig.deliveryFee;
  };

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;
    const subtotal = calculateSubtotal();

    if (appliedCoupon.type === 'percentage') {
      return Math.min(
        (subtotal * appliedCoupon.value) / 100,
        appliedCoupon.maxDiscount || Infinity
      );
    }
    return appliedCoupon.value;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const delivery = calculateDeliveryFee();
    const discount = calculateDiscount();
    const packaging = deliveryConfig.packagingCharges || 0;

    return Math.max(0, subtotal + delivery + packaging - discount);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(prev =>
      prev.map(item => {
        if (item._id === itemId) {
          const pricePerUnit = item.totalPrice / item.quantity;
          return {
            ...item,
            quantity: newQuantity,
            totalPrice: pricePerUnit * newQuantity,
          };
        }
        return item;
      })
    );
  };

  const removeItem = (itemId) => {
    // setCartItems(prev => prev.filter(item => item.cartItemId !== itemId));
    setCartItems(prev => prev.filter(item => item._id !== itemId));
  };

  const updateItemDetails = (itemId, updates) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item._id === itemId) {
          return { ...item, ...updates };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Store checkout data
    const checkoutData = {
      items: cartItems,
      subtotal: calculateSubtotal(),
      deliveryFee: calculateDeliveryFee(),
      discount: calculateDiscount(),
      total: calculateTotal(),
      coupon: appliedCoupon,
    };

    sessionStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    router.push('/checkout/address');
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  const subtotal = calculateSubtotal();
  const deliveryFee = calculateDeliveryFee();
  const needsForFreeDelivery = Math.max(0, deliveryConfig.freeDeliveryThreshold - subtotal);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors mb-4 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Pick More Dishes</span>
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center gap-3">
                <ShoppingBag className="w-8 h-8 text-orange-500" />
                My Cart
              </h1>
              <p className="text-gray-600 mt-1">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
            </div>

            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span className="font-medium">Clear Cart</span>
              </button>
            )}
          </div>
        </div>

        {/* Free Delivery Banner */}
        {needsForFreeDelivery > 0 && (
          <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <TruckIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-green-800 font-semibold">
                  Add items worth ₹{needsForFreeDelivery} more for FREE delivery! 🎉
                </p>
                <div className="mt-2 bg-green-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-green-600 h-full transition-all duration-500"
                    style={{ width: `${(subtotal / deliveryConfig.freeDeliveryThreshold) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
                onEdit={() => setEditingItem(item)}
              />
            ))}
          </div>

          {/* Bill Details Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <BillDetails
                subtotal={subtotal}
                deliveryFee={deliveryFee}
                packagingCharges={deliveryConfig.packagingCharges}
                discount={calculateDiscount()}
                total={calculateTotal()}
                appliedCoupon={appliedCoupon}
                onRemoveCoupon={() => setAppliedCoupon(null)}
                onApplyCoupon={() => setShowCouponModal(true)}
                onCheckout={handleCheckout}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {editingItem && (
        <EditItemModal
          item={editingItem}
          onClose={() => setEditingItem(null)}
          onUpdate={updateItemDetails}
        />
      )}

      {showCouponModal && (
        <CouponModal
          subtotal={subtotal}
          onClose={() => setShowCouponModal(false)}
          onApplyCoupon={setAppliedCoupon}
          currentCoupon={appliedCoupon}
        />
      )}
    </>
  );
};

export default CartClientWrapper;