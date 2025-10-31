function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0)return 'rock';
    if(randomNumber === 1)return 'paper';
    if(randomNumber === 2)return 'scissors';
}
function getHumanChoice(){
    return prompt('Enter your choice between rock, paper, and scissors.').toLowerCase();
}
let winner;
const humanSpan = document.querySelector('#human-score');
const computerSpan = document.querySelector('#computer-score');
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
        humanSpan.textContent = humanScore;
        if(humanScore >=5)winner = 'human';
        const resultItem = document.createElement('li');
        resultItem.textContent = `Human wins! ${humanChoice} beats ${computerChoice}.`;
        resultsList.appendChild(resultItem);
        console.log(`Human wins! ${humanChoice} beats ${computerChoice}.`);
    }
    else{
        computerScore++;
        computerSpan.textContent = computerScore;
        if(computerScore >=5)winner = 'computer';
        const resultItem = document.createElement('li');
        resultItem.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}.`;
        resultsList.appendChild(resultItem);
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`)
    }
    if(winner){
        const winnerItem = document.createElement('li');
        winnerItem.textContent = `${winner} won 5 rounds, Game ends.`;
        resultsList.appendChild(winnerItem);
        humanScore = 0;
        computerScore = 0;
    }
}
let humanScore = 0;
let computerScore = 0;
const selectorBtns = document.querySelectorAll('button');
selectorBtns.forEach(btn=>btn.addEventListener('click', ()=>{
    if(winner){
        resultsList.replaceChildren('');
        humanSpan.textContent = 0;
        computerSpan.textContent = 0;
        winner = '';
    }
    playRound(btn.value,getComputerChoice());
}));
const resultsList = document.querySelector('#results-list');

