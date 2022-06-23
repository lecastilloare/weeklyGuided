"use strict";


// global process object, it has a property called argv that is an array that contains the complete command line

let sum = 0;

for (let i = 2; i < process.argv.length; i++) {

    sum += Number(process.argv[i]);
}

console.log(sum);