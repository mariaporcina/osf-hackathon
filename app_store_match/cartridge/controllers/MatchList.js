'use strict'

var server = require('server');

var URLUtils = require('dw/web/URLUtils');
var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');
var Customer = require('dw/customer/Customer');
var Resource = require('dw/web/Resource');
var CustomObjectMgr = require("dw/object/CustomObjectMgr");
var Transaction = require("dw/system/Transaction");
var ProductSearchModel = require('dw/catalog/ProductSearchModel');

server.get("CheckExistingWishList", function(req, res, next){
    var object = CustomObjectMgr.getCustomObject("store_match_wishlist", req.currentCustomer.profile.customerNo);
    if(!object){
        //TODO: Send list..
    }else{
        res.json({
            'success': false,
        });
    }
    next();
});

server.get("AddToMatchList", function (req, res, next) {
    var productID = req.querystring.productID;
    var object = CustomObjectMgr.getCustomObject("store_match_wishlist", req.currentCustomer.profile.customerNo);
    if (!object) {
        Transaction.wrap(function () {
            var customObject = CustomObjectMgr.createCustomObject("store_match_wishlist", req.currentCustomer.profile.customerNo);
            customObject.custom.productID = productID;
        });
    }else{
        Transaction.wrap(function () {
            object.custom.productID =  object.custom.productID + "," + productID;
        });
    }
    res.json({
        'success': true,
        'message': "success"
    });
})

module.exports = server.exports();