class Node {
  constructor(value) {
    this.value = value === undefined ? 0 : value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  AddElement(ele) {
    let node = new Node(ele);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  insertAtLast(ele) {
    let node = new Node(ele);

    if (this.head == null) {
      this.head = node;
      return;
    } else {
      let currentNode = this.head;
      let previousNode = null;
      while (currentNode) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = node;
      return;
    }
  }

  insertAtPosition(ele, pos) {
    let count = 0;
    let node = new Node(ele);
    if (pos == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let currentNode = this.head;
      let previous = null;
      while (count < pos) {
        previous = currentNode;
        currentNode = currentNode.next;
        count++;
        if (currentNode == null && count < pos) {
          console.log("invalid position");
          return;
        }
      }
      node.next = currentNode;
      previous.next = node;
    }
    this.size++;
  }

  deleteFromBeginning() {
    if (!this.head) {
      console.log("linked list is empty");
      return;
    }

    this.head = this.head.next;
    this.size--;
  }

  deleteAtEnd() {
    let currentNode = this.head;
    let previous = null;
    while (currentNode.next) {
      previous = currentNode;
      currentNode = currentNode.next;
    }
    previous.next = null;
    this.size--;
  }

  deleteAtSpecificNode(pos) {
    if (pos == 0) {
      this.deleteFromBeginning();
    } else {
      let count = 0;
      let currentNode = this.head;
      let previous = null;
      while (count < pos) {
        previous = currentNode;
        currentNode = currentNode.next;
        count++;

        if (count < pos && currentNode == null) {
          console.log("invalid position");
          return;
        }
      }
      previous.next = currentNode.next;
      this.size--;
    }
  }

  searchElement(ele) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == ele) {
        console.log(`${currentNode.value} is found.`);
        return;
      }
      currentNode = currentNode.next;
    }
    console.log(`element is not found.`);
    return;
  }

  accElementAtPos(pos) {
    let currentNode = null;
    if (pos == 0) {
      console.log(`${this.head.value} is the element at position ${pos}`);
      return;
    } else {
      currentNode = this.head;
      let count = 0;
      while (count < pos) {
        currentNode = currentNode.next;
        count++;

        if (count < pos && currentNode == null) {
          console.log("invalid position");
          return;
        }
      }
      console.log(`${currentNode.value} is the element at position ${pos}`);
      return;
    }
  }

  reverseList() {
    let currentNode = this.head;
    let previous = null;
    let nextNode = null;
    while (currentNode.next) {
      nextNode = currentNode.next;
      if (previous == null) {
        currentNode.next = null;
        previous = currentNode;
        currentNode = nextNode;
      } else {
        currentNode.next = previous;
        previous = currentNode;
        currentNode = nextNode;
      }
    }

    currentNode.next = previous;
    this.head = currentNode;
  }

  concatenateList(list2) {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = list2.head;
  }

  DisplayElements() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  deleteDuplicates = function () {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (previousNode == null || previousNode.value != currentNode.value) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      } else {
        previousNode.next = currentNode.next;
        currentNode = currentNode.next;
      }
    }
  };

  insertRec(val, pos) {
    this.head = this.insertRecPri(val, pos, this.head);
  }

  insertRecPri(val, pos, currentNode) {
    if (pos == 0) {
      let node = new Node(val);
      node.next = currentNode;
      this.size++;
      return node;
    }
    currentNode.next = this.insertRecPri(val, (pos -= 1), currentNode.next);
    return currentNode;
  }

  removeDuplicates() {
    let currentNode = this.head;
    let nextNode = currentNode.next;
    while (nextNode) {
      if (currentNode.value == nextNode.value) {
        nextNode = nextNode.next;
      } else {
        currentNode.next = nextNode;
        currentNode = nextNode;
        nextNode = nextNode.next;
      }
    }
    currentNode.next = nextNode;
  }

  sizeOfLinkedList() {
    console.log(`The size of linkedList is : ${this.size + 1}`);
  }

  hasCycle = function (head) {
    let fast = head;
    let slow = head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow == fast) {
        return true;
      }
    }

    return false;
  };

  reverseList = function (left, prev = null) {
    if (!left.next) {
      let curr = prev;
      while (curr.next) {
        curr = curr.next;
      }

      curr.next = left;
      return prev;
    }

    let next = left.next;
    left.next = prev;
    return reverseList(next, left);
  };

  reverseBetween = function (left, right) {
    let leftNode = null;
    let rightNode = null;

    let count = 0;

    let currentNode = this.head;
    while (count < right) {
      if (count == left - 1) {
        leftNode = currentNode;
      }
      currentNode = currentNode.next;
      count++;
    }

    let list = this.reverseList(leftNode);
    console.log(list);

    currentNode = head;
    count = 0;
    while (count < left - 1) {
      currentNode = currentNode.next;
      count++;
    }

    currentNode.next = list;

    return head;
  };

  countListInCycle = function (head) {
    let fast = head;
    let slow = head;
    let count = 0;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow == fast) {
        let temp = slow;
        do {
          temp = temp.next;
          count++;
        } while (temp != slow);
      }
    }
    return count;
  };
}

