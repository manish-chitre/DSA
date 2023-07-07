//linear search improvement using
//1. Transposition
/*
function linearSearchTransposition(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      if (i > 0) {
        swap(arr, i);
      } else {
        return arr;
      }
    }
  }
  return arr;
}

swap = (arr, i) => {
  const temp = arr[i];
  arr[i] = arr[i - 1];
  arr[i - 1] = temp;
};

let arr = [1, 2, 4, 5, 6, 7, 12];
let key = 7;

console.log(linearSearchTransposition(arr, key));
console.log(linearSearchTransposition(arr, key));
console.log(linearSearchTransposition(arr, key));
console.log(linearSearchTransposition(arr, key));
console.log(linearSearchTransposition(arr, key));
console.log(linearSearchTransposition(arr, key));
console.log(linearSearchTransposition(arr, key));
console.log(linearSearchTransposition(arr, key));
*/

/*
//2. Bringing Element to the front
function elementToFront(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      if (i > 0) {
        swap(arr, i);
      } else {
        return arr;
      }
    }
  }
  return arr;
}

swap = (arr, i) => {
  const temp = arr[i];
  arr[i] = arr[0];
  arr[0] = temp;
};

let arr = [1, 2, 4, 5, 6, 7, 12];
let key = 7;

console.log(elementToFront(arr,key));
console.log(elementToFront(arr,key));
console.log(elementToFront(arr,key));
*/
//BinarySearch
/*
function BinarySearch(low, high, arr, key) {
  if (low <= high) {
    let mid = Math.round((low + high) / 2);

    if (arr[mid] == key) {
      return arr[mid];
    }

    if (key > arr[mid]) {
      return BinarySearch(mid + 1, high, arr, key);
    } else if (key < arr[mid]) {
      return BinarySearch(low, mid - 1, arr, key);
    }
  }

  return -1;
}

let arr = [4, 8, 10, 15, 18, 21, 24, 27, 29, 33, 34, 37, 41, 43];
let key = 34;

console.log(BinarySearch(0, arr.length - 1, arr, key));
*/

//maximum element in array
/*
function maxElementArray(arr) {
  let max = arr[0];
  let i = 0;
  for (i = i + 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
*/

/*
function Reverse(arr) {
  let j = 0;
  for (let i = arr.length - 1; i > j; i--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  return arr;
}

let arr = [8, 3, 9, 15, 6, 34, 7, 2, 12, 4];

//console.log(maxElementArray(arr));
console.log(Reverse(arr));
*/
/*
function Rotate(arr) {
  let temp = arr[0];
  let i = 0;
  for (i = i + 1; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr[i] = temp;
  return arr;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(Rotate(arr));
console.log(Rotate(arr));
console.log(Rotate(arr));
*/

//sum of pairs k=a+b;
// function sumOfPairs(arr, k) {
//   let i = 0;
//   let j = i + 1;
//   while (i != arr.length - 1) {
//     while (j < arr.length) {
//       if (arr[i] + arr[j] == k) {
//         console.log(`elements found : ${arr[i]},${arr[j]}`);
//         break;
//       }
//       j++;
//     }
//     i++;
//     j = i + 1;
//   }
// }
// let arr = [6, 3, 8, 10, 16, 7, 5, 2, 9, 14];

// console.log(sumOfPairs(arr, 12));

//Duplicates in unsorted array :
// function duplicatesInUnsortedArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let count = 1;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j] && arr[i] != -1) {
//         arr[j] = -1;
//         count++;
//       }
//     }
//     if (count > 1) {
//       console.log(`${arr[i]} has occurred ${count} times`);
//     }
//   }
// }
// //o(n2) runtime complexity.
// duplicatesInUnsortedArray([8, 3, 6, 4, 6, 5, 6, 8, 2, 7]);

// //duplicates in sorted Array
// function duplicatesInSortedArray(arr) {
//   let lastDuplicate = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1] && lastDuplicate != arr[i]) {
//       lastDuplicate = arr[i];
//       console.log(`${lastDuplicate} is the duplicate element`);
//     }
//   }
// }
// //o(n) runtime complexity
// duplicatesInSortedArray([3, 6, 8, 8, 10, 12, 15, 15, 15, 20]);

// function findingPairSum(arr, hightestElement) {
//   let freshArray = new Array(hightestElement);

//   for (let i = 0; i < freshArray.length; i++) {
//     freshArray[i] = 0;
//   }

//   for (let j = 0; j < arr.length; j++) {
//     if (freshArray[10 - arr[j]] == 1) {
//       console.log(`${10 - arr[j]}+${arr[j]}=10`);
//       freshArray[arr[j]] = 1;
//     } else {
//       freshArray[arr[j]] = 1;
//     }
//   }
// }

// findingPairSum([6, 3, 8, 10, 16, 7, 5, 2, 9, 14], 16);

// function missingElements(arr) {
//   let i = 0;
//   let j = i + 1;
//   while (j < arr.length) {
//     if (arr[j] - arr[i] == 1) {
//       i++;
//       j++;
//     } else {
//       console.log(`${arr[i] + 1} is the missing element`);
//       i++;
//       j++;
//     }
//   }
// }

