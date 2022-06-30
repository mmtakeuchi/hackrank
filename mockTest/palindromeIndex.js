function palindromeIndex(s) {
  // Write your code here
  let idx = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      // accounting for letters at the beginning
      let str1 = s.slice(0, i) + s.slice(i + 1);

      // accounting for letters at the end
      let str2 = s.slice(0, s.length - 1 - i) + s.slice(s.length - 1 - i + 1);

      if (str1 === str1.split('').reverse().join('')) {
        idx = i;
      } else if (str2 === str2.split('').reverse().join('')) {
        idx = s.length - 1 - i;
      }
      break;
    }
  }

  return idx;
}
