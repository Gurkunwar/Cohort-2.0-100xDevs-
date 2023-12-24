/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let count = 0;
  let a = str.toLowerCase();
  let splitStr = a.split('');
  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  for(let i=0; i< splitStr.length; i++){
    if(vowels.has(splitStr[i])){
      count = count + 1;
    }
  }

  return count;
}

module.exports = countVowels;
