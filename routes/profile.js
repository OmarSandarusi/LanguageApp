var express = require('express');
var router = express.Router();
var authMethods = require('../public/javascripts/authMethods');

router.get('/', authMethods.ensureAuthenticated, function(request, response) {
    response.render('profile', { user: request.user });
});

module.exports = router;