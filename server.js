const express = require("express")
const bodyParser = require('body-parser')
const passport= require("passport")
const mongoose = require('mongoose');
const History = require('./models/history');
const Bay = require("./models/bay")
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var passportConf = require('./config/passport');
const app = express()
const fs= require("fs")

app.set('view engine', 'pug')

mongoose.connect('Mongodb URL', {
  useNewUrlParser: true,
  useUnifiedTopology: true
},()=>{
    console.log("Connected to DB")
});

mongoose.promise=global.promise;
app.use(express.static(__dirname + '/public'));
// hold loging session 1 year
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "dflsfilsdhflksdh245t534554345r2434",
    cookie: { maxAge: 31536000000 },
    store: new MongoStore({
        url: 'Mongodb URL',
        autoReconnect: true
    })
}));
app.use(passport.initialize());

app.use(passport.session());
app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const userRoutes = require("./routes/user")
const mainRoutes = require("./routes/main")
app.use(userRoutes)
app.use(mainRoutes)

///etc/letsencrypt/live/www.fambays.com/fullchain.pem   __dirname + '/config/privkey.pem'

var options = {
    key  : fs.readFileSync('PRIVATE KEY DIR/privkey.pem'),
   cert : fs.readFileSync('PUBLIC KEY DIR/fullchain.pem')
 };

const server = require('https').createServer(options,app).listen(443); 

const io = require('socket.io')(server, options);

let tempHistory = []


// socket/chatroom config
io.on('connection', socket => { 
   
    socket.on('room', function(room) {
        socket.join(room.pid);
        io.emit("joined",{username:room.username,pid:room.pid,title:room.title,userCount:io.engine.clientsCount + 3})
    });

    socket.on('bay', function(room) {

        socket.join(room.bayId);
        io.sockets.in(room.bayId).emit("joinedBay",{username:room.username})
    });


    socket.on('connect', function() { 
    
        io.emit("left",{userCount:io.engine.clientsCount + 3})
    
    });

     
    socket.on('disconnect', () => {
       

        io.emit("left",{userCount:io.engine.clientsCount + 3})
        
      }); 

    socket.on('chat',function(data){
        
        //io.sockets.in(data.room).emit("chat",{message:data.message,username:data.username,og:data.og});
        if(tempHistory.length < 20){
            tempHistory.push(data)

        }else{
            var hist = new History()
            hist.hist = tempHistory
            hist.save((err,done)=>{
                if(err) return 0;
                tempHistory = [] 
            })
        }
   
        io.emit("chat",{message:data.message,username:data.username,og:data.og});
        
    })
    socket.on('comment',function(data){
        io.sockets.in(data.pid).emit("comment",{message:data.message,username:data.username});
        io.emit("bayChat",{message:data.message,username:data.username,id:data.pid});
        Bay.findOne({_id:data.pid},(err,bay)=>{
            bay.comments.push({username:data.username,comment:data.message})
            bay.save((err,done)=>{
                if(err) console.log(err)
                
            })
        })   
    })
 });
