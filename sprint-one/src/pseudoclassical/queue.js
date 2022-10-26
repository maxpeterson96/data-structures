var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {},
  this.front = 0,
  this.total = 0
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.total] = value;
  this.total++;
};

Queue.prototype.dequeue = function() {
  if (this.front < this.total) {
    var memo = this.storage[this.front];
    this.front++;
    return memo;
  }
};

Queue.prototype.size = function() {
  return this.total - this.front;
};
