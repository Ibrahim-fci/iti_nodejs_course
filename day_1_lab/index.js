// ** Create a function that takes the age in years and returns the age in days.
function ageInDays(years) {
  // first check if the input is a number and valid year

  if (isNaN(years) || years < 0) {
    return "Please enter a valid year number";
  }

  return years * 365;
}

const myAge = 25;
let myAgeIndays = ageInDays(myAge);
console.log(`my age in days (${myAge}): `, myAgeIndays);

//_________________________________________________________________________________________________________________________________________________
// ** Create a function that takes an array of numbers and returns the smallest number in the set.
function smallestNum(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`smallest number of  ${arr} is  :`, smallestNum(arr));

//_________________________________________________________________________________________________________________________________________________
/**** Create a function that takes any non-negative number as an array and return it with its digits in
descending order. Descending order is when you sort from highest to lowest. */

function sortDigitsDescending(numberArray) {
  const sortedArray = [];
  if (!Array.isArray(numberArray)) {
    throw new Error("Input must be an array");
  }

  //  Check if all elements in the array are non-negative numbers
  if (!numberArray.every((num) => typeof num === "number" && num >= 0)) {
    throw new Error("All elements in the array must be non-negative numbers");
  }

  // sort array using nested for
  for (let i = 0; i < numberArray.length; i++) {
    for (let j = 0; j < numberArray.length; j++) {
      if (numberArray[i] > numberArray[j]) {
        let temp = numberArray[i];
        numberArray[i] = numberArray[j];
        numberArray[j] = temp;
      }
    }
  }

  return numberArray;
}

//   Example usage:
const inputArray = [525, 312, 714, 365];
const result = sortDigitsDescending(inputArray);
console.log(`descendig order of ${inputArray} is : `, result);

// another  solution using built in sort func
// function sortDigitsDescending(numberArray) {
//     if (!Array.isArray(numberArray)) {
//       throw new Error("Input must be an array");
//     }

//      Check if all elements in the array are non-negative numbers
//     if (!numberArray.every(num => typeof num === 'number' && num >= 0)) {
//       throw new Error("All elements in the array must be non-negative numbers");
//     }

//     Convert each number to a string, split its digits, sort in descending order, and join back
//     const sortedArray = numberArray.map(num => num.toString().split('').sort((a, b) => b - a).join(''));

//     return sortedArray;
//   }

//   Example usage:
//   const inputArray = [352, 678, 91, 42];
//   const result = sortDigitsDescending(inputArray);
//   console.log(result);

//_________________________________________________________________________________________________________________________________________________
// ** Create a function that takes an array of numbers and returns the average of this numbers.

function calculateAverage(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array");
  }

  // Check if the array is not empty
  if (numbers.length === 0) {
    throw new Error("Array must not be empty");
  }

  // Calculate the sum of numbers in the array
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  // Calculate the average
  const average = sum / numbers.length;

  return average;
}

// average Example usage:
const numbersArray = [10, 20, 30, 40, 50];
const average_result = calculateAverage(numbersArray);
console.log(`The average of ${numbersArray} is: ${average_result}`);

//_________________________________________________________________________________________________________________________________________________
// ** what is the output of
console.log([] == []); // output   false
console.log({} == {}); // output   false

// explanation:
/**
 * 
In JavaScript, when you use the equality operator (==) to compare two objects or arrays,
it checks for equality of reference, not for equality of contents.
 */

//_________________________________________________________________________________________________________________________________________________
// ** what is the output of this code with explanation
function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();

/**
 * In the main function, we have a setTimeout function with a delay of 0 milliseconds. Despite the 0 milliseconds,
 *  it doesn't mean the callback function will run immediately; rather, it will be scheduled to run in the next event loop iteration.
 *  Here's a step-by-step explanation of the output:

    console.log("A");: Prints "A" to the console.
    setTimeout(function print() { console.log("B"); }, 0);: Schedules the function print to run in the next event loop iteration.
    The delay of 0 milliseconds means it will be executed as soon as possible but not necessarily immediately.
    console.log("C");: Prints "C" to the console.
 */

//_________________________________________________________________________________________________________________________________________________

// ** what is the output of this code with explanation
var num = 8;
var num = 10;
console.log("the number is : ", num);

/**
 * 
 * 
   In JavaScript, when you use the var keyword to declare a variable multiple times in the same scope, it does not produce an error,
   and the variable is hoisted. Hoisting means that variable declarations are moved to the top of their containing scope during the compilation phase.
   However, only the first declaration is taken into account,
   and subsequent declarations do not create new variables; they just assign a new value to the existing variable.
 */

//_________________________________________________________________________________________________________________________________________________
// ** what is the output of this code with explanation
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Ayush";
  let age = 21;
}
sayHi();

/*
    In the sayHi function, there's a mixture of variable declarations using var and let.
    It's important to understand how these declarations are hoisted in JavaScript.

    Here's the step-by-step explanation of the code:

        The console.log(name); statement encounters a variable named name, but at this point, the variable has not been assigned any value,
        and it hasn't been declared yet. In JavaScript, variable declarations using var are hoisted to the top of their scope,
        but they are initialized with undefined. So, console.log(name); will output undefined.

        The console.log(age); statement encounters a variable named age. However, since it is declared with let,
        it is not hoisted with an undefined value. Instead,
        an error is thrown at runtime because you are trying to access the value of age before it is declared.
 */
