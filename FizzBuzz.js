var input = prompt("Prosim vpišite celo število.") 
var i = "sadfsd" 

while(input != i) 
  { 
    if(isNaN(input) || input == "" || input < 0) 
      { 
        input = prompt("Napaka! Prosim vpišite celo število!") 
      } 
    else 
      { 
        for(i = 1; i <= input; i++) 
          { 
            if(i%3 == 0 && i%5 == 0) 
              { 
                console.log("FizzBuzz"); 
              } 
            else if(i%3 == 0) 
              { 
                console.log("Fizz"); 
              } 
            else if(i%5 == 0) 
              { 
                console.log("Buzz"); 
              } 
            else 
              { 
                console.log(i); 
              } 
          } 
        break; 
      } 
  }
