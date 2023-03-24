// https://www.codewars.com/kata/52b7ed099cdc285c300001cd
// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths.
// Overlapping intervals should only be counted once.

// Intervals are represented by a pair of integers in the form of an array.
// The first value of the interval will always be less than the second value.
// Interval example: [1, 5] is an interval from 1 to 5.
// The length of this interval is 4.

function sumIntervals(intervals) {
  return intervals
    .sort(([a], [b]) => a - b)
    .reduce((prev, [currA, currB]) => {
      if (prev.length) {
        const [prevA, prevB] = prev[prev.length - 1];
        if (prevB >= currA) {
          if (prevB < currB) {
            prev[prev.length - 1] = [prevA, currB];
          }
          return prev;
        }
      }
      return prev.concat([[currA, currB]]);
    }, [])
    .reduce((prev, [a, b]) => prev += b - a, 0);
}
