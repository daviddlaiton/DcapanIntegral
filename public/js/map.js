function initMap() {
  var myLatLng = {lat: 4.668131, lng: -74.091339};

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatLng,
    mapTypeId: "roadmap"
  });
  var geocoder = new google.maps.Geocoder();


  $(document).ready(geocodeAddress(geocoder, map));
}

function geocodeAddress(geocoder, resultsMap) {
  $.getJSON("data/PuntosDeVenta.json", function (data){

    data.forEach(function (d){

      let split = d.LatLng;
      let afterSplit = split.split(",");
      let latLng = new google.maps.LatLng(afterSplit[0],afterSplit[1]);
      let marker = new google.maps.Marker({
        map: resultsMap,
        position: latLng
      });

      let infowindow = new google.maps.InfoWindow({
        content: '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">'+ d.Name+'</h1>'+
        '<div id="bodyContent">'+
        '<p><b>'+ d.Name+'</b>, Ubicado en: ' + d.Address+ '</p>'+
        '</div>'+
        '</div>'
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    });

  });
}




