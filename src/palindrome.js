/**
 * Write a function that returns a function that
 * 1) converts all uppercase letters into lowercase letters
 * 2) removes all non-alphanumeric characters
 * 3) returns a result of a calling isPalindrome function from TestUtils object
 *
 * Note: Alphanumeric characters include letters and numbers.
 *
 * Note: You MUST call isPalindrome function from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ isPalindrome: function() }} TestUtils
 * @returns {function}
 */
module.exports.palindrome = function palindrome(TestUtils) {
  function palindrimee(str2) {
    str2 = str2.toLowerCase();
    let reversedStr = str2.split('').reverse();
    let str = str2.split('');
    let arr = [];
    let arrStr = [];
    result = true;
    for (let i = 0; i < reversedStr.length; i++) {
      if (
        !(
          reversedStr[i] === ' ' ||
          reversedStr[i] === ',' ||
          reversedStr[i] === '.' ||
          reversedStr[i] === '/' ||
          reversedStr[i] === ':' ||
          reversedStr[i] === ';' ||
          reversedStr[i] === '$' ||
          reversedStr[i] === '%' ||
          reversedStr[i] === '<' ||
          reversedStr[i] === '>' ||
          reversedStr[i] === '?' ||
          reversedStr[i] === '!' ||
          reversedStr[i] === '@' ||
          reversedStr[i] === '^' ||
          reversedStr[i] === '*'
        )
      ) {
        arr.push(reversedStr[i]);
      }
      if (
        !(
          str[i] === ' ' ||
          str[i] === ',' ||
          str[i] === '.' ||
          str[i] === '/' ||
          str[i] === ':' ||
          str[i] === ';' ||
          str[i] === '$' ||
          str[i] === '%' ||
          str[i] === '<' ||
          str[i] === '>' ||
          str[i] === '?' ||
          str[i] === '!' ||
          str[i] === '@' ||
          str[i] === '^' ||
          str[i] === '*'
        )
      ) {
        arrStr.push(str[i]);
      }
    }
    for (let j = 0; j < str.length; j++) {
      if (arr[j] !== arrStr[j]) {
        result = false;
      }
    }
    return result;
  }
  return palindrimee;
};
