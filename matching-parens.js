/**
 * Using counter. 
 * T: O(n)
 * S: O(1)
 * @param {*} sentence 
 * @param {*} openingParenIndex 
 */
function getClosingParen(sentence, openingParenIndex) {
  let count = 0;
  for (let i = openingParenIndex; i < sentence.length; i++) {
    if (sentence[i] === "(") {
      count += 1;
    } else if (sentence[i] === ")") {
      count -= 1;
    }
    if (count === 0) {
      return i;
    }
  }
  return -1;
}

console.log(getClosingParen('Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.', 10));