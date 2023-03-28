// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

// A format for expressing an ordered list of integers is to use a comma separated list of either
// individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
// The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers.
// For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

function solution(arr){
  let str = '';
  let i = 0;

  while (i < arr.length) {
    let start = arr[i];

    while (i < arr.length - 1 && arr[i+1] === arr[i] + 1) {
      i++;
    }

    let end = arr[i];

    if (end - start >= 2) {
      str += start + '-' + end + ',';
    } else if (end - start === 1) {
      str += start + ',' + end + ',';
    } else {
      str += start + ',';
    }

    i++;
  }
  return str.slice(0, -1);
}
