"use strict";

let arr = [1, 2, 3];
function SumLastThree() {
let sum;

  for (let i = 9; i > 0; i--) {
    let nums = arr.slice(-3);
    sum = nums.reduce((a, b) => a + b, 0);
    arr.push(sum);
  }
}

console.log(arr);
SumLastThree();
