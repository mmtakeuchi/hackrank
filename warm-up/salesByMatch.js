// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example Input
// n = 7
// ar = [1,2,1,2,1,3,2]

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Example Output
// 2

// Sample Input
// n = 9
// ar = [10,20,20,10,10,30,50,10,20]

// Sample Output
// 3

function sockMerchant(n, ar) {
  // Write your code here
  let map = {};
  let pairs = 0;

  for (let i = 0; i < n; i++) {
    if (map[ar[i]] === undefined) {
      map[ar[i]] = 1;
    } else {
      map[ar[i]] += 1;
    }
  }

  Object.values(map).forEach((item) => {
    pairs += Math.floor(item / 2);
  });

  return pairs;
}
