function countSort(arr) {
  let max = MaxNum(arr);
  let newArr = new Array(max + 1);
  AddCount(arr, newArr);
  incrementEle(newArr);
  moveToEnd(newArr);
  console.log(newArr);
  return allocateToNewArr(arr, newArr);
}

function MaxNum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

function AddCount(arr, newArr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (newArr[arr[i]] == null) {
      newArr[arr[i]] = 1;
    } else {
      newArr[arr[i]] += 1;
    }
  }
  console.log(newArr);
}

function incrementEle(newArr) {
  for (let i = 1; i < newArr.length; i++) {
    if (isNaN(newArr[i])) {
      newArr[i] = 0;
    }
    newArr[i] += newArr[i - 1];
  }
}

function moveToEnd(newArr) {
  for (let j = newArr.length - 1; j > 0; j--) {
    newArr[j] = newArr[j - 1];
  }
  newArr[0] = 0;
}

function allocateToNewArr(arr, newArr) {
  let finalArray = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    finalArray[newArr[arr[i]]] = arr[i];
    newArr[arr[i]] += 1;
  }
  return finalArray;
}

console.log(countSort([1, 0, 3, 1, 3, 1]));
