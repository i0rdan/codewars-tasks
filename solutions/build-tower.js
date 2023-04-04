// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors.
// A tower block is represented with "*" character.

function towerBuilder(nFloors) {
  return Array(nFloors).fill(null).map((_, i) => {
    const stars  = '*'.repeat((2 * (i + 1)) - 1);
    const space = ' '.repeat(nFloors - (i + 1));
    return `${space}${stars}${space}`;
  }); 
}
