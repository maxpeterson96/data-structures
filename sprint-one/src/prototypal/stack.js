var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.top = 0;

  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.top] = value;
    this.top++;
  },

  pop: function() {
    if (this.top > 0) {
      var memo = this.storage[this.top-1];
      delete this.storage[this.top-1];
      this.top--;
      return memo;
    }
  },

  size: function() {
    return this.top;
  }
};


