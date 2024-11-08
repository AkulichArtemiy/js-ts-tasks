/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let Seq = 1;
  let maxSeq = 1;
  let element = arr[0];
  let lastElement = arr[0];
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == lastElement) {
      Seq++;
    } else {
      Seq = 1;
    }
    if (Seq > maxSeq) {
      maxSeq = Seq;
      element = arr[i];
    }

    lastElement = arr[i];
  }

  for (let k = 0; k < maxSeq; k++) {
    newArr.push(element);
  }
  return newArr;
};
