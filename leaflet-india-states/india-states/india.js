window.onload = function() {
  function getColor(d) {
  return d == "Union Territor" ? '#FED976' :
         d == "State"  ? '#FFEDA0' :

                    '#FED976';
}
function style2(feature) {
    return {
        fillColor: getColor(feature.properties.TYPE_1),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
    //var map = L.map('map').setView([-41.2858, 174.78682], 14);
    var map = L.map('map').setView([21.48885, 76.99219], 5.3);


    mapLink =
        '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; ' + mapLink,
            id: 'map.light',
        maxZoom: 18,
        }).addTo(map);

 /*
    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);


    */

    map.on('click', function(e) {
        alert(e.latlng); // e is an event object (MouseEvent in this case)
    });
    var n = L.geoJson(indian_states).addTo(map);
    //L.geoJson(indian_states, {style: style2}).addTo(map);
    $('#mybutton').on('click', function () {
      console.log("helloss")
      n.setStyle(style2);

    })


    console.log('It got executed')


}
