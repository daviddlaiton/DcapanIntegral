var map;
function initMap() {

  var myLatLng = {lat: 4.668131, lng: -74.091339};

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLatLng,
    mapTypeId: "roadmap"
  });

  // NOTE: This uses cross-domain XHR, and may not work on older browsers.

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });

  var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Panaderia</h1>'+
  '<div id="bodyContent">'+
  '<p><b>Panaderia</b>, ubicado en la calle..</p>'+
  '</div>'+
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
}



//function geocodeAddress(geocoder, resultsMap, titleToAdd) {
//  var address = document.getElementById('address').value;
//  geocoder.geocode({'address': address}, function(results, status) {
//    if (status === 'OK') {
//      resultsMap.setCenter(results[0].geometry.location);
//      let marker = new google.maps.Marker({
//        map: resultsMap,
//        position: results[0].geometry.location,
//        title: titleToAdd
//
//        marker.addListener('click', function() {
//          infowindow.open(map, marker);
//        });
//
//      });
//    } else {
//      alert('Geocode was not successful for the following reason: ' + status);
//    }
//  });
//}

