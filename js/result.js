function again() {
    location.href="start.html"
}

function another() {
    location.href=""
}

function initMap() {
    var place = { lat: 37.483453, lng: 126.929499 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: place
    });

    new google.maps.Marker({
        position: place,
        map: map,
        label: "이태리안경원"
    });
}