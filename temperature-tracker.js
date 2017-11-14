/**
 * https://www.interviewcake.com/question/javascript/temperature-tracker
 * 
 * To improve the time complexity of getMode, we can store the inserted temp 
 * to a heap which heap property is the max frequency. So we can remove the 
 * first element from heap to get O(1) time. However, we need to cost O(logN)
 * for inserting a new element into heap while in insert(). 
 */
function TempTracker() {
  this._max = -Infinity;
  this._min = Infinity;
  this._sum = 0;
  this._size = 0;
  this._map = new Map();
}

// T: O(1), S: O(N)
TempTracker.prototype.insert = function(temp) {
  this._max = Math.max(this._max, temp);
  this._min = Math.min(this._min, temp);
  this._sum = this._sum + temp;
  this._size += 1;

  if (this._map.has(temp)) {
    let f = this._map.get(temp);
    this._map.set(temp, f + 1);
  } else {
    this._map.set(temp, 1);
  }

  return temp;
}

// T: O(1), S: O(1)
TempTracker.prototype.getMax = function() {
  return this._max;
}

// T: O(1), S: O(1)
TempTracker.prototype.getMin = function() {
  return this._min;
}

// T: O(1), S: O(1)
TempTracker.prototype.getMean = function() {
  return parseInt(this._sum / this._size);
}

// T: O(N), S: O(N)
TempTracker.prototype.getMode = function() {
  let mode = {
    'temp': null,
    'time': 0
  };
  this._map.forEach((val, key) => {
    if (val > mode['time']) {
      mode = {'temp': key, 'time': val};
    }
  });
  return mode['temp'];
}

let t = new TempTracker();
t.insert(1);
t.insert(3);
t.insert(6);
t.insert(3);
t.insert(1);
t.insert(3);

console.log(t.getMax());
console.log(t.getMin());
console.log(t.getMean());
console.log(t.getMode());