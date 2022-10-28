

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // put v in this storage at index
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // return storage at index
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // iterate over storage using each, pass in function to remove index
  this._storage.set(index, undefined);

  // yessir cheers bruv
  // i think maybe we can handle collisions in insert
  // before setting, check if undefined, set to index, else recalculate index until undefiend is found?
  // im not sure, bc like i said before when i was running the hash it was alwaus returning 0
  // we got this
  // great job today ill upload to git have a goodn night!

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


