var request = require('request');
module.exports = function(context, req) {
    
    var faceId = "c5c24a82-6845-4031-9d5d-978df9175426";
    var accesskey = process.env.FACEAPIKEY;

    console.log(req.query.faceid);
    if (req.query.faceid ) {
        faceId = req.query.faceid;
    }

    var payload = {    
        "personGroupId":"sample_group",
        "faceIds":[
            faceId
        ],
        "maxNumOfCandidatesReturned":1,
        "confidenceThreshold": 0.5
    };
    request.post({
    headers: {'Content-Type' : 'application/json', "Ocp-Apim-Subscription-Key" : accesskey},
    url:     'https://westus.api.cognitive.microsoft.com/face/v1.0/identify',
    body:    payload
    }, function(error, response, body){
    console.log(body);
    });

};
