

// Instantiate a new graph
var Graph = function() {
  // initialize an object for storing node
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create node class
  var newNode = {
    // inititialize value
    value: node,
     // create empty object
    connections: {}
  };

  // add node to graph object
  this.nodes[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // return check if this node is not undefined
  return this.nodes[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
// access object with value node in graph obejct and iterate through objects connections object
  for (key in this.nodes[node].connections) {
    // delete connections object that points to node to be deleted
    delete this.nodes[node].connections[key].connections[node];
  }
// delete object with value node from graph object
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // return true if fromNode's connections contains the key of toNode
  return this.nodes[fromNode].connections[toNode] !== undefined;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.hasEdge(fromNode, toNode)) {
    // add fromNode to toNode connections
    this.nodes[fromNode].connections[toNode] = this.nodes[toNode];
     // add toNode to fromNode connections
    this.nodes[toNode].connections[fromNode] = this.nodes[fromNode];
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    // delete fromNode to toNode connections
    delete this.nodes[fromNode].connections[toNode];
    // delete toNode to fromNode connections
    delete this.nodes[toNode].connections[fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate over all keys in object
  for (key in this.nodes) {
    cb(key);
  }
    // run callback passing in each node
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


