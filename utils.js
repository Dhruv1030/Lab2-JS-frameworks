// Function 1: Greet the user with a personalized message
export function welcomeUser(firstName, location) {
  console.log(`Hello ${firstName} from ${location}! Welcome to our platform.`);
}

// Function 2: Convert kilometers to miles
export function convertDistance(kilometers) {
  const miles = kilometers * 0.621371;
  return miles.toFixed(2);
}

// Function 3: Calculate the sum of an array of numbers
export function calculateSum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Function 4: Generate a random string of a specific length (e.g., 8 characters)
export function randomStringGenerator(length = 8) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