function mergingTwoList(l1, l2, ans) {
  let f = l1.head;
  let s = l2.head;

  while (f != null && s != null) {
    if (f.value <= s.value) {
      ans.insertAtLast(f.value);
      f = f.next;
    } else {
      ans.insertAtLast(s.value);
      s = s.next;
    }
  }

  while (f) {
    ans.insertAtLast(f.value);
    f = f.next;
  }

  while (s) {
    ans.insertAtLast(s.value);
    s = s.next;
  }

  return ans;
}

// let l1 = new LinkedList();
// l1.AddElement(3);
// l1.AddElement(2);
// l1.AddElement(0);
let l2 = new LinkedList();
l2.AddElement(1);
l2.AddElement(2);
l2.AddElement(3);
l2.AddElement(4);
l2.AddElement(5);
l2.reverseBetween(2, 4);
// let ans = new LinkedList();
// mergingTwoList(l1, l2, ans);
// ans.DisplayElements();

// list.sizeOfLinkedList();
// console.log("====================");
// list.AddElement(90);

// list.DisplayElements();

// console.log("====================");
// list.insertAtPosition(27, 19);

// list.DisplayElements();

// console.log("=======insert at last=============");
// list.insertAtLast(89);
// list.DisplayElements();

// console.log("=======delete from beginning=============");
// list.deleteFromBeginning();
// list.DisplayElements();

// console.log("=======delete at end=============");
// list.deleteAtEnd();
// list.DisplayElements();

// console.log("=======delete at specific location=============");
// list.deleteAtSpecificNode(2);
// list.DisplayElements();

// console.log("=====search====");
// list.searchElement(91);

// console.log("=====size of list====");
// list.sizeOfLinkedList();

// console.log("=====acc element at position====");
// list.accElementAtPos(1);

// console.log("=====reverse list====");
// list.reverseList();
// list.DisplayElements();

// let list2 = new LinkedList();
// list2.AddElement(17);
// list2.AddElement(24);
// list2.AddElement(39);
// list2.AddElement(45);

// console.log("=======concatenate=======");
// list.concatenateList(list2);

// list.DisplayElements();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class CyclicLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   add(value) {
//     const newNode = new Node(value);

//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//       newNode.next = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }

//   makeCyclic(index) {
//     if (index < 0 || index >= this.size()) {
//       console.log("Invalid index");
//       return;
//     }

//     let currentIndex = 0;
//     let currentNode = this.head;

//     while (currentIndex < index) {
//       currentNode = currentNode.next;
//       currentIndex++;
//     }

//     this.tail.next = currentNode;
//   }

//   size() {
//     if (!this.head) {
//       return 0;
//     }

//     let count = 0;
//     let current = this.head;

//     do {
//       count++;
//       current = current.next;
//     } while (current !== this.head);

//     return count;
//   }

//   print() {
//     if (!this.head) {
//       console.log("Empty list");
//       return;
//     }

//     let current = this.head;
//     let output = "";

//     do {
//       output += `${current.value} -> `;
//       current = current.next;
//     } while (current !== this.head);

//     output += "HEAD"; // Displaying the head node
//     console.log(output);
//   }
// }

// // Usage example:
// const list = new CyclicLinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.add(6);
// list.add(7);
// list.add(8);
// list.makeCyclic(4);

// function lengthOfCyle(head) {
//   let f = head;
//   let s = head;
//   let length = 0;
//   while (f != null && f.next != null) {
//     if (s == f) {
//       let temp = s;
//       do {
//         temp = temp.next;
//         length++;
//       } while (temp != s);
//     }
//     f = f.next.next;
//     s = s.next;
//   }

//   return length;
// }

// lengthOfCyle(list.head);

// var isHappy = function (n) {
//   let s = n;
//   let f = n;

//   do {
//     s = squareOfNumber(s);
//     f = squareOfNumber(squareOfNumber(f));
//   } while (s != f);

//   if (s == 1) {
//     return true;
//   }

//   return false;
// };

// function squareOfNumber(number) {
//   let sum = 0;
//   while (number > 0) {
//     let rem = Math.floor(number % 10);
//     sum += rem * rem;
//     number /= 10;
//   }
//   return sum;
// }

// console.log(isHappy(16));
