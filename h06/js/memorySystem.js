// for the memory game

let PlayersDiv = document.getElementById("Players");
let GridDiv = document.getElementById("Grid");
let NextTurnDiv = document.getElementById("NextTurn");

PlayerSystem();
MakeImg(18);
MemorySystem();


function PlayerSystem () {
    //makes player 1
    let newPlayerDiv = document.createElement("p");
    let pStyle = newPlayerDiv.style;
    pStyle.display = "inline-block";
    pStyle.border = "solid mediumblue 2px";
    pStyle.backgroundColor = "cornflowerblue";
    pStyle.fontSize = "25px";
    pStyle.padding = "20px";
    pStyle.marginBottom = "15px";
    PlayersDiv.appendChild(newPlayerDiv);

    //makes players turn display
    newPlayerDiv = document.createElement("p");
    pStyle = newPlayerDiv.style;
    pStyle.display = "inline-block";
    pStyle.border = "solid mediumblue 2px";
    pStyle.backgroundColor = "cornflowerblue";
    pStyle.fontSize = "25px";
    pStyle.padding = "20px";
    pStyle.marginLeft = "200px";
    pStyle.marginRight = "200px";
    pStyle.marginBottom = "15px";
    PlayersDiv.appendChild(newPlayerDiv);

    //makes player 2
    newPlayerDiv = document.createElement("p");
    pStyle = newPlayerDiv.style;
    pStyle.display = "inline-block";
    pStyle.border = "solid mediumblue 2px";
    pStyle.backgroundColor = "cornflowerblue";
    pStyle.fontSize = "25px";
    pStyle.padding = "20px";
    pStyle.marginBottom = "15px";
    PlayersDiv.appendChild(newPlayerDiv);


    //player count system
    let player1 = document.getElementById("Players").childNodes[0];
    let playerTurn = document.getElementById("Players").childNodes[1];
    let player2 = document.getElementById("Players").childNodes[2];

    player1.innerText = "Bob: " + "0";
    playerTurn.innerText = "Turn is for: " + "niks";
    player2.innerText = "Ben: " + "0";
}

function MakeImg (amount) {
    for (let i = 0; i < amount; i++) {
        let newImg = document.createElement("img");
        newImg.className = "card";
        newImg.src = "img/emptyCard.png";
        GridDiv.appendChild(newImg);
    }
}

function MemorySystem () {
    let memoryCardsImg = document.getElementsByClassName("card");
    let cardsLocation = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

    //shuffle array
    cardsLocation.sort(function (a, b){return 0.5 - Math.random()});

    let guesses = 0;
    let maxGuesses = 2;
    let nextTurn = false;

    //checks if memoryCardsImg[i] is clicked
    for (let i = 0; i < memoryCardsImg.length; i++) {
        memoryCardsImg[i].addEventListener("click", function () {

            let imageSource = memoryCardsImg[i].src.split('h06/')[1];

            if (imageSource === "img/emptyCard.png" && guesses < maxGuesses) {
                memoryCardsImg[i].src = "img/card" + cardsLocation[i] + ".jpg";
                guesses++;

                //gives NextTurn() order to make a button
                if (guesses === maxGuesses) {
                    nextTurn = true;
                    NextTurn(nextTurn);
                }
            }
        })
    }

    //next turn button listener
    NextTurnDiv.addEventListener("click", function () {
        nextTurn = false;
        guesses = 0;

        NextTurn(nextTurn);
    })

    //debug
    console.log("memory cards file values: " + cardsLocation);
}

function NextTurn (nextTurn) {

    if (nextTurn === true) {
        let nextTurnP = document.createElement("p");
        nextTurnP.style.border = "solid mediumblue 2px";
        nextTurnP.style.backgroundColor = "cornflowerblue";
        nextTurnP.style.fontSize = "25px";
        nextTurnP.innerText = "Next Turn";
        nextTurnP.style.padding = "18px";
        nextTurnP.style.marginTop = "15px";
        NextTurnDiv.appendChild(nextTurnP);
    }

    if (nextTurn === false) {
        document.getElementById("NextTurn").childNodes[0].remove();
    }
}