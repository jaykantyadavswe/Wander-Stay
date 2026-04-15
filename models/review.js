const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true,
        minlength: 10
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    listing: {
        type: Schema.Types.ObjectId,
        ref: "Listing",
        required: true
    }
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;