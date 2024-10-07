// Import the functions from the utility file
import {
  greetUser,
  convertUnit,
  calculateFactorial,
  advancedFunction,
} from "./utils.js";

// Calling the functions with sample data
greetUser("Dhruv", "Patel");

const celsius = 27;
console.log(`Celsius to Fahrenheit: ${convertUnit(celsius)}°F`);

const number = 7;
console.log(`Factorial of ${number}: ${calculateFactorial(number)}`);

advancedFunction();
