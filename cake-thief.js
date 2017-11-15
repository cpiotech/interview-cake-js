/**
 * https://www.interviewcake.com/question/javascript/cake-thief
 * 
 * Ask questions to clarify the problem: 
 * 
 * Test with edge case: 
 * 1. capacity is 0
 * 2. empty cakeTypes
 * 3. weight and value are 0
 * 4. weight is 0 but value is not 0
 * 
 * Analyze time and space complexity:
 * T: O(N*M) N is the number of capacity and M is the number of cakeTypes.
 * S: O(N)
 */
function maxDuffelBagValue(cakeTypes, capacity) {
  let dp = new Array(capacity + 1);
  dp.fill(0);

  for (let i = 2; i < capacity + 1; i++) {
    let max = 0;
    cakeTypes.forEach(obj => {
      if (cakeTypes.weight === 0 && cakeTypes.value !== 0) {
        return Infinity;
      }
      if (obj.weight <= i) {
        max = Math.max(max, dp[i - obj.weight] + obj.value);
      }
    });
    dp[i] = max;
  }

  return dp[capacity];
}

// let cakeTypes = [
//   {weight: 7, value: 160},
//   {weight: 3, value: 90},
//   {weight: 2, value: 15},
// ];

let capacity = 20;
// console.log(maxDuffelBagValue(cakeTypes, capacity));
let cakeTypes = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15},
  {weight: 0, value: 0}
];
console.log(maxDuffelBagValue(cakeTypes, 0));