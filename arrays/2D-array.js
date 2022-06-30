/*
Given a 6 x 6 2D Array, arr:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0 

An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representaion:
 a b c
   d 
 e f g

There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6 x 6.
*/

/*
Example:
arr = 
-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0

The 16 horusglass sums are:
-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18

The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2:
 0 4 3
  1
 8 6 6
*/

/*
Sample input:
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Sample Output:
19

The hourglass with the maximum sum (19) is:
 2 4 4
  2
 1 2 4
*/

function hourglassSum(arr) {
  // Write your code here
  let maxSum;

  // max 4 hourglasses on each row and col
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] + // 1st row
        arr[i + 1][j + 1] + // 2nd row
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2]; // 3rd row

      if (maxSum === undefined || maxSum < sum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
}
