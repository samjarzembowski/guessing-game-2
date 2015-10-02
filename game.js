// Variables Declared
var playerName;
var question1;
var question2;
var question3;
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var thumb1 = document.getElementById('thumb1');
var thumb2 = document.getElementById('thumb2');
var thumb3 = document.getElementById('thumb3');
var questions = ['Does Roland live in Washington State?', 'Is Roland a Musician?', 'Is Roland a Cougar?'];
var answers = ['YES', 'Y'];

// Ask Question 1
function question1(){
question1 = prompt(questions[0]).toUpperCase();
if ((question1 === answers[0]) || (question1 === answers[1])) {
  one.innerHTML = "You are correct!";
  thumb1.innerHTML = '<img src="img/thumb.jpg" width="200" />';
} else {
  one.innerHTML = "You are not correct.";
}
}

// Ask Question 2
function question2(){
question2 = prompt(questions[1]).toUpperCase();
if ((question2 === answers[0]) || (question2 === answers[1])) {
  two.innerHTML = "You are correct!";
  thumb2.innerHTML = '<img src="img/thumb.jpg" width="200" />';

} else {
  two.innerHTML = "You are not correct.";
}
}

// Ask Question 3
function question3(){
question3 = prompt(questions[2]).toUpperCase();
if ((question3 === answers[0]) || (question3 === answers[1])) {
  three.innerHTML = "You are correct!";
  thumb3.innerHTML = '<img src="img/thumb.jpg" width="200" />';
} else {
  three.innerHTML = "You are not correct.";
}
}


question1();
window.setTimeout(question2, 1000);
window.setTimeout(question3, 1000);

// question2();
// question3();

