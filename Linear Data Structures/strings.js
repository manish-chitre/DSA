function removeVowels(str) {
  let newStr = "";
  let ovels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]; //0(1)
  for (let i = 0; i < str.length; i++) {
    //o(n)
    if (!ovels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(removeVowels("manish"));
