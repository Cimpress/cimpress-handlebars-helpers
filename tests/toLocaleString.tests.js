const handlebars = require('handlebars');
const expect = require('chai').expect;

let toLocaleStringHelper = require('../src/index').toLocaleStringHelper;

describe('convert number to Locale String', function() {
    before(() =>{
        handlebars.registerHelper('toLocaleString', toLocaleStringHelper);
    })
    it('works as expected', function() {
        const fm = handlebars.compile('{{toLocaleString 12345 "de"}}');
        const result = fm();
        expect(result).to.equal('12.345');
    });

    it('when locale is incorrect', function() {
        const fm = handlebars.compile('{{toLocaleString number "xyz"}}');
        const result = fm({number: '123456'});
        expect(result).to.equal('1,23,456');
    });

    it('when locale is missing', function() {
        const fm = handlebars.compile('{{toLocaleString 12345}}');
        const result = fm();
        expect(result).to.equal('12,345');
    });

    it('when input parameter is a string', function() {
        const fm = handlebars.compile('{{toLocaleString number locale}}');
        const result = fm({number:'a', locale: 'zz'});
        expect(result).to.equal('NaN');
    });

    it('when input number is represented as string', function() {
        const fm = handlebars.compile('{{toLocaleString number locale}}');
        const result = fm({number:'12345', locale: 'zz'});
        expect(result).to.equal('12,345');
    });

});
