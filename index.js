/* 
 stretch goals
 I want the background backbound to animate when a shot is taking.
 so one point will be a free throw
 2 points a a layup or dunk
 3 points a 3 pointer
*/



let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score")
let gameEnding = document.getElementById("gameOver");
let backgroundScreen = document.getElementById("screen")
let btnHome1 = document.getElementById("btn-1-home")
let btnHome2 = document.getElementById("btn-2-home")
let btnHome3 = document.getElementById("btn-3-home")
let guestHome1 = document.getElementById("btn-1-guest")
let guestHome2 = document.getElementById("btn-2-guest")
let guestHome3 = document.getElementById("btn-3-guest")
let homePoints = 0;


function homeAdd1(){
     homePoints =homePoints + 1;
     homeScore.textContent = homePoints;
     backgroundScreen.style.background = "url(https://media.giphy.com/media/3oGRFfGQXanXsgQ2bK/giphy.gif)";
     backgroundScreen.style.backgroundSize = "cover";
     btnHome1.style.outline = "none";
}

function homeAdd2(){
    homePoints = homePoints + 2;
    homeScore.textContent = homePoints;
    backgroundScreen.style.background = "url(https://media.giphy.com/media/3oEduGPzZVMD4GLN7y/giphy-downsized-large.gif)";
    backgroundScreen.style.backgroundSize = "cover";
    btnHome2.style.outline = "none";
}

function homeAdd3(){
    homePoints = homePoints + 3;
    homeScore.textContent = homePoints;
    backgroundScreen.style.background = "url(https://media.giphy.com/media/xT8qBs8quN9k5fFFQY/giphy.gif)";
    backgroundScreen.style.backgroundSize = "cover";
    btnHome3.style.outline = "none";
}

let guestPoints = 0;

function guestAdd1(){
      guestPoints = guestPoints + 1;
      guestScore.textContent = guestPoints;
      backgroundScreen.style.background = "url(https://media.giphy.com/media/AjGydUr0rx67Hl7avH/giphy.gif)";
      backgroundScreen.style.backgroundSize = "cover";
      guestHome1.style.outline = "none";
    
}

function guestAdd2(){
    guestPoints = guestPoints + 2;
    guestScore.textContent = guestPoints;
     backgroundScreen.style.background = "url(https://media.giphy.com/media/3wqMxx4VAkByM/giphy.gif)";
    backgroundScreen.style.backgroundSize = "cover";
    guestHome2.style.outline = "none";
}

function guestAdd3(){
    guestPoints = guestPoints + 3;
    guestScore.textContent = guestPoints;
    backgroundScreen.style.background = "url(https://media.giphy.com/media/l3q2y2764DUQIKNRm/giphy.gif)";
    backgroundScreen.style.backgroundSize = "cover";
    guestHome3.style.outline = "none";
}

function endGame(){
    homePoints = 0;
    homeScore.textContent = 0
    guestPoints = 0;
    guestScore.textContent = 0;
    gameEnding.style.outline = "none";
    backgroundScreen.style.background = "url(https://media.giphy.com/media/xT9DPDoWMicL4nU3NC/giphy.gif)";
    backgroundScreen.style.backgroundSize = "cover";
}