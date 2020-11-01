const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string'
    || parseFloat(sampleActivity) <= 0
    || isNaN(parseFloat(sampleActivity))
    || parseFloat(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693)
};
