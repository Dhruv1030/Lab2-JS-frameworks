// Function 1: Greet the user with a welcome message
export function greetUser(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName} to Georgian College`);
}

// Function 2: Convert Celsius to Fahrenheit
export function convertUnit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Function 3: Calculate factorial of a number
export function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

// Function 4: Any advanced function (e.g., Fibonacci sequence generator)
export function advancedFunction() {
  const n = 7; // Generate first 7 Fibonacci numbers
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(`First ${n} Fibonacci numbers: ${fib.join(", ")}`);
}
