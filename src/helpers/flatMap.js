const flatMap = require('lodash.flatmap');
const get = require('lodash.get');

const flatMapHelper = (array, path) => {
    if (!array || !Array.isArray(array)) {
        return [];
    }
    if (!path || typeof path !== 'string') {
        return [];
    }
    return flatMap(array, (element) => get(element, path));
};

export {
    flatMapHelper,
};
