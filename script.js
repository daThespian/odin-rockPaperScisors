console.log(`Hello! this is a Rock, Paper, Scisor game!
You will play 5 rounds and whoever beats the other 3 times, wins! otherwise, is even.
Let's go!`);

let compuScore = 0, playerScore = 0;
const playerName = getPlayerName();

playGame();

function getPlayerName() {
    let pName = prompt("Type in your name: ")
    return pName
};

function playerChoice() {
    let pChoice = prompt("Choose Rock, Paper or Scisor: ")
    console.log(`PLayer has picked: ${pChoice}`)
    return pChoice.toLowerCase()
};

function compuChoice() {
    let options = {1: "rock", 2: "paper", 3: "scisor"};
    let compuChoice = options[Math.floor(Math.random() * 3) + 1];
    console.log(`PC has picked: ${compuChoice}`);
    return compuChoice
};

function getWinner(pChoice, pcChoice) {
    let roundDecision = undefined;
    if (pChoice === "rock") {
        if (pcChoice === "scisor") {
            roundDecision = true;
        } else if (pcChoice === "paper") {
            roundDecision = false;
        } else {roundDecision = undefined;}

    } else if (pChoice === "paper") {
        if (pcChoice === "scisor") {
            roundDecision = false;
        } else if (pcChoice === "rock") {
            roundDecision = true;
        } else {roundDecision = undefined;}

    } else {
        if (pcChoice === "paper") {
            roundDecision = true;
        } else if (pcChoice === "rock") {
            roundDecision = false;
        } else {roundDecision = undefined;}
    }

    return roundDecision
};

function playGame() {
    let counter = 1;
    while ( counter <= 5) {
        console.log(`Round ${counter}`)

        let pChoice = playerChoice();
        let pcChoice = compuChoice();

        console.log(pChoice, pcChoice);

        if (getWinner(pChoice, pcChoice) === true) {
            ++playerScore;
            console.log(`Great! ${pChoice} beats ${pcChoice}.
Player Score: ${playerScore}
PC Score: ${compuScore}`)
        } else if (getWinner(pChoice, pcChoice) === false) {
            ++compuScore;
            console.log(`Too bad! ${pcChoice} beats ${pChoice}.
Player Score: ${playerScore}
PC Score: ${compuScore}`);
        } else {
            console.log(`No winner.
Player Score: ${playerScore}
PC Score: ${compuScore}`)
        };

        ++counter;
    }
    if (compuScore > playerScore) {
        console.log(`The winner is PC`)
    } else if (playerScore > compuScore) {
        console.log(`The winner is ${playerName}`)
    } else {console.log("No winner")}
}
