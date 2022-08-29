function anomalyChecker(array) {
  /**
   * Returns either the outlier in an array of numbers or if there are none it returns false
   *
   * @param {array} x An array container numbers, example: [4,6,5,2,6,22,4,2]
   * @return {array} x returns either false or an anomaly in the array. in this case 22
   */
  let average = 0;
  let foundDifferences = [];
  let info = {
    averageDifference: 0,
    differences: [],
  };
  arr.forEach((value) => {
    if (!info.highest || info.highest < value) info.highest = value;
    if (!info.lowest || info.lowest > value) info.lowest = value;
    average += value;
  });
  average /= array.length;
  arr.forEach((value) => {
    let diff = Math.abs(value - average);
    info.averageDifference += diff;
    info.differences.push(diff);
  });
  info.averageDifference = info.averageDifference / array.length;
  for (let i = 0; i < array.length; i++) {
    if (info.differences[i] > info.averageDifference * 2) {
      foundDifferences.push(i);
    }
  }
  if (foundDifferences.length) return foundDifferences;
  else return false;
}

module.exports = anomalyChecker;
