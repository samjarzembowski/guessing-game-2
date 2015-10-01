// Variables Declared
var playerName;
var question1;
var question2;
var question3;
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three')


// Ask Question 1
function question1(){
question1 = prompt('Does Roland live in Washington State?');
if ((question1 === 'yes') || (question1 === 'y')) {
  one.innerHTML = "You are correct!";
} else {
  one.innerHTML = "You are not correct."
}
}

// Ask Question 2
function question2(){
question2 = prompt('Is Roland a Musician?');
if ((question1 === 'yes') || (question1 === 'y')) {
  two.innerHTML = "You are correct!";
} else {
  two.innerHTML = "You are not correct."
}
}

// Ask Question 3
function question3(){
question3 = prompt('Is Roland a Cougar or a Husky?');
if ((question1 === 'cougar') || (question1 === 'Cougar')) {
  three.innerHTML = "You are correct!";
} else {
  three.innerHTML = "You are not correct."
}
}


question1();
question2();
question3();

