/*
Example
c = [0,1,0,0,0,1,0]
Index the array from . The number on each cloud is its index in the list so the player must avoid the clouds at indices  and . They could follow these two paths:  or . The first path takes  jumps while the second takes . 
Returns => 3.
*/

/*
Sample Input:
[0 0 1 0 0 1 0]
Sample Output:
4
*/

/*
Sample Input:
[0 0 0 0 1 0]
Sample Output:
3
*/

function jumpingOnClouds(c) {
  // Write your code here
  let jumps = 0;

  for (let i = 0; i < c.length - 1; i++) {
    jumps += 1;
    if (c[i + 2] === 0) {
      i++;
    }
  }

  return jumps;
}
