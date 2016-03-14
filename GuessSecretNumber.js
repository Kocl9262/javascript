function randomIntFromInterval(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function numberOfGuesses(dificulty)
{
	while(dificulty != -5)
	{
		if(dificulty == null)
		{
			guess = 10;
			break;
		}
		else if(dificulty == "hard")
		{
			guess = 5;
			break;
		}
		else if(dificulty == "normal")
		{
			guess = 7;
			break;
		}
		else if(dificulty == "easy")
		{
			guess = 10;
			break;
		}
		else
		{
			dificulty = prompt("Enter 'hard' for 5 tries, 'normal' for 7 tries or 'easy' for 10 tries")
		}
	}
}

var min = +prompt("Making custom range of numbers. Enter minimum number");
var max = +prompt("Making custom range of numbers. Enter maximum number");

var dificulty = prompt("Enter 'hard' for 5 tries, 'normal' for 7 tries or 'easy' for 10 tries")

var scrnb = randomIntFromInterval(min, max);
var answers = [];

numberOfGuesses(dificulty);

var input = prompt("Find secret number between your custom range (" + min + "-" + max + "). Number of guesses: " + guess);

answers.push(input);


if(input == scrnb)
	{
		console.log("GOOD JOB! You found answer in first try!");
	}
else
	{
		
		while(scrnb != -5)
		{
			if(guess <= 1)
			{
				console.log("You failed :/ Guesses left: 0");
				break;
			}
			else if(isNaN(input) || input == "" || input < min || input > max)
				{
					input = prompt("WARRNING! You must enter number between " + min + " and " + max + " Number of guesses: " + guess);
					if(input == null)
						{
							break;
						}
					answers.push(input);
				}
			else if(scrnb < input)
				{
					guess--;
					input = prompt("Secret number is smaller. (" + min + "-" + max + ") Guesses left: " + guess);
					if(input == null)
						{
							break;
						}
					answers.push(input);
				}
			else if(scrnb > input)
				{
					guess--;
					input = prompt("Secret number is bigger. (" + min + "-" + max + ") Guesses left: " + guess);
					if(input == null)
						{
							break;
						}
					answers.push(input);
				}
			else
				{
					guess--;
					console.log("Good job! You found secret number. Guesses left: " + guess);
					break;
				}
		}
					
			
	}

console.log("Your answers: " + answers);
