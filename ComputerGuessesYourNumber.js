function randomIntFromInterval(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var scrnb = +prompt("Enter random number from 1 to 100 and see if computer can find it in 10 tries.");
var guess = 0;
var cumputerGuesses = [];
var min = 1;
var max = 100;
var compGuess = -1;

while(compGuess != -5)
	{
		compGuess = randomIntFromInterval(min, max);
		
		if(guess > 9)
			{
				console.log("Computer didn't find your number in 10 tries");
				break;
			}
		else if(cumputerGuesses.indexOf(compGuess) == -1)
			{
				if(compGuess > scrnb)
					{
						max = compGuess;
						cumputerGuesses.push(compGuess);
						guess++;
					}
				else if(compGuess < scrnb)
					{
						min = compGuess;
						cumputerGuesses.push(compGuess);
						guess++;
					}
				else
					{
						cumputerGuesses.push(compGuess);
						guess++;
						console.log("Computer found your number in " + guess + " guesses.");
						break;
					}
			}
	}


	console.log("Computer guesses: " + cumputerGuesses);
