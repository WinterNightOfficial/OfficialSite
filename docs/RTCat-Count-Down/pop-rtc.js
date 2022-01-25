window.onload = function(){
    //Birthday
    var today = new Date().getDate();
    var birthday = new Date("January 26").getDate();

    if (today == birthday){
        window.alert("貓貓羅生日快樂！\nRTCat Happy Birthday!");
    }
    
    //Pop-Cat
    var imgBox = document.getElementById("imgBoxBtn");
    var count = 0;

    if(imgBox){
        imgBox.addEventListener('pointerdown', PopRTCDown, false);
        imgBox.addEventListener('pointerup', PopRTCUp, false);
    }

    function PopRTCDown(){
        document.getElementById("imgBox").src = "images/icon-large.png";
        sound();
        PopCount();
    }

    function PopRTCUp(){
        document.getElementById("imgBox").src = "images/icon.jpg";
    }

    function sound(){
        var pop = new Audio("pop.mp3");
        pop.play();
    }

    function PopCount(){
        count++;
        document.getElementById("count").innerHTML = count;
    }
}