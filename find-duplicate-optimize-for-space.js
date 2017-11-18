/**
 * https://www.interviewcake.com/question/javascript/find-duplicate-optimize-for-space
 * 
 * Find the number of integers in our input array which lies within the range 1...2/n,
 * if it the number is greater than 2/n, we know the possible intergers lies within 
 * the range 1...2/n, otherwise the possbile intergers lies within 2/n + 1...n
 * 
 * [1, 2, 2, 3, 4], n = 4
 * lower range 1 ~ 2
 * upper range 3 ~ 4
 * number of interger lies within 1 ~ 2 : 3
 * number of interger lies within 3 ~ 4 : 2
 * possible interger must lies within 1 ~ 2 because 3 > n / 2
 * 
 * Analyze time and space complexity: 
 * T: O(nlogn)
 * S: O(1)
 */

function findRepeat(array) {
  let start = 1;
  let end = array.length - 1;

  while (start < end) {
    let m = parseInt((end - start) / 2) + start;
    let leftStart = start;
    let leftEnd = m;
    let rightStart = m + 1;
    let rightEnd = end;
    let left = 0;
    for (let n of array) {
      if (n >= leftStart && n <= leftEnd) left += 1;
    }
    if (left > m) {
      start = leftStart;
      end = leftEnd
    } else {
      start = rightStart;
      end = rightEnd;
    }
  }
  return end;
}

console.log(findRepeat([1, 2, 2, 2, 3, 3, 4, 5, 7, 8, 9]));