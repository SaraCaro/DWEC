// // GEOLOCALIZACIÓN

var platform = new H.service.Platform({
    'apikey': 'og4sf9XW1Yelmd8M5ZqkbVUMmP5zXWTUN5L34FHpX08'
});


var defaultLayers = platform.createDefaultLayers();

function showPosition(miPos){

    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
          zoom: 15,
          center: { lat: miPos.coords.latitude, lng: miPos.coords.longitude}
        });
        var svgMarkup = '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
        'height="22" /><text x="12" y="18" font-size="12pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="white">H</text></svg>';

    var icon = new H.map.Icon(svgMarkup),
        coords = {lat: miPos.coords.latitude, lng: miPos.coords.longitude},
        marker = new H.map.Marker(coords, {icon: icon});
    
    map.addObject(marker);
    map.setCenter(coords);
    
    var service = platform.getSearchService();


    service.reverseGeocode({
    at: `${miPos.coords.latitude},${miPos.coords.longitude}`
    }, (result) => {
    result.items.forEach((item) => {
        console.log(item.address.label)
        });
    }, alert);

    var targetElement = document.getElementById('mapContainer');
    var routingParameters = {
        'routingMode': 'fast',
        'transportMode': 'car',
        // The start point of the route:
        'origin': '37.18817,-3.60667',
        // The end point of the route:
        'destination': '37.38283,-5.97317',
        // Include the route shape in the response
        'return': 'polyline'
      };
      
      // Define a callback function to process the routing response:
      var onResult = function(result) {
        // ensure that at least one route was found
        if (result.routes.length) {
          result.routes[0].sections.forEach((section) => {
               // Create a linestring to use as a point source for the route line
              let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
      
              // Create a polyline to display the route:
              let routeLine = new H.map.Polyline(linestring, {
                style: { strokeColor: 'blue', lineWidth: 3 }
              });
      
              // Create a marker for the start point:
              let startMarker = new H.map.Marker(section.departure.place.location);
      
              // Create a marker for the end point:
              let endMarker = new H.map.Marker(section.arrival.place.location);
      
              // Add the route polyline and the two markers to the map:
              map.addObjects([routeLine, startMarker, endMarker]);
      
              // Set the map's viewport to make the whole route visible:
              map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
          });
        }
      };
      
      // Get an instance of the routing service version 8:
      var router = platform.getRoutingService(null, 8);
      router.calculateRoute(routingParameters, onResult,
        function(error) {
          alert(error.message);
        });
}

  
function getPosition(){
        return navigator.geolocation.getCurrentPosition(showPosition);
}


document.write(getPosition());
