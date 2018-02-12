function myMap() {
	var mapOptions = {
		center: new google.maps.LatLng(52.2990941,-2.0731045),
		mapTypeID: google.maps.MapTypeId.ROADMAP,
		zoom: 14,
		zoomControl: true, 
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_TOP
		},
		disbaleDefaultUI: true,
		fullscreenControl: false,
		streetViewControl: false,
		mapTypeControl: false
	};
	var bbrMap = new google.maps.Map(document.getElementById('geo-map'), mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(52.2990941,-2.0731045),
		map: bbrMap,
		title: 'Bromsgrove Body Repairs'
	})
	/* Thanks to StackOverflow contribution from David Anderton, providing this window resizing fix to the Maps API's loading issues with responsive designs.
	https://stackoverflow.com/questions/31988492/google-maps-dont-work-sometimes-or-almost-always-not-working */
	google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    map.setCenter(center);
	});
	google.maps.event.trigger(map, "resize");
}


