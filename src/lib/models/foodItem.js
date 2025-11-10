import mongoose, { Schema } from "mongoose";

const portionSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
});

const addonSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
});

const foodItemSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        basePrice: { type: Number, required: true },
        rating: { type: Number, default: 0 },
        reviews: { type: Number, default: 0 },
        badge: { type: String },
        portions: [portionSchema],
        addons: [addonSchema],
        isVeg: { type: Boolean, default: true },

        // Reference to category
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "FoodCategory",
            required: true,
        },
    },
    { timestamps: true }
);

const FoodItem = mongoose.models.FoodItem || mongoose.model("FoodItem", foodItemSchema);

export default FoodItem;
