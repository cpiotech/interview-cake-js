/**
 * https://www.interviewcake.com/question/javascript/recursive-string-permutations
 * 
 * Ask questions to clarify the problem: 
 * 1. Is every char in the input string unique ? 
 * -> Yes. We assume every char in the input string is unique.
 * 2. What format is the input ? 
 * -> String
 * 
 * Explain the approach: 
 * 
 * Test with edge cases: 
 * 1. Empty string
 * 
 * Analyze time and space complexity
 * T: O(n * n!) 
 * S: O(n * n!) ?
 */

function stringPermutation(str) {
  const s = new Set();
  if (str.length === 0) return s;
  const generatePermutation = (str, perm) => {
    if (perm.length === str.length) {
      let p = perm.slice(0).join('');
      s.add(p);
      return;
    }
    for (let i = 0; i < str.length; i++) {
      if (perm.indexOf(str[i]) > -1) {
        continue;
      }
      let char = str[i];
      perm.push(char);
      generatePermutation(str, perm);
      perm.pop();
    }
  };
  generatePermutation(str, []);
  return s;
}

// console.log(stringPermutation('abc'));
// console.log(stringPermutation(''));
console.log(stringPermutation('aab'));