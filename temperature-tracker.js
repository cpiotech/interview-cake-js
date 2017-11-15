/**
 * https://www.interviewcake.com/question/javascript/temperature-tracker
 * 
 * To improve the time complexity of getMode, we can store the inserted temp 
 * to a heap which heap property is the max frequency. So we can remove the 
 * first element from heap to get O(1) time. However, we need to cost O(logN)
 * for inserting a new element into heap while in insert(). 
 * 
 * Update: instead of using heap, we can use an array to record frequency of temp
 * and use two variables to keep track of the mod and the frequency of mod. 
 */
function TempTracker() {
  this._max = -Infinity;
  this._min = Infinity;
  this._sum = 0;
  this._size = 0;
  this._map = new Array(110);
  this._map.fill(0);
  this._modCount = 0;
  this._mod = 0;
}

// T: O(1), S: O(1)
TempTracker.prototype.insert = function(temp) {
  this._map[temp] += 1;
  if (this._map[temp] > this._modCount) {
    this._modCount = this._map[temp];
    this._mod = temp;
  }
  this._max = Math.max(this._max, temp);
  this._min = Math.min(this._min, temp);
  this._sum = this._sum + temp;
  this._size += 1;
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

// T: O(1), S: O(1)
TempTracker.prototype.getMode = function() {
  return this._mod;
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