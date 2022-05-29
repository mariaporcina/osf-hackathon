'use strict';
/**
 * Send email every time has new product in cart
 * @param {string} productsReturn - List of products by category
 * @param {string} categoryID receive category ID
 * @param {string} customerID receive customer ID
 */

 var ProductSearchModel = require('dw/catalog/ProductSearchModel');
 var CatalogMgr = require('dw/catalog/CatalogMgr');
 var URLUtils = require('dw/web/URLUtils');

 function productsListByCategory(categoryID, customerNo) {
    try {
        var productSearchModel = new ProductSearchModel();
        productSearchModel.setCategoryID(categoryID);
        productSearchModel.search();
        var products = productSearchModel.getProductSearchHits();
        var productsReturn = [];
        productsReturn["CustomerNo"] = customerNo;
        while (products.hasNext() && productsReturn.length < 51){
            var product = products.next().getProduct();
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
            var productCategory = categoryID;
            var productCategoryName = CatalogMgr.getCategory(categoryID).getDisplayName();
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
        }
        return productsReturn;
    }catch(err){
        return error = {
            'success': false,
            'message': err
        }
    }
}

module.exports = {
    productsListByCategory : productsListByCategory
}