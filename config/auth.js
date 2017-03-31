var config = require('../config.js');

module.exports = {  
    facebook: {
        clientID: '1884909448422712',
        clientSecret: 'af70baf1233511bb9c9849cadf363f46',
        callbackURL: config.urlBase + '/auth/facebook/callback'
    }
}