import { NextResponse } from "next/server";
import connectDB from "@/lib/config/db";
import FoodItem from "@/lib/models/foodItem";
import FoodCategory from "@/lib/models/foodCategory";

export async function GET(req, { params }) {
    try {
        await connectDB();

        const { slug } = await params;

        if (!slug) {
            return NextResponse.json(
                { success: false, message: "Missing slug parameter", items: [] },
                { status: 400 }
            );
        }

        // find category by slug
        const category = await FoodCategory.findOne({ slug });
        if (!category) {
            return NextResponse.json(
                { success: false, message: "Category not found", items: [] },
                { status: 404 }
            );
        }

        // fetch all items for that category
        const items = await FoodItem.find({ categoryName: category._id })
            .populate("categoryName", "categoryName slug")
            .sort({ createdAt: -1 });

        return NextResponse.json(
            { success: true, count: items.length, items },
            { status: 200 }
        );
    } catch (error) {
        console.error("GET /api/food-items/[slug] error:", error);
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}
