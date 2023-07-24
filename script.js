
function getComputerChoice(){
    let randomNumber = Math.random() * 3;
    randomNumber = Math.floor(randomNumber);
    switch(randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }    
}

//returns 0 if tie, 1 if computer wins, 2 if player wins

function playRound(playerC, computerC){

    if (playerC === computerC){
        return 0;
        //return "Its a tie !";
    }
    else if (playerC === "paper"){
        if (computerC === "scissors"){
            return 1;
            //return "You lose! Scissors beat paper";
        }
        else if (computerC === "rock"){
            return 2;
            //return "You win! Paper beats rock";
        }    
    }
    else if (playerC=== "scissors"){
        if (computerC === "paper"){
            return 2;
            //return "You win! Scissors beat paper";
        }
        else if (computerC=== "rock"){
            return 1;
            //return "You lose! Rock beats scissors";
        }    
    }
    else if (playerC === "rock"){
        if (computerC === "paper"){
            return 1;
           // return "You lose! Paper beats rock";
        }
        else if (computerC=== "scissors"){
            return 2;
            //return "You win! Rock beats scissors";
        }    
    }
}


function playerSelection(){
    let choice = prompt("Enter your choice")
    choice = choice.toLowerCase();
    return choice;
}


function game(){

    let playerWin = 0;
    let computerWin = 0;

    const humanScore = document.getElementById("human-score");
    const alienScore = document.getElementById("alien-score");
    const buttons = document.querySelectorAll("button");
    const winner = document.querySelector(".winner");

    buttons.forEach(button => {
        button.addEventListener("click", (e) =>{
           playerC = e.target.parentElement.id;
           computerC = getComputerChoice();


           if (playRound(playerC, computerC) == 0){
            winner.innerHTML = "Its a tie! You chose " + `${playerC.toUpperCase()}` + " and the Alien chose " + `${computerC.toUpperCase()}`; 
           }
           if (playRound(playerC, computerC) == 1){
               computerWin++;
               alienScore.textContent = "Alien: " + `${computerWin}`;
               winner.innerHTML = "You lost! You chose " + `${playerC.toUpperCase()}` + " and the Alien chose " + `${computerC.toUpperCase()}`; 
   
           }
   
           if (playRound(playerC, computerC) == 2){
               playerWin++;
               humanScore.textContent = "Player: " + `${playerWin}`;
               winner.innerHTML = "You won! You chose " + `${playerC.toUpperCase()}` + " and the Alien chose " + `${computerC.toUpperCase()}`; 
            } 


           if (playerWin == 5){
            winner.innerHTML = "You won. Human race is saved !";
            playerWin = 0;
            computerWin = 0;
            alienScore.textContent = "Alien: " + `${computerWin}`;
            humanScore.textContent = "Player: " + `${playerWin}`;
            }

            if (computerWin == 5){
                winner.innerHTML = "You lost. Aliens invade and destroy Earth !";
                playerWin = 0;
                computerWin = 0;
                alienScore.textContent ="Alien: " + `${computerWin}`;
                humanScore.textContent ="Player: " + `${playerWin}`;
            }
   
        });
   
    })


}

game();

