var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var total = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[total] = value;
    total++;
  };

  someInstance.dequeue = function() {
    if (front < total) {
      var memo = storage[front];
      front++;
      return memo;
    }
  };

  someInstance.size = function() {
    return total - front;
  };

  return someInstance;
};
