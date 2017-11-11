// https://www.interviewcake.com/question/javascript/permutation-palindrome
/**
 * Example: 
 * "civic" => true
 * "ivicc" => true
 * "civil" => false
 * "livci" => false
 * 
 * Clarify the problem: 
 * 1. What's format of the input string ? 
 *    Does it only contain lowercase letters ? 
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
 * Test with edge case: 
 * 1. empty string
 * 2. even number of length aabb, abbb
 * 
 * Analyze time and space complexity: 
 * Time - O(n), we only iterate thorugh each char in the input string once. 
 * Space - O(n), we use set to keep track of the chars, 
 *         the worst case might be each char appears odd number of times.
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