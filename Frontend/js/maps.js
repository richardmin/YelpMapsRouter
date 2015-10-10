
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

/*
function calcRoute(){
	start="Sydney NSW,Australia";
	end="Newcastle NSW,Australia";
	
	var request = {
		origin: start,
		destination: end,
		travelMode: google.maps.TravelMode.DRIVING
	};
	directionsService.route(request, function(result, status) {
		if (status === google.maps.DirectionsStatus.OK){
			directionsDisplay.setDirections(result);
		} else {
			window.alert('Directions request fails due to ' + status);
		}
	});
}
*/


function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	var start="Sydney NSW,Australia";
	var end="Newcastle NSW,Australia";
	console.log("Hellow");
	
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

$("#button").bind("click", calculateAndDisplayRoute)