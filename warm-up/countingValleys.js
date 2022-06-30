// Example:
// Input
// steps = 8; path = [DDUUUUDD]
// Output
// 2

// Input
// 8
// UDDDUDUU
// Output
// 1

// Explanation
// _/\      _
//    \    /
//     \/\/

function countingValleys(steps, path) {
  // Write your code here
  let valleys = 0;
  let cur = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      cur += 1;
    } else {
      cur -= 1;
    }

    if (cur === 0 && path[i] === 'U') {
      valleys += 1;
    }
  }

  return valleys;
}
