function mergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, high, mid);
  }
}

function merge(arr, low, high, mid) {
  let cArr = new Array();
  let i = low;
  let k = low;
  let j = mid + 1;

  console.log(`low : ${low} high : ${high} mid : ${mid}`);

  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      console.log(`i : ${arr[i]} j : ${arr[j]}`);
      cArr[k++] = arr[i];
      i++;
    } else if (arr[i] > arr[j]) {
      console.log(`i : ${arr[i]} j : ${arr[j]}`);
      cArr[k++] = arr[j];
      j++;
    }
  }
  console.log(`Caar Is : ${cArr}`);

  while (i <= mid) {
    cArr[k++] = arr[i];
    i++;
  }

  while (j <= high) {
    cArr[k++] = arr[j];
    j++;
  }

  for (let l = low; l <= high; l++) {
    arr[l] = cArr[l];
  }

  console.log(arr);
  return arr;
}

console.log(mergeSort([2, 8, 5, 3, 9, 4, 1, 7], 0, 7));