// missingElements([6, 7, 8, 9, 10, 11, 13, 14, 15, 17]);

// function elementFindMatrix2D(matrix, ele) {
//   let i = 0;
//   let j = 0;
//   while (i < matrix.length) {
//     if (matrix[i][j] < ele) {
//       let arr = matrix[i];
//       while (j < arr.length) {
//         if (arr[j] === ele) {
//           return true;
//         }
//         j++;
//       }
//     }
//     i++;
//     j = 0;
//   }
//   return false;
// }

// console.log(
//   elementFindMatrix2D(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     64
//   )
// );

// function matrix2DBinary(matrix, target) {
//   let low = 0;
//   let high = matrix.length * matrix[0].length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     console.log(mid % 2);
//     console.log(mid / 2);
//     if (
//       matrix[Math.floor(mid / matrix[0].length)][
//         Math.floor(mid % matrix[0].length)
//       ] > target
//     ) {
//       high = mid - 1;
//     } else if (
//       matrix[Math.floor(mid / matrix[0].length)][
//         Math.floor(mid % matrix[0].length)
//       ] < target
//     ) {
//       low = mid + 1;
//     } else if (
//       matrix[Math.floor(mid / matrix[0].length)][
//         Math.floor(mid % matrix[0].length)
//       ] === target
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(
//   matrix2DBinary(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// );

// var singleNumber = function (nums) {
//   let hashTable = {};
//   count = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (hashTable[nums[i]] == undefined) {
//       console.log("This is amazing");
//       hashTable[nums[i]] = 1;
//     } else {
//       hashTable[nums[i]] += hashTable[nums[i]];
//       console.log(`Element increased! : ${hashTable[nums[i]]}`);
//     }
//   }

//   console.log(hashTable);

//   for (let i = 0; i < nums.length; i++) {
//     console.log(`this is iteration: ${i}`);
//     if (hashTable[nums[i]] == 1) {
//       return nums[i];
//     }
//   }
// };

// console.log(singleNumber([4, 1, 2, 1, 2]));

// var plusOne = function (digits) {
//   let n = digits.length;

//   for (let i = n - 1; i > -1; i--) {
//     if (digits[i] != 9) {
//       digits[i]++;
//       break;
//     } else {
//       digits[i] = 0;
//     }
//   }

//   if (digits[0] == 0) {
//     console.log(digits);
//     let res = new Array();
//     res[0] = 1;
//     res = res.concat(digits);
//     console.log(res);
//     return res;
//   }
//   return digits;
// };

// console.log(plusOne([9, 9]));

// var intersect = function (nums1, nums2) {
//   let hashTable = {};
//   let newArr = [];

//   for (let i = 0; i < nums1.length; i++) {
//     if (hashTable[nums1[i]] == null) {
//       hashTable[nums1[i]] = 1;
//     } else {
//       hashTable[nums1[i]] += hashTable[nums1[i]];
//     }
//   }

//   for (let j = 0; j < nums2.length; j++) {
//     if (hashTable[nums2[j]] > 0) {
//       newArr.push(nums2[j]);
//       hashTable[nums2[j]] = hashTable[nums2[j]] - 1;
//     }
//   }

//   return newArr;
// };

// console.log(intersect([1, 2, 2, 1], [2, 2]));

// var rotate = function (nums, k) {
//   reverse(nums, 0, nums.length - 1);

//   if (nums.length > 1 && k >= nums.length) {
//     reverse(nums, 0, k - 1);

//     console.log(nums);

//     reverse(nums, k, nums.length - 1);
//   }
// };

// function reverse(nums, start, end) {
//   let temp = 0;
//   while (end > start) {
//     temp = nums[end];
//     nums[end] = nums[start];
//     nums[start] = temp;
//     start++;
//     end--;
//   }
// }

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// var check = function (nums) {
//   let orArray = [...nums];
//   nums.sort((a, b) => a - b);
//   let low = 0;
//   let high = nums.length - 1;
//   let index = bSearch(low, high, orArray);
//   console.log(index);
//   let rotateIndex = (index + (index - 1)) % nums.length;
//   console.log(rotateIndex);
//   if (nums[rotateIndex] == orArray[rotateIndex]) {
//     return true;
//   } else {
//     return false;
//   }
// };

// function bSearch(low, high, nums) {
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (low == high) {
//       return mid;
//     }

//     if (nums[mid - 1] > nums[mid] && nums[mid] < nums[mid + 1]) {
//       return mid;
//     }

//     if (nums[mid] > nums[high]) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
// }

// console.log(check([3, 4, 5, 1, 2]));
function subArrayCal(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    sum = arr[i];

    if (arr[i] == 0) {
      count += 1;
    }

    let j = i + 1;
    while (j < arr.length) {
      sum += arr[j];
      if (sum == 0) {
        count += 1;
      }
      j++;
    }
  }

  return count;
}

console.log(subArrayCal([1, 0, -1, 1]));
