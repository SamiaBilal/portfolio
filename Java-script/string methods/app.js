//Question 1 

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");

var fullName = firstName + " " + lastName;

console.log("Hello, " + fullName + " Welcome!");

//Question 2

var favMobilePhone = prompt("Enter your favourite mobile phone model");
var length = favMobilePhone.length;

console.log("My favourite mobile phone model is : " + favMobilePhone );
console.log("The length of your input is: " + length);

//Question 3

var string = "Pakistani";
var indexOfN = string.indexOf("n")
console.log("String : " + string);
console.log("index of 'n' :" + indexOfN);

//Question 4

var string2 = "Hello World";
var indexOfL = string2.lastIndexOf("l");

console.log("String : " + string2);
console.log("index of 'l' : " + indexOfL);

// Question 5

var string3 = "Pakistani";

console.log("String : " + string3);
console.log("Character at index 3 : " + string3.charAt(3));

// Question 6

var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var fullName = firstName.concat(" ", lastName);
console.log("Hello, " + fullName + " Welcome!");

// Question 7

var city = "Hyderabad";
var replacement = city.replace('Hyder', 'Islam')
console.log("City: " + city);
console.log("After replacements :" + replacement);

// Question 8

var message = "Ali and Sami are best friends. They play cricket and football together.";

var replace = message.replaceAll('and', '&');

console.log(replace);

// Question 9

var string = "472"

console.log("value : " + string);
console.log("type : " + typeof string);

var updatedNumber = parseInt(string);
console.log("value: " + string);
console.log("Type: " + typeof updatedNumber);

// Question 10

var userInput = prompt("Please enter a word");
var uppercase = userInput.toUpperCase();

console.log("User Input : " + userInput);
console.log("Upper case : " + uppercase );

// Question 11

var userInput = prompt("Please enter a word");
var titlecase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

 console.log("User Input : " + userInput);
 console.log("Title Case : " + titlecase);

// Question 12

var num = 35.36 ;
var numString = num.toString().replace(".", "");
console.log("Number : " + num);
console.log("Result : " + numString);

//Question 13 

var username = prompt("Enter your username");

if (username.includes('@') || username.includes('.') || username.includes(',') || username.includes ('!')) {
alert("Please enter a valid username");
} else {
    alert("Username is valid");
}
console.log(username);

// Question 14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var SearchItem = prompt(" Welcome to ABC bakery.  what item do you want to search for:");

var itemFound = false;

for (var i = 0; i < A.length; i++) {
    if(A[i].toLowerCase() === SearchItem.toLowerCase()) {
        itemFound = true;
    }
}

if (itemFound) {
    alert("Yes, the item is available in our bakery.");
} else {
    alert("sorry, the item is not in our bakery.");
}

// Question 16

var university = "University of Karachi";

var universityArray = university.split("");

for (var i = 0; i < universityArray.length; i++) {
    console.log(universityArray[i]);
}

// Question 17

var userInput = prompt("Please enter a word");
var lastcharacter = userInput.charAt(userInput.length - 1);

console.log("User Input : " + userInput);
console.log("Last character of input : " + lastcharacter);

//  Question 18

var string = "The quick brown fox jumps over the lazy dog";
var words = string.toLowerCase().split(" "); 

var count = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}
console.log("Text : The quick brown fox jumps over the lazy dog")
console.log("There are " + count + " occurrences of the word the");





