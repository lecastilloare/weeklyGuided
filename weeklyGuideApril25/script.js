"use strict";

// The following is the Guided Inquiry for April 25, 2022

// BELOW IS THE VERY EASY PORTION OF THE ASSIGNMENT

const min = function (a, b,) {

    if (a > b) {
        const statement = (`The minimum of ${a} and ${b} is ${b}`);
        console.log(statement);

    } else if (b > a) {
        const statement = (`The minimum of ${a} and ${b} is ${a}`);
        console.log(statement);

    } else {
        const statement = (`The value of ${a} and ${b} is the same: Minimum of ${a}`);
        console.log(statement);
    }
}

min(4, 4);
min(5, 10);
min(10, 7);

// BELOW IS THE EASY PORTION OF THE ASSIGNMENT 


const students = [
    ["Pinkard", "Mcheimer", "Castillo Arenas", "Benny"],
    ["Jared", "Ladawna", "Lee", "Valentino"],
    [23, 21, 22]

]

console.log(`Hello! My name is ${students[1][1]} ${students[0][1]} and I am ${students[2][1]} years old.`);

// BELOW IS THE MEDIUM SECTION OF THE ASSIGNMENT


const calendar = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


let userNumberInput = Number(prompt("Please choose a number from 1 - 12."));

if (userNumberInput > 12 || userNumberInput < 1) {
    alert("Please refresh the page and enter a valid number from 1 - 12: Too big or too small number choice")

} else if (userNumberInput == 1) {
    alert(`You have chosesn ${calendar[0]}!`);

} else if (userNumberInput == 2) {
    alert(`You have chosesn ${calendar[1]}!`);

} else if (userNumberInput == 3) {
    alert(`You have chosesn ${calendar[2]}!`);

} else if (userNumberInput == 4) {
    alert(`You have chosesn ${calendar[3]}!`);

} else if (userNumberInput == 5) {
    alert(`You have chosesn ${calendar[4]}!`);

} else if (userNumberInput == 6) {
    alert(`You have chosesn ${calendar[5]}!`);

} else if (userNumberInput == 7) {
    alert(`You have chosesn ${calendar[6]}!`);

} else if (userNumberInput == 8) {
    alert(`You have chosesn ${calendar[7]}!`);

} else if (userNumberInput == 9) {
    alert(`You have chosesn ${calendar[8]}!`);

} else if (userNumberInput == 10) {
    alert(`You have chosesn ${calendar[9]}!`);

} else if (userNumberInput == 11) {
    alert(`You have chosesn ${calendar[10]}!`);

} else if (userNumberInput == 12) {
    alert(`You have chosesn ${calendar[11]}!`);
} else {
    alert("Please refresh the page and enter a valid number from 1-12: Input not a number");
}

// BELOW IS THE HARD SECTION OF THE ASSIGNMENT


const calcBMI = function (height, mass) {
    const actualBMI = mass / (height * height);
    return actualBMI
}

const tom = calcBMI(9, 8);
console.log(tom);

const jerry = calcBMI(10, 45);
console.log(jerry);

if (tom > jerry) {
    const bmiBoolean = true;
    console.log(`Is Tom's BMI higher than Jerry's?: ${bmiBoolean}`);

} else if (jerry > tom) {
    const bmiBoolean = false;
    console.log(`Is Tom's BMI higher than Jerry's?: ${bmiBoolean}`);
}
