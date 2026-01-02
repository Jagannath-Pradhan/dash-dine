import { NextResponse } from "next/server";
import { getServerSession } from "@/lib/utils/auth";
import connectDB from "@/lib/config/db";
import Address from "@/lib/models/address";

// GET all addresses for the logged-in user
export async function GET() {
    try {
        await connectDB();
        const user = await getServerSession();

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const addresses = await Address.find({ userId: user._id })
            .sort({ isDefault: -1, createdAt: -1 })       // Default first, then newest
            .lean();

        return NextResponse.json(addresses, { status: 200 });
    } catch (error) {
        console.error("Error fetching addresses:", error);
        return NextResponse.json(
            { error: "Failed to fetch addresses" },
            { status: 500 }
        );
    }
}

// POST - Create a new address
export async function POST(request) {
    try {
        await connectDB();
        const user = await getServerSession();

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const { type, name, line1, line2, city, state, pincode, phone, isDefault } = body;

        if (!name || !line1 || !city || !state || !pincode || !phone) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // If this is the user's first address, make it default
        const addressCount = await Address.countDocuments({
            userId: user._id,
        });

        const newAddress = await Address.create({
            userId: user._id,
            type: type || "home",
            name,
            line1,
            line2,
            city,
            state,
            pincode,
            phone,
            isDefault: addressCount === 0 ? true : isDefault || false,
        });

        return NextResponse.json(newAddress, { status: 201 });
    } catch (error) {
        console.error("Error creating address:", error);
        return NextResponse.json(
            { error: "Failed to create address" },
            { status: 500 }
        );
    }
}