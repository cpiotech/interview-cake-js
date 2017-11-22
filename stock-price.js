/**
 * https://www.interviewcake.com/question/javascript/stock-price
 * 
 * Ask question to clarify the problem: 
 * 1. What's the profit if we don't sell any stock ? 0
 * 2. Is it possible that array contains negative integer ? No
 * 
 * Explain the approach: 
 * Iterate through the array to track the min value & max difference so far. 
 * 
 * Test with edge cases: 
 * 1. Empty input array
 * 
 * Analyze time & space complexity: 
 * T: O(n)
 * S: O(1)
 */

function getMaxProfit(nums) {
  if (!nums || nums.length === 0) return 0;
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i] - min);
  }
  return max;
}

console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));