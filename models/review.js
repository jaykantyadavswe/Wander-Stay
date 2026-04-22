const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
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
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;