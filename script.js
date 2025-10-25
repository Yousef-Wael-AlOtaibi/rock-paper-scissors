function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0)return 'rock';
    if(randomNumber === 1)return 'paper';
    if(randomNumber === 2)return 'scissors';
}
function getHumanChoice(){
    return prompt('Enter your choice between rock, paper, and scissors.').toLowerCase();
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice,computerChoice){
    if(humanChoice === computerChoice){
        console.log(`It's a tie! ${humanChoice} can't hurt ${computerChoice}.`)
    }
    if(humanChoice === 'rock' && computerChoice === 'scissors' ||
         humanChoice === 'scissors' && computerChoice === 'paper' ||
          humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        console.log(`Human wins! ${humanChoice} beats ${computerChoice}.`);
    }
    else{
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`)
    }
}