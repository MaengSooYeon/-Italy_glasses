// var result=0;
var result="";
var end=0;
function again() {
    location.href="index.html"
}

function another() {
    location.href="moreResult1.html"
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

function Choice(n, end){
    result += n;

    if(result.length == 22) {
        if (result == "0142461709881503041106" || result == "0102461709881503041106" || result == "1102164709881523241107" || result == "1122164709881523241107" || result == "0102461729881503044106" || result == "0142461729881503044106" || result == "1142764729881523244106" || result == "1142164729881523244106" || result == "1102764729881523244106" || result == "1102164729881523244106" || result == "1142764709881523041106" || result == "1102764709881523041106" || result == "0122161729984503241107" || result == "0122461729984503241107" || result == "0122761729984503241107" || result == "0102161729984503241107" || result == "0102461729984503241107" || result == "0102761729984503241107") {
            if((result == "0142461709881503041106" || result == "0102461709881503041106") && end==1) {
                location.href="result1.html";
            }
            if((result == "1102164709881523241107" || result == "1122164709881523241107") && end==1) {
                location.href="result2.html";
            }
            if((result == "0102461729881503044106" || result == "0142461729881503044106") && end==1) {
                location.href="result3.html";
            }
            if((result == "1142764729881523244106" || result == "1142164729881523244106" || result == "1102764729881523244106" || result == "1102164729881523244106") && end==1) {
                location.href="result5.html";
            }
            if((result == "1142764709881523041106" || result == "1102764709881523041106") && end==1) {
                location.href="result6.html";
            }
            if((result == "0122161729984503241107" || result == "0122461729984503241107" || result == "0122761729984503241107" || result == "0102161729984503241107" || result == "0102461729984503241107" || result == "0102761729984503241107") && end==1) {
                location.href="result9.html";
            }
        } else {
            location.href="result9.html";
        }
    }
}