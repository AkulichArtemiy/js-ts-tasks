/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
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
