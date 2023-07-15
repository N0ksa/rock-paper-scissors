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

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 0;
        //return "Its a tie !";
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            return 1;
            //return "You lose! Scissors beat paper";
        }
        else if (computerSelection === "rock"){
            return 2;
            //return "You win! Paper beats rock";
        }    
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "paper"){
            return 2;
            //return "You win! Scissors beat paper";
        }
        else if (computerSelection === "rock"){
            return 1;
            //return "You lose! Rock beats scissors";
        }    
    }
    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            return 1;
           // return "You lose! Paper beats rock";
        }
        else if (computerSelection === "scissors"){
            return 2;
            //return "You win! Rock beats scissors";
        }    
    }
    else{
        return "You did not input a valid option. Try again!";
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

    for (let i = 0; i < 5; i++){
        let result = playRound(playerSelection(), getComputerChoice());
        if (result === 0){
            continue;
        }
        if (result === 1){
            computerWin++;
            continue;
        }
        if (result === 2){
            playerWin++;
            continue;
        }
        
        console.log(playerWin);
        console.log(computerWin);
    }

    if (playerWin > computerWin){
        console.log("Player wins");
    }else if (playerWin < computerWin){
        console.log("Computer wins");

    }else{
        console.log("It's a tie!");
    }




}

game();

