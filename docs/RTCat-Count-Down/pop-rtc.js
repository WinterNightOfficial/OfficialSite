window.onload = function(){
    var imgBox = document.getElementById("imgBoxBtn");
    if(imgBox){
        imgBox.addEventListener('pointerdown', PopRTCDown, false);
        imgBox.addEventListener('pointerup', PopRTCUp, false);
    }
}

function PopRTCDown(){
    var audio = document.getElementById("pop");
    audio.play();
    document.getElementById("imgBox").src = "images/icon-large.png";
}
function PopRTCUp(){
    document.getElementById("imgBox").src = "images/icon.jpg";
}