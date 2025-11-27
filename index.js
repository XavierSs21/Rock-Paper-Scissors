const playGame = () => {

    let humanPoints = 0
    let computerPoints = 0

    const playRound = (humanChoice, computerChoice) => {
        console.log(`Your choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        
        if(computerChoice === humanChoice){
            console.log('Tie');
            return 'Tie'
        }
    
        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            console.log(`You win! ${humanChoice} defeats ${computerChoice}`);
            return "Human";
        }    
    
        console.log(`You lose! ${computerChoice} defeats ${humanChoice}`);
        return 'Computer';
    }

    const getHumanChoice = () => {
        let choice = prompt('Choose an option: Rock Paper Scissors').toLowerCase();

        while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
            choice = prompt('invalid option, choose a better one please\nRock Paper Scissors').toLowerCase();
        }

        return choice;
    }

    const getComputerChoice = () => {
        const choices = ['rock', 'paper', 'scissors']
        const randomIndex = Math.floor(Math.random() * 3)
        
        return choices[randomIndex];
    }

    
    console.log('Welcome to the game!')
    
    for(let round = 0; round < 5; round++){
        console.log(`Round ${round + 1}`);
        
        const humanChoice = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanChoice, computerSelection)

        if(result === 'Human') humanPoints++
        else if(result === 'Computer') computerPoints++

        console.log(`Human score ${humanPoints} --- Computer score ${computerPoints}`)
    }

    console.log('=== GAME OVER ===');
    console.log(`Final Score - You: ${humanPoints} | Computer: ${computerPoints}`);
    
    if(humanPoints > computerPoints) console.log('You win!')
    else if(computerPoints > humanPoints) console.log('Computer Won the game :(')
    else console.log('It\'s a tie game!')
}

playGame()