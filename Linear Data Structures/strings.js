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

function reverse(s, i, wordsArr) {
  let sArr = s.split("");
  let start = 0;
  let end = sArr.length - 1;
  while (start < end) {
    let temp = sArr[start];
    sArr[start] = sArr[end];
    sArr[end] = temp;
    start++;
    end--;
  }

  wordsArr[i] = sArr.join("");
}

console.log(reverseWords("Let's take LeetCode contest"));
