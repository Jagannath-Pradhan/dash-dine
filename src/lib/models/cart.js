import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
  cartItemId: {
    type: String,
    required: true,
    unique: true,
  },
  // Food item details
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: String,
  image: String,
  basePrice: { type: Number, required: true },
  rating: Number,
  reviews: Number,
  badge: String,
  isVeg: Boolean,
  
  // User selections
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
  },
  selectedPortion: {
    id: Number,
    name: String,
    description: String,
    price: Number,
  },
  selectedAddons: [{
    id: Number,
    name: String,
    price: Number,
  }],
  specialInstructions: {
    type: String,
    maxlength: 200,
  },
  
  // Calculated fields
  totalPrice: {
    type: Number,
    required: true,
  },
  
  // Metadata
  addedAt: {
    type: Date,
    default: Date.now,
  },
  restaurantId: String, // For multi-restaurant support
});

const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true,
  },
  items: [CartItemSchema],
  
  // Cart metadata
  totalItems: {
    type: Number,
    default: 0,
  },
  subtotal: {
    type: Number,
    default: 0,
  },
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  
  // Session info (for guest carts)
  sessionId: String,
  isGuest: {
    type: Boolean,
    default: false,
  },
});

// Indexes
CartSchema.index({ userId: 1, updatedAt: -1 });
CartSchema.index({ sessionId: 1 });

// Pre-save middleware to update totals
CartSchema.pre('save', function(next) {
  this.totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
  this.subtotal = this.items.reduce((sum, item) => sum + item.totalPrice, 0);
  this.updatedAt = new Date();
  next();
});

// Methods
CartSchema.methods.addItem = function(item) {
  this.items.push(item);
  return this.save();
};

CartSchema.methods.removeItem = function(cartItemId) {
  this.items = this.items.filter(item => item.cartItemId !== cartItemId);
  return this.save();
};

CartSchema.methods.updateItem = function(cartItemId, updates) {
  const item = this.items.find(item => item.cartItemId === cartItemId);
  if (item) {
    Object.assign(item, updates);
  }
  return this.save();
};

CartSchema.methods.clearCart = function() {
  this.items = [];
  return this.save();
};

// Statics
CartSchema.statics.findByUserId = function(userId) {
  return this.findOne({ userId });
};

CartSchema.statics.createOrUpdate = async function(userId, items) {
  return this.findOneAndUpdate(
    { userId },
    { 
      items, 
      updatedAt: new Date(),
      $setOnInsert: { createdAt: new Date() }
    },
    { upsert: true, new: true }
  );
};

const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema);

export default Cart