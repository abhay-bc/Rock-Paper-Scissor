
let playerWinCount = 0;
// not a player (nap)
let napWinCount = 0;
        
let playerChoice;
let computerChoice;

const userSel = document.querySelectorAll('.user-sel');

    for(let i = 0; i < userSel.length; i++){
        userSel[i].addEventListener('click', ()=> {
            playerChoice = userSel[i].innerText;
            playerChoice = playerChoice.toLowerCase();
            computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice);
        })
    }

    // let finalResult = playerWinCount > napWinCount

    // finalResult ? console.log("Congratulation! You were Awesome") 
    // : console.log('Better luck Next time!!!');

    // console.log("Refresh Your page to play again...");

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
    }