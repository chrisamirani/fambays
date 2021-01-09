const User = require('../models/user');
const router = require('express').Router();
const mongoose = require('mongoose');
var passportConf = require('../config/passport');
const passport = require('passport');


router.post('/signup', function (req, res, next) {


    if (req.body.password.length !== 0 || req.body.email.length !== 0) {

        var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if (req.body.username.search(emailRegex) !== -1) {
            User.findOne({
                username: req.body.display
            }, (errUsername, takenUsername) => {
                if (takenUsername) {
                    res.render("signup", {
                        message: "That username already exists!Pick another :D"
                    })
                } else {
                    var user = new User();
                    user.username = req.body.display;
                    user.email = req.body.username;
                    user.password = req.body.password
                    user.level = 0

                    User.findOne({
                        email: req.body.username
                    }, function (err, existingUser) {
                        if (existingUser) {
                            res.render("signup", {
                                message: "Oops! Seems you've already joined"
                            })
                        } else {
                                user.save(function (err, user) {
                                    if (err) return next(err);
                                    req.logIn(user, function (err) {
                                        if (err) return next(err)
                                        res.redirect('/');
                                    })
                                });
                            

                        }
                    });
                }
            })


        } else {

            res.render("signup", {
                message: "Hmm. can you renenter your email more carefully? XO"
            })
        }

    } else {

        res.render("signup", {
            message: "I think there was a problem. Wanna try again?"
        })
    }
});

router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login'
    }),
    function (req, res) {
        res.redirect('/');
    });

router.get("/logout", (req, res, next) => {
    req.logout()
    res.redirect("/")
})



const nodemailer = require("nodemailer");

router.get("/confirm/:userId", (req, res) => {
// smtp config for confirmation email
    let transporter = nodemailer.createTransport({
        host: "smtp provider url",
        port: 995,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "email",
            pass: "email password",
        },
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '"Fambays" <>', // sender address
        to: "", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>email content to send</b>", // html body
    });



    User.findOne({
        _id: req.params.userId
    }, (err, user) => {
        user.confirmed = 1
        user.save((err, done) => {
            res.redirect("/")
        })
    })
})



module.exports = router;