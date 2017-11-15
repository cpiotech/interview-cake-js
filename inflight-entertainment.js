/**
 * https://www.interviewcake.com/question/javascript/inflight-entertainment
 */

function inflightEntertainment(flightLength, movieLengths) {
  let m = new Map();
  for (let i = 0; i < movieLengths.length; i++) {
    let movie = movieLengths[i];
    if (m.has(flightLength - movie)) {
      return true;
    } else {
      m.set(movie, i);
    }
  }
  return false;
}