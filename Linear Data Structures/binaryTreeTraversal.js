class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function preOrder(node) {
  if (node != null) {
    console.log(node.val);
    preOrder(node.left);
    preOrder(node.right);
  }
}

function inOrder(node) {
  if (node != null) {
    inOrder(node.left);
    console.log(node.val);
    inOrder(node.right);
  }
}

function postOrder(node) {
  if (node != null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.val);
  }
}

// let root = new Node(8);
// root.left = new Node(7);
// root.left.left = new Node(6);
// root.left.right = new Node(10);
// root.right = new Node(9);
// root.right.left = new Node(11);
// root.right.right = new Node(12);

// preOrder(root);
// console.log("================");
// postOrder(root);
// console.log("=================");
// inOrder(root);

class Stack {
  constructor() {
    this.arr = [];
    this.top = -1;
    this.size = 0;
  }

  push(node) {
    if (this.top == -1) {
      this.top++;
      this.arr[this.top] = node;
      this.size++;
    } else {
      this.arr.push(node);
      this.top++;
      this.size++;
    }
  }

  pop() {
    if (this.top == -1) {
      console.log("stack is empty");
      return;
    } else {
      let poppedNode = this.arr.pop();
      this.size--;
      this.top--;
      return poppedNode;
    }
  }

  peek() {
    return this.arr[this.top];
  }

  isEmpty() {
    if (this.top == -1) {
      return true;
    }
    return false;
  }
}

function IterativePreOrder(root, stack) {
  let node = root;

  while (node != null || !stack.isEmpty()) {
    if (node != null) {
      console.log(node.val);
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      node = node.right;
    }
  }
}

function IterativeInOrder(root, stack) {
  let node = root;
  while (node != null || !stack.isEmpty()) {
    if (node != null) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      console.log(node.val);
      node = node.right;
    }
  }
}

function IterativePostOrder(root, stack) {
  let node = root;
  let prev = null;
  while (node != null || !stack.isEmpty()) {
    if (node != null) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.peek();
      if (node.right == null || prev == node.right) {
        node = stack.pop();
        console.log(node.val);
        prev = node;
        node = null;
      } else {
        node = node.right;
      }
    }
  }
}

//IterativePreOrder(root, new Stack());

//IterativeInOrder(root, new Stack());
//IterativePostOrder(root, new Stack());

function minDiff(root, k) {
  //your code here
  if (root != null) {
    if (root.val == k) {
      return 0;
    } else if (root.val >= k) {
      if (root.left == null) {
        let diff = root.val - k;
        return diff;
      } else {
        if (root.val > k && k < root.left.val) {
          let diffRoot = root.val - k;
          let diffLeft = k - root.left.val;
          return Math.min(diffRoot, diffLeft);
        } else {
          return minDiff(root.left, k);
        }
      }
    } else if (root.val < k) {
      if (root.right == null) {
        let diff = k - root.val;
        return diff;
      } else {
        if (root.val < k && k < root.right.val) {
          let diffRoot = k - root.val;
          let diffRight = root.right.val - k;
          return Math.min(diffRoot, diffRight);
        } else {
          return minDiff(root.right, k);
        }
      }
    }
  } else {
    return null;
  }
}

// let root = new Node(10);
// root.left = new Node(2);
// root.left.left = new Node(1);
// root.left.right = new Node(5);
// root.left.right.left = new Node(3);
// root.left.right.left.right = new Node(4);
// root.left.right.right = new Node(6);
// root.right = new Node(11);

// let root = new Node(8);
// root.left = new Node(1);
// root.left.right = new Node(4);
// root.left.right.left = new Node(3);
// root.right = new Node(9);
// root.right.right = new Node(10);

// console.log(minDiff(root, 9));

// var numTrees = function (n) {
//   let G = new Array(n + 1);
//   G[0] = 1;
//   G[1] = 1;

