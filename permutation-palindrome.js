/**
 * https://www.interviewcake.com/question/javascript/permutation-palindrome
 * 
 * Example: 
 * "civic" => true
 * "ivicc" => true
 * "civil" => false
 * "livci" => false
 * 
 * Ask questions to clarify the problem: 
 * 1. What's format of the input string ? 
 * 2. Does it only contain lowercase letters ? 
 * 
 * Explain your approach: 
 * 1. Check every permutation of the input string to see if it is a palindrome.
 *    However, this costs O(n!n) time overall. 
 * 2. civic => odd number of length => one chars has odd number of times
 *    abba => even number of length => all chars has even number of times
 *    We need a data structure to store the times of the char => HashMap 
 * 3. We just need to make usre no more than one of the char appears an odd number of times.
 *    => Set() to count how many char appears an odd numbers of times. 
 *    We iterate through each char in the input string,
 *    keeping track of the chars we've seen an odd number of times using a set. 
 * 
 * Test with edge cases: 
 * 1. Empty string
 * 2. Even number of length. e.g. aabb
 * 
 * Analyze time and space complexity: 
 * T : O(n). We only iterate thorugh each char in the input string once. 
 * S : O(1). 26 letters 
 * 
 */

function hasPalindromePermutation(str) {
  let set = new Set();
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (set.has(char)) {
      set.delete(char);
    } else {
      set.add(char);
    }
  }
  return (set.size <= 1);
}