console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  console.log('introduction');
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, Your Name!';
} //I feel like I'm supposed to replace "Your Name" with "Evan" but if I do that it fails the automated test, it did however return "Hello, Evan!" successfully.
// Remember to call the function to test
console.log(helloName());

// 3. Function to add two numbers together & return the result
function addNumbers(num1,num2) {
  // return firstNumber + secondNumber;
  console.log('adding numbers:', num1, num2);
  let answer = num1 + num2;
  return answer;
}
console.log('adding 1 + 2', addNumbers(1, 2));
//this seems to have worked correctly returning the answer 3 but also at the end of the console log it appears to also be returning "-4 -5",
//since my console is returning everything as sourcing from line 4 I'm not sure but assume it's coming from this function, and I don't know why.

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
let answer = num1 * num2 * num3;
return answer
}
console.log('test multiplication', multiplyThree(3, 4, 5));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('the number is positive, ', isPositive(1));
console.log('the number is not positive, ', isPositive(0));
console.log('the number is positive, ', isPositive(-1));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let numberslist = [1, 2, 3, 4];
let lastValue = numberslist[numberslist.length - 1];
console.log (lastValue);

function getLast(lastValue) {
  if (lastValue === 4) {
  console.log('success')//I put this in here to try to test that it was working the way I expected it. Something isn't working since the auto test is 
  //failing this question, but I can't figure out why.
if (numberslist.length > 0) {
  return lastValue
}

if (numberslist.length === 0) {
  return 'undefined'
}

};
}
console.log('last number', getLast(lastValue));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(3, numberslist) {
  for(let i=0; i<numberslist.length; i++){
    if(numberslist[i] === 3) {
      return true;
    } else {
      console.log false
    }
  }
}
console.log('do you have a 3?', find(3, numberslist))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
