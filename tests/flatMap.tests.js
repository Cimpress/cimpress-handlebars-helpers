const handlebars = require('handlebars');
const expect = require('chai').expect;

let flatMapHelper = require('../src/index').flatMapHelper;

describe('flatMap', function() {
    it('works as expected', function() {
        handlebars.registerHelper('flatMap', flatMapHelper);

        const fm = handlebars.compile('{{#each (flatMap data "items")}}{{id}}{{/each}}');

        const result = fm({
            data: [{
                items: [
                    {id: 1},
                    {id: 2},
                ],
            }, {
                items: [
                    {id: 3},
                    {id: 4},
                ],
            }],

        });

        expect(result).to.equal('1234');
    });
});
