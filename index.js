function playRound(humanChoice, computerChoice) {
}

const getHumanChoice = () => {
    let choice = prompt('Choose an option: Rock Paper Scissors').toLowerCase();

    while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
        choice = prompt('invalid option, choose a better one please\nRock Paper Scissors').toLowerCase();
    }

    return choice;
}

const getComputerChoice = ({ humanChoice, computerChoice }) => {
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * 3)
    
    return choices[randomIndex];
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);