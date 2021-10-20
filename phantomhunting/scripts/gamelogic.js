var points = -1;
var endGame = false;
var timer = 10;

function toutchPhantom(){
    movement();
    addPoints();
}

function movement(){
    if(endGame != true){
        var phantom = document.getElementById("phantom");
        var posx = randomFloat(0, 500);
        var posy = randomFloat(0, 500);
        phantom.style.left = posx + "px";
        phantom.style.top = posy + "px";
    }
}

function randomFloat(min, max){
    return Math.random() * max + min
}

function addPoints(){
    points ++;
    if(endGame != true){
        document.getElementById("score").innerHTML = "Score: " + points;
        if(points >= 10){
            youWin();
        }
    }
}

function youWin(){
        document.getElementById("score").innerHTML = "You win!";
        endGame = true;
}

function youLoose(){
    endGame = true;
        document.getElementById("score").innerHTML = "Time´s over!, the phantom escaped";
}

function timeController(){
    setInterval(function(){document.getElementById("timer").innerHTML = "Timer: " + timer; if(timer > 0 && endGame != true) timer --}, 1000);
    setTimeout(function(){if(points < 10) youLoose()}, 12000);
    
}
