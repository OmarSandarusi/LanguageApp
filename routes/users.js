var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/languageApp');
var userSchema = mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String
});

var User = mongoose.model("User", userSchema);

/* GET users listing. */
router.get('/', function(reqest, response, next) {
    User.find(function(err, result){
        var content;
        if (err) {
            content = {
                getMessage: "Error fetching users: " + err
            };
        }
        else if (result.length < 1) {
            content = {
                getMessage: "0 users found"
            };
        }
        else {          
            content = {
                users: result
            };
        }
        response.render('users', content);  
    });
});

router.post('/create', function(request, response, next) {
    var postedUserInfo = request.body;
    if (!postedUserInfo.userName || !postedUserInfo.firstName || !postedUserInfo.lastName) {
        response.send('Error: Missing parameters');
        return;
    }
    var newUser = new User({
        userName: postedUserInfo.userName,
        firstName: postedUserInfo.firstName,
        lastName: postedUserInfo.lastName
    });
    newUser.save()
    .then(function(result) {
        response.status(200).json({
            createMessage: 'Success'
        });
    }, function(reason) {
        reponse.status(500).json({
            createMessage: 'Error: ' + reason
        });
    });
});

module.exports = router;
