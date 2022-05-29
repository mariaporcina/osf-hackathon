'use strict';
/**
 * Send email every time has new product in cart
 * @param {string} productList - List of products in store_match_wishlis custom object
 * @param {string} customerNo - receive customer ID
 */

 var CustomObjectMgr = require("dw/object/CustomObjectMgr");
 var ProductSearchModel = require('dw/catalog/ProductSearchModel');

 function checkExistingWishList(customerNo) {
    //try{
        var object = CustomObjectMgr.getCustomObject("store_match_wishlist", customerNo);
        if(object){
            var IDS = object.custom.productID.split(',');
            var productSearchModel = new ProductSearchModel();
            productSearchModel.setProductIDs(IDS)
            productSearchModel.search();
            var productsHits = productSearchModel.getProductSearchHits();
            var teste='teste';
        }else{
            return error = {
                'success': false,
                'message': 'no'
            };
        }
        return productList;
    /*} catch(err) {
        return error = {
            'success': false,
            'message': 'fail'
        }
    }*/
}

module.exports = {
    checkExistingWishList : checkExistingWishList
}