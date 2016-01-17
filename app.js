//Counter for Kate's Guessing Game.
var numCorrect = 0;

var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var correctCount = document.getElementById('elCorrect');

var questions = ['Can you guess what country I was born in?', 'Another fact about me is that I love sharks. Can you guess which shark species live in the Puget Sound? Choose one: great white shark, mako shark, sixgill shark or the black tip reef shark.', 'Can you guess how many siblings I have?'];
var answers = ['PHILIPPINES', "SIXGILL SHARK", 2];
var els = [ans1, ans2, ans3]

//Game function should take from questions array compares user answers to answers array and posts to html
function game(questions, answers, index) {
  var queary = prompt(questions).toUpperCase();

  if (queary === answers || queary == parseInt(answers)) {
    console.log(queary + " correct")
    els[index].textContent = queary + " is correct";
    numCorrect++
      }
  else {
    console.log(queary + " incorrect")
    els[index].textContent = queary + " is incorrect";
  }
}

for (var i = 0; i < questions.length; i++) {
  game(questions[i], answers[i], i);
}
elCorrect.textContent = "You got " + numCorrect + " out of 3!"
