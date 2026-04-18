const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", async (req, res) => {
    try {
        let { username, email, password } = req.body;

        const newUser = new User({
            username,
            email
        });

        const registeredUser = await User.register(newUser, password);

        console.log(registeredUser);
        req.flash("success", "User was registered successfully");
        res.redirect("/listings");

    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
});

router.get("/login", async (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), (req, res) => {
    req.flash("success", "Welcome Back!");
    res.redirect("/listings");
});

router.get("/logout", (req, res) => {
    req.logout();
    req.flash("success", "Logged Out!");
    res.redirect("/listings");
});

module.exports = router;