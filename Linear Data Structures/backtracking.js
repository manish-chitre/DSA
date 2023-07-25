// var permute = function (nums) {
//   let res = new Array();
//   let permutations = new Array();
//   let used = new Array(nums.length);
//   used.fill(false);
//   backTrack(nums, res, permutations, used);
//   return res;
// };

// function backTrack(nums, res, permutations, used) {
//   if (permutations.length == nums.length) {
//     res.push(permutations);
//     return;
//   } else {
//     for (let i = 0; i < nums.length; i++) {
//       if (!used[i]) {
//         used[i] = true;
//         permutations.push(nums[i]);
//         backTrack(nums, res, permutations, used);
//         used[i] = false;
//         permutations.pop();
//       }
//     }
//   }
// }

// console.log(permute(["A", "B", "C"]));

var checkInclusion = function (s1, s2) {
  let permutations = new Array();
  let l = 0;
  let r = s1.length - 1;
  Helper(l, r, s1, permutations);
  console.log(permutations);
  for (let entry of permutations) {
    console.log(entry);
    if (s2.includes(entry)) {
      return true;
    }
  }

  return false;
};

function Helper(l, r, str, permutations) {
  if (l == r) {
    permutations.push(str);
  } else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      Helper(l + 1, r, str, permutations);
      str = swap(str, l, i);
    }
  }
}

function swap(str, l, i) {
  let charArray = str.split("");
  temp = charArray[l];
  charArray[l] = charArray[i];
  charArray[i] = temp;
  return charArray.join("");
}

console.log(checkInclusion("ab", "eidbaooo"));

console.log("ab".charAt(1));
