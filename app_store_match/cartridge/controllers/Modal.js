'use strict';

var server = require('server');

server.get('Show', function(req, res, next) {
    var URLUtils = require('dw/web/URLUtils');

    res.render('components/modal');
    return next();
});

module.exports = server.exports();