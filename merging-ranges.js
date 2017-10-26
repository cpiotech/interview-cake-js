// https://www.interviewcake.com/question/javascript/merging-ranges

function mergingRanges(arr) {
  if (arr.length <= 1) return arr;
  // sorted by startTime
  arr.sort(function(a, b) {
    return a.startTime - b.startTime;
  });

  let merged = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let lastMerged = merged[merged.length - 1];

    if (lastMerged.endTime >= curr.startTime) {
      lastMerged.endTime = Math.max(lastMerged.endTime, curr.endTime);
    } else {
      merged.push(curr);
    }
  }

  return merged;
}

const data = [
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 5},
  {startTime: 4, endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9, endTime: 10},
]

console.log(mergingRanges(data));