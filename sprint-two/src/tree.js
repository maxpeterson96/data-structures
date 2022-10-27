var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.addChild = treeMethods.addChild
  newTree.contains = treeMethods.contains

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  // make copy of head

  var search = function(node) {

    if (node.value === target) {
      return true;
    } else {
      node.children.forEach(function(child) {
        return false || search(child);
      })
      //per child
        // return false or search child
    }
    // return true
  // for each item in array
    // contains(item.children)
  }
  return search(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
