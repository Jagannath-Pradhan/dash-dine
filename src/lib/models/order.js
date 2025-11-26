import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
    index: true,
  },
  
  // Cart data snapshot
  items: [CartItemSchema],
  
  // Pricing
  subtotal: Number,
  deliveryFee: Number,
  packagingCharges: Number,
  discount: Number,
  total: {
    type: Number,
    required: true,
  },
  
  // Coupon used
  couponCode: String,
  couponDiscount: Number,
  
  // Delivery details
  deliveryAddress: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    pincode: String,
    landmark: String,
    phone: String,
    name: String,
  },
  
  // Order status
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled'],
    default: 'pending',
  },
  
  // Payment
  paymentMethod: String,
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending',
  },
  transactionId: String,
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
  },
  confirmedAt: Date,
  deliveredAt: Date,
  
  // Ratings
  rating: Number,
  review: String,
});

OrderSchema.index({ userId: 1, createdAt: -1 });
OrderSchema.index({ orderId: 1 });
OrderSchema.index({ status: 1 });

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

export default Order;