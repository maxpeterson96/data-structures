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
  if (typeof contained === 'boolean') {
    return contained;
  }
  return contained === 0;






  // if (this.value > value) { // go to left ?
  //   if (!this.left) {  // check if left is null
  //     // check if value of left node is value

  //       // if yes, return
  //   }
  //   this.left.contains(value);
  // } else if (this.value < value) {
  //   if (!this.right) {
  //     var newNode = BinarySearchTree(value);
  //     this.right = newNode;
  //   }
  //   this.right.insert(value);
  // }
};
//
// bst prototype depthFirstLog accepts callback
BinarySearchTree.prototype.depthFirstLog = function(callback) {

  // var traverse = function(node) {
  //   callback(node);
  //   if
  // }
  // inner function, pass in node
    // pass node into callback
    // if node.left is not null
      // traverse into left
    // if node.right is not null
      // traverse into right
  callback(this.value);

  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
  return;


  // pass this into callback
  // if left exists
    // lef.depthFirstLog
  // if right exists
    // right deptth
};



/*
 * Complexity: What is the time complexity of the above functions?
 */




























//   if (!this.left) {
//     callback(this);
//     this.left = newNode;
//   }
//   this.left.depthFirstLog(value);
//   if (!this.right) {
//     callback(this);
//     this.right = newNode;
//   }
//   this.right.insert(value);
// }