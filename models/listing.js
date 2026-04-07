const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        filename: String,
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww",
            set: (v) => v === "" ? "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww" : v
        }
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    // Additional property details
    bedrooms: {
        type: Number,
        default: 1,
        min: 1
    },
    bathrooms: {
        type: Number,
        default: 1,
        min: 1
    },
    maxGuests: {
        type: Number,
        default: 2,
        min: 1
    },
    area: {
        type: Number,
        default: 500,
        min: 1
    },
    amenities: [{
        type: String,
        enum: ['wifi', 'kitchen', 'parking', 'pool', 'gym', 'ac', 'tv', 'washer', 'heating', 'fireplace']
    }]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;