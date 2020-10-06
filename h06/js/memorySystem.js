// for the memory game

let PlayersDiv = document.getElementById("Players");
let GridDiv = document.getElementById("Grid");
let NextTurnDiv = document.getElementById("NextTurn");

MakePlayerElements();
MakeImg(18);
MemorySystem();


function MakePlayerElements () {
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

    let guesses = 0 - 1; //-1 because the pair array uses the guesses to pick the card
    let maxGuesses = 2 - 1;
    let nextTurn = false;
    let bobScore = 0, benScore = 0;
    let pair = [];
    let turnTbob_Fben = true; //true = turn for bob, false = turn is for ben

    //gets the player elements
    let player1 = document.getElementById("Players").childNodes[0];
    let playerTurn = document.getElementById("Players").childNodes[1];
    let player2 = document.getElementById("Players").childNodes[2];

    player1.innerText = "Bob: " + bobScore;
    playerTurn.innerText = "Turn is for: Bob";
    player2.innerText = "Ben: " + benScore;

    //chance the turn display
    /*if (turnTbob_Fben === true) {
        playerTurn.innerText = "Turn is for: Bob";
    } else {
        playerTurn.innerText = "Turn is for: Ben";
    }*/


    //checks if memoryCardsImg[i] is clicked
    for (let i = 0; i < memoryCardsImg.length; i++) {
        memoryCardsImg[i].addEventListener("click", function () {

            //gets the course from the pont h06/
            let imageSource = memoryCardsImg[i].src.split('h06/')[1];

            if (imageSource === "img/emptyCard.png" && guesses < maxGuesses) {
                memoryCardsImg[i].src = "img/card" + cardsLocation[i] + ".jpg";
                guesses++;
                pair[guesses] = memoryCardsImg[i].src;

                //checks if pair is equal
                if (pair[0] === pair[1]) {
                    if (turnTbob_Fben === true) {
                        bobScore++;
                        player1.innerText = "Bob: " + bobScore;
                    } else {
                        benScore++;
                        player2.innerText = "Ben: " + benScore;
                    }
                }


                //gives NextTurn() order to make a button
                if (guesses === maxGuesses) {
                    nextTurn = true;
                    NextTurn(nextTurn);

                    //checks if pair is unequal
                    if (pair[0] !== pair[1]) {
                        if (turnTbob_Fben === true) {
                            turnTbob_Fben = false;
                            playerTurn.innerText = "Turn is for: Ben";
                        } else {
                            turnTbob_Fben = true;
                            playerTurn.innerText = "Turn is for: Bob";
                        }

                        //turns the wrong cards to their backside
                        for (let i = 0; i < pair.length; i++) {
                            pair[i].src = "img/emptyCard.png";

                            console.log(pair[i]);
                        }
                    }
                }
            }
        })
    }

    //next turn button listener
    NextTurnDiv.addEventListener("click", function () {
        nextTurn = false;
        guesses = 0 - 1;

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