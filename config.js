var port = '3000';
var host = 'localhost';
var urlBase = "http://" + host + ':' + port;

module.exports={
    facebook: {
        appId: "1884909448422712",
        secret: "af70baf1233511bb9c9849cadf363f46",
        callback: urlBase + "/auth/facebook/callback",
        login: "/auth/facebook/login"
    },
    host: host,
    port: port,
    urlBase: urlBase
}