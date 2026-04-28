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

/* Prompt here is used because we don't know event yet and no UI must mi set */

let selection = prompt("Write: rock, paper or scissors and try to beat the computer. Good luck!")

function getHumanChoice(they){
    they = selection.toLowerCase();
    return they;
}

function playRound(humanChoice, computerChoice){
    console.log("Human:", humanChoice, );
    console.log("Computer:", computerChoice);

    let sentence = "";
   if (humanChoice === computerChoice){
        sentence = "It's a tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
         sentence = "Computer Wins!";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        sentence = "You Win!";
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        sentence = "You Win!";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
         sentence = "Computer Wins!";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        sentence = "Computer Wins!";
    }
    else if ( humanChoice === "scissors" && computerChoice === "paper"){
        sentence = "You Win!";
    }
    console.log(humanScore);
    console.log(computerScore);

    return sentence;
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

/*
I don'like to have different logic ifs in the same function, but without using loops I can't think of anyting different. In addition, the instructions point at having the two results in the same function. 
*/


function playGame (winner){
let humanScore = 0;
let computerScore = 0;
let round = playRound(humanSelection, computerSelection);
 round = playRound(humanSelection, computerSelection);
 if (round === "Computer Wins!"){
    computerScore++;
 } else if (round === "You Win!"){
    humanScore++
 }
 round = playRound(humanSelection, computerSelection);
  if (round === "Computer Wins!"){
    computerScore++;
 } else if (round === "You Win!"){
    humanScore++
 }
 round = playRound(humanSelection, computerSelection);
  if (round === "Computer Wins!"){
    computerScore++;
 } else if (round === "You Win!"){
    humanScore++
 }
 round = playRound(humanSelection, computerSelection);
  if ( round === "Computer Wins!"){
    computerScore++;
 } else if (round === "You Win!"){
    humanScore++
 }

 console.log(humanScore);
 console.log(computerScore);

 if (humanScore > computerScore){
    console.log("Bravo");
 } else console.log("Computer got lucy. Try again!")

}
