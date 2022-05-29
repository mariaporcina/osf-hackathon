'use strict';
/**
 * Send email every time has new product in cart
 * @param {string} categoryList - List of categories online
 */

 var CatalogMgr = require('dw/catalog/CatalogMgr');

 function categoryList() {
    try{
        var masterCategories = CatalogMgr.getSiteCatalog().getRoot().onlineSubCategories;
        var categoryLists = {};
        var teste = [];
        masterCategories.toArray().forEach(function(element) {
            var categoryList = {};
            var subCategories = element.onlineSubCategories;
            var subCategoryList = [];
            subCategories.toArray().forEach(function(key) {
                subCategoryList.push(key.ID)
            });
            categoryList['category'] = element.displayName
            categoryList['subcategory'] = subCategoryList;
            teste.push(categoryList);
        });
        categoryLists['data'] = teste;
        return categoryLists;
    }catch(err){
        return error = {
            'success': false,
            'message': err
        }
    }
}

module.exports = {
    categoryList : categoryList
}