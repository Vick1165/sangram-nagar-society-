// Initialize and add the map
function initMap() {
  // The location of Uluru
  //   var uluru = { lat: 19.049511, lng: 72.861129 };
  var uluru = { lat: 19.0495569, lng: 72.8609117 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 20,
    center: uluru,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
