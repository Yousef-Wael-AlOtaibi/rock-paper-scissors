function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0)return 'rock';
    if(randomNumber === 1)return 'paper';
    if(randomNumber === 2)return 'scissors';
}
function getHumanChoice(){
    return prompt('Enter your choice between rock, paper, and scissors.');
}
let humanScore = 0;
let computerScore = 0;