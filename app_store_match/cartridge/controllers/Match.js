'use strict'

var server = require('server');
var Resource = require('dw/web/Resource');
var URLUtils = require('dw/web/URLUtils');


server.get('CategoryList', function (req, res, next) {
    var categoryListHelper = require('*/cartridge/scripts/storematch/categoryListHelper');
    res.json(categoryListHelper.categoryList());
    next()
});

server.get('Send', function (req, res, next) {
    var customerNo = req.querystring.customerNo;
    var productSearchModel = new ProductSearchModel();
    productSearchModel.addRefinementValues('brand', 'Sony');
    productSearchModel.search()
    var products = productSearchModel.getProductSearchHits();
    var productsReturn = [];
    productsReturn["CustomerNo"] = customerNo;
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

server.get('ProductsListByCategory', function (req, res, next) {
    var customerNo = req.querystring.customerNo;
    var categoryID = req.querystring.categoryID;
    var productsListByCategory = require('*/cartridge/scripts/storematch/productsListByCategoryHelper');
    res.json(productsListByCategory.productsListByCategory(categoryID, customerNo));
    next();
});

server.get('ModalShow', function (req, res, next) {
    if(req.currentCustomer.profile != undefined){
        res.render('components/modal',{customerNo:req.currentCustomer.profile.customerNo});
        next();
    }else{
        res.json({login:true})
        next();
    }
});

module.exports = server.exports();