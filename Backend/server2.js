var express = require('express');
var app = express();


var API_HOST = 'https://api.yelp.com'
var DEFAULT_TERM = 'dinner'
var DEFAULT_LOCATION = 'San Francisco, CA'
var SEARCH_LIMIT = 3
var SEARCH_PATH = '/v2/search/'

var yelp = require("yelp").createClient({
  consumer_key: "Emj2tJMe8PC1HOvsCCw_UA", 
  consumer_secret: "zIcn9nu2qfpIZQP8xdSguTsx59s",
  token: "F-MMx_ru3kZixf7lBs9JqOn1C8p4Zsfx",
  token_secret: "kvYgcIC7raNCHWhEfBqSZInzGuQ"
});




app.get('/:y', function(req, res) {
  var array = req.params.y;
  //  	for(var i = 0; i < array.length; i++)
  //  	{

		// yelp.search({term: "pizza", cll: array[i].lng + "," + array[i].lat, sort: 1, limit: 10, radius_filter: 800}, function(error, data) {
 	// 	 console.log(error);
 	// 	 console.log(data);
		// });
  //  	}
  // res.send(array);
  res.send(array);
});
app.listen(8080);