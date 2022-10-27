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
  var contained = this.value === target;
  if (!contained && this.children.length > 0) {
    this.children.forEach(function(child) {
      contained = contained || child.contains(target);
      if (contained) {
        return contained;
      }
    })
  }
  return contained;

};

// treeMethods.contains = function(target) {
//   var found = false;
//   var search = function(node) {
//     // if found
//     if (node.value === target) {
//       // return true
//       found = true;
//       return;
//     }
//     // for each item in array
//     node.children.forEach(function(child) {
//       // recurse pass in child
//       search(child);
//     })
//   }
//   search(this);
//   return found;
// };


/*
 * Complexity: What is the time complexity of the above functions?
 */


// var search = function(node) {

//   if (node.value === target) {
//     return true;
//   } else {
//     node.children.forEach(function(child) {
//       return false || search(child);
//     })
//     //per child
//       // return false or search child
//   }
//   // return true
// // for each item in array
//   // contains(item.children)
// }
// return search(this);