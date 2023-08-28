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

// function Helper(l, r, str, permutations) {
//   if (l == r) {
//     permutations.push(str);
//   } else {
//     for (let i = l; i <= r; i++) {
//       str = swap(str, l, i);
//       Helper(l + 1, r, str, permutations);
//       str = swap(str, l, i);
//     }
//   }
// }

// function swap(str, l, i) {
//   let charArray = str.split("");
//   temp = charArray[l];
//   charArray[l] = charArray[i];
//   charArray[i] = temp;
//   return charArray.join("");
// }

// console.log(checkInclusion("ab", "eidbaooo"));

// console.log("ab".charAt(1));

// var letterCombinations = function (digits) {
//   if (digits.length == 0) {
//     return [];
//   }

//   let keyMap = new Map();
//   keyMap.set(2, "abc");
//   keyMap.set(3, "def");
//   keyMap.set(4, "ghi");
//   keyMap.set(5, "jkl");
//   keyMap.set(6, "mno");
//   keyMap.set(7, "pqrs");
//   keyMap.set(8, "tuv");
//   keyMap.set(9, "wxyz");

//   let res = [];
//   let str = [];

//   function combination(str, i) {
//     if (str.length == digits.length) {
//       res.push(str.join(""));
//       return;
//     }

//     let charStr = keyMap.get(Number(digits[i]));

//     for (let j = 0; j < charStr.length; j++) {
//       str.push(charStr[j]);
//       combination(str, i + 1);
//       str.pop();
//     }
//   }

//   combination(str, 0);

//   return res;
// };

// console.log(letterCombinations("23"));

// var minimumBeautifulSubstrings = function (s) {
//   let res = [];
//   let path = [];

//   function dfs(s, i) {
//     if (i == s.length) {
//       res.push(path.join(""));
//     }

//     for (let j = i; j < s.length; j++) {
//       path.push(s[j]);
//       if (checkNoLeadingZero(path.join(""))) {
//         dfs(s, i + 1);
//         path.pop();
//       }
//     }
//   }

//   dfs(s, 0);

//   if (res.length > 0) {
//     return res.length;
//   }

//   return -1;
// };

// function checkNoLeadingZero(s) {
//   if (s[0] == 0) {
//     return false;
//   }
//   return isPowerOfFive(parseInt(Number(s), 2));
// }

// function isPowerOfFive(number) {
//   if (number % 5 == 0) {
//     return true;
//   }
//   return false;
// }

// console.log(minimumBeautifulSubstrings("1011"));

var combinationSum = function (candidates, target) {
  let res = [];
  let path = [];
  function dfs(candidates, i, sum, target) {
    if (sum == target) {
      res.push(Array.from(path));
      return;
    }

    for (let j = i; j < candidates.length; j++) {
      let sum = sumOfPath(path);
      if (sum + candidates[j] <= 7) {
        path.push(candidates[j]);
        sum = multipleCandidates(path, target);
        dfs(candidates, j + 1, sum, target);
        path.pop();
      }
    }
  }

  dfs(candidates, 0, 0, target);

  return res;
};

function sumOfPath(path) {
  return path.reduce((acc, curr) => acc + curr, 0);
}

function isValid(number) {
  if (number > 7) return false;
  return true;
}

function multipleCandidates(path, target) {
  let sum = sumOfPath(path);
  let diff = target - sum;
  if (path.includes(diff)) {
    return sum + diff;
  }

  return sum;
}

//console.log(combinationSum([2, 3, 6, 7], 7));

// var permuteUnique = function (nums) {
//   let output = [];
//   let path = [];

//   function dfs(i, path) {
//     if (path.length === nums.length) {
//       output.push(Array.from(path));
//       return;
//     }

//     for (let j = i; j < nums.length; j++) {
//       path.push(nums[j]);
//       dfs(i + 1, path);
//       path.pop();
//     }
//   }

//   dfs(0, path);
//   return output;
// };

// var nextPermutation = function (nums) {
//   let output = [];
//   let path = [];
//   let map = new Map();

//   for (let num of nums) {
//     if (map.has(num)) {
//       map.set(num, map.get(num) + 1);
//     } else {
//       map.set(num, 1);
//     }
//   }

//   console.log(map);

//   function dfs(i, path) {
//     if (i === nums.length) {
//       output.push(Array.from(path));
//     }

//     for (let [key, value] of map.entries()) {
//       if (map.get(key) > 0) {
//         path.push(key);
//         map.set(key, map.get(key) - 1);
//         dfs(i + 1, path);
//         path.pop();
//         map.set(key, map.get(key) + 1);
//       }
//     }
//   }

//   dfs(0, []);
//   console.log(output);
//   return getNext(output, nums);
// };

// function getNext(output, nums) {
//   output = output.sort();
//   for (let i = 0; i < output.length; i++) {
//     if (JSON.stringify(output[i]) === JSON.stringify(nums)) {
//       if (i == output.length - 1) {
//         return output[0];
//       } else {
//         return output[i + 1];
//       }
//     }
//   }
// }
// console.log(nextPermutation([1, 2, 3]));

var checkInclusion = function (s1, s2) {
  let output = [];
  let path = [];
  let map = new Map();

  for (let char of s1) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  function dfs(i, path) {
    if (i === s1.length) {
      output.push(path.join(""));
    }

    for (let [key, value] of map.entries()) {
      if (map.get(key) > 0) {
        map.set(key, map.get(key) - 1);
        path.push(key);
        dfs(i + 1, path);
        path.pop();
        map.set(key, map.get(key) + 1);
      }
    }
  }

  dfs(0, path);
  console.log(output);
  return Helper(output, s2);
};

function Helper(output, s2) {
  for (let entry of output) {
    if (s2.incudes(entry)) {
      return true;
    }
  }
  return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
