var express = require('express');
var router = express.Router();
var passport = require('passport');

// Facebook routes
router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get('/facebook/callback', passport.authenticate('facebook', {  
  successRedirect: '/profile',
  failureRedirect: '/facebook/failed',
}));

router.get('/facebook/failed', function(req, res) {
    res.send('Failed to login');
});

router.get('/facebook/logout', function(req, res) {
    res.send('Logged out');
});

module.exports = router;