/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let result = 0;
  start = Number(start);
  end = Number(end);
  if (end < start) {
    let end2 = end;
    end = start;
    start = end2;
  }
  for (start; start < end + 1; start++) result += start;
  return result;
};
