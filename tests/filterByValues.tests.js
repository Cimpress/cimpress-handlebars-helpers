const handlebars = require('handlebars');
const expect = require('chai').expect;

let filterByValuesHelper = require('../src/index').filterByValuesHelper;

describe('filterByValues', function() {
    it('works as expected', function() {
        handlebars.registerHelper('filterByValues', filterByValuesHelper);

        const fm = handlebars.compile(
            '{{#each (filterByValues items "id" filter )}}' +
            '{{id}}' +
            '{{/each}}');

        const result = fm({
            filter: [2, 3],
            items: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
            ],
        });

        expect(result).to.equal('23');
    });
});
