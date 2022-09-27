
let playerWinCount = 0;
// not a player (nap)
let napWinCount = 0;

    // let playerChoice = prompt("Your Choice:");
    
    
    let playerChoice;
    let computerChoice = getComputerChoice();

const userSel = document.querySelectorAll('.user-sel');

console.log(userSel);

    for(let i = 0; i < userSel.length; i++){
        userSel[i].addEventListener('click', ()=> {
            playerChoice = userSel[i].innerText;
            playerChoice = playerChoice.toLowerCase();
            console.log(playerChoice);
            playRound(playerChoice, computerChoice);
        })
    }

    // let finalResult = playerWinCount > napWinCount

    // finalResult ? console.log("Congratulation! You were Awesome") 
    // : console.log('Better luck Next time!!!');

    // console.log("Refresh Your page to play again...");


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
    if(player === 'rock'){
        switch(computer){
        case "paper":
            console.log('You Lose! Paper beats Rock')
            napWinCount++
            break;
        case "scissor":
            console.log("You Win! Rock beats Scissor")
            playerWinCount++
            break;
        default:
            console.log("Its tie...")
        }
    } else if (player === "paper") {
        switch(computer){
            case "scissor":
                console.log('You Lose! Scissor beats Paper')
                napWinCount++
                break;
            case "rock":
                console.log("You Win! Paper beats Rock")
                playerWinCount++
                break;
            default:
                console.log("Its tie...")
        }
    } else if (player === "scissor") {
        switch(computer){
            case "rock":
                console.log('You Lose! Rock beats Scissor')
                napWinCount++
                break;
            case "paper":
                console.log("You Win! Scissor beats Paper")
                playerWinCount++
                break;
            default:
                console.log("Its tie...")
            }
        } else{
            console.log('invalid selection')
        }
    }

