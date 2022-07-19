// Queues

function Queue() {
  const collection = [];
  // display all the data in queue
  this.print = function () {
    console.log(collection);
  };
  // add new items to queue
  this.enqueue = function (element) {
    collection.push(element);
  };
  // remove items from queue
  this.dequeue = function () {
    return collection.shift();
  };
  // show front element in queue
  this.front = function () {
    return collection[0];
  };
  // return size of queue
  this.size = function () {
    return collection.length;
  };
  // check if queue is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}
var queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.print();
queue.dequeue();
queue.print();