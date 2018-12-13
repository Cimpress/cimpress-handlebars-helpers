const get = require('lodash.get');

const filterByValuesHelper = (collection, key, values) => {
    if (!collection || !Array.isArray(collection)) {
        return [];
    }
    if (!key || typeof key !== 'string') {
        return [];
    }
    if (!values || !Array.isArray(values)) {
        return [];
    }

    return collection.filter((i) => values.includes(get(i, key)));
};

export {
    filterByValuesHelper,
};
