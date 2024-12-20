
//QUESTION 1
var city = prompt("Enter your  city please");
if (city === "karachi") {
    alert("Welcome to the city of lights");
   
} else {
    alert("Welcome to the beautiful city of " + city);
}

//QUESTION 2

var gender = prompt("Enter your gender please");
if (gender === "male") {
    alert("Good morning Sir" );
} else  {
  alert("Good morning Ma'am");
}

//QUESTION 3

var traffic = prompt("Enter the color of the road traffic signal");

if (traffic === "red") {
    alert("You must Stop now");
} else if (traffic === "yellow") {
    alert("Be ready to move");
} else if (traffic === "green") {
    alert("Move forward now , the road is clear");
} else {
    alert("Invalid input, please enter red, yellow, or green");
}

//QUESTION 4
var input = prompt("Please enter the remaining fuel in your car (in litres) ")

if (input < 0.25) {
    alert("Please refill the fuel tank");
} else {
    alert("You have enough fuel to continue driving");
}

//QUESTION 6

var subject1 = Number(prompt("Enter marks obtained in Subject 1:"));
var subject2 = Number(prompt("Enter marks obtained in Subject 2:"));
var subject3 = Number(prompt("Enter marks obtained in Subject 3:"));

var totalMarks = 300; 

var marksObtained = subject1 + subject2 + subject3;
var percentage = (marksObtained / totalMarks) * 100;

var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "Need to Improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

// Displaying the results in a formatted way
document.write("<h3>MARKS SHEET</h3>");
document.write("Total Marks:" + totalMarks + "<br>");
document.write("Marks Obtained:" + marksObtained + "<br>");
document.write("Percentage:" + percentage + " % <br>");
document.write("Grade:" + grade + "<br>");
document.write("Remarks:" + remarks + "<br>");

//Question 7

var SecretNumber = 4;

var input = Number(prompt("Guess What the Secret Number is " ));

if (input === SecretNumber) {
    alert("BINGO! You guessed the correct number");
} else if (input === SecretNumber + 1 || input === SecretNumber - 1) {
    alert("Close enough to the correct answer");
} else {
        alert("Sorry, the correct number was " + SecretNumber);
    }

//Question 8

var number = Number(prompt("Enter a number to see if it is divisible by 3"));

if (number % 3 === 0) {
    alert(number + " is divisible by 3");
} else {
    alert(number + " is not divisible by 3");
}

//Question 9

var number = Number(prompt("Enter a number to check if it is an odd number or even number")); 

if (number % 2 === 0) {
    alert(number + " is an even number");
} else {
    alert(number + " is an odd number");
}

//Question 10

var temperature = Number(prompt("Enter the Temperature of your area "));

if (temperature > 40) {
    alert("It's very hot outside");
} else if (temperature > 30 && temperature <= 30) {
    alert("The weather is normal");
} else if (temperature > 20 ) {
    alert("Todays's Wetaher is cool");
} else if (temperature >10 ) {
    alert("It's so cold in your area");
}

//Question 11

var num1 = Number(prompt("Enter a number please"));
var num2 = Number(prompt("Enter another number"));
var operation = prompt("Type in what Arithmetic operation you want to perform with the numbers");

if (operation === "addition") {
    alert(num1 + num2);
} else if (operation === "subtraction") {
    alert(num1 - num2);
} else if (operation === "multiplication") {
    alert(num1 * num2);
} else if (operation === "division") 
    if (num2 === 0) {
        alert("Cannot divide by zero");
    } else {
        alert(num1 / num2);
    } else {
    alert("Invalid operation, please enter addition, subtraction, multiplication, or divition operation");
}