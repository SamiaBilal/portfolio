//Question 1 

var integer = prompt("Enter a positive decimal integer");

console.log(integer);
console.log(Math.round(integer));
console.log(Math.floor(integer));
console.log(Math.ceil(integer));

//Question 2

var negativeInteger = prompt("Enter a negative floating point integer");

console.log(negativeInteger);
console.log(Math.round(negativeInteger));
console.log(Math.floor(negativeInteger));
console.log(Math.ceil(negativeInteger));

// Question 3

var absoluteNum = prompt("Enter a positive or negative number");

console.log(Math.abs(absoluteNum));

// Question 4

var diceValue = Math.floor(Math.random() *6) + 1;

console.log("Random dice value: " + diceValue);

// Question 5

var tossResult = Math.floor(Math.random() * 2) + 1;
var coinValue;

if (tossResult === 1) {
    coinValue = "Tails";
} else {
    coinValue="Heads";
}
console.log("toss Result : " + tossResult);
console.log("Random coin value : " + coinValue);

// Question 6

var number = Math.floor(Math.random() * 100) + 1;

console.log("Random number between 1 and 100: " + number);

//Question 7

var userinput = prompt("Enter your weight in kilograms: ");

var weight = parseInt(userinput);

console.log("The weight of user is " + userinput);

// Question 8

var secretNumber = Math.floor(Math.random() * 10) + 1;

var input = prompt("Guess a number between 1 and 10");

if (secretNumber === input) {
    alert("Congratulations! You guessed the correct number");
} else {
    alert("Sorry, the correct number was " + secretNumber);
}
