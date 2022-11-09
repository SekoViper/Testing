function reverseString(string) {
  // return string.split('').reverse().join('');
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

module.exports = reverseString;
