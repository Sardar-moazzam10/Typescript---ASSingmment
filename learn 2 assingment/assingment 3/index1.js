"use strict";
// 1. Hello Variable
// Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.
console.log("Question  1 Hello World");
let greeting = "Hello WOrld!";
console.log(greeting);
// 2. Basic Math
// Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.
console.log("Question 2");
console.log("Basic Matn");
let num1 = 2;
let num2 = 4;
let sum;
console.log("num1 =", num1, "num2 =", num2);
sum = num1 + num2;
console.log("sum =", num1, "+", num2, "=", sum);
let sub;
sub = num1 - num2;
console.log("Difference =", num1, "-", num2, "=", sub);
let prod;
prod = num1 * num2;
console.log("Product =", num1, "*", num2, "=", prod);
let quot;
quot = num1 / num2;
console.log("Quotient =", num1, "/", num2, "=", sum);
// 3. Swapping Values
// Instructions: Swap the values of two variables without using a third variable.
console.log("Question#3");
console.log("Swapping values");
let a = 1;
let b = 2;
console.log("Values before swapping", "a=", a, "b=", b);
a = a + b;
b = a - b;
a = a - b;
console.log("Values after swapping", "a=", a, "b=", b);
// 4. Type Annotation (TypeScript)
// Instructions: This applies to TypeScript. Create a string variable and try changing its type.
console.log("Question 4");
console.log("Type Annotation");
let message;
message = 2;
console.log("message :", message);
console.log("Its showa error but the message is print");
// 5. Modulus Operator
// Instructions: Use the modulus operator to find the remainder of two numbers.
console.log("Question 5");
console.log("Modulus Operator");
let numb1 = 5;
let numb2 = 15;
console.log("numb1 =", numb1, "numb2 =", numb2);
let mod;
mod = numb1 % numb2;
console.log("Modulus of num1 % num2 =", mod);
// 6. Increment Challenge
// Instructions: Increment a variable's value by 1 using two different methods.
console.log("Question 6");
console.log("Increment challenge");
console.log("Method 1");
let count = 0;
console.log("Value before increment=", count);
count++;
console.log("Vale after increment=", count);
console.log("Method 2");
let counter = 1;
console.log("Value before increment=", counter);
counter = counter + 1;
console.log("Vale after increment=", counter);
// 7. Logical Gates
// Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
console.log("Question 7");
console.log("Logic Gates");
let a1 = true, b1 = false, c1 = true;
console.log("a1 =", a1, "b1 =", b1, "c1 =", c1);
//AND
console.log("a1 && b1 :", a1 && b1); //false
console.log("b1 && c1 :", b1 && c1); //false
console.log("c1 && a1 :", c1 && a1); //true
//OR
console.log("a1 || b1 :", a1 || b1); //true
console.log("b1 || c1 :", b1 || c1); //true
console.log("c1 || a1 :", c1 || a1); //true
//NOT
console.log("a1 ! = b1 :", a1 = b1); //false
console.log("b1 ! = c1 :", b1 = c1); //true
console.log("c1 ! = a1 :", c1 = a1); //false
// 8. Compound Assignment
// Instructions: Show examples of using compound assignment operators.
console.log("Question 8");
console.log(" Compound Assingment");
let number = 10;
number += 5;
console.log("10 += 5 =", number);
number -= 5;
console.log("10 -= 5 =", number);
number *= 5;
console.log("10 *= 5 =", number);
number /= 5;
10;
console.log("10 /= 5 =", number);
// 9. Even or Odd
// Instructions: Write a program to check if a number is even or odd.
console.log("Question 9");
console.log("Check Even Or Odd");
let numbber = 8;
console.log("Number :", numbber);
if (numbber % 2 == 0) {
    console.log("Number is Even");
}
else {
    console.log("Number is Odd");
}
// 10. Voting Eligibility
// Instructions: Check if a person is eligible to vote.
console.log("Question 10");
console.log("Voting Eligiblity");
let person_age = 100;
console.log("person_age :", person_age);
if (person_age >= 18) {
    console.log("Person is eligible for voting. ");
}
else {
    console.log("Person is not eligible for voting. ");
}
// 11. Grading System
// Instructions: Assign a grade based on a numerical score.
console.log("Question 11");
console.log("Grading System");
let marks = 85;
if (marks >= 90) {
    console.log("Marks =", marks);
    console.log("A Grade");
}
else if (marks < 90 && marks >= 85) {
    console.log("Marks =", marks);
    console.log("B Grade");
}
else if (marks < 85 && marks >= 70) {
    console.log("Marks =", marks);
    console.log("C Grade");
}
else if (marks < 70 && marks >= 60) {
    console.log("Marks =", marks);
    console.log("D Grade");
}
else if (marks < 60 && marks > 50) {
    console.log("Marks =", marks);
    console.log("E Grade");
}
else {
    console.log("Marks =", marks);
    console.log("F Grade");
}
//  12. Max of Three
//  Instructions: Find the maximum of three numbers.
console.log("Question 12");
console.log("Max of Three");
let x = 15, y = 6, z = 11;
console.log("x =", x, "y =", y, "z =", z);
if (x > y && x > z) {
    console.log("Max is x");
}
else if (y > x && y > z) {
    console.log("Max is y");
}
else if (z > x && z > y) {
    console.log("Max is z");
}
else {
    console.log("wrong option");
}
// 13. Leap Year Checker
// Instructions: Check if a given year is a leap year.
console.log("Question 13");
console.log("Leap Year Cheaker");
let year = 2032;
if (year % 4 == 0 && year % 400 == 0 || year % 100 == 0) {
    console.log("Year", year, "Is a leapyear.");
}
else {
    console.log("Year", year, "not a leapyear");
}
// 14. Fahrenheit to Celsius Converter
// Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
console.log("Question 14");
console.log("Fahrenheit to Celsius Converter");
let Fahrenheit = 42;
console.log("Fahrenheit =", Fahrenheit, "°F");
let Celsius;
Celsius = (Fahrenheit - 32) * 5 / 9;
console.log("Celsius =", Celsius, "°C");
// 15. Positive, Negative, or Zero
// Instructions: Check if a number is positive, negative, or zero.
console.log("Question 15");
console.log("Positive Negative Zero Checker");
let numbeer = -19;
console.log("Number =", numbeer);
if (numbeer > 0) {
    console.log("Number is positive");
}
else if (numbeer < 0) {
    console.log("Number is negative");
}
else if (numbeer == 0) {
    console.log("Numberr is zero");
}
else {
    console.log("Invalid input");
}
// 16. Multiplication Table
// Instructions: Write a program that prints the multiplication table of a given number up to 10.
console.log("Question 16");
console.log("Print *Table upto 10");
let Num = 15;
let counte;
console.log("Multiplication Table Of", Num);
for (let counte = 1; counte <= 10; counte++) {
    console.log(Num, "x", counte, "=", (Num * counte));
}
// 17.Celsius to Fahrenheit Converter
// Instructions: Write a program that converts temperature from Celsius to Farhenheit.
console.log("Question 17");
console.log("Celsius to Fahrenheit Converter");
let Celsiuss = 42;
console.log("Celsius =", Celsiuss, "°C");
let Fahrenheitt;
Fahrenheitt = (9 / 5 * Celsiuss) + 32;
console.log("Fahrenheit =", Fahrenheitt, "°F");
