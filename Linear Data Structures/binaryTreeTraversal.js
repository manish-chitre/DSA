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

// let root = new Node(1);
// root.left = null;
// root.right = new Node(2);
// root.right.left = new Node(3);
// root.right.right = null;
// //flatten(root);

var inorderTraversal = function (root) {
  let arr = [];
  if (root == null) {
    return arr;
  }
  inOrderTra(root, arr);
  return arr;
};

function inOrderTra(root, arr) {
  if (root != null) {
    inOrderTra(root.left, arr);
    arr.push(root.val);
    inOrderTra(root.right, arr);
  }
}

//console.log(inorderTraversal(root));

// function pathSum(root, targetSum) {
//   return dfs(root, targetSum, []);
// }

// function dfs(root, targetSum, currentPath) {
//   if (!root) return 0;

//   // add current node to path
//   currentPath.push(root.val);
//   let count = 0;
//   let sum = 0;

//   // calculate sum for current path
//   // we start from last added element
//   // to avoid calculating same path twice
//   for (let i = currentPath.length - 1; i >= 0; i--) {
//     sum = sum + currentPath[i];
//     if (sum === targetSum) count++;
//   }

//   // continue for left and right sub trees
//   count += dfs(root.left, targetSum, currentPath);
//   count += dfs(root.right, targetSum, currentPath);

//   // remove the current node from current path
//   // because we want to traverse a different path that
//   // doesn't have this node in it
//   currentPath.pop();
//   return count;
// }

// var pathSum = function (root, targetSum) {
//   let map = new Map();
//   map.set(0, 1);

//   function dfs(root, targetSum, sum) {
//     if (!root) return 0;
//     let count = 0;

//     sum += root.val;

//     if (!map.has(sum - targetSum)) {
//       map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
//     } else {
//       count += map.get(sum - targetSum);
//     }

//     count += dfs(root.left, targetSum, sum);
//     count += dfs(root.right, targetSum, sum);
//     map.set(sum - targetSum, map.get(sum - targetSum) - 1);

//     return count;
//   }

//   return dfs(root, targetSum, 0);
// };

// let root = new Node(10);
// root.left = new Node(5);
// root.left.left = new Node(3);
// root.left.left.left = new Node(3);
// root.left.left.right = new Node(-2);
// root.left.right = new Node(2);
// root.left.right.right = new Node(1);
// root.right = new Node(-3);
// root.right.right = new Node(11);

// // let root = new Node(1);
// // root.left = new Node(-2);
// // root.right = new Node(-3);

// console.log(pathSum(root, 8));

// var isValidBST = function (root) {
//   if (!root) {
//     return false;
//   }

//   return validateRecur(root, true);
// };

// function validateRecur(root, isValid) {
//   if (root.left != null && root.right != null) {
//     if (root.left.val <= root.val && root.right.val >= root.val) {
//       isValid = validateRecur(root.left, true);
//       if (isValid) isValid = validateRecur(root.right, true);
//     } else {
//       return false;
//     }
//   }
//   return isValid;
// }

// var kthSmallest = function (root, k) {
//   let arr = [];
//   inOrderTraversal(root, arr);
//   return arr[k - 1];
// };

// function inOrderTraversal(root, arr) {
//   if (root) {
//     inOrderTraversal(root.left, arr);
//     arr.push(root.val);
//     inOrderTraversal(root.right, arr);
//   }
// }

var kthSmallest = function (root, k) {
  let arr = [];
  inOrderTraversalIterative(root, arr);
  return arr[k - 1];
};

// function inOrderTraversal(root, arr) {
//     if (root) {
//         inOrderTraversal(root.left, arr);
//         arr.push(root.val);
//         inOrderTraversal(root.right, arr);
//     }
// }

// class Stack {
//   constructor() {
//     this.arr = [];
//     this.top = -1;
//   }

//   isEmpty() {
//     if (this.top == -1) {
//       return true;
//     }
//     return false;
//   }

