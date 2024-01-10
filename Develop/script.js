// Initialize global variables
var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ['R', 'P', 'S'];

var playGame = function () {
	// TODO: Use the prompt() method to ask the user for their choice between 'R', 'P', and 'S' and store the response in a variable named 'userChoice'

	var userChoice = prompt("choose between 'R', 'P', and 'S'");
	console.log('userChoice: ', userChoice);

	// TODO: Randomly select an element from the array 'options' and store it in a variable named 'computerChoice' - Google for example: "How can I select a random element from an array in JavaScript?"
	var computerChoice = options[Math.floor(Math.random() * options.length)];
	console.log('computerChoice: ', computerChoice);

	// TODO: Use the alert() method to display a message to let the user know what the computer has chosen
	alert(computerChoice);

	// TODO: Write a conditional statement to determine the outcome:
	// if both userChoice and computerChoice are the same, increment the variable 'ties' by 1 and use the alert() method to let the user know it's a tie

	if (userChoice === computerChoice) {
		alert("tie");
		ties++;
	
	// else if the user has won, increment the variable 'wins' by 1 and use the alert() method to let the user know
	} else if ((userChoice === 'R' && computerChoice === 'S') ||
		(userChoice === 'S' && computerChoice === 'P') ||
		(userChoice === 'P' && computerChoice === 'R')) {
		alert("You win");
		wins++;

	// else the user lost: increment the variable 'losses' by 1 and use the alert() method to let the user know
	} else {
		alert("You Lose");
		losses++;
	};

	// TODO: Use the alert() method to display current 'wins', 'losses', and 'ties'
	alert("wins: "+wins + ", Ties: "+ties +", Losses: "+losses);;

	// TODO: Use the confirm() method to ask user to play again and collect the response in a variable named 'playAgain'
	var playAgain = confirm("Do you want  to play again?");
	// TODO: Run the function playGame() if 'playAgain' is true
	if (playAgain === true) {
		playGame();
	} else {
		alert('Thank you');
	}
};

// Run the game for the first time
playGame();
