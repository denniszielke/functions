var request = require('request');
module.exports = function(context, req) {
    var logicAppUrl = "https://prod-12.southcentralus.logic.azure.com/workflows/whatever";
    context.log('function triggered');
    request(logicAppUrl, function(error, response, body) {
       context.log("inside callback completed");
       context.done(); 
    });
};
