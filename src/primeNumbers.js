/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function primeNumbers2(start, end) {
    let arr = [];
    let npm = true;
    for (let i = start; i < end + 1; i++) {
      for (let j = 2; j < Math.sqrt(i) + 1; j++) {
        if (i % j === 0 && i !== j) {
          npm = false;
        }
      }
      if (npm === true) {
        arr.push(i);
      }
      npm = true;
    }
    return arr;
  }
  return primeNumbers2;
};