//   for (let i = 2; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       product = G[j - 1] * G[i - j];
//       if (G[i] != null) {
//         G[i] += product;
//       } else {
//         G[i] = product;
//       }
//     }
//   }

//   return G[n];
// };

// console.log(numTrees(3));

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.root == null) {
      this.root = node;
      return;
    }

    this.insertNode(this.root, node);
  }

  insertNode(root, node) {
    if (root.val <= node.val) {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    } else {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    }
  }

  remove(value) {
    this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    console.log(node);
    if (node === null) {
      return null;
    } else {
      if (node.val > value) {
        node.left = this.removeNode(node.left, value);
        return node;
      } else if (node.val < value) {
        node.right = this.removeNode(node.right, value);
        return node;
      } else {
        if (node.left == null && node.right == null) {
          node = null;
          return node;
        } else if (node.right == null) {
          node = node.left;
          return node;
        } else if (node.left == null) {
          node = node.right;
          return node;
        } else {
          let minNode = this.minNode(node.right);
          node.val = minNode.val;
          node.right = this.removeNode(node.right, minNode.val);
          return node;
        }
      }
    }
  }

  minNode(node) {
    if (node.left == null) {
      return node;
    }
    return this.minNode(node.left);
  }

  preOrder(node) {
    if (node != null) {
      console.log(node.val);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}

// let bst = new BST();
// bst.insert(12);
// bst.insert(9);
// bst.insert(8);
// bst.insert(10);
// bst.insert(14);
// bst.insert(13);
// bst.insert(15);
// bst.insert(4);
// bst.insert(5);

// bst.preOrder(bst.root);
// bst.remove(9);
// console.log("=====================");
// bst.preOrder(bst.root);
// bst.remove(4);
// console.log("=====================");
// bst.preOrder(bst.root);

var sortedArrayToBST = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor(nums.length / 2);

  return InsertElements(nums, low, high, mid);
};

function InsertElements(nums, low, high, mid) {
  let bst = new BSTx();
  bst.insert(nums[mid]);

  for (let i = mid - 1; i >= 0; i--) {
    bst.insert(nums[i]);
  }

  for (let j = mid + 1; j <= high; j++) {
    bst.insert(nums[j]);
  }

  return bst.returnNode();
}

class BSTx {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);

    if (this.root == null) {
      this.root = node;
    }

    this.insertHelper(this.root, node);
  }

  insertHelper(root, node) {
    if (root.val > node.val) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertHelper(root.left, node);
      }
    } else {
      if (root.val < node.val) {
        if (root.right == null) {
          root.right = node;
        } else {
          this.insertHelper(root.right, node);
        }
      }
    }
  }

  returnNode() {
    return this.root;
  }
}

//console.log(sortedArrayToBST([0, 1, 2, 3, 4, 5]));

var flatten = function (root) {
  if (root == null) {
    return null;
  }

  if (root.val == 0) {
    return root;
  }

  console.log("lets get started");
  Helper(root);
  return root;
};

function Helper(root) {
  if (root != null) {
    if (root.left != null) {
      if (root.right == null) {
        root.right = root.left;
        root.left = null;
        Helper(root.right);
      } else {
        let tempRight = root.right;
        root.right = root.left;
        root.left = null;
        let curr = root;
        while (curr.right) {
          curr = curr.right;
        }
        console.log(curr.right);
        curr.right = tempRight;
        console.log(root.right);
        Helper(root.right);
      }
    } else {
      Helper(root.right);
    }
  }
}

let root = new Node(0);
root.left = new Node(2);
root.right = new Node(4);
root.left.left = new Node(1);
root.left.right = new Node(null);
root.right.left = new Node(3);
root.right.right = new Node(-1);
root.left.left.left = new Node(5);
root.left.left.right = new Node(1);
root.right.left.left = new Node(null);
root.right.left.right = new Node(6);
root.right.right.left = new Node(null);
root.right.right.right = new Node(8);

flatten(root);
