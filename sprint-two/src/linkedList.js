var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // initialize new node, pass in value
    var newNode = Node(value);
    // set list.tail.next equal to newNode
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      // set list.tail equal to newNode
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    let temp = list.head;
    list.head = list.head.next;
    return temp.value;

  };

  list.contains = function(target) {
    let current = list.head;
    while (current.value !== target && current.next) {
      current = current.next
    }
    return current.value === target
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
