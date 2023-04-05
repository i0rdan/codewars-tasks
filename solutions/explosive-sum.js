// https://www.codewars.com/kata/52ec24228a515e620b0005ef

// How many ways can you make the sum of a number?
// From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)

function sum(num, m = num, temp = []) {
  if (num === 0) {
    return 1;
  }
  if (num < 0 || m === 0) {
    return 0;
  }
  if (temp[num] && temp[num][m]) {
    return temp[num][m];
  }

  const total = sum(num, m - 1, temp) + sum(num - m, m, temp);

  if (!temp[num]) {
    temp[num] = [];
  }

  temp[num][m] = total;

  return total;
}
