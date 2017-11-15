/**
 * https://www.interviewcake.com/question/javascript/find-rotation-point
 */
function findRotationPoint(words) {
  const first = words[0];
  let start = 0;
  let end = words.length - 1;

  while (start < end) {
    let current = start + parseInt((end - start) / 2);
    if (words[current] >= first) {
      start = current;
    } else {
      end = current;
    }
    if (start + 1 === end) {
      break;
    }
  }
  
  return end;
}