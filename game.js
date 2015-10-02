// Variables Declared
var playerName;
var question1;
var question2;
var question3;
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three')
var questions = ['Does Roland live in Washington State?', 'Is Roland a Musician?', 'Is Roland a Cougar?'];
var answers = ['YES', 'Y'];

// Ask Question 1
function question1(){
question1 = prompt(questions[0]).toUpperCase();
if ((question1 === answers[0]) || (question1 === answers[1])) {
  one.innerHTML = "You are correct!";
} else {
  one.innerHTML = "You are not correct.";
}
}

// Ask Question 2
function question2(){
question2 = prompt(questions[1]).toUpperCase();
if ((question2 === answers[0]) || (question2 === answers[1])) {
  two.innerHTML = "You are correct!";
} else {
  two.innerHTML = "You are not correct.";
}
}

// Ask Question 3
function question3(){
question3 = prompt(questions[2]);
if ((question3 === answers[0]) || (question3 === answers[1])) {
  three.innerHTML = "You are correct!";
} else {
  three.innerHTML = "You are not correct.";
}
}


question1();
question2();
question3();

