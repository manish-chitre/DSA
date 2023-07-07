function insertionsort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        continue;
      } else {
        let temp = arr[j];
        let k = j;
        while (k != i) {
          arr[k] = arr[k - 1];
          k -= 1;
        }
        arr[k] = temp;
      }
    }
  }

  return arr;
}

console.log(insertionsort([2, 8, 5, 3, 9, 4]));
