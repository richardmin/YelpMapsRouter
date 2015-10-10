var map;
var directionsService;
var directionsDisplay;

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
			} else {
			  window.alert('Directions request failed due to ' + status);
			}
		}
	);
}	
