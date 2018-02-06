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
}


