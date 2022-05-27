'use strict';
/** call to ocapi registry and bring the products */
function callService(){
    var sitePreferences =  dw.system.Site.getCurrent().getPreferences().custom;
    var ocapiRegistry =  getService('ocapi.get',{
        createRequest: function(svc, args){
            svc.setURL(svc.getURL()+args.queryParams);
            svc.requestMethod = 'GET';
            return svc;
        },
        parseResponse: function(svc, result){
            var parsedResponse = JSON.parse(result.text);
            var searchProducts = parsedResponse.hits;

            return searchProducts;
        }
    })
    return ocapiRegistry.call({
        queryParams: "/product_search?refine=brand%3DSony&refine_1=cgid%3Delectronics&count=20&client_id=" + sitePreferences.ocapi_client_id
    });
}

function getService(serviceID, serviceCallback) {
	var service;
    //If the service was not configured and callback was sent
    if (serviceCallback) {
    		service = dw.svc.LocalServiceRegistry.createService(serviceID, serviceCallback);
    }

    return service;
}

module.exports = {
    callService : callService
}
