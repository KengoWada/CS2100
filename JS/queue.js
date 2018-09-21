class Queue {
    /*
      Create a queue.
     */
    constructor () {
        this.store = {};
        this.first = 0;
        this.last = 0;
    }
}
 
/*
  Add item to end of queue.
 */
Queue.prototype.enqueue = function (data) {
    this.store[this.last] = data;
    this.last++;
};
 
/*
 Remove item from queue and return its data.
 */
Queue.prototype.dequeue = function () {
    if (this.front === this.end) return null;
 
    const data = this.store[this.first];
    delete this.store[this.first];
    this.first++;
    return data;
};
 
/*
 Return current size of queue.
 */
Queue.prototype.size = function () {
    return this.last - this.first;
};
 
/*
 Return item at front of queue without dequeueing.
 */
Queue.prototype.firstElement = function () {
    if (this.size() === 0) return null;
    return this.store[this.first];
};

/*
  Returns all items in the queue
*/  
Queue.prototype.allElements = function(){
  if (this.size() === 0){
    return null;
  }else{
    let newStore = [];
    for (let i = 0; i != this.size(); i++){
      newStore.push(this.store[i])
      
    }
  }return newStore
}