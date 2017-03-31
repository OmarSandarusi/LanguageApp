var port = '3000';
var host = 'localhost';
var urlBase = "http://" + host + ':' + port;

module.exports={
    host: host,
    port: port,
    urlBase: urlBase,
    mongoose: {
        url: 'mongodb://localhost/languageApp'
    }
}