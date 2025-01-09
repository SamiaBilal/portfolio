//Question 1
var input = prompt("Enter a single character:");

if (input.length === 1) {
  if (input >= '0' && input <= '9') {
    alert("It's a number.");
  } else if (input >= 'A' && input <= 'Z') {
    alert("It's an uppercase letter.");
  } else if (input >= 'a' && input <= 'z') {
    alert("It's a lowercase letter.");
  } else {
    alert("It's something else.");
  }
} else {
  alert("Please enter only one character.");
}

//Question 2
var int1 = prompt("Enter the first number");
var int2 = prompt("Enter the second number");

if (int1 > int2) {
    alert("the first number is greater than the second.");
} else if
    (int1 < int2) { 
    alert("The second number is greater than the first.");
} else {
    alert("The numbers are equal.");
}

//Question 3
var input = prompt("Enter a number");

if (input > 0 ){
    alert("The number is positive.");
}

else if (input < 0 ){
    alert("The number is negative.");
}

else {
    alert("The number is zero.");
}

//Question 4

var input = prompt("Enter a character")
if (input.length === 1) {
if (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u'){
    alert("The character is a vowel.");
}

else {
    alert("The character is not a vowel.");
}
} else {
    alert("Please enter only one character.");
  }

//Question 5

let correctPassword = "myPassword";

let userPassword = prompt("Enter your password:");


if (!userPassword) {
  alert("Please enter your password.");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password.");
}

//Question 7

let time = prompt("Enter the time in 24 - hour format:");

if (time >= "0000" && time < "1200") {
  alert("Good Morning!");
} else if (time >= "1200" && time < "1700") {
  alert("Good Afternoon!");
} else if (time >= "1700" && time < "2100") {
  alert("Good Evening!");
} else if (time >= "2100" && time <= "2359") {
  alert("Good Night!");
} else {
  alert("Invalid time format. Please enter a time in 24 - hour format.");
}
