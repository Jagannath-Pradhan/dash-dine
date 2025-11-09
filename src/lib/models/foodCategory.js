import mongoose, { Schema } from 'mongoose'

const foodCategorySchema = new Schema({
    name: {
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
    },
    count: {
        type: Number,
        default: 0,
    },
},
    { timestamps: true }
);

const FoodCategory = mongoose.models.FoodCategory || mongoose.model("FoodCategory", foodCategorySchema);

export default FoodCategory
