/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  if (typeof firstNumber === 'string') {
    firstNumber = firstNumber.split(' ').join('');
    firstNumber = Number(firstNumber);
  }
  if (typeof secondNumber === 'string') {
    secondNumber = secondNumber.split(' ').join('');
    secondNumber = Number(secondNumber);
  }
  return firstNumber + secondNumber;
};
