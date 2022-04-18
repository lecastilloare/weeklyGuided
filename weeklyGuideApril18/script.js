"use strict";

// THE BELOW SECTION CONTAINS THE VERY EASY PORTION OF THE ASSIGNMENT VVVVV

const variableOne = 10;
const variableTwo = 5;

console.log(`The difference between ${variableOne} and ${variableTwo} is ${variableOne - variableTwo}`);


// THE BELOW SECTION CONTAINS THE EASY PORTION OF THE ASSIGNMENT VVVVVVV

const nameOne = "Jared";
const nameTwo = "Lee";

const lengthOne = nameOne.length;
const lengthTwo = nameTwo.length;
const differenceInLength = lengthOne - lengthTwo;

console.log(`The name ${nameOne} is longer than the name ${nameTwo} by ${differenceInLength} characters.`);

let userInput = prompt("Please type a message!");

const checkTone = function (userInput) {
    if (userInput == userInput.toUpperCase()) {
        const answer = console.log("THIS USER IS YELLING. PLEASE CONTROL YOUR TONE.");
        return answer;
    } else if (userInput == userInput.toLowerCase()) {
        const answer = console.log("This user is whispering. Louder please for the people in the back.");
        return answer;
    } else {
        const answer = console.log("This user is talking normally. At least according to this.");
        return answer;
    }
}

console.log(checkTone(userInput));

// THE BELOW INVOLVES THE HARD AND THE VERY HARD SECTIONS OF THE ASSIGNMENT VVVVVV

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a % b;

const numberA = Number(prompt("Welcome to the Simpliest Calculator!: Please enter a number."));
const operator = prompt("Welcome to the Simpliest Calculator!: Please enter one of the following operations: + , - , * , or / ");
const numberB = Number(prompt("Welcome to the Simpliest Calculator!: Please enter a number."));


const calculatorProgram = function (number1, operator, number2) {
    if (operator == "+") {
        let resultAdd = addition(number1, number2);
        alert(`${number1} + ${number2} = ${resultAdd}`);
        return resultAdd;

    } else if (operator == "-") {
        let resultSub = subtraction(number1, number2);
        alert(`${number1} - ${number2} = ${resultSub}`);
        return resultSub;

    } else if (operator == "*") {
        let resultMult = multiplication(number1, number2);
        alert(`${number1} * ${number2} = ${resultMult}`);
        return resultMult;

    } else if (operator == "/") {
        let resultDiv = division(number1, number2);
        alert(`${number1} / ${number2} has ${resultDiv} remainder(s)`);
        return resultDiv;
    } else {
        alert("Something went wrong: Invalid character choice, please reload the page to start again.");
    }
}

calculatorProgram(numberA, operator, numberB); 
