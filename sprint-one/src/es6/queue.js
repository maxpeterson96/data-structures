class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.front = 0;
    this.total = 0;
  }

  enqueue(value) {
    this.storage[this.total] = value;
    this.total++;
  }

  dequeue() {
    if (this.front < this.total) {
      var memo = this.storage[this.front];
      this.front++;
      return memo;
    }
  }

  size() {
    return this.total - this.front;
  }
}
