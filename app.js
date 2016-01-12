//Counter for Kate's Guessing Game.
var numCorrect = 0;

//Question #1 - Asks for user's name.
var userName = prompt('Hello, What\'s your name?');
alert('Hello ' + userName + '. Very nice to meet you! Would you mind answering a few questions?');
console.log('The userName is: ' + userName + ' . Completed first question.');
numCorrect++;

//Question #2 - Asks the user to guess which country I'm from.
var countryBorn = prompt('Can you guess what country I was born in?') .toUpperCase();
  if (countryBorn === 'PHILIPPINES') {

    alert('PHILIPPINES is correct!');
    console.log(userName + 'has correctly guessed the second question.');
    numCorrect++;
  } else if (countryBorn != 'PHILIPPINES') {
    alert('Good guess but the country I was born in is the Philippines, not ' + countryBorn.charAt(0) + countryBorn.toLowerCase().slice(1) + '.');
    console.log(userName + 'has incorrectly guessed the second question.');
 }

//Question #3 - Asks the user to guess what type of shark lives in the Puget Sound.
var guess = prompt('Another fact about me is that I love sharks. Can you guess which shark species live in the Puget Sound? Choose one: great white shark, mako shark, sixgill shark or the black tip reef shark.');
  if (guess === 'great white shark') {
      alert('Although some people have said they\'ve seen a great white in the Puget Sound, it\'s not likely you will ever see one in your lifetime. The correct answer is sixgill shark.');
        console.log(userName + ' has incorrectly guessed the third question.');
  } else if (guess === 'mako shark') {
        alert('One of the fastest of all shark species, it is unfortunate to say that mako sharks are not local to our waters. The correct answer is sixgill shark.');
        console.log(userName + ' has incorrectly guessed the third question.');
  } else if (guess === 'sixgill shark') {
        alert('YES! Correct! The sixgill shark is a resident of the Puget Sound. It is a bottom dweller which means they\'re like the underground hood rats where it will be a rarity to observe them swimming at sea level.');
        console.log(userName + ' has correctly guessed the third question.');
        numCorrect++;
  } else if (guess === 'black tip reef shark') {
        alert('I wish our waters were warm enough for the black tip reef sharks. These sharks are only common in tropical waters. The correct answer is sixgill shark.');
        console.log(userName + ' has incorrectly guessed the third question.');
  } else {
        alert('Sorry, you\'ve guessed the wrong shark. The correct answer is sixgill shark.');
        console.log(userName + ' has incorrectly guessed the third. question.');
  }

  //Question #4 - Asks the user to guess how many siblings I have.
  var siblingGuess = parseInt(prompt('Can you guess how many siblings I have?'));

     while (siblingGuess != 2) {
       if (siblingGuess > 2) {
          siblingGuess = parseInt(prompt('Sorry, your guess is too high. Try again.'));
        } else if (siblingGuess < 2) {
          siblingGuess = parseInt(prompt('Sorry, your guess is too low. Try again.'));
        }
      };

      alert('Wow! You guessed the correct number. I DO have 2 siblings.');
      numCorrect++;

//Alerts the user how many questions they answered correctly.
alert('You answered ' + numCorrect + ' correctly!');
