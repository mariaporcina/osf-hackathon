'use strict'

var server = require('server');

var URLUtils = require('dw/web/URLUtils');
var Resource = require('dw/web/Resource');

server.get("CheckExistingWishList", function(req, res, next){
    var customerNo = req.querystring.customerNo;
    var checkExistingWishList = require('*/cartridge/scripts/storematch/checkExistingWishListHelper');
    res.json(checkExistingWishList.checkExistingWishList(customerNo));
    next();
});

server.post("AddToMatchList", function (req, res, next) {
    var productID = req.querystring.productID;
    var customerNo = req.querystring.customerNo;
    var addToMatchList = require('*/cartridge/scripts/storematch/addToMatchListHelper');
    res.json(addToMatchList.addToMatchList(productID, customerNo));
    next();
})

module.exports = server.exports();