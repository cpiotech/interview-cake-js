/**
 * https://www.interviewcake.com/question/javascript/find-duplicate-optimize-for-space-beast-mode
 * nums = [2, 3, 1, 3], n = 3
 */
function findDuplicate(nums) {
  // step1: get inside the cycle
  let n = nums.length - 1;
  // the last element which is the head of the list
  let pos = n + 1; 
  for (let i = 0; i < n; i++) {
    pos = nums[pos - 1];
  }
  // step2: find the length of cycle
  let current = pos;
  let next = nums[current - 1];
  let count = 1;
  while (current !== next) {
    next = nums[next - 1];
    count += 1;
  }
  // step3: find the first node of the cycle
  // first - at position n + 1
  // second - ahead of position n + 1 as many as the length of cycle
  let first = n + 1;
  let second = n + 1;
  for (let i = 0; i < count; i++) {
    second = nums[second - 1];
  }
  while (first !== second) {
    first = nums[first - 1];
    second = nums[second - 1];
  }
  return first;
}

console.log(findDuplicate([2, 3, 1, 3]));