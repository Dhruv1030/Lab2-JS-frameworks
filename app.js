// Import the functions from the utility file
import {
  greetUser,
  convertUnit,
  calculateFactorial,
  advancedFunction,
} from "./utils.js";

// Calling the functions with sample data
greetUser("John", "Doe");

const celsius = 30;
console.log(`Celsius to Fahrenheit: ${convertUnit(celsius)}°F`);

const number = 5;
console.log(`Factorial of ${number}: ${calculateFactorial(number)}`);

advancedFunction();
