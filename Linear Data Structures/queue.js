class Node {
  constructor(val, next) {
    this.val = val == undefined ? null : val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  enqueue(ele) {
    let node = new Node(ele);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (this.tail == null) {
      console.log("queue is empty");
    } else {
      let deqeuedEle = this.head.val;
      console.log(`The the dequeued element is :${deqeuedEle}`);
      this.head = this.head.next;
      if (this.head == null) {
        this.tail = null;
      }
    }
  }

  displayQueue() {
    let curr = this.head;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }
}

// let queue = new LinkedList();
// queue.enqueue(12);
// queue.enqueue(14);
// queue.enqueue(19);
// queue.enqueue(10);
// queue.enqueue(11);
// queue.enqueue(13);

// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();

// queue.displayQueue();
//[1,1,0,0] //[0,1,0,1]
// var countStudents = function (students, sandwiches) {
//   let top = 0;
//   let front = 0;
//   let end = students.length - 1;
//   while (top != null) {
//     if (students[front] == sandwiches[top]) {
//       dequeue(students, front, end);
//       pop(sandwiches, top);
//     } else {
//       front += 1;
//       if (front > students.length - 1) {
//         front = front % students.length;
//       }

//       end += 1;
//       if (end > students.length - 1) {
//         end = end % students.length;
//       }
//     }
//   }

//   return students.length;
// };

// function dequeue(students, front, end) {
//   students.splice(front, 1);
//   front += 1;
//   if (end == 0) {
//   }
//   if (front > students.length - 1) {
//     front = front % students.length;
//   }
//   if (end > students.length - 1) {
//     end = end % students.length;
//   }
// }

// function pop(sandwiches, top) {
//   if (top < sandwiches.length) {
//     sandwiches.splice(0, 1);
//     top += 1;
//   }
// }

// countStudents([1, 1, 0, 0], [0, 1, 0, 1]);

class Queue {
  constructor(size) {
    this.array = new Array(size);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  isEmpty() {
    if (this.size == 0) {
      return true;
    }
    return false;
  }

  isFull() {
    if (this.size == this.array.length) {
      return true;
    }
    return false;
  }

  enqueue(val) {
    if (this.isFull()) {
      return false;
    } else {
      this.array[this.rear] = val;
      this.rear++;
      this.rear = this.rear % this.array.length;
      this.size++;
      return true;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return false;
    } else {
      this.front++;
      this.front = this.front % this.array.length;
      this.size--;
      return true;
    }
  }

  display() {
    let i = this.front;
    console.log(`front : ${this.front}`);
    console.log(`rear : ${this.rear}`);
    console.log(`Array is : ${this.array}`);
    do {
      console.log(this.array[i]);
      i = (i + 1) % this.array.length;
    } while (i != this.rear);
  }
}

let q = new Queue(6);
q.enqueue(3);
q.enqueue(90);
q.enqueue(76);
q.enqueue(54);
q.enqueue(35);
q.enqueue(29);

q.dequeue();
q.dequeue();
q.enqueue(89);
q.display();
