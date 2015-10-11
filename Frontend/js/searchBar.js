
//$(function() {
    //$( "#accordion-bottom" ).accordion({
      //heightStyle: "fill"
    // });
  // });
var API_HOST = 'https://api.yelp.com'
var DEFAULT_TERM = 'dinner'
var DEFAULT_LOCATION = 'San Francisco, CA'
var SEARCH_LIMIT = 3
var SEARCH_PATH = '/v2/search/'

var CONSUMER_KEY = "Emj2tJMe8PC1HOvsCCw_UA";
var CONSUMER_SECRET = "zIcn9nu2qfpIZQP8xdSguTsx59s";
var TOKEN = "F-MMx_ru3kZixf7lBs9JqOn1C8p4Zsfx";
var TOKEN_SECRET = "kvYgcIC7raNCHWhEfBqSZInzGuQ";
var oauth;
var token;

function yelpInit(){
	oauth = OAuth({
		consumer: {
			public: CONSUMER_KEY,
			secret: CONSUMER_SECRET
		},
		signature_method: 'HMAC-SHA1'
	});
	token = {
		public: TOKEN,
		secret: TOKEN_SECRET
	};
}

function search(){
	var term = "Pizza".replace(/\s/g, "+");
	var location = "Los Angeles".replace(/\s/g, "+");
	
	var m_url = API_HOST + SEARCH_PATH + "?" + "term=" + term + "&location="+location + "&sort=1"
	var request_data = {
		url: m_url,
		method: 'POST',
		data: {
			status: 'Hello Ladies + Gentlemen, a signed OAuth request!'
		}
	};
	console.log(request_data);
	
	$.ajax({
		url: request_data.url,
		type: request_data.method,
		data: request_data.data,
		dataType: 'jsonp',
		headers: oauth.toHeader(oauth.authorize(request_data, token))
	}).done(function(data) {
		console.log("wheeee");	
		//process your data here
	});	
}

$("#button").bind("click", yelpInit)
$("#button2").bind("click", search)
