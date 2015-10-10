//
var API_HOST = 'api.yelp.com'
var DEFAULT_TERM = 'dinner'
var DEFAULT_LOCATION = 'San Francisco, CA'
var SEARCH_LIMIT = 3
var SEARCH_PATH = '/v2/search/'
var BUSINESS_PATH = '/v2/business/'

var CONSUMER_KEY = "Emj2tJMe8PC1HOvsCCw_UA";
var CONSUMER_SECRET = "zIcn9nu2qfpIZQP8xdSguTsx59s";
var TOKEN = "F-MMx_ru3kZixf7lBs9JqOn1C8p4Zsfx";
var TOKEN_SECRET = "kvYgcIC7raNCHWhEfBqSZInzGuQ";

function yelpInit(){
	var yelp = require("../index").createClient({
	  consumer_key: process.env.CONSUMER_KEY,
	  consumer_secret: process.env.CONSUMER_SECRET,
	  token: process.env.TOKEN,
	  token_secret: process.env.TOKEN_SECRET,
	  ssl: true
	});
}

function search(){
	yelp.search({term: "food", location: "Montreal"}, function(error, data) {
	  console.log(error);
	  console.log(data);
	});
}

/*
function search(term, location){
    var url_params = {
        term: term.replace(' ', '+'),
        location: location.replace(' ', '+'),
        limit: SEARCH_LIMIT
    };
    return request(API_HOST, SEARCH_PATH, url_params=url_params);
}*/