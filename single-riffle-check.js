/**
 * https://www.interviewcake.com/question/javascript/single-riffle-check
 * 
 * Ask questions to clarify the problem:
 * 1. What format is the input ? 
 * 2. 
 * 
 * Explain the approach: 
 * We iterate through the `deck` to see if each card could have come
 * from one of the two halfs. 
 * 
 * Test with edge cases: 
 * 
 * Analyze time and space complexity: 
 * 1. T: O(n*n), S: O(n*n)
 * 2. T: O(n), S: O(n)
 * 3. T: O(n), S: O(1)
 */

function singleRiffleCheck(deck, h1, h2) {
  // base case
  if (deck.length === 0) {
    return true;
  }
  if (h1.length && h1[0] === deck[0]) {
    singleRiffleCheck(deck.slice(1), h1.slice(1), h2);
  } else if (h2.length && h2[0] === deck[0]) {
    singleRiffleCheck(deck.slice(1), h1, h2.slice(1));
  } else {
    return false;
  }
}

function singleRiffleCheck2(deck, deckIndex, h1, h1Index, h2, h2Index) {
  deckIndex = (typeof deckIndex === 'undefined') ? 0 : deckIndex;
  h1Index = (typeof h1Index === 'undefined') ? 0 : h1Index;
  h2Index = (typeof h2Index === 'undefined') ? 0 : h2Index;
  // base case
  if (deckIndex === deckIndex.length) {
    return true;
  }
  if ((h1Index < h1.length) && h1[h1Index] === deck[deckIndex]) {
    h1Index += 1;
  } else if ((h2Index < h2.length) && h2[h2Index] === deck[deckIndex]) {
    h2Index += 1;
  } else {
    return false;
  }
  deckIndex += 1;
  return singleRiffleCheck2(deck, deckIndex, h1, h1Index, h2, h2Index);
}

function singleRiffleCheck3(deck, h1, h2) {
  let h1Index = 0;
  let h2Index = 0;
  for (let i = 0; i < deck.length; i++) {
    let c = deck[i];
    if ((h1Index < h1.length) && h1[h1Index] === c) {
      h1Index += 1;
    } else if ((h2Index < h2.length) && h2[h2Index] === c) {
      h2Index += 1;
    } else {
      return false;
    }
  }
  return true;
}