import { NextResponse } from "next/server";
import connectDB from "@/lib/config/db";
import FoodCategory from "@/lib/models/foodCategory";
import FoodItem from "@/lib/models/foodItem";

// Utility to validate slug format
function isValidSlug(value) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

/**
 * 📌 POST API → Create Food Category
 * Required fields: name, slug
 * Validates uniqueness, slug format, and empty fields
 */
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { categoryName, slug } = body;

    // Validate required fields
    if (!categoryName || !slug) {
      return NextResponse.json(
        { success: false, message: "Category name and slug are required." },
        { status: 400 }
      );
    }

    // Validate slug format
    if (!isValidSlug(slug)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid slug format. Use lowercase letters, numbers, and hyphens only.",
        },
        { status: 400 }
      );
    }

    // Check if category with same name or slug already exists
    const existing = await FoodCategory.findOne({
      $or: [{ categoryName }, { slug }],
    });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: "Category with this category name or slug already exists.",
        },
        { status: 409 }
      );
    }

    // Create new category
    const newCategory = await FoodCategory.create({ categoryName, slug });

    return NextResponse.json(
      {
        success: true,
        message: "Category created successfully.",
        data: newCategory,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /food-category Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error.", error: error.message },
      { status: 500 }
    );
  }
}

/**
 * 📌 GET API → Fetch All Food Categories
 * Returns: id, name, slug, createdAt, updatedAt
 */

export async function GET() {
  try {
    await connectDB();

    // fetch all categories
    const categories = await FoodCategory.find().sort({ createdAt: 1 });

    // fetch item counts for each category (ONE query instead of looping)
    const counts = await FoodItem.aggregate([
      {
        $group: {
          _id: "$categoryName",
          count: { $sum: 1 }
        }
      }
    ]);

    // convert aggregation result into an easy lookup map
    const countMap = {};
    counts.forEach(c => {
      countMap[c._id?.toString()] = c.count;
    });

    // attach count to each category
    const categoriesWithCount = categories.map(cat => ({
      ...cat.toObject(),
      count: countMap[cat._id.toString()] || 0
    }));

    return NextResponse.json(
      { success: true, count: categories.length, data: categoriesWithCount },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /food-category Error:", error);

    return NextResponse.json(
      { success: false, message: "Server error.", error: error.message },
      { status: 500 }
    );
  }
}