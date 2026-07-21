import mongoose from "mongoose"

// mini schema to build main schema
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }, 
    orderItems: {
        type: [orderItemSchema] // passing that mini schema here
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING",
    }
}, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema)