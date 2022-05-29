'use strict'

var server = require('server');
var Resource = require('dw/web/Resource');
var URLUtils = require('dw/web/URLUtils');


server.get('CategoryList', function (req, res, next) {
    var categoryListHelper = require('*/cartridge/scripts/storematch/categoryListHelper');
    res.json(categoryListHelper.categoryList());
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