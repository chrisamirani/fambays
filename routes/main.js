const router = require('express').Router();
const axios = require("axios")
const History = require("../models/history")
const Bay = require("../models/bay")



router.get("/", (req, res) => {
    var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    var geo = geoip.lookup(ip);

    if (req.user) {
        res.render("home", {
            user: req.user,
            country: geo.country
        })
    } else {
        res.render("landing")
    }

})


router.get("/about", (req, res) => {

    res.render("about")

})

router.get("/terms", (req, res) => {

    res.render("terms")

})

router.get("/privacy", (req, res) => {

    res.render("privacy")

})






router.get("/signup", (req, res) => {
    res.render("signup")
  /*  var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;


    var geo = geoip.lookup(ip);
    if (geo.country !== "IN") {
        res.render("signup")
    } else {
        res.redirect("/")
    }*/


})
router.get("/bay/:id", (req, res, next) => {

    Bay.find({
        _id: req.params.id
    }, (err, bay) => {
        if (err) {
            res.send("No Results Found")
        } else {
            comments = bay[0].comments.splice(bay[0].comments.length - 20, bay[0].comments.length)
            res.render("bay", {
                data: bay,
                comments:comments
            })
        }

    })
})


router.post("/makeabay", (req, res, next) => {
    let bay = new Bay()
    bay.creator = req.user._id
    bay.title = req.body.title
    bay.content = req.body.body
    bay.save((err, done) => {

        res.redirect("/bay/" + String(bay._id))

    })
})

router.get("/post", (req, res, next) => {
    if(req.user){
        if(req.user.banned == 1){
            res.redirect("/")
        }else{
            res.render("question")
        }
    }
})

router.get("/bays", (req, res) => {

    Bay.find({}, (err, bays) => {
        if (err) console.log(err)
        function sortByActivity(a,b){
            return b.comments.length - a.comments.length
        }
        bays.sort(sortByActivity)
  

        res.render("bays", {
            bays: bays
        })
    })
})

router.get("/edit/:id", (req, res) => {

    if (req.user) {
        Bay.findOne({
            _id: req.params.id
        }, (err, bay) => {

            if (err) {
                res.redirect("/")
            } else {
                if (req.user._id == bay.creator) {
                    res.render("question", {
                        bay: bay
                    })

                } else {
                    res.redirect("/")
                }
            }


        })
    } else {
        res.redirect("/")
    }
})

router.post("/edit/:id", (req, res) => {
    if (req.user) {
        Bay.findOne({
            _id: req.params.id
        }, (err, bay) => {

            if (err) {
                res.redirect("/")

            } else {

                if (req.user._id == bay.creator) {
                    bay.title = req.body.title
                    bay.content = req.body.body
                    bay.save((err, done) => {

                        res.redirect("/bay/" + String(bay._id))

                    })
                } else {
                    res.redirect("/")
                }
            }


        })
    } else {
        res.redirect("/")
    }
})

router.get("/vidchat",(req,res)=>{

 //var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;


    //var geo = geoip.lookup(ip);

    if(req.user){
        if(req.user.banned == 0){
            res.render("vidchat")
        }else{
            res.redirect("/")
        }
        
    }else{
        res.redirect("/")
    }
})

module.exports = router