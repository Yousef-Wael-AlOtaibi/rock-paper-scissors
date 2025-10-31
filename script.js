function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0)return 'rock';
    if(randomNumber === 1)return 'paper';
    if(randomNumber === 2)return 'scissors';
}
function getHumanChoice(){
    return prompt('Enter your choice between rock, paper, and scissors.').toLowerCase();
}

function playRound(humanChoice,computerChoice){
    if(humanChoice === computerChoice){
        const resultItem = document.createElement('li');
        resultItem.textContent = `It's a tie! ${humanChoice} can't hurt ${computerChoice}.`;
        resultsList.appendChild(resultItem);
        console.log(`It's a tie! ${humanChoice} can't hurt ${computerChoice}.`)
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        const resultItem = document.createElement('li');
        resultItem.textContent = `Human wins! ${humanChoice} beats ${computerChoice}.`;
        resultsList.appendChild(resultItem);
        console.log(`Human wins! ${humanChoice} beats ${computerChoice}.`);
    }
    else{
        computerScore++;
        const resultItem = document.createElement('li');
        resultItem.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}.`;
        resultsList.appendChild(resultItem);
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`)
    }
}
let humanScore = 0;
let computerScore = 0;
const selectorBtns = document.querySelectorAll('button');
selectorBtns.forEach(btn=>btn.addEventListener('click', ()=>{
    playRound(btn.value,getComputerChoice());
}));
const resultsList = document.querySelector('#results-list');

