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

function maxDuffelBagValueRecursive(cakeTypes, capacity) {
  const helper = (cakeTypes, capacity, index) => {
    if (capacity === 0) {
      return 0;
    }
    let max = 0;
    for (let i = index; i < cakeTypes.length; i++) {
      let c = cakeTypes[i];
      if (c.weight <= capacity && c.weight !== 0) {
        max = Math.max(max, maxDuffelBagValueRecursive(cakeTypes, capacity - c.weight, i) + c.value);
      }
    }
    return max;
  };
  return helper(cakeTypes, capacity, 0);
}

function maxDuffelBagValueDP(cakeTypes, capacity) {
  let dp = new Array(capacity + 1).fill(0);
  for (let i = 1; i < dp.length; i++) {
    let max = 0;
    for (let j = 0; j < cakeTypes.length; j++) {
      let c = cakeTypes[j];
      if (i >= c.weight) {
        max = Math.max(max, dp[i - c.weight] + c.value);
      }
    }
    dp[i] = max;
  }
  return dp[capacity];
}

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
let cakeTypes = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15},
  {weight: 0, value: 0}
];
console.log(maxDuffelBagValueRecursive(cakeTypes, 21));
console.log(maxDuffelBagValueDP(cakeTypes, 20));

console.log(maxDuffelBagValue(cakeTypes, 21));

// console.log(maxDuffelBagValue(cakeTypes, 0));