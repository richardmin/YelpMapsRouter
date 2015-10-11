var map;
var directionsService;
var directionsDisplay;
var latArray=[];
var lngArray=[];
var path;
var coordinates=[];

function initMap() {
	directionsDisplay = new google.maps.DirectionsRenderer;
	directionsService = new google.maps.DirectionsService;
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	});
	directionsDisplay.setMap(map);
}

function calculateAndDisplayRoute() {
	var start="Zion National Park, Utah";
	var end="University of California, Los Angeles, Los Angeles";
	
	directionsService.route({
			origin: start,
			destination: end,
			travelMode: google.maps.TravelMode.DRIVING
		}, function(response, status) {
			if (status === google.maps.DirectionsStatus.OK) {
			  directionsDisplay.setDirections(response);
			  getCoordinates(response);
			} else {
			  window.alert('Directions request failed due to ' + status);
			}
		}
	);
}	

function getCoordinates(result) {
	var currentRouteArray = result.routes[0];  //Returns a complex object containing the results of the current route
	var currentRoute = currentRouteArray.overview_path; //Returns a simplified version of all the coordinates on the path

	obj_newPolyline = new google.maps.Polyline({ map: map }); //a polyline just to verify my code is fetching the coordinates
	path = obj_newPolyline.getPath();
	for (var x = 0; x < currentRoute.length; x++) {
		var pos = new google.maps.LatLng(currentRoute[x].lat(), currentRoute[x].lng())
		latArray[x] = currentRoute[x].lat(); //Returns the latitude
		lngArray[x] = currentRoute[x].lng(); //Returns the longitude
		path.push(pos);
	}
}

function getJson(){
	for (var i = 0; i < path.length; i++){
		var myLatLng = {lat: latArray[i], lng: lngArray[i]};
		coordinates[i] = myLatLng;
	}
	console.log(coordinates);
	return coordinates;
}

$("#button").bind("click", calculateAndDisplayRoute)
$("#button2").bind("click", getJson)