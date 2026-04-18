const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderStay';

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data.forEach(listing => {
        listing.owner = "69e3f1396f3f8f7bc5f9853d"; // Replace with actual user ID
    });
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();