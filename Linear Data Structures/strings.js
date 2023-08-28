// function removeVowels(str) {
//   let newStr = "";
//   let ovels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]; //0(1)
//   for (let i = 0; i < str.length; i++) {
//     //o(n)
//     if (!ovels.includes(str[i])) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// console.log(removeVowels("manish"));

// var reverseStr = function (s, k) {
//   let sArr = s.split("");
//   for (let i = 0; i < sArr.length; i += 2 * k) {
//     if (i + k - 1 < sArr.length) {
//       reverse(i, i + k - 1, sArr);
//     } else {
//       reverse(i, sArr.length, sArr);
//     }
//   }

//   let newS = sArr.join("");

//   return newS;
// };

// function reverse(start, end, sArr) {
//   while (start < end) {
//     let temp = sArr[start];
//     sArr[start] = sArr[end];
//     sArr[end] = temp;
//     start++;
//     end--;
//   }
// }

// console.log(reverseStr("abcd", 2));

var reverseWords = function (s) {
  let wordsArr = s.split(" ");
  for (let i = 0; i < wordsArr.length; i++) {
    reverse(wordsArr[i], i, wordsArr);
  }

  let modifiedWords = wordsArr.join(" ");
  return modifiedWords;
};

// function reverse(s, i, wordsArr) {
//   let sArr = s.split("");
//   let start = 0;
//   let end = sArr.length - 1;
//   while (start < end) {
//     let temp = sArr[start];
//     sArr[start] = sArr[end];
//     sArr[end] = temp;
//     start++;
//     end--;
//   }

//   wordsArr[i] = sArr.join("");
// }

// console.log(reverseWords("Let's take LeetCode contest"));

var numMatchingSubseq = function (s, words) {
  let count = 0;
  for (let word of words) {
    let isSub = checkSubsequence(s, word);
    if (isSub) {
      count += 1;
    }
  }

  return count;
};

function checkSubsequence(s, word) {
  console.log(word);
  let i = 0;
  let j = 0;
  while (j < word.length) {
    if (s[i] == word[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  if (i == s.length || s.length > word.length) {
    return true;
  } else {
    return false;
  }
}

//console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]));

var longestBeautifulSubstring = function (word) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let rightPointer = 0;
  let leftPointer = 0;
  let maxCount = 0;
  let count = 0;
  let tempStr = "";
  let previousCharCode = word[leftPointer].charCodeAt(0);
  while (rightPointer < word.length) {
    let currCharCode = word[rightPointer].charCodeAt(0);
    if (previousCharCode <= currCharCode) {
      tempStr += word[rightPointer];
      if (tempStr.length >= 5 && isAllVowels(tempStr, vowels)) {
        count = tempStr.length;
        maxCount = Math.max(count, maxCount);
      }
      previousCharCode = currCharCode;
      rightPointer++;
    } else {
      leftPointer = rightPointer;
      previousCharCode = word[leftPointer].charCodeAt(0);
      currCharCode = word[rightPointer].charCodeAt(0);
      tempStr = "";
    }
  }

  return maxCount;
};

function isAllVowels(tempStr, vowels) {
  for (let vowel of vowels) {
    if (tempStr.includes(vowel)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

//console.log(longestBeautifulSubstring("aeeeiiiioooauuuaeiou"));

// var longestPalindrome = function (s) {
//   let maxString = "";
//   let maxLength = 0;
//   let leftPointer = 0;
//   let lastIndex = -1;
//   while (leftPointer < s.length) {
//     let currIndex = s.indexOf(s[leftPointer], lastIndex + 1);
//     if (currIndex == -1) {
//       lastIndex = leftPointer;
//       leftPointer++;
//     } else {
//       if (currIndex - leftPointer + 1 > maxLength) {
//         if (validatePalindrome(leftPointer, currIndex, s)) {
//           maxString = s.substring(leftPointer, currIndex + 1);
//           maxLength = maxString.length;
//         }
//       }
//       lastIndex = currIndex;
//     }
//   }

//   return maxString;
// };

// function validatePalindrome(i, j, s) {
//   while (j > i) {
//     if (s[j] != s[i]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// }

// console.log(longestPalindrome("aacabdkacaa"));

// var partition = function (s) {
//   let res = [];
//   let part = [];
//   function dfs(i) {
//     if (i >= s.length) {
//       res.push(Array.from(part));
//       return;
//     }
//     for (let j = i; j < s.length; j++) {
//       if (isPalindrome(i, j, s)) {
//         part.push(s.substring(i, j + 1));
//       }
//       dfs(j + 1);
//       part.pop();
//     }
//   }

//   dfs(0);
//   return res;
// };

// function isPalindrome(i, j, s) {
//   while (j > i) {
//     if (s[i] != s[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// }

// console.log(partition("aab"));

function isIsomorphic(s, t) {
  if (s.length != t.length) return false;

  let arrS = new Array();
  let arrT = new Array();

  for (let i = 0; i < s.length; i++) {
    let chS = s.charAt(i);
    let chT = t.charAt(i);
    if (arrS[chS] != arrT[chT]) return false;

    isfunctionIsmorophic(s, t);
    arrS[chS] = i + 1;
    arrT[chT] = i + 1;
  }
  return true;
}

console.log(isIsomorphic("add", "egg"));
