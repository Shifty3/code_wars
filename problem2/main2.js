// SpeedCode #2 - Array Madness

// Objective

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

//first we have to multiply each number, then add all 3
//then compare if either array is larger
function arrayMadness(a, b) {
  //   Ready, get set, GO!!!
  let num1 = a.reduce((a, b) => (a += b ** 2), 0);
  let num2 = b.reduce((a, b) => (a += b ** 3), 0);

  //return a boolean value
  return num1 > num2;
}
