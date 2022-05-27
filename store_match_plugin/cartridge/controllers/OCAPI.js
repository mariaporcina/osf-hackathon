var server = require('server');
var Resource = require('dw/web/Resource');
var URLUtils = require('dw/web/URLUtils');

server.get('Test', function () {
    return ("ok");
});

module.exports = server.exports();