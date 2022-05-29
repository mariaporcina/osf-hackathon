'use strict';
/**
 * Send email every time has new product in cart
 * @param {string} productsReturn - List of products by category
 * @param {string} productID receive product ID
 * @param {string} customerID receive customer ID
 */

 var CustomObjectMgr = require("dw/object/CustomObjectMgr");
 var Transaction = require("dw/system/Transaction");

function addToMatchList(productID, customerNo) {
    try{
        var object = CustomObjectMgr.getCustomObject("store_match_wishlist", customerNo);
        if (!object) {
            Transaction.wrap(function () {
                var customObject = CustomObjectMgr.createCustomObject("store_match_wishlist", customerNo);
                customObject.custom.productID = productID;
            });
        }else{
            Transaction.wrap(function () {
                object.custom.productID =  object.custom.productID + "," + productID;
            });
        }
        return success ={
            'success': true,
            'message': "success"
        };
    }catch(err){
        return error = {
            'success': false,
            'message': err
        }
    }
}

module.exports = {
    addToMatchList : addToMatchList
}