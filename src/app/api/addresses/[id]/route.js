import { NextResponse } from "next/server";
import { getServerSession } from "@/lib/utils/auth";
import connectDB from "@/lib/config/db";
import Address from "@/lib/models/address";

// PUT - Update an addres
export async function PUT(request, { params }) {
    try {
        await connectDB();
        const user = await getServerSession();

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = await params;
        const body = await request.json();

        // Check if address belongs to user
        const address = await Address.findOne({
            _id: id,
            userId: user._id,
        });

        if (!address) {
            return NextResponse.json(
                { error: "Address not found" },
                { status: 404 }
            );
        }

        // Update address
        const updatedAddress = await Address.findByIdAndUpdate(
            id,
            { $set: body },
            { new: true, runValidators: true }
        );

        return NextResponse.json(updatedAddress, { status: 200 });
    } catch (error) {
        console.error("Error updating address:", error);
        return NextResponse.json(
            { error: "Failed to update address" },
            { status: 500 }
        );
    }
}


// DELETE - Delete an address
export async function DELETE(request, { params }) {
    try {
        await connectDB();
        const user = await getServerSession();

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = await params;

        const address = await Address.findOne({
            _id: id,
            userId: user._id,
        });

        if (!address) {
            return NextResponse.json(
                { error: "Address not found" },
                { status: 404 }
            );
        }

        // Don't allow deleting the only address
        const addressCount = await Address.countDocuments({
            userId: user._id,
        });

        if (addressCount === 1) {
            return NextResponse.json(
                { error: "Cannot delete the only address" },
                { status: 400 }
            );
        }

        await Address.findByIdAndDelete(id);

        // If deleted address was default, make another address default
        if (address.isDefault) {
            const firstRemaining = await Address.findOne({
                userId: user._id,
            });
            if (firstRemaining) {
                firstRemaining.isDefault = true;
                await firstRemaining.save();
            }
        }

        return NextResponse.json(
            { message: "Address deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting address:", error);
        return NextResponse.json(
            { error: "Failed to delete address" },
            { status: 500 }
        );
    }
}