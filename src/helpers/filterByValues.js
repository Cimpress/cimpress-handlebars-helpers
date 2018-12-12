const get = require('lodash.get');

const filterByValuesHelper = (collection, key, values) => {
    if (!collection || !Array.isArray(collection)) {
        throw new Error('filterByValues expects array as first argument (collection)');
    }
    if (!key || typeof key !== 'string') {
        throw new Error('filterByValues expects string as second argument (key)');
    }
    if (!values || !Array.isArray(values)) {
        throw new Error('filterByValues expects array as third argument (values)');
    }

    return collection.filter((i) => values.includes(get(i, key)));
};

export {
    filterByValuesHelper,
};
