"use strict";
function reverseArray(arr) {
    return arr.reverse();
}
const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["apple", "banana", "cherry", "date"];
const mixedArray = [true, 42, "hello", false];
console.log("Reversed Array of Numbers:", reverseArray(numberArray));
console.log("Reversed Array of Strings:", reverseArray(stringArray));
console.log("Reversed Mixed Array:", reverseArray(mixedArray));
