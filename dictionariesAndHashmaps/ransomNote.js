// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

/*
Input:
[give, me, one, grand, today, night]
[give, one, grand, today]

Output:
Yes
*/

/*
Input:
[two, times, three, is, not, four]
[two, times, two, is, four]

Output:
No
*/

/*
Input:
ive got a lovely bunch of coconuts
ive got some coconuts

Output:
No
*/

function checkMagazine(magazine, note) {
  // Write your code here
  let map = {};
  let result = 'NO';

  for (let i = 0; i < note.length; i++) {
    if (map[note[i]] === undefined) {
      map[note[i]] = 1;
    } else {
      map[note[i]] += 1;
    }
  }

  for (let j = 0; j < magazine.length; j++) {
    if (map[magazine[j]] !== undefined) {
      map[magazine[j]] -= 1;
      if (map[magazine[j]] === 0) {
        delete map[magazine[j]];
      }
    }
  }

  console.log(Object.values(map).length === 0 ? 'Yes' : 'No');
}
