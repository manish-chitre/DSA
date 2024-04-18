let arr = [1, 2, 3, 4, 5];

function bubbleSort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//console.log(bubbleSort(arr));

function insertionSort(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}

//console.log(insertionSort(arr));

function findMaxNumber(arr, j) {
  let max = 0;
  let maxIndex = 0;
  for (i = 0; i <= j; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

function selectionSort(arr) {
  let j = arr.length;
  while (j >= 0) {
    let maxIndex = findMaxNumber(arr, j);
    if (arr[maxIndex] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
    j--;
  }
  return arr;
}

//console.log(selectionSort(arr));

function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partitionIndex(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

function partitionIndex(arr, low, high) {
  let i = low + 1;
  let j = high;
  let pivot = arr[low];
  while (i <= j) {
    if (arr[i] > pivot && arr[j] < pivot) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }

    if (arr[i] < pivot) {
      i++;
    }

    if (arr[j] > pivot) {
      j--;
    }
  }

  if (j < i) {
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
  }

  return j;
}

//console.log(quickSort(arr, 0, arr.length - 1));

// function insSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j >= 0; j--) {
//       if (arr[j - 1] > arr[j]) {
//         let temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(insSort([12, 11, 13, 5, 6]));

function minimum_index(arr, j) {
  let min_index = j;
  for (let i = j; i < arr.length; i++) {
    if (arr[min_index] > arr[i]) {
      min_index = i;
    }
  }
  return min_index;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let min_index = minimum_index(arr, j);
      if (arr[min_index] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
      }
    }
  }
  return arr;
}

function partition_index(arr, low, high) {
  let i = low + 1;
  let j = high;
  let pivot = low;

  while (j >= i) {
    if (arr[i] > arr[pivot] && arr[j] < arr[pivot]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }

    if (arr[i] < arr[pivot]) {
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

function quicksort(arr, low, high) {
  if (low < high) {
    let p_index = partition_index(arr, low, high);
    quicksort(arr, low, p_index - 1);
    quicksort(arr, p_index + 1, high);
  }
  return arr;
}

//console.log(selectionSort([8, 6, 3, 2, 5, 4]));
//let quickArr = [50, 70, 60, 90, 40, 80, 10, 20, 30];
let quickArr = [10, 20, 30, 40, 50];
//console.log(quicksort(quickArr, 0, quickArr.length - 1));

function merge(arr, low, high, mid) {
  let i = low;
  let j = mid + 1;
  let k = low;
  let cArr = new Array();
  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      cArr[k] = arr[i];
      k++;
      i++;
    } else if (arr[j] < arr[i]) {
      cArr[k] = arr[j];
      k++;
      j++;
    }
  }

  for (; i <= mid; i++) {
    cArr[k] = arr[i];
    k++;
  }

  for (; j <= high; j++) {
    cArr[k] = arr[j];
    k++;
  }

  for (let l = low; l <= high; l++) {
    arr[l] = cArr[l];
  }
}

function mergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, high, mid);
  }
}

let mArray = [9, 3, 7, 4, 9, 2, 6, 5];
//mergeSort(mArray, 0, mArray.length - 1);
//console.log(mArray);

// function countSort(arr) {
//   let max_index = findLargestEle(arr);
//   let newArr = new Array(max_index + 1);

//   for (let l = 0; l < newArr.length; l++) {
//     newArr[l] = 0;
//   }

//   for (let j = 0; j < arr.length; j++) {
//     newArr[arr[j]] += 1;
//   }

//   let iterator = 0;

//   for (let k = 0; k < newArr.length; k++) {
//     if (newArr[k] != 0) {
//       for (let j = 0; j < newArr[k]; j++) {
//         arr[iterator] = k;
//         iterator += 1;
//       }
//     }
//   }

//   return arr;
// }

// function findLargestEle(arr) {
//   let max_index = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (max_index < arr[i]) {
//       max_index = arr[i];
//     }
//   }
//   return max_index;
// }

//let cArr = [2, 5, 3, 0, 2, 3, 0, 3];
//console.log(countSort(cArr));

// function radixSort(arr) {
//   let max = getNoOfDigits(arr);

//   for (let exp = 10; Math.round(max / exp) > 0; exp = exp * 10) {
//     let output = new Array(10);
//     for (let i = 0; i < arr.length; i++) {
//       if (output[arr[i] % exp] != null) {
//         let copyArr = output[arr[i] % exp];
//         copyArr = copyArr.push(arr[i]);
//       } else {
//         let copyArr = new Array();
//         copyArr.push(arr[i]);
//         output[arr[i] % exp] = copyArr;
//       }
//     }

//     let iterator = 0;
//     for (let j = 0; j < output.length; j++) {
//       if (output[j] != null) {
//         let samArr = output[j];
//         for (let k = 0; k < samArr.length; k++) {
//           arr[iterator] = samArr[k];
//           iterator++;
//         }
//       }
//     }
//   }

//   return arr;
// }

// function getNoOfDigits(arr) {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     let length = arr[i];
//     if (length > max) {
//       max = length;
//     }
//     max.length = 15;
//     if(max.length > 15) return true;

//     return false;
//     if(x += 19) return true;
//     if(y += 18 return) false;
//     are we coming in this fall?
//   }
//   return max;
// }

