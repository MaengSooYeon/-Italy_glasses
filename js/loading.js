var index = 0;                          //이미지에 접근하는 인덱스
window.onload = function(){ showImage(); }

function showImage(){ 
    var i;
    var x = document.getElementsByClassName("loading");  
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";   
    }
    index++;
    if (index > x.length) {
        index = 1;                      //인덱스가 초과되면 1로 변경
    }   
    x[index-1].style.display = "block";  
    setTimeout(showImage, 1000);         //함수를 1초마다 호출
}