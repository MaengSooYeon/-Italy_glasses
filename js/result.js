var horn=0;         //뿔테
var round=0;        //동글이
var half=0;         //위는 각진 밑은 둥근
var square=0;       //사각
var limpidity=0;    //투명

var thick=0;        //두꺼운 두께
var thin=0;         //얇은 두께

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

function Choice(g1, g2, g3, g4, t1, t2, f){
    horn += g1;
    round += g2;
    half += g3;
    square += g4;
    limpidity += f;

    thick += t1;
    thin += t2;

    // if문 수정필요(비교)
    if(horn && thick>thin){
        $(location).attr('href','choose1.html');
    }else if(horn && thick<thin){
        $(location).attr('href','choose2.html');
    }else if(round && thick>thin){
        $(location).attr('href','choose3.html');
    }else if(round && thick<thin){
        $(location).attr('href','choose5.html');
    }else if(half){
        $(location).attr('href','choose6.html');
    }else if(half && thick>thin){
        $(location).attr('href','choose7.html');
    }else if(horn && limpidity){
        $(location).attr('href','choose9.html');
    }
}