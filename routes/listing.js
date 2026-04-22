const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../Schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

// Controllers
const { index, renderNewForm, showListing, createListing, renderEditForm, updateListing, deleteListing } = require("../controllers/listings.js");

router.route("/")
    .get(wrapAsync(index)) //Index Route
    .post(isLoggedIn, validateListing, wrapAsync(createListing)); //Create Route

// New Route
router.get("/new", isLoggedIn, renderNewForm);

router.route("/:id")
    .get(wrapAsync(showListing)) //Show Route
    .put(isLoggedIn, isOwner, validateListing, wrapAsync(updateListing)) //Update Route
    .delete(isLoggedIn, isOwner, wrapAsync(deleteListing)); //Delete Route



// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(renderEditForm));

module.exports = router;