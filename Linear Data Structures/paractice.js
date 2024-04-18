// let name = "Mr John Smith";

// function Fill(name) {
//   name = name.replaceAll(" ", "%20");
//   return name;
// }

// console.log(Fill(name));

var containsDuplicate = function (nums) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.get(nums[i])) {
      return true;
    } else {
      hashMap[nums[i]] = 1;
    }
  }

  return false;
};

//console.log(containsDuplicate([1, 2, 3, 4]));

var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let hashMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]] == null) {
      hashMap[s[i]] = 1;
    } else {
      hashMap[s[i]] += 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (hashMap[t[j]] > 0) {
      hashMap[t[j]] -= 1;
    } else {
      return false;
    }
  }

  return true;
};

//console.log(isAnagram("aacc", "ccac"));

// var twoSum = function (nums, target) {
//   if (nums.length < 2) {
//     return 0;
//   }

//   let hashMap = new Map();
//   let finalArray = new Array();

//   for (let i = 0; i < nums.length; i++) {
//     hashMap.set(nums[i], i);
//   }

//   for (let j = 0; j < nums.length; j++) {
//     if (
//       hashMap.get(target - nums[j]) != null ||
//       hashMap.get(target - nums[j]) === 0
//     ) {
//       finalArray.push(j);
//       finalArray.push(hashMap.get(target - nums[j]));
//       break;
//     }
//   }

//   return finalArray;
// };

// console.log(twoSum([3, 2, 4], 6));

var groupAnagrams = function (strs) {
  let map = new Map();

  for (let i = 0; i < strs.length; i++) {
    let word = strs[i].split("").sort().join("");
    if (map.get(word)) {
      let arr = map.get(word);
      arr.push(strs[i]);
      map.set(word, arr);
    } else {
      map.set(word, [strs[i]]);
    }
  }

  console.log(map);

  let result = new Array();

  for (const [key, value] of map.entries()) {
    result.push(value);
  }

  return result;
};

//console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

var topKFrequent = function (nums, k) {
  //let highestElement = findTheHighest(nums);
  let map = new Map();

  for (let j = 0; j < nums.length; j++) {
    if (!map.get(nums[j])) {
      map.set(nums[j], 1);
    } else {
      let val = map.get(nums[j]);
      map.set(nums[j], val + 1);
    }
  }

  let store = [...map.entries()].sort((a, b) => b[1] - a[1]);

  console.log(store);

  let result = new Array();
  for (let l = 0; l < k; l++) {
    result.push(store[l][0]);
  }

  return result;
};

function findTheHighest(nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    }
  }
  return max;
}

//console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

// var maxOperations = function (nums, k) {
//   let i = 0;
//   let j = nums.length - 1;
//   let count = 0;

//   if (nums.length < 1) {
//     return 0;
//   }

//   while () {
//     let total = nums[i] + nums[j];

//     if (total === k) {
//       nums.shift();
//       nums.pop();
//       count++;
//     }
//     i++;
//     j--;
//   }

//   if (count != 0) {
//     return count;
//   }

//   return 0;
// };

//console.log(maxOperations([1, 2, 3, 4], 5));

function bSort(arr) {
  let i = 0;
  while (i < arr.length) {
    let j = 0;
    let flag = 0;
    while (j < arr.length - 1) {
      if (arr[j] > arr[j + 1]) {
        flag = 1;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      j++;
    }

    if (flag == 0) {
      break;
    }

    i++;
  }
  return arr;
}

//console.log(bSort([1, 2, 3, 4, 5]));

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    while (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      j--;
    }
  }

  return arr;
}

//console.log(insertionSort([1, 2, 3, 4, 5, 6]));
function selectionSort(arr) {
  let sortedIndex = 0;
  let startIndex = 0;
  while (sortedIndex < arr.length - 1) {
    let minIndex = minimumIndex(arr, startIndex);
    if (arr[startIndex] > arr[minIndex]) {
      let temp = arr[startIndex];
      arr[startIndex] = arr[minIndex];
      arr[minIndex] = temp;
    }
    startIndex++;
    sortedIndex++;
  }
  return arr;
}

