// https://www.interviewcake.com/question/javascript/merge-sorted-arrays
// Time: O(n), n = number of item in a1 + number of item in a2
// Space: O(n)
function mergeSortedArray(a1, a2) {
  let result = [];
  let l1 = a1.length, l2 = a2.length;
  let i = 0, j = 0;
  while (i < l1 && j < l2) {
    if (a1[i] <= a2[j]) {
      result.push(a1[i]);
      i += 1;
    } else {
      result.push(a2[j]);
      j += 1;
    }
  }
  while (i < l1) {
    result.push(a1[i]);
    i += 1;
  }
  while (j < l2) {
    result.push(a2[j]);
    j += 1;
  }
  return result;
}

let result = mergeSortedArray([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]);
console.log(result);