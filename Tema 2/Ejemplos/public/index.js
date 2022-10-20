// GEOLOCALIZACIÓN

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
}

function getPosition(){
        return navigator.geolocation.getCurrentPosition(showPosition);
}

document.write(getPosition());



