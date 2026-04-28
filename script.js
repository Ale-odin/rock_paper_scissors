function getComputerChoice(choice) {
  const number = Math.floor(Math.random() * 3);
  if (number === 0){
    choice = "rock"
  } else if (number === 1){
    choice = "paper"
  } else if (number === 2){
    choice = "scissors"
  }
  return choice
}

let selection = window.prompt("Write: rock, paper or scissors and try to beat the computer. Good luck!")

function getHumanChoice(they){
    they = selection.toLowerCase();
    return they;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    console.log("Human:", humanChoice, );
    console.log("Computer:", computerChoice);

    let sentence = "";
   if (humanChoice === computerChoice){
        sentence = "It's a tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
         sentence = "Computer Wins!";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        sentence = "You Win!";
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        sentence = "You Win!";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
         sentence = "Computer Wins!";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        sentence = "Computer Wins!";
    }
    else if ( humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        sentence = "You Win!";
    }
    console.log(humanScore);
    console.log(computerScore);

    return sentence;
};




function palyGame (game){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let round = playRound(humanSelection, computerSelection);
    // la funzione sopra mi dice chi ha vinto la partita, cosa me ne faccio?
    //la uso per tenere traccia di quante partite vengono fatte
    // tenere traccia del punteggio
    
}

