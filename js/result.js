var result=0;
var end=0;
function again() {
    location.href="start.html"
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
    result+=n;
    
    if((result==571||result==575)&&end==1){
        location.href='result1.html';
    }
    if((result==577||result==579)&&end==1){
        location.href='result2.html';
    }
    if((result==576||result==580)&&end==1){
        location.href='result3.html';
    }
    if((result==581||result==585||result==587||result==591)&&end==1){
        location.href='result5.html';
    }
    if(((result==580)+8||result==584)&&end==1){
        location.href='result6.html';
    }
    if(((result==587)+20||result==589||result==590||result==592||result==593||result==595)&&end==1){
        location.href='result9.html';
    }
}