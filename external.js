
let playerWinCount = 0;
let playerCounter = document.querySelector('.player-points');

// not a player (nap)
let napWinCount = 0;
let napCounter = document.querySelector('.computer-points');
        
let playerChoice;
let computerChoice;

const userSel = document.querySelectorAll('.user-sel');

    for(let i = 0; i < userSel.length; i++){
        userSel[i].addEventListener('click', ()=> {
            playerChoice = userSel[i].innerText.toLowerCase();
            computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice);

        })
    }

const displayResult = document.querySelector(".display-result");

function random(){
    res = Math.floor(Math.random() * 3);
        return res
}

function getComputerChoice() {
    let rand = random();
        
    switch (rand){
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissor"
            break;
        default:
            console.error("error");
    }
}

function playRound( player, computer){
    let display;
    if(player === 'rock'){
        switch(computer){
        case "paper":
            display = 'You Lose! Paper beats Rock';
            napWinCount++
            break;
        case "scissor":
            display = "You Win! Rock beats Scissor";
            playerWinCount++
            break;
        default:
            display = "Its tie...";
        }
    } else if (player === "paper") {
        switch(computer){
            case "scissor":
                display = 'You Lose! Scissor beats Paper';
                napWinCount++
                break;
            case "rock":
                display = "You Win! Paper beats Rock";
                playerWinCount++
                break;
            default:
                display = "Its tie...";
        }
    } else if (player === "scissor") {
        switch(computer){
            case "rock":
                display = 'You Lose! Rock beats Scissor';
                napWinCount++
                break;
            case "paper":
                display = "You Win! Scissor beats Paper";
                playerWinCount++
                break;
            default:
                display = "Its tie...";
            }
        } else{
            display = 'invalid selection';
        }
        displayResult.innerText = display;

        playerCounter.innerText = `You: ${playerWinCount}`;
        napCounter.innerText = `Yuta: ${napWinCount}`;

        if(napWinCount === 5 || playerWinCount === 5) {
            finalResult(playerWinCount, napWinCount);
        }
    }
const resultDisplay = document.querySelector('.finalResult');

    function finalResult(player, computer) {
        for (let i = 0; i < 10000000; i++) {}
        let Result;
        if(player === 5) {
            Result = "Congratulation! You were Awesome";
        }
        if(computer === 5) {
            Result = 'Better luck Next time!!!';
        }
        resultDisplay.innerText = Result;
        for(let i = 0; i < userSel.length; i++){
            userSel[i].removeEventListener();
            }
        }

    

    

    