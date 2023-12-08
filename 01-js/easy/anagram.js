/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length)
    return false;
  var accountArray = {};
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for(i = 0; i < str1.length; ++i)
  {
    if(str1[i] in accountArray)
      ++accountArray[str1[i]];
    else
      accountArray[str1[i]] = 1;
  }

  for(i = 0;i < str2.length; ++i)
  {
    if( str2[i] in accountArray && accountArray[str2[i]] != 0)
      --accountArray[str2[i]];

    else
      return false;
  }

  return true;
}

module.exports = isAnagram;
