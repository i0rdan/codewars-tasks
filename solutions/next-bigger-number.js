// https://www.codewars.com/kata/55983863da40caa2c900004e

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n){
  let numbers = n.toString().split('').map(Number);
  let pivot = numbers.length - 2;

  while (pivot >= 0 && numbers[pivot] >= numbers[pivot + 1]) {
    pivot--;
  }

  if (pivot === -1) {
    return pivot;
  }

  let successor = numbers.length - 1;
  while (numbers[successor] <= numbers[pivot]) {
    successor--;
  }

  [numbers[pivot], numbers[successor]] = [numbers[successor], numbers[pivot]];

  numbers.splice(pivot + 1, numbers.length - pivot - 1, ...numbers.slice(pivot + 1).reverse());

  return Number(numbers.join(''));
}
