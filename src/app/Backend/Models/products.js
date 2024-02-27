import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,

    },
    price: {
        type: Number,

    },
    short_description: {
        type: String,

    },
    description: {
        type: String,

    },
    category: {
        type: String,

    },
    ratings: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            rating: {
                type: Number,
                required: true
            },
            Comment: {
                type: String,
                required: true
            },
            createedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    stock: {
        type: Number,
        default: 10
    },
    details_Image: Array,
    Characteristics: Object,
    Important: Array,
    usage: Object,
    advantages: Array,
    features: Array,
    Clothes_size: Array,
    isPopular: {
        type: Boolean,
        default: false
    },
    createedAt: {
        type: Date,
        default: Date.now
    }
})

const Products = mongoose.models.Product || mongoose.model("Product", productSchema)

export default Products;