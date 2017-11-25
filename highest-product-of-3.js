/**
 * https://www.interviewcake.com/question/javascript/highest-product-of-3
 * 
 * Ask questions to clarify the problem: 
 * 1. Does the array contain negative integer ? Yes
 * 2. Is it a sorted array ? No
 * 
 * Explain the approach:
 * 1. Sort the array and multiply the three largest integer. O(nlogn)
 * 2. Keep track of the twoMax & twoMin so far, so we can have the 
 *    maxThree by twoMax * current or twoMin * current ( current is negative ).
 *    Since we need to keep track of twoMax & twoMin, we also need to
 *    track of the oneMax & oneMin. 
 * 
 * Test with edge cases: 
 * 1. Empty array
 * 2. Array length is less than 3
 * 3. Array contains negative integer
 * 4. Array contains zero
 * 
 * Analyze the time & space complexity: 
 * T: O(n)
 * S: O(1)
 * 
 * A greedy algorithm iterates through the problem space taking the optimal
 * solution "so far", until it reaches the end. The greedy approach is only
 * optimal if the problem has "optimal substrucutre", which means stitching
 * together optimal solutions to subproblems yields an optimal solution.
 */

function highestProductOf3(nums) { 
  if (!nums || nums.length < 3) return null;
  
  let oneMax = Math.max(nums[0], nums[1]);
  let oneMin = Math.min(nums[0], nums[1]);
  let twoMax = Math.max(nums[1] * oneMax, nums[1] * oneMin);
  let twoMin = Math.min(nums[1] * oneMax, nums[1] * oneMin);
  let threeMax = -Infinity;

  for (let i = 2; i < nums.length; i++) {
    let threeTmp = Math.max(twoMax * nums[i], twoMin * nums[i]);
    threeMax = Math.max(threeMax, threeTmp);

    let twoMaxTmp = Math.max(oneMax * nums[i], oneMin * nums[i]);
    let twoMinTmp = Math.min(oneMax * nums[i], oneMin * nums[i]);
    twoMax = Math.max(twoMax, twoMaxTmp);
    twoMin = Math.max(twoMin, twoMinTmp);

    oneMax = Math.max(oneMax, nums[i]);
    oneMin = Math.min(oneMin, nums[i]);
  }

  return threeMax;
}

console.log(highestProductOf3([1, 3, 5, -10, 8, 9]));
console.log(highestProductOf3([0, 1, -1, -9, 0, 10]));