//Question 1

var a = 10;

document.write("<b>Question 1</b> <br>");

document.write("The value of a is: " + a + "<br>");
document.write(".....................................<br><br>");

// Pre-increment
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-increment
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-decrement
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-decrement
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

//Question 2

document.write("<br> <b>Question 2</b> <br><br>");

var a = 2, b = 1;

document.write("Step 1: --a<br>");
document.write("Initial values: a = " + a + ", b = " + b + "<br>");
document.write("Result of --a is: " + --a + "<br>");

document.write("<br> Step 2: --a - --b<br>");
document.write("Current values of : a = " + a + ", b = " + b + "<br>");
document.write("Result of --a - --b: " + (--a - --b) + "<br>");

document.write("<br> Step 3: --a - --b + ++b<br>");
document.write("Current values of : a = " + a + ", b = " + b + "<br>");
document.write("Result of --a - --b + ++b: " + (--a - --b + ++b) + "<br>");

document.write("<br> Step 4: --a - --b + ++b + b--<br>");
document.write("Current values: a = " + a + ", b = " + b + "<br>");
document.write("Result of --a - --b + ++b + b--: " + (--a - --b + ++b + b--) + "<br>");

document.write(" <br> Final result: " + (--a - --b + ++b + b--) + "<br>");
document.write("Final values: a = " + a + ", b = " + b + "<br>");

//Question 3

document.write("<br> <b>Question 3</b> <br><br>");
document.write("<br> <b>Through prompt</b> <br><br>");

var name = prompt("Please enter a name")

alert("Hello, " + name + "!");

//Question 5

document.write("<br> <b>Question 5</b> <br><br>");

var num = prompt("Enter a number to display its multiplication table:");
if (num === "" || num === null) {
    num = 5;
  }
  
  for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
  }

  //Question 6

document.write("<br> <b>Question 6</b> <br><br>");

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarks = 100;

var marks1 = Number(prompt("Enter obtained marks for " + subject1 + ":"));
var marks2 = Number(prompt("Enter obtained marks for " + subject2 + ":"));
var marks3 = Number(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / (totalMarks * 3)) * 100;

document.write("<h3>Marks Report</h3>");
document.write("<table border='' style='width: 50%; text-align: center; border-collapse: collapse;'>");
document.write("<tr><th>Subject</th><th>Marks Obtained</th><th>Total Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + marks1 + "</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + marks2 + "</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + marks3 + "</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><th>Total Marks Obtained</th><th>" + totalObtained + "</th><th>" + (totalMarks * 3) + "</th></tr>");
document.write("<tr><th>Percentage</th><th colspan='2'>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");