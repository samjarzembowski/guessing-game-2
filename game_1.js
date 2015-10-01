// Global Variables Declared
var playerName;
var question1;
var question2;
var question3;
var numberCorrect = 0;


// Get Player's name
playerName = prompt('Please enter your name.');
alert("Hello " + playerName + ", how well do you know Roland? Press the Enter key to continue.");


// Ask Question 1
question1 = prompt('Does Roland live in Washington State?').toLowerCase();
console.log('Question 1 response: ' + question1);

if ((question1 === 'yes') || (question1 === 'y')) {
  alert("You are correct!");
  numberCorrect++;
} else {
  alert("You are not correct.");
}


// Ask Question 2
question2 = prompt('Is Roland a Musician?').toLowerCase();
console.log('Question 2 response: ' + question2);

if ((question2 === 'yes') || (question2 === 'y')) {
  alert("You are correct!");
  numberCorrect++;
} else {
  alert("You are not correct.");
}


// Ask Question 3
question3 = prompt('Is Roland a Cougar or a Husky?').toLowerCase();
console.log('Question 3 response: ' + question3);

if ((question3 === 'cougar') || (question3 === 'Cougar')) {
  alert("You are correct!");
  numberCorrect++;
} else {
  alert("You are not correct.");
}


// Summary code to display number of correct answers to the Player
alert("Thank you for playing, " + playerName + ", you have " + numberCorrect + " out of 3 correct.");

