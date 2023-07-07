function bucketsort(arr) {
  let maxNum = MaxNum(arr);
  let maxLength = maxNum.toString().length;

  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i].toString().length) < maxLength) {
      let limiter = maxLength - arr[i].toString().length;
      let str = arr[i].toString();
      for (let j = 0; j < limiter; j++) {
        str = `0` + str;
      }
      arr[i] = str;
    }
  }

  let k = 0;
  let bucketArr = new Array(10);
  let n = 0;

  while (k < maxLength) {
    bucketArr = new Array(10);
    let multi = 10 * Math.pow(10, k);
    for (let i = 0; i < arr.length; i++) {
      if (bucketArr[Number(arr[i]) % multi] == null) {
        let newArr = new Array();
        newArr.push(Number(arr[i]));
        bucketArr[Number(arr[i]) % multi] = newArr;
      } else {
        let newArr = bucketArr[Number(arr[i]) % multi];
        newArr.push(Number(arr[i]));
        bucketArr[Number(arr[i]) % multi] = newArr;
      }
    }

    let n = 0;

    for (let m = 0; m < bucketArr.length; m++) {
      if (bucketArr[m] != null) {
        let barr = bucketArr[m];
        for (let ele of barr) {
          arr[n] = ele;
          n++;
        }
      }
    }
    k++;
  }
  return arr;
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

console.log(bucketsort([10, 15, 1, 60, 5, 100, 25, 50]));
