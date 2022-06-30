/*
Input
arr = 5 
d = 4
1 2 3 4 5

Output
5 1 2 3 4

Explanation
[1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]
*/

function rotLeft(a, d) {
  // Write your code here
  let i = 0;

  while (i < d) {
    a.push(a.shift());
    i += 1;
  }

  return a;
}
