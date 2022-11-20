let map;

function initMap() {
map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
});

ibgeMarker =   new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
});

ibgeMarker.setMap(map)
}

window.initMap = initMap;