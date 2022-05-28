'use strict'

var server = require('server');
var Resource = require('dw/web/Resource');
var URLUtils = require('dw/web/URLUtils');
var CatalogMgr = require('dw/catalog/CatalogMgr');
var ProductSearchModel = require('dw/catalog/ProductSearchModel');

server.get('CategoryList', function () {
    var productSearchModel = new ProductSearchModel();
    productSearchModel.addRefinementValues('category', 'root');
    productSearchModel.search()
    var match = productSearchModel.getProductSearchHits();
    var t = "t";
});

server.get('Send', function (req, res, next) {
    var productSearchModel = new ProductSearchModel();
    productSearchModel.addRefinementValues('brand', 'Sony');
    productSearchModel.search()
    var products = productSearchModel.getProductSearchHits();
    var productsReturn = [];
    while (products.hasNext()){
        var product = products.next().getProduct();
        var productName = product.getName();
        var productID = product.getID();
        var productPrice = product.getPriceModel().getPrice().value;
        var productImage = product.getImages('thumbnail');
        var productURL = URLUtils.https('Catalog-Show', 'pid', productID).toString();
        var productDescription = product.getLongDescription();
        var productBrand = product.getBrand();
        var productCategory = product.getPrimaryCategory().ID;
        var productCategoryName = product.getPrimaryCategory().getDisplayName();
        productsReturn.push({
            'productName': productName,
            'productID': productID,
            'productPrice': productPrice,
            'productImage': productImage,
            'productURL': productURL,
            'productDescription': productDescription,
            'productBrand': productBrand,
            'productCategory': productCategory,
            'productCategoryName': productCategoryName
        });
    }
    res.json(productsReturn);
        next()

});



module.exports = server.exports();