//   push(val) {
//     this.arr.push(val);
//     this.top += 1;
//   }

//   pop() {
//     if (this.top >= 0) {
//       let poppedEle = this.arr.pop();
//       this.top -= 1;
//       return poppedEle;
//     } else {
//       return null;
//     }
//   }
// }

// function inOrderTraversalIterative(root, arr) {
//   let s = new Stack();
//   while (root != null || !s.isEmpty()) {
//     if (root != null) {
//       s.push(root);
//       root = root.left;
//     } else {
//       root = s.pop();
//       arr.push(root.val);
//       root = root.right;
//     }
//   }
// }

// let root = new Node(3);
// root.left = new Node(1);
// root.right = new Node(4);
// root.left.right = new Node(2);

// console.log(kthSmallest(root));

// var maxDepth = function (root) {
//   let max = -100;
//   function recursion(root, total) {
//     if (!root) {
//       return total;
//     }

//     depthLeft = recursion(root.left, total + 1);
//     max = Math.max(max, depthLeft);
//     depthRight = recursion(root.right, total + 1);
//     max = Math.max(max, depthRight);
//     return max;
//   }
//   recursion(root, 0);
//   return max;
// };

// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.right = new Node(5);
// root.left.left = new Node(4);

//console.log(maxDepth(root));

// var deleteNode = function (root, key) {
//   Helper(root, key);
//   return root;
// };

// function Helper(root, key) {
//   if (root == null) {
//     return root;
//   }

//   if (key === root.val) {
//     console.log(`key is : ${key}`);
//     let mNode = minNode(root.right);
//     root.val = mNode.val;
//     root.right = deleteNodeToBo(root.right, mNode.val);
//     return root;
//   }

//   if (key < root.val) {
//     return Helper(root.left, key);
//   } else if (key > root.val) {
//     return Helper(root.right, key);
//   }
// }

// function deleteNodeToBo(root, nodeToBeDeleted) {
//   if (root.val == nodeToBeDeleted) {
//     root = null;
//     return;
//   }
//   return deleteNodeToBo(root.left, nodeToBeDeleted);
// }

// function minNode(root) {
//   console.log(root.val);
//   if (root.left == null) {
//     return root;
//   }

//   return minNode(root.left);
// }

// let root = new Node(5);
// root.right = new Node(6);
// root.left = new Node(3);
// root.left.left = new Node(2);
// root.left.right = new Node(4);
// root.right.right = new Node(7);

// console.log(deleteNode(root, 3));

// function build_maxheap(arr) {
//   for (let i = Math.floor(arr.length / 2); i >= 1; i--) {
//     max_heapify(arr, i, arr.length);
//   }
//   return arr;
// }

// function max_heapify(arr, i, n) {
//   let left = 2 * i; //left child
//   let right = 2 * i + 1; //right child
//   if (left <= n && arr[left] > arr[i]) largest = left;
//   else largest = i;
//   if (right <= n && arr[right] > arr[largest]) largest = right;
//   if (largest != i) {
//     let temp = arr[i];
//     arr[i] = arr[largest];
//     arr[largest] = temp;
//     max_heapify(arr, largest, n);
//   }
// }

// console.log(build_maxheap([3, 2, 5, 6, 1, 4]));

class Priority {
  maximum(arr) {
    return arr[1]; //o(n);
  }

  max_heapify(arr, i, n) {
    let left = 2 * i;
    let right = 2 * i + 1;
    if (left <= n && arr[left] >= arr[i]) largest = left;
    else largest = i;
    if (right <= n && arr[right] >= arr[largest]) largest = right;
    if (largest != i) {
      let temp = arr[largest];
      arr[largest] = arr[i];
      arr[i] = temp;
      this.max_heapify(arr, largest, n);
    }
  }

  extractMaximum(arr) {
    if (arr.length == 0) {
      console.log("tree is empty");
    }
  }
}
