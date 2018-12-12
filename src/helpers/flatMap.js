const flatMap = require('lodash.flatmap');
const get = require('lodash.get');

const flatMapHelper = (array, path) => {
    if (!array || !Array.isArray(array)) {
        throw new Error('flatMap expects array as first argument (array)');
    }
    if (!path || typeof path !== 'string') {
        throw new Error('flatMap expects string as second argument (path)');
    }
    return flatMap(array, (element) => get(element, path));
};

export {
    flatMapHelper,
};
