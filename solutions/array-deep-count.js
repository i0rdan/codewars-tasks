// https://www.codewars.com/kata/596f72bbe7cd7296d1000029

// You are given an array.
// Complete the function that returns the number of ALL elements within an array, including any nested arrays.

function deepCount(a) {
  return a.reduce((prev, next) => prev + (Array.isArray(next) ? deepCount(next) : 0), a.length);
}
