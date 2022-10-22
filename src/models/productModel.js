const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        comment: { type: String, require: true },
        rating: { type: Number, require: true },
    },
);

const productSchema = new mongoose.Schema(
    {
        name: { type: String, require: true, unique: true },
        slug: { type: String, require: true, unique: true },
        image: { type: String, require: true },
        images: [String],
        brand: { type: String, require: true },
        category: { type: String, require: true },
        description: { type: String, require: true },
        price: { type: Number, require: true },
        rating: { type: Number, require: true },
        countInStock: { type: Number, require: true },
        numReviews: { type: Number, require: true },
        reviews: [reviewSchema],
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);
module.exports = productSchema;