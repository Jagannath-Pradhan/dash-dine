import mongoose, {Schema} from "mongoose";

const addressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // Index for faster queries
    },
    type: {
      type: String,
      enum: ["home", "work"],
      default: "home",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    line1: {
      type: String,
      required: true,
      trim: true,
    },
    line2: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    pincode: {
      type: String,
      required: true,
      trim: true,
      match: /^\d{6}$/, // 6-digit pincode validation
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Compound index for userId and isDefault for faster queries
addressSchema.index({ userId: 1, isDefault: 1 });

// Pre-save middleware to ensure only one default address per user
addressSchema.pre("save", async function (next) {
  if (this.isDefault) {
    // Remove default flag from all other addresses of this user
    await mongoose.models.Address.updateMany(
      { userId: this.userId, _id: { $ne: this._id } },
      { $set: { isDefault: false } }
    );
  }
  next();
});

const Address = mongoose.models.Address || mongoose.model("Address", addressSchema);

export default Address;