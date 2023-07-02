let express = require('express');
let path = require("path");
let bodyParser = require('body-parser');
let routes = require("./routes");
let http = require('http');

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('./public'));
app.use(routes);

let savedNotes = "";

let server = http.createServer(app);
let io = require('socket.io').listen(server);

io.on('connection', function(socket) {
    console.log("server io.on function called");
    socket.emit('welcome', { message: 'Welcome!', id: socket.id });
    // console.log(socket.id);

    socket.on('update', function (data) {
        io.emit('update', data);
    });

});

app.get("/",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/views/index.html"));
});
app.get("/type",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/views/type.html"));
});

app.get("/home.js",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/js/home.js"));
});
app.get("/help.js",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/js/help.js"));
});
app.get("/game.js",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/js/game.js"));
});
app.get("/call.js",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/js/call.js"));
});
app.get("/login.js",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/js/login.js"));
});
app.get("/mail.js",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/js/mail.js"));
});

app.get("/saveNotes", function(req, res){
    console.log(req.query.notes);
    savedNotes = req.query.notes;
   res.json({});
});
app.get("/retNotes", function(req, res){
   res.json({notes:savedNotes});
});


let port = process.env.PORT || 3006;

server.listen(port);

module.exports = app;