// Import the functions from the utility file
import {
  welcomeUser,
  convertDistance,
  calculateSum,
  randomStringGenerator,
} from "./utils.js";

// Calling the functions with sample data
welcomeUser("Dhruv", "Wonderland");

const kilometers = 5;
console.log(`Kilometers to Miles: ${convertDistance(kilometers)} miles`);

const numbers = [10, 20, 30];
console.log(`Sum of numbers: ${calculateSum(numbers)}`);

console.log(`Random String: ${randomStringGenerator()}`);
