'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');

server.get('Logged', function (req, res, next) {
    if(req.currentCustomer.profile != undefined){
        res.render('components/modal');
        next();
    }else{
        res.redirect(URLUtils.url('Login-Show'));
    }
});

module.exports = server.exports();