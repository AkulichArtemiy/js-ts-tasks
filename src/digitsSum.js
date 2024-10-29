/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  const nStr = Math.abs(n).toString();
  n = Math.abs(n);
  let leng = nStr.length;
  let digitsSumm = 0;
  for (let i = 0; i < leng; i++) {
    digitsSumm += n % 10;
    n = Math.floor(n / 10);
  }
  return digitsSumm;
};
