/**
 * Created by Omar on 2017-03-08.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var currentTime = new Date();
    res.render('time', { title: 'Time', currentTime: currentTime.toISOString() });
});

module.exports = router;