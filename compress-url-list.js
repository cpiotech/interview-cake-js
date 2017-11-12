/**
 * https://www.interviewcake.com/question/javascript/compress-url-list
 */

function Trie() {
  this._obj = {};
}

Trie.prototype.visited = function(str) {
  if (str.length === 0) return false;

  let current = this._obj;
  let visited = true;

  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (!(c in current)) {
      current[c] = {};
    }
    current = current[c];
  }

  if (!('eow' in current)) {
    current['eow'] = true;
    visited = false;
  }
  
  return visited;
}

let t = new Trie();
console.log(t.visited('cat'));
console.log(t.visited('cap'));
console.log(t.visited('cat'));
console.log(t.visited('hello'));
console.log(t.visited(''));
console.log(t.visited(' '));