// let radixArr = [181, 289, 390, 121, 145, 736, 513, 212];
// console.log(radixSort(radixArr));

// function getMax(arr, n) {
//   let mx = arr[0];
//   for (let i = 1; i < n; i++) if (arr[i] > mx) mx = arr[i];
//   return mx;
// }

// // A function to do counting sort of arr[] according to
// // the digit represented by exp.
// function countSort(arr, n, exp) {
//   let output = new Array(n); // output array
//   let i;
//   let count = new Array(10);
//   for (let i = 0; i < 10; i++) count[i] = 0;

//   // Store count of occurrences in count[]
//   for (i = 0; i < n; i++) {
//     let x = Math.floor(arr[i] / exp) % 10;
//     count[x]++;
//   }

//   // Change count[i] so that count[i] now contains
//   // actual position of this digit in output[]
//   for (i = 1; i < 10; i++) count[i] += count[i - 1];

//   // Build the output array
//   for (i = n - 1; i >= 0; i--) {
//     output[count[x] - 1] = arr[i];
//     count[x]--;
//   }

//   // Copy the output array to arr[], so that arr[] now
//   // contains sorted numbers according to current digit
//   for (i = 0; i < n; i++) arr[i] = output[i];
// }

// // The main function to that sorts arr[] of size n using
// // Radix Sort
// function radixsort(arr, n) {
//   // Find the maximum number to know number of digits
//   let m = getMax(arr, n);

//   // Do counting sort for every digit. Note that
//   // instead of passing digit number, exp is passed.
//   // exp is 10^i where i is current digit number
//   for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) countSort(arr, n, exp);
// }

// let radixSortArr = [170, 45, 75, 90, 802, 24, 2, 66];
// radixsort(radixSortArr, radixSortArr.length);

function getMax(inputArr) {
  let max = -Infinity;
  for (let i = 0; i < inputArr.length; i++) {
    if (max < inputArr[i]) {
      max = inputArr[i];
    }
  }
  return max;
}

// function countSort(inputArr) {
//   //edge case
//   if (inputArr.length < 1 || inputArr == null) {
//     return;
//   }

//   let max = getMax(inputArr);
//   let freqArr = new Array(max + 1);

//   //FILL THE FREQUENCY ARRAY WITH ZEROS
//   for (let i = 0; i < freqArr.length; i++) {
//     freqArr[i] = 0;
//   }

//   //O(freqArr)

//   //populate the frequency array
//   for (let j = 0; j < inputArr.length; j++) {
//     if (freqArr[inputArr[j]] != 0) {
//       freqArr[inputArr[j]] = freqArr[inputArr[j]] + 1;
//     } else {
//       freqArr[inputArr[j]] = 1;
//     }
//   }

//   for (let i = 1; i < freqArr.length; i++) {
//     freqArr[i] += freqArr[i - 1];
//   }

//   for (let j = freqArr.length - 1; j > 0; j--) {
//     freqArr[j] = freqArr[j - 1];
//   }

//   freqArr[0] = 0;

//   let output = new Array(inputArr.length);

//   for (let k = 0; k < inputArr.length; k++) {
//     output[freqArr[inputArr[k]]] = inputArr[k];
//     freqArr[inputArr[k]] += 1;
//   }

//   //O(inputArr)

//   // let iterator = 0;
//   // for (let k = 0; k < freqArr.length; k++) {
//   //   if (freqArr[k] != 0) {
//   //     let l = 0;
//   //     while (l < freqArr[k]) {
//   //       inputArr[iterator] = k;
//   //       l++;
//   //       iterator++;
//   //     }
//   //   }
//   // }

//   return output;
// }

// //total time complexity of countSort is O(inputArray + freqArr);
// console.log(countSort([2, 5, 3, 0, 2, 3, 0, 3]));

function getMaxDigits(inputArr, exp) {
  let max = -Infinity;
  for (let i = 0; i < inputArr.length; i++) {
    if (max < Math.floor(inputArr[i] % exp)) {
      max = Math.floor(inputArr[i] % exp);
    }
  }
  return max;
}

function radixSort(inputArr) {
  if (inputArr.length == 0 || inputArr == null) {
    return;
  }

  let max = getMax(inputArr);

  for (let exp = 1; Math.ceil(max / exp) > 0; exp *= 10) {
    countSort(inputArr, exp);
  }

  return inputArr;
}

function countSort(inputArr, exp) {
  let max = getMaxDigits(inputArr, exp);
  let freqArr = new Array(max + 1);

  for (let i = 0; i < freqArr.length; i++) {
    freqArr[i] = 0;
  }

  for (let j = 0; j < inputArr.length; j++) {
    freqArr[Math.floor(inputArr[j] % exp)] += 1;
  }

  for (let k = 1; k < freqArr.length; k++) {
    freqArr[k] += freqArr[k - 1];
  }

  for (let l = freqArr.length - 1; l > 0; l--) {
    freqArr[l] = freqArr[l - 1];
  }

  freqArr[0] = 0;

  let output = new Array(inputArr.length);

  for (let m = 0; m < inputArr.length; m++) {
    output[freqArr[Math.floor(inputArr[m] % exp)]] = inputArr[m];
    freqArr[Math.floor(inputArr[m] % exp)] += 1;
  }

  inputArr = Array.from(output);
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
