"use strict";

// DONE

const findNum = function (array, targetNum) {

    if (array.includes(targetNum)) {
        console.log(`${array.indexOf(targetNum)}`)
    } else {
        console.log("-1")
    }
}

const testing = [4, 5, 6, 7, 0, 1, 2];

findNum(testing, 5);
findNum(testing, 3);