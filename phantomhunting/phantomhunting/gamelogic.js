var points = 0;

function toutchPhantom(){
    movement();
    addPoints();
}

function movement(){
    var phantom = document.getElementById("phantom");
    var posx = randomFloat(0, 500);
    var posy = randomFloat(0, 500);
    phantom.style.left = posx + "px";
    phantom.style.top = posy + "px";
}

function randomFloat(min, max){
    return Math.random() * max + min
}

function addPoints(){
    points ++;
    document.getElementById("score").innerHTML = "Score: " + points;
    if(points >= 10){
        youWin();
    }
}

function youWin(){
    document.getElementById("score").innerHTML = "You win!";
}

function youLoose(){
    document.getElementById("score").innerHTML = "Time´s over!, the phantom scaped";
}

function timeController(){
    setTimeout(function(){if(points < 10) youLoose()}, 10000);
}