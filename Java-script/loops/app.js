// Question 1
var emptyArray = [];

// Question 2
var matrix = [
    [0, 1, 2, 3], 
    [1 , 0 , 1 ,2] ,
    [2 , 1 , 0 , 1] 
  ];

// Question 3
document.write("<h1>numbers 1 to 10</h1>");
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// Question 4
document.write("<h1>Multiplication Table</h1>");

var tableNumber = prompt("Enter the number for multiplication table:");
var tableLength = prompt("Enter the length of the table:");


for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

// Question 5
document.write("<h1>Fruits</h1>");
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

document.write("<br>Element at each index: <br>");
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

// Question 6

document.write("<h1>Counting Numbers</h1>");

document.write("Counting: ");
const counting = [];
for (let i = 1; i <= 15; i++) {
  counting.push(i);
}
document.write(counting.join(", ") + "<br>");

document.write("Reverse Counting: ");
const reverseCounting = [];
for (let i = 10; i >= 1; i--) {
  reverseCounting.push(i);
}
document.write(reverseCounting.join(", ") + "<br>");

document.write("Even: ");
const evenNumbers = [];
for (let i = 0; i <= 20; i += 2) {
  evenNumbers.push(i);
}
document.write(evenNumbers.join(", ") + "<br>");

document.write("Odd: ");
const oddNumbers = [];
for (let i = 1; i < 20; i += 2) {
  oddNumbers.push(i);
}
document.write(oddNumbers.join(", ") + "<br>");

document.write("Series: ");
const k = 1;
const series = [];
for (let i = 2; i <= 20; i += 2) {
  series.push(i * k);
}
document.write(series.join(", ") + "<br>");

// Question 7

var food = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Enter the item you want to search for:");

if (food.indexOf(userInput) !== -1) {
  alert("Yes, the item is found in the list.");
} else {
  alert("Sorry, the item is not found in the list.");
}

// Question 8
document.write("<h2>Array List</h2>");

var num1 = [24, 53, 78, 91, 12];
document.write("Array Items: " + num1 + "<br>");

var largest = num1[0]; // which means that it has declared the first item as the largest for now.
for ( var i = 1; i < num1.length; i++) { 
  if (num1[i] > largest) {
    largest = num1[i]; // if the current num 1 gets greater than the largest one atp then it becomes the largest one.
  }
}
document.write("Largest number in the array: " + largest + "<br>");


// Question 9

var num2 = [24, 53, 78, 91, 12];

document.write("Array Items: " + num2 + "<br>");

var smallest = num1[0]; 

for (var i = 1; i < num2.length; i++) {
    if (num2[i] < smallest) {
    smallest = num2[i];
  }
}

document.write("Smallest number in the array: " + smallest);

// Question 10

document.write("<h2>Multiples of 5 from 1 to 100:</h2>");

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(i + "<br>");
  }
}




