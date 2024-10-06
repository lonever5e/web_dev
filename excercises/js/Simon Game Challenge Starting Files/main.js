let pattern = [];
let played = [];
let colors = ["blue", "green", "red", "yellow"];
let idx = 0;
var currLevel = 1;

$(".btn").click(function(e) {
    let color = e.target.id;
    pressColor(color);
    played.push(color);
    checkMove();
});

function checkMove(){
    if (pattern[idx] === played[idx]) {
        if(idx === pattern.length-1) {
            setTimeout(()=>{
                addNewMove();
            }, 500);
            idx = 0;
            played = [];
            currLevel++;
            $("#level-title").text("Level " + currLevel);
        }
        else{
            idx++;
        } 
    }
    else {
        console.log("Game over");
        gameOver();
    }
}

function addNewMove() {
    let color = Math.floor(Math.random()*(colors.length));
    pattern.push(colors[color]);
    pressColor(colors[color]);
    console.log(pattern);
}

function playRecord() {
    for (const color of pattern){
        pressColor(color);
    }
}

function makeSound(color) {
    let audio = new Audio("./sounds/" + color + ".mp3");
    audio.play();
}

function pressColor(color) {
    let element = $("#" + color);
    makeSound(color);
    element.addClass("pressed");
    setTimeout(()=>{
        element.removeClass('pressed');
    }, 100);
}

function restart() {
    pattern = [];
    played = [];
    idx = 0;
    currLevel = 1;
    $("#level-title").text("Level " + currLevel);
    addNewMove();
}

function gameOver() {
    $("#level-title").text("GameOver, Press A Key to Start");
    let audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    $("body").addClass("red");
    setTimeout(()=>{$("body").removeClass('red');}, 100);
}

$(document).on("keydown", function (e){ 
    if(e.originalEvent.key == "a") {
        restart();
    }
});