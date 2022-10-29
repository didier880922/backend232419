const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        comment: { type: String, required: true },
        rating: { type: Number, required: true},
    },
);

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        slug: { type: String, required: true, unique: true },
        brand: { type: String, required: true },
        category: { type: String, required: true },
        image: { type: String, required: true },
        images: [String],
        description: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        rating: { type: Number, required: true },
        numReviews: { type: Number, required: true },
        reviews: [reviewSchema],        
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);
module.exports = productSchema;