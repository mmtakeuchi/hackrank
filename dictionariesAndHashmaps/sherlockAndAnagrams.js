// Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

/* 
Example:
s = mom
anagrammatic pairs: [m,m], [mo,om] at positions [0,2], [0,1], [1,2] respectively.
*/

/*
Input:
abba
abcd

Output:
4
0

Explanation:
[a,a], [ab,ba], [b,b] and [abb, bba] at positions [0,3], [[0,1], [2,3]], [1,2], and [[0,1,2], [1,2,3]]
*/

/*
Input:
ifailuhkqq
kkkk

Output: 
3
10
*/

/*
Input:
cdcd

Output:
5
*/

/*
Reference: 
https://www.freecodecamp.org/news/how-to-solve-the-sherlock-and-anagrams-coding-challenge-in-javascript-a80baa908637/
*/

function sherlockAndAnagrams(s) {
  const duplicatesCount = s
    .split('')
    .filter((v, i) => s.indexOf(v) !== i).length;

  if (!duplicatesCount) return 0;
  let anagramsCount = 0;

  const arr = getAllSubstrings(s);

  for (let i = 0; i < arr.length; i++) {
    anagramsCount += countAnagrams(i, arr);
  }

  return anagramsCount;
}

function getAllSubstrings(str) {
  let i,
    j,
    result = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

function isAnagram(str1, str2) {
  const hist = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (hist[char]) {
      hist[char]++;
    } else {
      hist[char] = 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    const char = str2[j];
    if (hist[char]) {
      hist[char]--;
    } else {
      return false;
    }
  }

  return true;
}

function countAnagrams(currentIndex, arr) {
  const currentElement = arr[currentIndex];
  const arrRest = arr.slice(currentIndex + 1);
  let counter = 0;

  for (let i = 0; i < arrRest.length; i++) {
    if (
      currentElement.length === arrRest[i].length &&
      isAnagram(currentElement, arrRest[i])
    ) {
      counter++;
    }
  }

  return counter;
}
