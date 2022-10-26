var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    top: 0,
    push: stackMethods.push,
    pop: stackMethods.pop,
    size: stackMethods.size
  }
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

stackMethods.pop = function() {
  if (this.top > 0) {
    var memo = this.storage[this.top-1];
    delete this.storage[this.top-1];
    this.top--;
    return memo;
  }
};

stackMethods.size = function() {
  return this.top;
};


// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var someInstance = {};
// };

// var stackMethods = {};