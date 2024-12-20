var num1 = 15
var num2 = 11

var sum = num1 + num2
var difference = num1 - num2
var product = num1 * num2
var quotient = num1 % num2

document.write("<b>question 1</b> <br>")
document.write("sum of 15 and 11 is " + sum +  "<br>" )
document.write("<b>question 2</b> <br>")
document.write("difference of 15 and 11 is " + difference + "<br>" )
document.write("product of 15 and 11 is " + product + "<br>")
document.write("modulus of 15 and 11 is " + quotient + "<br>")

// Output: sum of 15 and 11 is 26, difference of 15 and 11 is 4, product of 15 and 11 is 165, modulus of 15 and 11 is 4
document.write("<b>question 3</b> <br>")
        var number;
        document.write("Value after variable declaration is: " + number + "<br>")
        number = 5;
        document.write("Initial value: " + number + "<br>")
        number++;
        document.write("Value after increment is: " + number + "<br>")
        number += 7;
        document.write("Value after addition is: " + number + "<br>")
        number--;
        document.write("Value after decrement is: " + number + "<br>")
        var remainder = number % 3;
        document.write("The remainder is: " + remainder + "<br>")

document.write("<b>question 4</b> <br>")
var ticketPrice = 600
var numberOfTickets = 5
var totalCost = ticketPrice * numberOfTickets;

document.write("Total cost of " + numberOfTickets + " tickets is: " + totalCost + " PKR  <br>")
0
document.write("<b>question 7</b> <br>")

        var priceItem1 = 650; 

        var priceItem2 = 100; 

        var quantityItem1 = 3; 

        var quantityItem2 = 7; 

        var shippingCharges = 100;

var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;
var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;

        document.write("<h2>Checkout Summary</h2>");
        document.write("Price of Item 1: " + priceItem1 + " <br>");
        document.write("Quantity of Item 1: " + quantityItem1 + "<br>");
        document.write("Total Cost for Item 1: " + totalCostItem1 + " <br>");

        document.write("Price of Item 2: " + priceItem2 + " <br>");
        document.write("Quantity of Item 2: " + quantityItem2 + "<br>");
        document.write("Total Cost for Item 2: " + totalCostItem2 + " <br>");

        document.write("Shipping Charges: " + shippingCharges + " <br>");
        document.write("Total Cost of your order is (including shipping): " + totalCost + " <br>");
       
 document.write("<b>question 8</b> <br>")
 document.write("<h2>Marks Sheet</h2>");
 var totalmarks = 980
 var marksobtained = 804
 percentage = marksobtained / totalmarks * 100

 document.write("Total marks: " + totalmarks + " <br>")
 document.write("Marks obtained: " + marksobtained + " <br>")
 document.write("Percentage: " + percentage + " % <br>")

 document.write("<b>question 9</b> <br>")
 document.write("<h2>Currency in PKR </h2>");
 var dollars = 10
 var riyals = 25

 var usdToPkr = 104.80
 var sarToPkr = 28

totalcurrency = (dollars * usdToPkr) + (riyals * sarToPkr) 

document.write("Total currency in PKR: " + totalcurrency + "<br>")

document.write("<b>question 10</b> <br>")

var number = 20
var result = ((number + 5) * 10 ) / 2
document.write(result + "<br>")

document.write("<b>question 11</b> <br>")
document.write("<h2>Age calculator</h2>");
var Currentyear = 2016
var Birthyear = 1992

var age1 = Currentyear - Birthyear
var age2 = age1 - 1

document.write("your Age is either:   " + age1 + "   or  " + age2 + "<br>")

document.write("<b>question 12</b> <br>")
document.write("<h2>The Geometrizer</h2>");

var radius = 20
var pi = 3.14159
var circumference = 2 * pi * radius
var area = pi * radius * radius
document.write("radius of a circle is " + radius +"<br>")
document.write("Circumference of circle is: " + circumference + "<br>")
document.write("area of a circle is: " + area + "<br>")

document.write("<b>question 13</b> <br>")
document.write("<h2>The Calculator</h2>");

var favSnack = "cheetos"
var currentAge = 15
var maxAge = 65
var estimatedAmount = 3
var yearsLeft = maxAge - currentAge
var totalAmount = yearsLeft * estimatedAmount 

document.write("You will need " + totalAmount + " " + favSnack + " to last you until the ripe old age of " + maxAge + " <br>")
