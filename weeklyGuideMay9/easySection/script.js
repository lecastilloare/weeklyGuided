"use strict";

// DONE

const arrayInput = [1, 4, 7];

function averageNum(array) {

    let total = 0;

    for (var i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    let average = total / array.length
    return console.log(average);
}

averageNum(arrayInput);
averageNum([10, 5]);
averageNum([1.5, 3, 2.5, 1]);