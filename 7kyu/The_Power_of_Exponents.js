// This kata is based on: Exponent Method

// Create a method called power that takes two integers and returns the value of the 
// first argument raised to the power of the second.

// Unlike the Exponent Method, you should also take in account negative exponents.

// Your solution won't be tested against special cases leading to undefined values 
// (0**-2 for example)

// Note: The ** operator (JS: Math.pow) has been disabled.

// Examples:

// power(2, 3)   // 8
// power(4, -2)  // 0.0625

function power(base, exponent) {
  let result = 1;

  if (exponent === 0) {
    return 1;
  }

  let isNegative = false;
  if (exponent < 0) {
    isNegative = true;
    exponent = -exponent;
  }

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  if (isNegative) {
    return 1 / result;
  }

  return result;
}

//This problem required implementing mathematical logic manually, which encourages a 
//deeper understanding of how exponentiation works