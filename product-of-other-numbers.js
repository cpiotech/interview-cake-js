/**
 * https://www.interviewcake.com/question/javascript/product-of-other-numbers
 * 
 * Ask questions to clarify the problem: 
 * 1. How large is the number ? 
 * 2. How many numbers does the array contain ? 
 * 3. Does the array contain zero ? 
 * Note: be careful with the integer overflow
 * 
 * Explain the approach: 
 * First, we get the products of all the integers before each index,
 * then we go backward to get the products of all the intergers after each index.
 * 
 * Test with edge cases: 
 * 1. Empty nums
 * 2. One number & Two numbers
 * 3. Zero number
 * 
 * Analyze time and space complexity
 * T: O(n)
 * S: O(n)
 */

function productOfOtherNumbers(nums) {
  const res = new Array(nums.length);
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = product;
    product = product * nums[i];
  }
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * product;
    product = product * nums[i];
  }
  return res;
}

console.log(productOfOtherNumbers([1, 7, 3, 4]));
console.log(productOfOtherNumbers([]));
console.log(productOfOtherNumbers([1]));
console.log(productOfOtherNumbers([1, 2]));
console.log(productOfOtherNumbers([0, 1, 3, 4]));