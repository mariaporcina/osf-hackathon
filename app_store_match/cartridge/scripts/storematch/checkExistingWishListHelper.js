'use strict';
/**
 * Send email every time has new product in cart
 * @param {string} productList - List of products in store_match_wishlis custom object
 * @param {string} customerNo - receive customer ID
 */

 var CustomObjectMgr = require("dw/object/CustomObjectMgr");
 var ProductSearchModel = require('dw/catalog/ProductSearchModel');
 var URLUtils = require('dw/web/URLUtils');
 var ProductMgr = require('dw/catalog/ProductMgr');
 var CatalogMgr = require('dw/catalog/CatalogMgr');

 function checkExistingWishList(customerNo) {
    //try{
        var object = CustomObjectMgr.getCustomObject("store_match_wishlist", customerNo);
        if(object){
            var IDS = object.custom.productID.split(',');
            var productList = [];
            IDS.forEach(function(productID){
                productList.push(ProductMgr.getProduct(productID))
            })
            var productsReturn = [];
            productList.forEach(function(product){
                var productName = product.getName();
                var productID = product.getID();
                var productPrice = product.getPriceModel().getPrice().value;
                if (productPrice == 0){
                    productPrice = product.priceModel.maxPrice.value;
                }
                var productCurrency = '$';
                var productImage = [];
                var Image = product.getImages('large');
                Image.toArray().forEach(function(imageUrl){
                    productImage.push(imageUrl.httpsURL.toString())
                });
                var productURL = URLUtils.https('Catalog-Show', 'pid', productID).toString();
                var productDescription = product.getLongDescription();
                var productBrand = product.getBrand();
                var productCategory = product.categorized ? product.getPrimaryCategory().ID : '0';
                var productCategoryName = product.categorized ? CatalogMgr.getCategory(productCategory).getDisplayName() : 'N/A';
                productsReturn.push({
                    'productName': productName,
                    'productID': productID,
                    'productCurrency': productCurrency,
                    'productPrice': productPrice,
                    'productImage': productImage,
                    'productURL': productURL,
                    'productDescription': productDescription,
                    'productBrand': productBrand,
                    'productCategory': productCategory,
                    'productCategoryName': productCategoryName
                });
            });
            return productsReturn;
        }else{
            return error = {
                'success': false,
                'message': 'no'
            };
        }
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