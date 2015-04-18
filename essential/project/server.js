var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data
app.use(session({ secret: 'this is the secret' }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

var ConnectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/temp';

mongoose.connect(ConnectionString);



var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    email: String,
    favorites: [{ tileType: String, story: String }],
    following: [String],
    followedby: [String],
    notifications: [{from: String, story: String }]
    }, { collection: "user" });

var User = mongoose.model("User", userSchema);

/*var saradhi = new User({
    firstname: 'Saradhi',
    lastname: 'Kethamakka',
    username: 'saradhiknv',
    password: 'Saradhi.91',
    email: 'saradhi.91@gmail.com',
    favorites: [{tileType: "weather", story: "narasaraopet"}],
    following: ["archana"],
    followedby: ["archana"],
    notifications: null
});

saradhi.save();*/

app.post('/api/register', function (req, res) {
    var postObj = req.body;
    User.create(postObj, function (err, user) {
        res.json(user);
    });
    //User.postObj.save(function (err, user) {
    //    res.json(user);
    //});
});

app.get('/api/user/:name', function (req, res) {
    var query = { username: req.params.name };
    User.findOne(query, function (err, doc) {
        res.json(doc);
       
    });
});

app.get('/api/user', function (req, res) {
    User.find(function (err, doc) {
        res.json(doc);
        res.json(err);
    });
});

app.get('/api/favorite/:username', function (req, res) {
    var uname = req.params.username;
    //console.log(uname);
    User.findOne({ username: uname }, 'favorites' ,function (err, data) {
        //console.log(data);
        res.json(data);
    });
});


app.put('/api/favorite', function (req, res) {
    var data = req.body;
    var kind = data.tileType;
    console.log(kind);
    var value = data.story;
    var username = data.username;
    //var result = null;
    User.findOne({ username: username }, function (err, res) {
        User.update({ username: username },
            { $push: { favorites: { $each: [{ tileType: kind, story: value }] } } }, function (err, doc) {
                if (err) throw err;
                console.log(doc);
            });
    });
});

passport.use(new LocalStrategy(
function (username, password, done) {
    User.findOne({ username: username, password: password }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
    })
}));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

var auth = function (req, res, next) {
    if (!req.isAuthenticated())
        res.send(401);
    else
        next();
};

app.get('/api/findppl', function (req, res) {
    User.find({}, { username: 1, _id: 0 }, function (err, data) {
        //console.log(data);
        res.json(data);
    });
});

app.post('/login', passport.authenticate('local'),function (req, res) {
    var user = req.user;
    //console.log(user);
    res.json(user);
});

app.post('/logout', function (req, res) {
    req.logout();
    res.send(200);
});


var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port, ip);