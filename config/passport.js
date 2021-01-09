var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

//serialize and deserialize

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

//middleware
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    User.findOne({
        email: email
    }, function (err, user) {
        if (err) return done(err);

        if (!user) {
            return done(null, false, console.log("No user"));
        }

        if (!user.comparePass(password)) {
            return done(null, false, console.log("bad password"));
        }
        
        return done(null, user);
    })
}))


//custom function
exports.isAuthenticated=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}