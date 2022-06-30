/*
Example
q = [1,2,3,5,4,6,7,8]
If person 5 bribes person 4, the queue will look like this: [1,2,3,5,4,6,7,8]. Only 1 bribe is required. Print 1.

q = [4,1,2,3]
Person 4 had to bribe 3 people to get to the current position. Print Too chaotic.
*/

function minimumBribes(q) {
  // Write your code here
  let bribes = 0;
  let chaotic = false;

  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) {
      chaotic = true;
    }

    for (let j = q[i] - 2; j < i; j++) {
      if (q[j] > q[i]) {
        bribes += 1;
      }
    }
  }

  if (chaotic) {
    console.log('Too chaotic');
  } else {
    console.log(bribes);
  }
}
