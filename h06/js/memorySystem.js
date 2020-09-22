// voor de memory game

let PlayersDiv = document.getElementById("Players");
let GridDiv = document.getElementById("Grid");
let NextTurnDiv = document.getElementById("NextTurn");

MakeImg(18);
MemorySystem();


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
            if (guesses < maxGuesses) {
                memoryCardsImg[i].src = "img/card" + cardsLocation[i] + ".jpg";
                guesses++;

                if (guesses === maxGuesses) {
                    //nextTurn = true;

                    guesses = 0;
                }
            }

            console.log(guesses);
        })
    }

    //debug
    console.log("memory cards file value: " + cardsLocation);
}


//testen
function MakeImg2 (amount) {
    let lock = false;

    for (let i = 0; i < amount / 2; i++) {
        let newImg = document.createElement("img");
        newImg.className = "card";
        newImg.src = "img/card" + i + ".jpg";
        GridDiv.appendChild(newImg);

        if (i === amount / 2 - 1 && lock === false) {
            i = 0 - 1;
            lock = true;

        }

        //console.log(i);
    }
}