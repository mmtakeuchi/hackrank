/*
Example
arr = [7,1,3,2,4,5,6]

Perform the following steps:
i   arr                         swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]

It took 5 swaps to sort the array.
*/

/*
Input:
arr = [4,3,1,2]

Output:
3

Explanation:
Given array arr: [4,3,1,2]
After swapping (0,2) we get arr: [1,3,4,2]
After swapping (1,2) we get arr: [1,4,3,2] 
After swapping (1,3) we get arr: [1,2,3,4] 
So, we need a minimum of 3 swaps to sort the array in ascending order.
*/

/*
Input:
arr = [2,3,4,1,5]

Output:
3
*/

/*
Input:
arr = [1,3,5,2,4,6,7]

Output: 
3
*/

function minimumSwaps(arr) {
  let swaps = 0;

  for (let i = 0; i < arr.length; i++) {
    // set current index as minimum
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }

    if (arr[min] !== arr[i]) {
      swaps += 1;
    }

    arr[i] = arr[min];
    arr[min] = temp;
  }

  return swaps;
}
