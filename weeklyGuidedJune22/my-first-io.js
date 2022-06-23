"use strict";

// nodeyou
const fs = require('fs');

// The below will return a buffer object. 
const bufferForm = fs.readFileSync(process.argv[2]);

const numLines = bufferForm.toString().split('\n').length - 1;

console.log(numLines);

