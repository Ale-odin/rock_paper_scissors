/* 

Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

    Create a new function named getComputerChoice.
    Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
        Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices. 
        
        Assign e value for every result multiply the mathrandom to an integer one unit bigger as being wrup up in a math round will round the result to the smaller integer
*/

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

/*    

Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

Step 3: Write the logic to get the human choice

Your game will be played by a human player. You will write a function that takes the user choice and returns it.

    Create a new function named getHumanChoice.
    Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs. 
    
    The user will eventually select, or write, one of the values. Beacause we don't know about event listeners yet and it is not recommended set UI, this solution works for now but it's not suitable to play another match in the same game! Problem to deal with in the last function and probably to modify in future steps.
*/

let selection = prompt("Write: rock, paper or scissors and try to beat the computer. Good luck!")

function getHumanChoice(they){
    they = selection.toLowerCase();
    return they;
}

/* 

Step 4: Declare the players score variables

Your game will keep track of the players score. You will write variables to keep track of the players score.

    Create two new variables named humanScore and computerScore in the global scope.
    Initialize those variables with the value of 0.

    First applied then removed because not usefull here!

*/

    /*let humanScore = 0;
    let computerScore = 0;*/

/* 
Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

    Create a new function named playRound.
    Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
    Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
    Increment the humanScore or computerScore variable based on the round winner.

    very long function, better logic could have been applied for shortness but the question is, better to use two logical operators in longer row or to use more if statments? Which one is the easiest to read?
*/

function playRound(humanChoice, computerChoice){
    console.log("Human:", humanChoice, );
    console.log("Computer:", computerChoice);

    let sentence = "";
   if (humanChoice === computerChoice){
        sentence = "It's a tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        /*computerScore++ we don not need it here*/
         sentence = "Computer Wins!";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        /humanScore++; we don not need it here/
        sentence = "You Win!";
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        /*humanScore++; we don not need it here*/
        sentence = "You Win!";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        /*computerScore++; we don not need it here*/
         sentence = "Computer Wins!";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        /*computerScore++; we don not need it here*/
        sentence = "Computer Wins!";
    }
    else if ( humanChoice === "scissors" && computerChoice === "paper"){
        /*humanScore++; we don not need it here*/
        sentence = "You Win!";
    }
    console.log(humanScore);
    console.log(computerScore);

    return sentence;
};

/*
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

    Create a new function named playGame.
    Move your playRound function and score variables so that they’re declared inside of the new playGame function
    Play 5 rounds by calling playRound 5 times. 

    The function must call each round 5 times, and every time must save the scores both computer and human ones.
    So at every call the funcion store the result based on who's the winner. 
*/

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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

/*
I don'like to have different logic ifs in the same function, but without using loops I can't think of anyting different solution. I addition, the instructions point at having the two result in same function. 
*/

