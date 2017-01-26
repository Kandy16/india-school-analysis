window.onload = function() {

    //var map = L.map('map').setView([-41.2858, 174.78682], 14);
    var map = L.map('map').setView([21.48885, 76.99219], 5.3);
    
    
    mapLink = 
        '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; ' + mapLink,
        maxZoom: 18,
        }).addTo(map);
    
    
    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
    
    
    
    
    
    console.log('It got executed')
    
    
}