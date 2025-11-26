/**
 * Generate unique cart item ID
 */
export const generateCartItemId = () => {
  return `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Add item to cart with all customizations
 */
export const addToCart = (item, existingCart = []) => {
  const cartItem = {
    ...item,
    cartItemId: generateCartItemId(),
    addedAt: new Date().toISOString(),
  };
  
  return [...existingCart, cartItem];
};

/**
 * Calculate item price with all add-ons
 */
export const calculateItemPrice = (item) => {
  let basePrice = item.basePrice;
  
  if (item.selectedPortion && item.selectedPortion.price) {
    basePrice = item.selectedPortion.price;
  }
  
  if (item.selectedAddons && item.selectedAddons.length > 0) {
    const addonsTotal = item.selectedAddons.reduce(
      (sum, addon) => sum + addon.price,
      0
    );
    basePrice += addonsTotal;
  }
  
  return basePrice * (item.quantity || 1);
};

/**
 * Merge cart items (useful when syncing with backend)
 */
export const mergeCartItems = (localCart, serverCart) => {
  const mergedMap = new Map();
  
  // Add local cart items
  localCart.forEach(item => {
    mergedMap.set(item.cartItemId, item);
  });
  
  // Add or update with server cart items
  serverCart.forEach(item => {
    if (!mergedMap.has(item.cartItemId)) {
      mergedMap.set(item.cartItemId, item);
    }
  });
  
  return Array.from(mergedMap.values());
};

/**
 * Validate cart before checkout
 */
export const validateCart = (cartItems) => {
  const errors = [];
  
  if (cartItems.length === 0) {
    errors.push('Cart is empty');
  }
  
  cartItems.forEach((item, index) => {
    if (!item.quantity || item.quantity < 1) {
      errors.push(`Invalid quantity for item ${index + 1}`);
    }
    
    if (!item.totalPrice || item.totalPrice < 0) {
      errors.push(`Invalid price for item ${index + 1}`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Format currency
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

/**
 * Calculate delivery time estimate
 */
export const estimateDeliveryTime = (distance = 5) => {
  // Assuming 30 min prep + 5 min per km
  const prepTime = 30;
  const travelTime = distance * 5;
  const totalMinutes = prepTime + travelTime;
  
  return {
    min: Math.max(25, totalMinutes - 10),
    max: totalMinutes + 10,
  };
};

/**
 * Check if cart has veg only items
 */
export const isVegCart = (cartItems) => {
  return cartItems.every(item => item.isVeg === true);
};

/**
 * Get cart summary for display
 */
export const getCartSummary = (cartItems) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const uniqueItems = cartItems.length;
  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  
  return {
    totalItems,
    uniqueItems,
    subtotal,
    isEmpty: cartItems.length === 0,
  };
};

/**
 * Group items by restaurant (if multi-restaurant support)
 */
export const groupByRestaurant = (cartItems) => {
  const grouped = {};
  
  cartItems.forEach(item => {
    const restaurantId = item.restaurantId || 'default';
    if (!grouped[restaurantId]) {
      grouped[restaurantId] = [];
    }
    grouped[restaurantId].push(item);
  });
  
  return grouped;
};

/**
 * Calculate savings
 */
export const calculateSavings = (cartItems, appliedCoupon, deliveryFee) => {
  let totalSavings = 0;
  
  // Add coupon discount
  if (appliedCoupon && appliedCoupon.discount) {
    totalSavings += appliedCoupon.discount;
  }
  
  // Add free delivery savings
  if (deliveryFee === 0) {
    totalSavings += 40; // Assuming normal delivery fee is 40
  }
  
  return totalSavings;
};

/**
 * Export cart for sharing (future feature)
 */
export const exportCartData = (cartItems) => {
  return {
    items: cartItems.map(item => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      portion: item.selectedPortion?.name,
      addons: item.selectedAddons?.map(a => a.name),
      instructions: item.specialInstructions,
    })),
    exportedAt: new Date().toISOString(),
  };
};

/**
 * Local storage helper
 */
export const cartStorage = {
  get: () => {
    try {
      const cart = localStorage.getItem('foodDeliveryCart');
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error('Failed to get cart from storage:', error);
      return [];
    }
  },
  
  set: (cartItems) => {
    try {
      localStorage.setItem('foodDeliveryCart', JSON.stringify(cartItems));
      return true;
    } catch (error) {
      console.error('Failed to save cart to storage:', error);
      return false;
    }
  },
  
  clear: () => {
    try {
      localStorage.removeItem('foodDeliveryCart');
      return true;
    } catch (error) {
      console.error('Failed to clear cart storage:', error);
      return false;
    }
  },
};

/**
 * Debounce function for API calls
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};