function setDice(className) {
    let number = Math.floor(Math.random()*6) + 1;
    let diceImage = "dice" + number + ".png";
    document.querySelector("." + className).src = "./images/" + diceImage;
    return number;
}

function chooseWinner(dice1, dice2) {
    let result = "";
    if (dice1 > dice2) {
        result = "Player 1 is the Winner";
    }
    else if (dice1 < dice2) {
        result = "Player 2 is the Winner";
    }
    else {
        result = "It is a Draw"
    }
    console.log(document.querySelector(".img1").src);
    document.querySelector("h1").innerHTML = result;
}

let dice1 = setDice("img1");
let dice2 = setDice("img2");
chooseWinner(dice1, dice2);