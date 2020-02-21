// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

 //Function Declaration 
 function addNum(n = 0){
   return ++n;
 }
 // function Expression

 let addNum = function(n = 0){
  return ++n;
};

// Arrow Function

let addNum = n => ++n;

// Arrow function with Curly Bracket

let addNum = n => {
 return ++n;
};



/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
// Function Decleration
function addNum(n = 0){
	return --n;
}

// function Expression
let addNum = function(n = 0){
	return --n;
};

// Arrow function

let addNum = n => --n;

// Arrow function with Curly Bracket

let addNum = n => {
	return --n;
};

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
// function Declaration
function addNum(x =0, y = 0){
  return x+y;
}

// function Expression
let addNum = function(x =0, y = 0){

  return x+y;
};


// Arrow function
let addNum = (x =0, y = 0) => x+y;


// arrow function with Curly Bracket
let addNum = (x =0, y = 0) => {
  return x+y;
};
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
// function Declaration
function addNum(x = 0, y = 0){
	return y-x;
}

//function Expression
let addNum = function(x = 0, y = 0){
 	return y-x;
 };

//Arrow function
 let addNum = (x = 0, y = 0) => y-x;

//Arrow function with curly bracket
 let addNum = (x =0, y = 0) => {
 	return y-x;
 };

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
//function Declaration
function addNum(x = 0, y = 0){
	return x*y;
}

//function expression
let addNum = function(x = 0, y = 0){
 	return x*y;
 };

//Arrow function
 let addNum = (x = 0, y = 0) => x*y;

//Arrow function with curly brackets
 let addNum = (x, y) => {
 	return X*y;
 };
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
//function Declaration
function param(x = 0, y = 0) {
	return x/y ;
}

//function Expression
let addNum = function(x = 0, y = 0){
 	return x/y;
 };

 //Arrow function
 let addNum = (x = 0, y = 0) => x/y;

//Arrow function with curly brackets
 let addNum = (x = 0, y = 0) => {
 	return x/y;
 };
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 //function Declaration
 function param(x = 0) {
  return x*x;
}

//function Expression
let addNum = function(x = 0){
  return x*x;
};

//Arrow function
let addNum = (x = 0) => x*x;

//Arrow function with curly bracket
let addNum = (x = 0) => {
  return x*x;
};


/**
* Performs a mathematical operation on two numbers.
* Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
* @param {string} operation "add", "subtract", "multiply", or "divide"
* @param {number} x
* @param {number} y
* @return {number} the result
*/

//function Declaration
function math(x = 0, y = 0) {
 return x+y;
}

//function expression
let math = function(x = 0, y = 0){
  return x+y;
};

//Arrow function
let addNum = (x = 0, y = 0) => x+y;

//Arrow function with curly bracket
let addNum = (x = 0, y = 0) => {
  return x+y;
};

/**
* Returns true if `a` is greater than `b`.
* @param {number} a
* @param {number} b
* @return {boolean} `a` is larger than `b`
*/

//function declaration
function param(a = 0, b = 0) {

  if (a > b) return true;
  else return false;
}

//function expression
let param = function(a = 0, b = 0) {

  if (a > b) return true;
  else return false;
};

//Arrow function with curly bracket
let param = (a, b) => {
 
 if (a > b) return true;
  else return false;
};

/**
* Returns true if `a` is less than `b`.
* @param {number} a
* @param {number} b
* @return {boolean} `a` is smaller than `b`
*/

//function declaration
function param(a = 0, b = 0) {

  if (a < b) return true;
  else return false;
}

//function expression
let param = function(a = 0, b = 0) {

  if (a < b) return true;
  else return false;
};

//Arrow function with curly bracket
let param = (a = 0, b = 0) => {
 
 if (a < b) return true;
  else return false;
};

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

//function declaration
function param(a = 0, b = 0) {

  if (a === b) return true;
  else return false;
}

//function expression
let param = function(a = 0, b = 0) {

  if (a === b) return true;
  else return false;
};

//Arrow function with curly bracket
let param = (a = 0, b = 0) => {
 
 if (a === b) return true;
  else return false;
};


/**
* Returns the smallest value of two numbers.
* @param {number} x
* @param {number} y
* @return {number} the smallest number
*/

//function declaration
function param(x =0, y = 0) {
 
 if (x > y) return y;
 else return x;
}

//function expression
let param = function(x =0, y = 0) {

 if (x > y) return y;
 else return x;
};

//Arrow function with curly bracket
let param = (x =0, y = 0) => {

 if (x > y) return y;
 else return x;

};

/**
* Returns the largest value of two numbers.
* @param {number} x
* @param {number} y
* @return {number} the largest number
*/

//function declaration
function param(x =0, y = 0) {
 
 if (x > y) return x;
 else return y;
}

//function expression
let param = function(x =0, y = 0) {

 if (x > y) return x;
 else return y;
};

//Arrow function with curly bracket
let param = (x =0, y = 0) => {

 if (x > y) return x;
 else return y;

};

/**
* Returns true if `n` is even.
* @param {number} n
* @return {boolean} the number is even
*/

//function declaration
function param(n = 0) {
  if (n%2==0) return true;
  else return false;
}

//function expression
let param = function(n = 0) {

 if (n%2==0) return true;
  else return false;
};

//Arrow function with curly bracket
let param = n => {

 if (n%2==0) return true;
  else return false;

};

/**
* Returns true if `n` is odd.
* @param {number} n
* @return {boolean} the number is odd
*/

//function declaration
function param(n = 0) {
  if (n%2==0) return false;
  else return true;
}

//function expression
let param = function(n = 0) {

 if (n%2==0) return false;
  else return true;
};

//Arrow function with curly bracket
let param = n => {

 if (n%2==0) return false;
  else return true;

};

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
