var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {  
  successRedirect: '/profile',
  failureRedirect: '/loginFailed',
}));

router.get('/loginFailed', function(req, res) {
  res.render('loginFailed');
});

module.exports = router;