function minimumIndex(arr, startingIndex) {
  let minIndex = startingIndex;
  let minNumber = arr[startingIndex];
  for (let i = startingIndex + 1; i < arr.length; i++) {
    if (minNumber > arr[i]) {
      minIndex = i;
      minNumber = arr[i];
    }
  }
  return minIndex;
}

//console.log(selectionSort([64, 25, 12, 22, 11]));

//QuickSort
function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partitioningIndex(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

function partitioningIndex(arr, low, high) {
  let pivot = low;
  let i = low + 1;
  let j = high;
  while (j >= i) {
    if (arr[pivot] < arr[i] && arr[j] < arr[pivot]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }

    if (arr[pivot] > arr[i]) {
      i++;
    }

    if (arr[j] > arr[pivot]) {
      j--;
    }
  }

  let temp = arr[j];
  arr[j] = arr[pivot];
  arr[pivot] = temp;

  return j;
}

//let arr = [50, 70, 60, 90, 40, 80, 10, 20, 30];
//quickSort(arr, 0, arr.length - 1);
//console.log(arr);

function mergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    console.log(mid);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, high, mid);
  }
}

function merge(arr, low, high, mid) {
  let i = low;
  let k = low;
  let j = mid + 1;
  let mArray = new Array();

  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      mArray[k] = arr[i];
      k++;
      i++;
    } else {
      mArray[k] = arr[j];
      k++;
      j++;
    }
  }

  while (i <= mid) {
    mArray[k] = arr[i];
    k++;
    i++;
  }

  while (j <= high) {
    mArray[k] = arr[j];
    k++;
    j++;
  }

  for (let l = low; l <= high; l++) {
    arr[l] = mArray[l];
  }
}

let arr = [8, 3, 7, 4, 9, 2, 6, 5];
//mergeSort(arr, 0, arr.length - 1);
//console.log(arr);

function countSort(arr) {
  let max = highestElement(arr);
  let frequencyArr = new Array(max + 1);

  frequencyArr.fill(0);

  for (let i = 0; i < arr.length; i++) {
    if (frequencyArr[arr[i]] == 0) {
      frequencyArr[arr[i]] = 1;
    } else {
      frequencyArr[arr[i]] += 1;
    }
  }

  for (let j = 1; j < arr.length; j++) {
    frequencyArr[j] = frequencyArr[j] + frequencyArr[j - 1];
  }

  for (let k = arr.length - 1; k > 0; k--) {
    frequencyArr[k] = frequencyArr[k - 1];
  }

  frequencyArr[0] = 0;

  let outputArr = new Array(arr.length);

  for (let l = 0; l < arr.length; l++) {
    outputArr[frequencyArr[arr[l]]] = arr[l];
    frequencyArr[arr[l]] += 1;
  }

  return outputArr;
}

function highestElement(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//console.log(countSort([2, 5, 3, 0, 2, 3, 0, 3]));

var minPairSum = function (nums) {
  if (nums.length < 2) {
    return 0;
  }

  let sortedList = nums.sort();
  let max = -Infinity;
  let i = 0;
  let j = sortedList.length - 1;
  while (i < j) {
    let currMax = sortedList[i] + sortedList[j];

    if (currMax > max) {
      max = currMax;
    }

    i++;
    j--;
  }

  return max;
};

// console.log(
//   minPairSum([9, 2, 10, 1, 10, 4, 8, 9, 7, 6, 8, 10, 8, 6, 5, 4, 3, 4, 2, 10])
// );

var rotate = function (nums, k) {
  reverseArr(nums, 0, nums.length - 1);
  reverseArr(nums, k, nums.length - 1);
  reverseArr(nums, 0, k - 1);
  return nums;
};

function reverseArr(nums, startIndex, endIndex) {
  let i = startIndex;
  let j = endIndex;
  while (i < j) {
    let temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
    i++;
    j--;
  }
}

console.log(rotate([2, 1], 3));
