var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.front = 0;
  instance.total = 0;
  _.extend(instance, queueMethods);

  return instance;
};

queueMethods = {};

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


