/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let cleanStr1 = str1.toLowerCase();
  let cleanStr2 = str2.toLowerCase();

  cleanStr1 = cleanStr1.split('').sort().join();
  cleanStr2 = cleanStr2.split('').sort().join();

  if(cleanStr1 === cleanStr2){
    return true;
  }
  else{
    return false;
  }
}

module.exports = isAnagram;
isAnagram("openai","aiopen")