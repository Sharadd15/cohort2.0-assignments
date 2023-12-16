/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const delimiterPattern = /[ \p{P}]+/u;
  str = str.split(delimiterPattern).join('');
  let mid = Math.floor(str.length / 2);
  let str1 = str.slice(0, mid);
  var str2;
  if( str.length % 2 !== 0 )
    str2 =  str.slice(mid + 1);
  else
    str2 = str.slice(mid);

  return (str2.split('').reverse().join('').toLowerCase() === str1.toLowerCase());
}

module.exports = isPalindrome;
