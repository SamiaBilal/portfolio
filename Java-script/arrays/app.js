// Question 1
var studentNamesLiteral = [];

// Question 2
var studentNamesObject = new Array();

// Question 3
var stringArray = ["apples", "bananas", "cherries"];

// Question 4
var numberArray = [10, 20, 30, 40];

// Question 5
var booleanArray = [true, false];

// Question 6
var mixedArray = ["apples", 10, true, [1, 2, 3]];

// Question 7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>These are the qualifications in Pakistan:</h1>");
document.write(qualifications.join("<br>"));

// Question 8

var studentName = ["Michael", "John", "Tony"];
var studentMarks = [320, 230, 480];

for (var i = 0; i < studentName.length; i++) {
    var percentage = (studentMarks[i] / 500) * 100;
    document.write("<h3>Score of " + studentName[i] + " is " + studentMarks[i] + ". Percentage: " + percentage.toFixed(2) + "%</h3>");
}

//Question 9

var colors = ["Red", "Blue", "Green", "Yellow", "Orange"];
document.write("<h3>Original Array: </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

var colorBeginning = prompt("What color would you like to add to the beginning of the array?");
colors.unshift(colorBeginning);
document.write("<h3>After adding color to the beginning: </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

var colorEnd = prompt("What color would you like to add to the end of the array?");
colors.push(colorEnd);
document.write("<h3>After adding color to the end: </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.unshift("Purple", "Pink");
document.write("<h3>After adding two more colors to the beginning: </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.shift();
document.write("<h3>After removing the first color: </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.pop();
document.write("<h3>After removing the last color: </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

var indexToAdd = prompt("At which index would you like to add a color?");
var colorToAdd = prompt("What color would you like to add?");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<h3>After adding color at index " + indexToAdd + ": </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

var indexToDelete = prompt("At which index would you like to delete colors?");
var numberDelete = prompt("How many colors would you like to delete?");
colors.splice(indexToDelete, numberDelete);
document.write("<h3>After removing colors starting from index " + indexToDelete + ": </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// Question 10

var studentScores = [320, 230, 480, 120, 500];

document.write("Original Scores: " + studentScores.join(", ") + "<br>");

studentScores.sort(function(a, b) {
    return a - b; 
});

document.write("Ordered Scores: " + studentScores.join(", "));

// Question 11

var cities = ["Karachi", "Lahore", "Isb", "Quetta", "Peshawar"];
document.write("<h3> Cities list: </h3>");
document.write("<p>" + cities.join(", ") + "</p>");

var selectedCities = cities.slice(2, 4); 

document.write("<h3>Selected Cities: </h3>");
document.write("<p>" + selectedCities.join(", ") + "</p>");

//Question 12

var arr = ["This ", " is ", " my ", " cat"];
document.write("<h3>Original array: </h3>");
document.write("<p>" + arr.join (", ") + "</p>");

var result = arr.join(""); 

document.write("<h3>Combined String: </h3>");
document.write("<p>" + result + "</p>");

// Question 15

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h3>Select Phone Manufacturer:</h3>");
document.write("<select>");

for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");

