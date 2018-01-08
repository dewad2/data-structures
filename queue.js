function Queue() {
  var myQueue = [];

  this.enqueue = function(element) {
    var tail = myQueue.length - 1;
     myQueue[tail + 1] = element;
  }
  this.dequeue = function() {
    var head = myQueue[0];
    var tempQueue = [];
    for (var i = 0; i < myQueue.length -1; i++) {
      tempQueue[i] = myQueue[i+1];
    }
    myQueue = tempQueue;
    return head;

  }
  this.size = function() {
    return myQueue.length;
  }

}

