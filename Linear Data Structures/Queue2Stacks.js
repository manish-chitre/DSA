var MyQueue = function () {
  this.s1 = new Stack();
  this.s2 = new Stack();
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
  return null;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.empty()) {
    return null;
  } else {
    this.pushToStack2();
  }
  return this.s2.pop();
};

/**
 * @return {number}
 */

MyQueue.prototype.pushToStack2 = function () {
  while (this.s1.top != -1) {
    this.s2.push(this.s1.pop());
  }
};

MyQueue.prototype.peek = function () {
  if (this.s2.top != -1) {
    return this.s2.arr[this.s2.top];
  } else if (!isEmpty) {
    this.pushToStack2();
    return this.s2.arr[this.s2.top];
  }

  return null;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.isEmpty() && this.s2.isEmpty();
};

class Stack {
  constructor() {
    this.arr = new Array();
    this.top = -1;
  }

  push(ele) {
    if (this.top == -1) {
      this.top++;
      this.arr[this.top] = ele;
      console.log(`${ele} is pushed now`);
    } else {
      this.top++;
      this.arr[this.top] = ele;
      console.log(`${ele} is pushed now`);
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return null;
    } else {
      console.log(this.arr.length);
      let ele = this.arr[this.top];
      this.arr.pop();
      console.log("in pop operation:" + ele);
      this.top--;
      return ele;
    }
  }

  isEmpty() {
    if (this.top == -1) {
      return true;
    }
    return false;
  }
}

var obj = new MyQueue();
obj.push(6);
obj.push(7);
obj.push(8);
obj.push(9);
obj.pop();
obj.peek();
obj.empty();
