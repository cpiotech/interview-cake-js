// https://www.interviewcake.com/question/javascript/shuffle

function shuffle(nums) {
  if (nums.length <= 1) return;
  for (let i = 0; i < nums.length - 1; i++) {
    let random = getRandomInt(i + 1, nums.length);
    let tmp = nums[i];
    nums[i] = nums[random];
    nums[random] = tmp;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let nums = [1, 3, 4, 5];
console.log(nums);
shuffle(nums)
console.log(nums);