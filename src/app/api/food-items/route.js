import { NextResponse } from "next/server";
import FoodItem from "@/lib/models/foodItem";
import FoodCategory from "@/lib/models/foodCategory";
import connectDB from "@/lib/config/db";

// -------------------------
// GET → Fetch all food items
// -------------------------
export async function GET() {
  try {
    await connectDB();

    const items = await FoodItem.find()
      .populate("category", "name slug")
      .sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, items },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch food items", error: error.message },
      { status: 500 }
    );
  }
}

// -------------------------
// POST → Create a new food item
// -------------------------
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      name,
      description,
      image,
      basePrice,
      rating,
      reviews,
      badge,
      portions,
      addons,
      isVeg,
      category,
    } = body;

    // Basic validation
    if (!name || !description || !image || !basePrice || !category) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate category existence
    const categoryExists = await FoodCategory.findById(category);
    if (!categoryExists) {
      return NextResponse.json(
        { success: false, message: "Invalid category ID" },
        { status: 400 }
      );
    }

    // Validate portions list (if provided)
    if (portions && !Array.isArray(portions)) {
      return NextResponse.json(
        { success: false, message: "Portions must be an array" },
        { status: 400 }
      );
    }

    // Validate addons list (if provided)
    if (addons && !Array.isArray(addons)) {
      return NextResponse.json(
        { success: false, message: "Addons must be an array" },
        { status: 400 }
      );
    }

    const newItem = await FoodItem.create({
      name,
      description,
      image,
      basePrice,
      rating: rating || 0,
      reviews: reviews || 0,
      badge: badge || "",
      portions: portions || [],
      addons: addons || [],
      isVeg: isVeg !== undefined ? isVeg : true,
      category,
    });

    return NextResponse.json(
      { success: true, message: "Food item created", item: newItem },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to create food item", error: error.message },
      { status: 500 }
    );
  }
}
