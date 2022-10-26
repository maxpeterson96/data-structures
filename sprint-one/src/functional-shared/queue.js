var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    front: 0,
    total: 0,
    enqueue: queueMethods.enqueue,
    dequeue: queueMethods.dequeue,
    size: queueMethods.size
  }
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.total] = value;
  this.total++;
};

queueMethods.dequeue = function() {
  if (this.front < this.total) {
    var memo = this.storage[this.front];
    this.front++;
    return memo;
  }
};

queueMethods.size = function() {
  return this.total - this.front;
};


