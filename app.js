window.onload = function() {

var numCorrect = 0;
var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var ans4 = document.getElementById('a4');
var correctCount = document.getElementById('elCorrect');

var questions = ['Can you guess what country I was born in?',
                 'Another fact about me is that I love sharks. Can you guess which shark species live in the Puget Sound? Choose one: great white shark, mako shark, sixgill shark or the black tip reef shark.',
                 'Can you guess how many siblings I have?',
                 'I\'m thinking of a number between 1 and 10. Can you guess it?'];
var answers = ['PHILIPPINES', 'SIXGILL SHARK', 2, 8];
var els = [ans1, ans2, ans3, ans4];

//Game function should take from questions array compares user answers to answers array and posts to html
function game(questions, answers, index) {
var queary = prompt(questions).toUpperCase();

if (queary === answers || parseInt(queary) === answers) {
  els[index].textContent = queary + ' is correct';
  console.log(queary + ' correct');
  console.log(numCorrect++);
} else {
  console.log(queary + ' incorrect');
  els[index].textContent = queary + ' is incorrect';

 }
}

for (var i = 0; i < questions.length; i++) {
  game(questions[i], answers[i], i);
}

elCorrect.textContent = 'You got ' + numCorrect + ' out of ' + answers.length + '!';

};
