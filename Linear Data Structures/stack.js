class Node {
  constructor(val, next) {
    this.val = val == undefined ? null : val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.top = null;
  }

  push(ele) {
    let node = new Node(ele);
    if (this.head == null) {
      this.head = node;
      this.top = node;
    } else {
      node.next = this.head;
      this.head = node;
      this.top = this.head;
    }
  }

  displayElements(ele) {
    if (this.top == null) {
      console.log("Stack is empty");
    } else {
      let curr = this.head;
      while (curr) {
        console.log(curr);
        curr = curr.next;
      }
    }
  }

  pop() {
    if (this.top == null) {
      console.log("stack is empty");
    } else {
      let poppedEle = this.head;
      this.head = this.head.next;
      this.top = this.head;
      return poppedEle;
    }
  }
}

let stack = new LinkedList();
stack.push(23);
stack.push(78);
stack.push(89);
stack.push(34);
stack.push(21);
stack.push(19);

stack.pop();
stack.pop();
stack.pop();

stack.displayElements();
