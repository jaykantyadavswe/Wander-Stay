const User = require("../models/user.js")
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async (req, res) => {
    try {
        let { fullname, username, email, password } = req.body;

        const newUser = new User({
            fullname,
            username,
            email
        });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) {
                req.flash("error", err.message);
                return res.redirect("/signup");
            }
            req.flash("success", "User was registered successfully");
            res.redirect("/listings");
        });

    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = async (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome Back!");
    res.redirect(res.locals.redirectUrl || "/listings");
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logged Out!");
        res.redirect("/listings");
    });
};

module.exports.profile = (req, res) => {
    if (!req.user) {
        return res.redirect("/login");
    }

    res.render("users/profile.ejs", { user: req.user });
}
