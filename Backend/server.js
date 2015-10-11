var express = require('express');
var app = express();


var API_HOST = 'https://api.yelp.com'
var DEFAULT_TERM = 'dinner'
var DEFAULT_LOCATION = 'San Francisco, CA'
var SEARCH_LIMIT = 3
var SEARCH_PATH = '/v2/search/'

var CONSUMER_KEY = "Emj2tJMe8PC1HOvsCCw_UA";
var CONSUMER_SECRET = "zIcn9nu2qfpIZQP8xdSguTsx59s";
var TOKEN = "F-MMx_ru3kZixf7lBs9JqOn1C8p4Zsfx";
var TOKEN_SECRET = "kvYgcIC7raNCHWhEfBqSZInzGuQ";

var request = require('request');
var OAuth   = require('oauth-1.0a');
var oauth = OAuth({
    consumer: {
        public: CONSUMER_KEY,
        secret: CONSUMER_SECRET
    },
    signature_method: 'HMAC-SHA1'
});

var token = {
    public: 'TOKEN',
    secret: 'TOKEN_SECRET'
};


var term = "Pizza".replace(/\s/g, "+");
	






app.get('/', function(req, res) {
  res.send('Hello Seattle\n');
});
  //  	var array = request.params.getYelpLocations;
  //  	for(var i = 0; i < array.length; i++)
  //  	{

  //  		var m_url = API_HOST + SEARCH_PATH + "?" + "term=" + term + "&cll="+array[0].long +  "," + 
  //  		array[0].lat + "&sort=1" + "&limit=10" + "&radius_filter=800"

		// var request_data = {
		//     url: m_url
		//     method: 'GET',
		//     data: {
		//         status: ''
		//     }
		// };

		// request({
		//     url: request_data.url,
		//     form: oauth.authorize(request_data, token)
		// }, function(error, response, body) {
		//     //process your data here

		//     return body;
		// });
  //  	}

app.listen(8080);
console.log('Listening on port 8080...');