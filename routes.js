let path = require("path");
let express = require("express");
let formidable = require('formidable');
let mv = require('mv');
let router = express.Router();

router.get("/",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/expos.html"));
});
router.get("/expos.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/expos.html"));
});
router.get("/home.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/home.html"));
});
router.get("/mail.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/mail.html"));
});
router.get("/game.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/game.html"));
});
router.get("/photos.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/photos.html"));
});
router.get("/browser.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/browser.html"));
});
router.get("/history.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/history.html"));
});
router.get("/docs.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/docs.html"));
});
router.get("/social.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/social.html"));
});
router.get("/login.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/login.html"));
});
router.get("/socialPriv.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/socialPriv.html"));
});
router.get("/call.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/call.html"));
});
router.get("/OHNO.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/OHNO.html"));
});
router.get("/resolution.html",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/resolution.html"));
});
router.post('/fileupload', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.image.path;
        var newpath = __dirname + '/public/images/' + files.image.name;

        console.log('Received image: ' + files.image.name);

        mv(oldpath, newpath, function (err) {
            if (err) throw err;

            res.json({ name: files.image.name });
        });
    });
});

module.exports = router;