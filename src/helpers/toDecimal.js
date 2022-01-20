const divide = require('lodash.divide');

export const toDecimalHelper = (number, fractionDigits) => {
    const divisor = Math.pow(10, fractionDigits);
    return divide(number, divisor);
};
