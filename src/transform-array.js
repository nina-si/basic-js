const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let newArray = [];
    for (i = 0; i < arr.length; i++) {

      if (arr[i] === '--discard-next') {
          i++;
      } else if (arr[i] === '--discard-prev') {
          if (newArray.length !== 0 && arr[i - 2] !== '--discard-next') {
              newArray.pop();
          }
      } else if (arr[i] === '--double-next') {
          if (i + 1 < arr.length) {
            newArray.push(arr[i + 1]);
          }
      } else if (arr[i] === '--double-prev') {
          if (i !== 0 && arr[i - 2] !== '--discard-next') {
              newArray.push(arr[i - 1]);
          }
      } else {
          newArray.push(arr[i]);
      }
    }
    return newArray;
  } else {
    throw new Error();
  }
};
