var BinarySearchTree = function(value) {
  // new tree object pass in call create BST.prototype
  var newBST = Object.create(BinarySearchTree.prototype);

  // declare left right and value properties
  newBST.left = null;
  newBST.right = null;

  newBST.value = value;

  return newBST;
};

// bst prototype insert accepts value
BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (!this.left) {
      var newNode = BinarySearchTree(value);
      this.left = newNode;
    }
    this.left.insert(value);
  } else if (this.value < value) {
    if (!this.right) {
      var newNode = BinarySearchTree(value);
      this.right = newNode;
    }
    this.right.insert(value);
  }
};

// bst prototype contains accepts value
BinarySearchTree.prototype.contains = function(value) {
  var contained = this.value - value;
  if (contained > 0 && this.left) {
    contained = false || this.left.contains(value);
  }
  if (contained < 0 && this.right) {
    contained = false || this.right.contains(value);
  }
  return typeof contained === 'boolean' ? contained : contained === 0;

};
//
// bst prototype depthFirstLog accepts callback
BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);

  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
  return;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



