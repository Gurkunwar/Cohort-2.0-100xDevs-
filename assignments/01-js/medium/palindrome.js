/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let Str = str.toLowerCase();
  let repStr = Str.replace(/[^a-z0-9]/g, "");
  let splitStr = repStr.split('');
  let revStr = splitStr.reverse().join('');
  
  return repStr === revStr;
}

module.exports = isPalindrome;