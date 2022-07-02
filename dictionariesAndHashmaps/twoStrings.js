// Given two strings, determine if they share a common substring. A substring may be as small as one character.

/*
Input:
s1 = 'and'
s2 = 'art'

Output:
'YES'
Theese share the common substring a.
*/

/*
Input:
s1 = 'be'
s2 = 'cat'

Output:
'NO'
These do not share a substring.
*/

function twoStrings(s1, s2) {
  let map = {};

  for (let i = 0; i < s1.length; i++) {
    map[s1[i]] = true;
  }

  for (let j = 0; j < s2.length; j++) {
    if (map[s2[j]]) {
      return 'YES';
    }
  }

  return 'NO';
}
