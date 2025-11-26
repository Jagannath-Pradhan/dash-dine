import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['percentage', 'flat'],
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  maxDiscount: Number,
  minOrder: {
    type: Number,
    default: 0,
  },
  
  // Validity
  isActive: {
    type: Boolean,
    default: true,
  },
  validFrom: {
    type: Date,
    default: Date.now,
  },
  validTill: Date,
  
  // Usage limits
  maxUsage: Number,
  usageCount: {
    type: Number,
    default: 0,
  },
  maxUsagePerUser: {
    type: Number,
    default: 1,
  },
  
  // User restrictions
  applicableFor: {
    type: String,
    enum: ['all', 'new', 'existing'],
    default: 'all',
  },
  
  // Metadata
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: String,
});

CouponSchema.index({ code: 1, isActive: 1 });
CouponSchema.index({ validFrom: 1, validTill: 1 });

CouponSchema.methods.isValid = function(subtotal, userId, userType) {
  const now = new Date();
  
  // Check if active
  if (!this.isActive) return false;
  
  // Check validity dates
  if (this.validFrom && now < this.validFrom) return false;
  if (this.validTill && now > this.validTill) return false;
  
  // Check minimum order
  if (subtotal < this.minOrder) return false;
  
  // Check usage limits
  if (this.maxUsage && this.usageCount >= this.maxUsage) return false;
  
  // Check user type
  if (this.applicableFor !== 'all' && this.applicableFor !== userType) {
    return false;
  }
  
  return true;
};

CouponSchema.methods.calculateDiscount = function(subtotal) {
  if (this.type === 'percentage') {
    const discount = (subtotal * this.value) / 100;
    return this.maxDiscount ? Math.min(discount, this.maxDiscount) : discount;
  }
  return this.value;
};

const Coupon = mongoose.models.Coupon || mongoose.model('Coupon', CouponSchema);

export default Coupon;