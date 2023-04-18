// https://www.codewars.com/kata/59f70440bee845599c000085

// Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
// ["name2", 140, ["B", "A", "A", "A"]],
// ["name3", 200, ["B", "A", "A", "C"]]
// ];
// The scores for each grade is:

// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.

function findHack(arr) {
  const grade = { A: 30, B: 20, C: 10, D: 5 };
  return arr.filter(([, score, marks]) => {
    let calculatedScore = 0;
    const marksCount = marks.reduce((prev, next) => {
      if (prev[next]) {
        prev[next] += 1;
      } else {
        prev[next] = 1;
      }
      return prev;
    }, {});
    
    if (marksCount.A + marksCount.B === marks.length) {
      calculatedScore += 20;
    }
    
    Object.keys(marksCount).forEach((m) => {
      if (grade[m]) {
        calculatedScore += grade[m] * marksCount[m];
      }
    })

    return score !== calculatedScore || score > 200;
  }).map(([name]) => name)
}
