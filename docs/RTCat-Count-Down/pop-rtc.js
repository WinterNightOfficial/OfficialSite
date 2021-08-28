window.onload = function(){
    var imgBox = document.getElementById("imgBoxBtn");

    if(imgBox){
        imgBox.addEventListener('pointerdown', PopRTCDown, false);
        imgBox.addEventListener('pointerup', PopRTCUp, false);
    }

    function PopRTCDown(){
        document.getElementById("imgBox").src = "images/icon-large.png";
        sound();
    }

    function PopRTCUp(){
        document.getElementById("imgBox").src = "images/icon.jpg";
    }

    function sound(){
        var pop = new Audio("pop.mp3");
        pop.play();
    }
}