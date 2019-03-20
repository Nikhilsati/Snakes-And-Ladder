var number = 1;
var onGoingStarted = 0;
var numberList = [];
var card = "cube-";
var snakeshead = ["cube-99","cube-88","cube-71","cube-55","cube-24"];
var snaketail = ["cube-6","cube-54","cube-29","cube-13","cube-1"];
var ladderStart = ["cube-15","cube-8","cube-42","cube-66"];
var ladderEnd = ["cube-97","cube-31","cube-81","cube-87"];
for (let i = 1; i<=100; i++) {
    var cardName = card + i;
    numberList.push(cardName);
}

function getInnerHtml(id) {
 return document.getElementById(id).innerHTML;
}

var Button = `<span class = "number butn"><p> </p></span>`;
var temp;

function replaceButtonWithCube(id) {
    temp = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML = Button;
}
function restoreOldCube(id) {
    if(temp != null) {
        document.getElementById(id).innerHTML = temp;
    }   
}
function rollTheDice() {
    var diceNo = Math.floor(Math.random()*6)+1;
    document.getElementById("dicebutn").innerHTML = diceNo;
    return diceNo;
}

function startGame() {  
    if(document.getElementById("dicebutn").innerHTML == 6) {
        return true;
    }
    else {
        return false;
    }
}
function setOnGoing () {
    onGoingStarted = 0;
}

function onGoing() {
    if(startGame(true)) {
        console.log("Game Started");
        onGoingStarted++; 
        if(onGoingStarted == 1) {
            var button = document.querySelector("button");
            button.addEventListener('click',check);
            var count = 0;
            var old_id = null;
            function check() {
                console.log("Clicked");
                count = count + parseInt(document.getElementById("dicebutn").innerHTML);
                if(count>100) {
                    count = count - parseInt(document.getElementById("dicebutn").innerHTML);
                }
                else {
                    if(count == 100) {
                        console.log("yippeeee you won");
                    }
                    var id = card + count;
                    var gosnake = snaketail[snakeshead.indexOf(id)];
                    var goladder = ladderEnd[ladderStart.indexOf(id)];
                    restoreOldCube(old_id);
                    if(gosnake != null) {
                        replaceButtonWithCube(gosnake);
                        old_id = gosnake;
                        gosnake = gosnake.replace('cube-','');
                        console.log(count, gosnake);
                        count = gosnake;
                        count = parseInt(count);
                    }
                    else if(goladder != null) {
                        replaceButtonWithCube(goladder);
                        old_id = goladder;
                        goladder = goladder.replace('cube-', '');
                        count = goladder;
                        count = parseInt(count);
                    }
                    else {
                        replaceButtonWithCube(id);
                        old_id = id;
                        console.log(id,old_id);
                    }
                }
                
            
            
        };
        }
    }
}
