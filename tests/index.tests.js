
const expect = require('chai').expect;

let exported = require('../src/index');

describe('Exports', function() {
    it('correctly', function() {
        expect(Object.keys(exported)).to.deep.equal(['flatMapHelper', 'filterByValuesHelper', 'toLocaleStringHelper', 'toDecimalHelper']);
    });
});
