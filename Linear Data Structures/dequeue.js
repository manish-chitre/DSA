class Dequeue {
  constructor(size) {
    this.front = -1;
    this.rear = -1;
    this.arr = new Array(size);
    this.size = 0;
  }

  addFront(ele) {
    if (this.isFull()) {
      console.log("queue is full");
      return;
    } else {
      if (this.front > 0) {
        this.front--;
        this.arr[this.front] = ele;
        this.size++;
      } else if (this.front <= 0) {
        console.log(`cannot add since front is ${this.front}`);
      }
    }
  }

  removeFront() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    } else {
      this.front++;
      let remEle = this.arr[this.front];
      delete this.arr[this.front];
      console.log(`element removed from front is : ${remEle}`);
      this.size--;
    }
  }

  addRear(ele) {
    if (this.isFull()) {
      console.log("queue is full");
      return;
    } else {
      this.rear++;
      this.arr[this.rear] = ele;
      console.log(`${ele} has been added at rear position : ${this.rear}`);
      this.size++;
    }
  }

  removeRear() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    } else {
      let remEle = this.arr[this.rear];
      console.log(`removed element from rear is : ${remEle}`);
      delete this.arr[this.rear];
      this.rear--;
      this.size--;
    }
  }

  isFull() {
    if (this.size == this.arr.length) {
      return true;
    }
    return false;
  }

  isEmpty() {
    if (this.size == 0) {
      return true;
    }
    return false;
  }

  display() {
    if (this.isEmpty()) {
      console.log("queue is empty nothing to display");
      return;
    }

    let i = this.front;
    while (i <= this.rear) {
      console.log(this.arr[i]);
      i++;
    }
  }
}

let dequeue = new Dequeue(6);
dequeue.addFront(8);
dequeue.addFront(18);
dequeue.addRear(67);
dequeue.addRear(78);
dequeue.addRear(90);
dequeue.removeFront();
dequeue.removeRear();
dequeue.removeRear();
dequeue.removeRear();

dequeue.display();
