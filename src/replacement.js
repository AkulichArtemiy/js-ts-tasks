/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    switch (Math.abs(arr[i]).toString().length) {
      case 1:
        arr2.push(1);
        break;
      case 2:
        arr2.push(2);
        break;
      case 3:
        arr2.push(3);
        break;
      default:
        arr2.push(4);
        break;
    }
  }
  return arr2;
};
