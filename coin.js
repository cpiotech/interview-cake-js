
/**
 * O(2^n)
 * @param {*} nums 
 * @param {*} target 
 */
function coinChangeRecursive(nums, target) {
  const helper = (nums, target, n) => {
    if (target === 0) {
      return 1;
    }
    if (target < 0) {
      return 0;
    }
    let key = `${nums[n]}-${target}`;
    console.log(key);
    let count = 0;
    for (let i = n; i < nums.length; i++) {
      count += helper(nums, target - nums[i], i);
    }
    return count;
  };
  return helper(nums, target, 0);
}

/**
 * T: O(n * 2)
 * @param {*} nums 
 * @param {*} target 
 */
function coinChangeMemo(nums, target) {
  let map = {};
  const helper = (nums, target, n) => {
    if (target === 0) {
      return 1;
    }
    if (target < 0) {
      return 0;
    }
    let key = `${nums[n]}-${target}`;
    console.log(key);
    if (key in map) {
      console.log('****');
      return map[key];
    }
    let count = 0;
    for (let i = n; i < nums.length; i++) {
      count += helper(nums, target - nums[i], i);
    }
    map[key] = count;
    return map[key];
  };
  return helper(nums, target, 0);
}

/**
 * T: O(n * target)
 * @param {*} nums 
 * @param {*} target 
 */
function coinChangeDP(nums, target) {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    let c = nums[i];
    for (let j = 1; j < dp.length; j++) {
      if (j >= c) {
        dp[j] = dp[j] + dp[j - c];
      }
    }
  }
  return dp[target];
}

console.log(coinChangeRecursive([1, 2, 3], 4));
console.log(coinChangeMemo([1, 2, 3], 4));
console.log(coinChangeDP([1, 2, 3], 4));
