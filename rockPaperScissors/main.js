const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
	switch (userInput) {
		case 'rock':
			userInput = 'rock';
			console.log(userInput);
			break;
		case 'paper':
			userInput = 'paper';
			console.log(userInput);
			break;
		case 'scissors':
			userInput = 'scissors';
			console.log(userInput);
			break;
		case 'boom':
			userInput = 'boom';
			console.log(userInput);
			break;
		default:
			break;
	}
	return userInput;
};

function ComputerChoice() {
	var getComputerChoice = Math.floor(Math.random() * 3);
	console.log('inside ComputerChoice ' + getComputerChoice);
	switch (getComputerChoice) {
		case 0:
			getComputerChoice = 'rock';
			console.log(getComputerChoice);
			break;
		case 1:
			getComputerChoice = 'paper';
			console.log(getComputerChoice);
			break;
		case 2:
			getComputerChoice = 'scissors';
			console.log(getComputerChoice);
			break;
		default:
			break;
	}
	return getComputerChoice;
}

const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		console.log('tie');
	} else if (userChoice === 'rock' && computerChoice === 'paper') {
		console.log('computer win');
	} else if (userChoice === 'paper' && computerChoice === 'rock') {
		console.log('user win');
	} else if (userChoice === 'rock' && computerChoice === 'scissors') {
		console.log('user win');
	} else if (userChoice === 'scissors' && computerChoice === 'rock') {
		console.log('computer win');
	} else if (userChoice === 'paper' && computerChoice === 'scissors') {
		console.log('computer win');
	} else if (userChoice === 'scissors' && computerChoice === 'paper') {
		console.log('user win');
	} else if (userChoice === 'boom') {
		console.log('KABOOM');
	} else {
		console.log('error');
	}

}

determineWinner(getUserChoice('boom'), ComputerChoice());