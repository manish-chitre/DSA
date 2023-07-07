function quicksort(arr, low, high) {
  if (low <= high) {
    let pk = partitionKey(arr, low, high);
    quicksort(arr, low, pk - 1);
    quicksort(arr, pk + 1, high);
  }

  return arr;
}

function partitionKey(arr, low, high) {
  let mid = Math.floor((low + high) / 2);
  let left = low;
  let right = high - 1;
  swap(arr, mid, high);
  while (left <= right) {
    if (arr[left] > arr[high] && arr[right] < arr[high]) {
      swap(arr, left, right);
    }

    if (arr[left] < arr[high]) {
      left++;
    }

    if (arr[right] > arr[high]) {
      right--;
    }
  }

  swap(arr, left, high);

  return left;
}

function swap(arr, indexFrom, indexTo) {
  let temp = arr[indexTo];
  arr[indexTo] = arr[indexFrom];
  arr[indexFrom] = temp;
}

console.log(quicksort([2, 6, 5, 3, 8, 7, 1, 0], 0, 7));
