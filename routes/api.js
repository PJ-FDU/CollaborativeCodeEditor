var express = require('express');
var router = express.Router();

router.get('/room', function(req, res, next) {
    var roomname = req.param('name');
    res.render('room', {roomname: roomname});
});

module.exports = router;