/*
Example
s = 'abcac'
n - 10

The substring we consider is , the first 10 characters of the infinite string. 

return => 4
*/

/*
s = 'aba'
n = 10

=> 7
*/

/*
s = "a"
n = 1000000

=> 1000000
*/

function repeatedString(s, n) {
  // Get number of A's in original given string
  let aNum = s.split('a').length - 1;
  // Calculate number of given strings that fit into n
  let numOfStrings = Math.floor(n / s.length);
  // Get Total Number A's by multiplying the number of strings that fit by the number of A's in original string
  let totalAs = aNum * numOfStrings;
  // Now get the remainder string that couldnt fit
  let remainder = (n % s.length) / s.length;
  let leftOverStringLength = Math.floor(remainder * s.length);
  // Get the left over substring
  let leftOverString = s.substring(0, leftOverStringLength);
  // Add any left over A's to our total A's
  totalAs += leftOverString.split('a').length - 1;

  return totalAs;
}
