import mongoose, { Schema } from 'mongoose'

const foodCategorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    }
},
    { timestamps: true }
);

const FoodCategory = mongoose.models.FoodCategory || mongoose.model("FoodCategory", foodCategorySchema);

export default FoodCategory
