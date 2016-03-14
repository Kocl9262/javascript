function fillArray(value, len){
  var arr = [];
  for (var i = 0; i < len; i++)
	  {
		arr.push(value);
	  }
	return arr;
}

function compareArrey(letter, x){
    if (letter.length !== x.length) return false;
    for (var i = 0, len = letter.length; i < len; i++){
        if (letter[i] !== x[i])
			{
				return false;
			}
    }
    return true; 
}

var guess = 3;

var quiz = ["januar", "februar", "marec"];

var rand = quiz[Math.floor(Math.random() * quiz.length)];


var letter = [];

letter = rand.split("");

var x = fillArray("X", rand.length);

var answers = [];

if(confirm("Do you want to play Hangman?"))
	{
		while(guess != -5)
		{
			console.log(x + " Tries left: " + guess);
			answer = prompt("Guess a letter or whole word").toLowerCase();
			
			if(guess == 1)
				{	
					guess--;
					console.log("Game over! Tries left: " + guess);
					console.log("Answer: " + letter);
					break;
				}
			else if(answer.length > 1)
				{
					if(answer == rand)
						{
							console.log(letter + " Guesses left: " + guess);
							console.log("You win!");
							break;
						}
					else
						{
							console.log("Wrong!");
							guess--;
						}
				}
			else if(answers.indexOf(answer) != -1)
				{
					console.log("You already tried this letter: " + answer);
				}
			else
				{
					var test = [];
					for (i = 0; i < letter.length; i++)
						{
							if (letter[i] == answer)
								{
									x[i] = answer;
								}
							else
								{
									test.push("foobar");
								}
						}
					if(test.length == letter.length)
						{
							guess--;
						}
					if(compareArrey(letter, x))
						{
							console.log(x + " Guesses left: " + guess);
							console.log("You win!");
							break;
						}
					
				}
			answers.push(answer);
		}
	}
